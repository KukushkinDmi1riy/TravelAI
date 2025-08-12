import express from 'express';
import {
  handleUserMessage,
  getChatHistory,
  handleAIAgentWebhook,
  getAIAgentStatus,
  pollAIResponse,
} from '../controllers/chatController';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

// Маршрут для отправки сообщения AI агенту (требует аутентификации)
router.post('/send-message', authenticateToken, handleUserMessage);

// Маршрут для получения истории чата (требует аутентификации)
router.get('/history', authenticateToken, getChatHistory);

// Маршрут для получения вебхуков от AI агента (публичный)
router.post('/ai-webhook', handleAIAgentWebhook);

// Маршрут для проверки статуса интеграции с AI агентом
router.get('/status', getAIAgentStatus);

// Маршрут для polling ответа от AI агента
router.get('/poll-response/:messageId', authenticateToken, pollAIResponse);

export default router;
