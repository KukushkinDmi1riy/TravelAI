import React, { useState } from 'react';
import { Modal, TextInput, Button, Text, Box } from '@mantine/core';
import styles from './ChatDialog.module.css';

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

export const ChatDialog: React.FC<ChatDialogProps> = ({ opened, onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Привет! Я твой AI-помощник. Могу помочь с информацией об отелях, ценах, визах или подсказать в работе с клиентами. Что тебя интересует?',
      isAI: true,
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        isAI: false,
      };
      setMessages([...messages, newMessage]);
      setMessage('');

      // Имитация ответа AI
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: 'Спасибо за ваше сообщение! Я обрабатываю ваш запрос...',
          isAI: true,
        };
        setMessages((prev) => [...prev, aiResponse]);
      }, 1000);
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
                msg.isAI ? styles.aiMessage : styles.userMessage
              }`}
            >
              <Text size="sm">{msg.text}</Text>
            </div>
          ))}
        </div>

        <div className={styles.inputContainer}>
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
                disabled={!message.trim()}
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
