import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  TextInput,
  Button,
  Text,
  LoadingOverlay,
  Alert,
} from '@mantine/core';
import {
  sendMessageToAI,
  getChatHistory,
  pollAIResponse,
  type ChatMessage,
} from '../../../services/chatService';
import { useCsrfToken } from '../../../hooks/useCsrfToken';
import { usePolling } from '../../../hooks/usePolling';
import styles from './ChatDialog.module.css';

interface ChatDialogProps {
  opened: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: string;
}

const SendIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22,2 15,22 11,13 2,9"></polygon>
  </svg>
);

export const ChatDialog: React.FC<ChatDialogProps> = ({ opened, onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Привет! Я твой AI-помощник. Могу помочь с информацией об отелях, ценах, визах или подсказать в работе с клиентами. Что тебя интересует?',
      isAI: true,
      timestamp: new Date().toISOString(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [csrfError, setCsrfError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { csrfToken, isLoading: csrfLoading } = useCsrfToken();

  // Polling для получения ответа от AI агента
  const { isPolling, startPolling } = usePolling({
    interval: 3000, // Проверяем каждые 3 секунды
    maxAttempts: 10, // Максимум 10 попыток
    onSuccess: (data) => {
      const result = data as { aiResponse?: string };
      if (result.aiResponse) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: result.aiResponse,
          isAI: true,
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, aiMessage]);
      }
    },
    onError: (error) => {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Ошибка получения ответа: ${error}`,
        isAI: true,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    },
  });

  // Автопрокрутка к последнему сообщению
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Загрузка истории чата при открытии
  useEffect(() => {
    if (opened) {
      loadChatHistory();
    }
  }, [opened]);

  const loadChatHistory = async () => {
    try {
      const response = await getChatHistory();
      if (response.success && response.data.messages.length > 0) {
        setMessages(response.data.messages);
      }
    } catch (error) {
      console.error('Ошибка загрузки истории чата:', error);
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() && !isLoading && !csrfLoading) {
      // Проверяем наличие CSRF токена
      if (!csrfToken) {
        setCsrfError('Ошибка безопасности. Пожалуйста, обновите страницу.');
        return;
      }

      const userMessage: Message = {
        id: Date.now().toString(),
        text: message,
        isAI: false,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setMessage('');
      setIsLoading(true);
      setCsrfError(null);

      try {
        // Подготавливаем историю для отправки
        const conversationHistory: ChatMessage[] = messages.map((msg) => ({
          id: msg.id,
          text: msg.text,
          isAI: msg.isAI,
          timestamp: msg.timestamp,
        }));

        const response = await sendMessageToAI(message, conversationHistory, {
          userProfile: {
            // Здесь можно добавить данные пользователя из контекста
          },
          travelPreferences: {
            // Здесь можно добавить предпочтения пользователя
          },
        });

        if (response.success && response.aiResponse) {
          const aiMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: response.aiResponse,
            isAI: true,
            timestamp: new Date().toISOString(),
          };
          setMessages((prev) => [...prev, aiMessage]);

          // Если это временный ответ о том, что сообщение обрабатывается
          if (
            response.aiResponse.includes('обрабатывается') ||
            response.aiResponse.includes('ожидайте')
          ) {
            console.log(
              'Сообщение отправлено в обработку, запускаем polling...',
            );
            // Запускаем polling для получения финального ответа
            if (response.requestId) {
              startPolling(async () => {
                // Делаем реальный запрос к серверу для проверки готовности ответа
                const pollingResponse = await pollAIResponse(
                  response.requestId as string,
                );
                return pollingResponse;
              });
            }
          }
        } else {
          // Показываем ошибку как сообщение AI
          const errorMessage: Message = {
            id: (Date.now() + 1).toString(),
            text:
              response.error ||
              'Извините, произошла ошибка при обработке вашего сообщения.',
            isAI: true,
            timestamp: new Date().toISOString(),
          };
          setMessages((prev) => [...prev, errorMessage]);
        }
      } catch (error) {
        console.error('Ошибка отправки сообщения:', error);
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Извините, произошла ошибка при отправке сообщения.',
          isAI: true,
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={true}
      title={
        <Text className={styles.headerTitle} fw={800} size="xl" c="white">
          AI Помощник TravelPro
        </Text>
      }
      size="md"
      centered={false}
      radius="lg"
      overlayProps={{ opacity: 0 }}
      classNames={{
        root: styles.modalRoot,
        inner: styles.modalInner,
        header: styles.modalHeader,
        content: styles.modalContent,
      }}
    >
      <div className={styles.chatContainer}>
        <LoadingOverlay visible={isLoading || csrfLoading || isPolling} />

        {csrfError && (
          <Alert color="red" mb="md">
            {csrfError}
          </Alert>
        )}

        {isPolling && (
          <Alert color="blue" mb="md">
            Ожидаем ответ от AI агента...
          </Alert>
        )}

        <div className={styles.messagesContainer}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`${styles.message} ${
                msg.isAI ? styles.aiMessage : styles.userMessage
              }`}
            >
              <Text size="md" fw={600}>
                {msg.text}
              </Text>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputRow}>
            <TextInput
              placeholder={
                csrfLoading ? 'Загрузка...' : 'Напишите сообщение...'
              }
              value={message}
              onChange={(event) => setMessage(event.currentTarget.value)}
              onKeyPress={handleKeyPress}
              className={styles.inputRoot}
              classNames={{ input: styles.inputField }}
              disabled={isLoading || csrfLoading}
            />
            <Button
              onClick={handleSendMessage}
              size="md"
              className={styles.sendButton}
              disabled={!message.trim() || isLoading || csrfLoading}
              loading={isLoading}
            >
              {!isLoading && <SendIcon />}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
