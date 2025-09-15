import React, { useEffect, useState } from 'react';
import {
  Modal,
  TextInput,
  Button,
  Text,
  Box,
  Loader,
  Group,
} from '@mantine/core';
import styles from './ChatDialog.module.css';
import { ensureCsrfToken } from '../../../features/auth/api';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  addMessage,
  selectConversations,
  selectActiveConversationId,
} from '../../../features/chat/chatSlice';
import type { ChatTurn } from '../../../features/chat/api';
import { sendChatMessage } from '../../../features/chat/api';

interface ChatDialogProps {
  opened: boolean;
  onClose: () => void;
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

export const ChatDialog = ({ opened, onClose }: ChatDialogProps) => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState('');
  const conversations = useAppSelector(selectConversations);
  const activeConversationId = useAppSelector(selectActiveConversationId);

  const messages = conversations[activeConversationId] ?? [];
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (opened) {
      void ensureCsrfToken();
    }
  }, [opened]);

  const handleSendMessage = async () => {
    if (!message.trim() || isGenerating) return;
    const userMessageId = `${Date.now()}-user`;
    dispatch(
      addMessage({
        message: {
          id: userMessageId,
          role: 'user',
          content: message,
          createdAt: Date.now(),
        },
      }),
    );
    setMessage('');
    setIsGenerating(true);

    try {
      const history: ChatTurn[] = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const reply = await sendChatMessage({ message, history });

      dispatch(
        addMessage({
          message: {
            id: `${Date.now()}-assistant`,
            role: 'assistant',
            content: reply,
            createdAt: Date.now(),
          },
        }),
      );
    } catch (error: unknown) {
      dispatch(
        addMessage({
          message: {
            id: `${Date.now()}-error`,
            role: 'assistant',
            content: `⚠️ Ошибка: ${error instanceof Error ? error.message : 'что-то пошло не так'}`,
            createdAt: Date.now(),
          },
        }),
      );
    } finally {
      setIsGenerating(false);
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
      title={
        <Box className={styles.header}>
          <Text size="lg" fw={600} c="white">
            AI Помощник TravelPro
          </Text>
        </Box>
      }
      size="md"
      centered
      classNames={{
        header: styles.modalHeader,
        content: styles.modalContent,
      }}
    >
      <div className={styles.chatContainer}>
        <div className={styles.messagesContainer}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`${styles.message} ${
                msg.role === 'assistant' || msg.role === 'system'
                  ? styles.aiMessage
                  : styles.userMessage
              }`}
            >
              <Text size="sm">{msg.content}</Text>
            </div>
          ))}
        </div>

        <div className={styles.inputContainer}>
          {isGenerating && (
            <Group gap="xs" style={{ marginBottom: 8 }}>
              <Loader size="xs" />
              <Text size="xs" c="dimmed">
                Генерация ответа от OpenAI...
              </Text>
            </Group>
          )}
          <TextInput
            placeholder="Напишите сообщение..."
            value={message}
            onChange={(event) => setMessage(event.currentTarget.value)}
            onKeyPress={handleKeyPress}
            className={styles.input}
            rightSection={
              <Button
                onClick={handleSendMessage}
                size="sm"
                className={styles.sendButton}
                disabled={!message.trim() || isGenerating}
              >
                <SendIcon />
              </Button>
            }
          />
        </div>
      </div>
    </Modal>
  );
};
