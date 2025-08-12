import { Request, Response } from 'express';
import type { AuthenticatedRequest } from '../types/index';

// Интерфейс для сообщения чата
interface ChatMessage {
  id: string;
  userId: string;
  message: string;
  timestamp: string;
  isFromUser: boolean;
}

// Интерфейс для запроса к AI агенту
interface AIAgentRequest {
  userId: string;
  userMessage: string;
  conversationHistory?: ChatMessage[];
  context?: {
    userProfile?: any;
    travelPreferences?: any;
    currentLocation?: string;
  };
}

// Интерфейс для ответа от AI агента
interface AIAgentResponse {
  success: boolean;
  message?: string;
  aiResponse?: string;
  suggestions?: string[];
  error?: string;
  requestId?: string; // ID для polling
}

// Простое хранилище для ответов (в продакшене используйте базу данных)
const responseStore = new Map<
  string,
  {
    userId: string;
    aiResponse?: string;
    suggestions?: string[];
    timestamp: number;
    isReady: boolean;
  }
>();

// Отправка сообщения AI агенту через вебхук
export const sendMessageToAIAgent = async (
  userId: string,
  userMessage: string,
  conversationHistory?: ChatMessage[],
  context?: any,
  req?: Request,
): Promise<AIAgentResponse> => {
  try {
    // В режиме разработки используем mock AI агент
    const isDevelopment = process.env.NODE_ENV === 'development';
    const webhookUrl = isDevelopment
      ? 'http://localhost:3005/api/mock-ai'
      : 'https://n8n.gulnazbakinova.com/webhook/travel_bd_test';

    const payload: AIAgentRequest = {
      userId,
      userMessage,
      conversationHistory,
      context,
    };

    console.log('Отправка сообщения AI агенту:', {
      userId,
      messageLength: userMessage.length,
      hasHistory: !!conversationHistory,
      hasContext: !!context,
    });

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'TravelAI-Chat/1.0',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Ответ от AI агента:', responseData);

    // Проверяем, является ли это подтверждением запуска workflow
    if (
      responseData.message === 'Workflow was started' ||
      responseData.message?.includes('started')
    ) {
      // Сохраняем информацию о запросе для polling
      const requestId = `${userId}-${Date.now()}`;
      responseStore.set(requestId, {
        userId,
        timestamp: Date.now(),
        isReady: false,
      });

      // Отправляем повторный запрос с requestId для callback
      if (req) {
        const callbackPayload = {
          ...payload,
          requestId,
          callbackUrl: `${req.protocol}://${req.get('host')}/api/chat/ai-webhook`,
        };

        console.log('Отправка запроса с callback:', callbackPayload);

        const callbackResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'TravelAI-Chat/1.0',
          },
          body: JSON.stringify(callbackPayload),
        });
      }

      return {
        success: true,
        aiResponse:
          'Ваше сообщение получено и обрабатывается AI агентом. Ожидайте ответа...',
        suggestions: [],
        message: 'Сообщение отправлено в обработку',
        requestId, // Добавляем ID для polling
      };
    }

    return {
      success: true,
      aiResponse:
        responseData.response ||
        responseData.message ||
        responseData.aiResponse,
      suggestions: responseData.suggestions || [],
      message: 'Сообщение успешно отправлено AI агенту',
    };
  } catch (error) {
    console.error('Ошибка отправки сообщения AI агенту:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Неизвестная ошибка',
    };
  }
};

// Обработка входящего сообщения от пользователя
export const handleUserMessage = async (
  req: AuthenticatedRequest,
  res: Response,
): Promise<void> => {
  try {
    const { message, conversationHistory, context } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Пользователь не аутентифицирован',
      });
      return;
    }

    if (!message || typeof message !== 'string') {
      res.status(400).json({
        success: false,
        message: 'Сообщение обязательно и должно быть строкой',
      });
      return;
    }

    // Отправляем сообщение AI агенту
    const aiResponse = await sendMessageToAIAgent(
      userId,
      message,
      conversationHistory,
      context,
      req,
    );

    if (!aiResponse.success) {
      res.status(500).json({
        success: false,
        message: 'Ошибка при обработке сообщения',
        error: aiResponse.error,
      });
      return;
    }

    res.json({
      success: true,
      message: 'Сообщение обработано',
      aiResponse: aiResponse.aiResponse,
      suggestions: aiResponse.suggestions,
    });
  } catch (error) {
    console.error('Ошибка обработки сообщения пользователя:', error);
    res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера',
    });
  }
};

// Получение истории чата пользователя
export const getChatHistory = async (
  req: AuthenticatedRequest,
  res: Response,
): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Пользователь не аутентифицирован',
      });
      return;
    }

    // Здесь можно добавить логику получения истории из базы данных
    // Пока возвращаем пустую историю
    res.json({
      success: true,
      message: 'История чата получена',
      data: {
        userId,
        messages: [],
      },
    });
  } catch (error) {
    console.error('Ошибка получения истории чата:', error);
    res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера',
    });
  }
};

// Обработка входящих вебхуков от AI агента
export const handleAIAgentWebhook = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const webhookData = req.body;

    console.log('Получен вебхук от AI агента:', webhookData);

    // Обработка различных типов событий от AI агента
    switch (webhookData.type) {
      case 'ai_response':
        console.log('Получен ответ от AI агента:', webhookData.data);

        // Сохраняем ответ в хранилище для polling
        if (webhookData.requestId && webhookData.data) {
          const storedResponse = responseStore.get(webhookData.requestId);
          if (storedResponse) {
            storedResponse.aiResponse = webhookData.data.aiResponse;
            storedResponse.suggestions = webhookData.data.suggestions;
            storedResponse.isReady = true;

            console.log('Ответ сохранен для polling:', webhookData.requestId);
          } else {
            console.log('Запрос не найден в хранилище:', webhookData.requestId);
          }
        }
        break;

      case 'message_response':
        console.log('Ответ AI агента:', webhookData.data);
        break;

      case 'suggestion_update':
        console.log('Обновление предложений:', webhookData.data);
        break;

      case 'error_notification':
        console.log('Уведомление об ошибке:', webhookData.data);
        break;

      default:
        // Если это просто ответ без указания типа, обрабатываем как AI ответ
        if (
          webhookData.response ||
          webhookData.aiResponse ||
          webhookData.message
        ) {
          console.log('Получен ответ от AI агента:', webhookData);

          // Пытаемся найти requestId в данных
          const requestId = webhookData.requestId;
          if (requestId) {
            const storedResponse = responseStore.get(requestId);
            if (storedResponse) {
              storedResponse.aiResponse =
                webhookData.response ||
                webhookData.aiResponse ||
                webhookData.message;
              storedResponse.suggestions = webhookData.suggestions || [];
              storedResponse.isReady = true;

              console.log('Ответ сохранен для polling:', requestId);
            }
          }
        } else {
          console.log(
            'Неизвестный тип события от AI агента:',
            webhookData.type,
          );
        }
    }

    res.status(200).json({
      success: true,
      message: 'Вебхук от AI агента успешно обработан',
      receivedData: webhookData,
    });
  } catch (error) {
    console.error('Ошибка обработки вебхука от AI агента:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка обработки вебхука от AI агента',
    });
  }
};

// Проверка статуса интеграции с AI агентом
export const getAIAgentStatus = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    res.status(200).json({
      success: true,
      message: 'Интеграция с AI агентом активна',
      webhookUrl: 'https://n8n.gulnazbakinova.com/webhook/travel_bd_test',
      timestamp: new Date().toISOString(),
      endpoints: {
        sendMessage: '/api/chat/send-message',
        getHistory: '/api/chat/history',
        aiWebhook: '/api/chat/ai-webhook',
      },
    });
  } catch (error) {
    console.error('Ошибка получения статуса AI агента:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка получения статуса AI агента',
    });
  }
};

// Polling ответа от AI агента
export const pollAIResponse = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { messageId } = req.params;
    const userId = (req as AuthenticatedRequest).user?.id;

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Пользователь не аутентифицирован',
      });
      return;
    }

    // Ищем ответ в хранилище
    const storedResponse = responseStore.get(messageId);

    if (!storedResponse) {
      res.status(404).json({
        success: false,
        message: 'Запрос не найден',
      });
      return;
    }

    // Проверяем, готов ли ответ
    if (storedResponse.isReady && storedResponse.aiResponse) {
      // Удаляем из хранилища после получения
      responseStore.delete(messageId);

      res.status(200).json({
        success: true,
        message: 'Ответ AI агента получен',
        aiResponse: storedResponse.aiResponse,
        suggestions: storedResponse.suggestions || [],
        metadata: {
          messageId,
          processingTime: Date.now() - storedResponse.timestamp,
          confidence: 0.95,
        },
      });
    } else {
      // Проверяем, не истекло ли время ожидания (5 минут)
      const timeElapsed = Date.now() - storedResponse.timestamp;
      if (timeElapsed > 5 * 60 * 1000) {
        responseStore.delete(messageId);
        res.status(408).json({
          success: false,
          message: 'Время ожидания истекло',
        });
        return;
      }

      res.status(202).json({
        success: false,
        message: 'Ответ еще не готов',
        error: 'Polling продолжается',
      });
    }
  } catch (error) {
    console.error('Ошибка polling ответа AI агента:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка получения ответа AI агента',
    });
  }
};
