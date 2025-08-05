// Интерфейсы для чата
export interface ChatMessage {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: string;
}

export interface SendMessageRequest {
  message: string;
  conversationHistory?: ChatMessage[];
  context?: {
    userProfile?: unknown;
    travelPreferences?: unknown;
    currentLocation?: string;
  };
}

export interface SendMessageResponse {
  success: boolean;
  message: string;
  aiResponse?: string;
  suggestions?: string[];
  error?: string;
  requestId?: string; // ID для polling
}

export interface ChatHistoryResponse {
  success: boolean;
  message: string;
  data: {
    userId: string;
    messages: ChatMessage[];
  };
}

// Базовый URL API
const API_BASE_URL = 'http://localhost:3005/api';

// Функция для получения CSRF токена из cookies
const getCsrfToken = (): string | null => {
  // Получаем CSRF токен из cookies
  const cookies = document.cookie.split(';');
  const csrfCookie = cookies.find((cookie) =>
    cookie.trim().startsWith('XSRF-TOKEN='),
  );
  return csrfCookie ? csrfCookie.split('=')[1] : null;
};

// Функция для создания заголовков с авторизацией и CSRF токеном
const getAuthHeaders = (): HeadersInit => {
  const csrfToken = getCsrfToken();
  return {
    'Content-Type': 'application/json',
    ...(csrfToken && { 'x-xsrf-token': csrfToken }),
    // Токен будет отправлен автоматически через cookies
    // credentials: 'include' будет установлен в fetch запросах
  };
};

// Отправка сообщения AI агенту
export const sendMessageToAI = async (
  message: string,
  conversationHistory?: ChatMessage[],
  context?: unknown,
): Promise<SendMessageResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat/send-message`, {
      method: 'POST',
      headers: getAuthHeaders(),
      credentials: 'include',
      body: JSON.stringify({
        message,
        conversationHistory,
        context,
      } as SendMessageRequest),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      if (response.status === 403 && errorData.message?.includes('CSRF')) {
        return {
          success: false,
          message: 'Ошибка безопасности. Пожалуйста, обновите страницу.',
          error: 'CSRF token invalid',
        };
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as SendMessageResponse;
  } catch (error) {
    console.error('Ошибка отправки сообщения:', error);
    return {
      success: false,
      message: 'Ошибка при отправке сообщения',
      error: error instanceof Error ? error.message : 'Неизвестная ошибка',
    };
  }
};

// Получение истории чата
export const getChatHistory = async (): Promise<ChatHistoryResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat/history`, {
      method: 'GET',
      headers: getAuthHeaders(),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as ChatHistoryResponse;
  } catch (error) {
    console.error('Ошибка получения истории чата:', error);
    return {
      success: false,
      message: 'Ошибка при получении истории чата',
      data: {
        userId: '',
        messages: [],
      },
    };
  }
};

// Проверка статуса интеграции с AI агентом
export const getAIAgentStatus = async (): Promise<{
  success: boolean;
  message: string;
  webhookUrl?: string;
  timestamp?: string;
}> => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat/status`, {
      method: 'GET',
      headers: getAuthHeaders(),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка проверки статуса AI агента:', error);
    return {
      success: false,
      message: 'Ошибка при проверке статуса AI агента',
    };
  }
};

// Функция для polling ответа от AI агента
export const pollAIResponse = async (
  requestId: string,
): Promise<SendMessageResponse> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/chat/poll-response/${requestId}`,
      {
        method: 'GET',
        headers: getAuthHeaders(),
        credentials: 'include',
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as SendMessageResponse;
  } catch (error) {
    console.error('Ошибка polling ответа AI агента:', error);
    return {
      success: false,
      message: 'Ошибка при получении ответа AI агента',
      error: error instanceof Error ? error.message : 'Неизвестная ошибка',
    };
  }
};
