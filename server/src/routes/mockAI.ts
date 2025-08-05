import express from 'express';
import { mockAIAgent } from '../controllers/mockAIController';

const router = express.Router();

// Маршрут для mock AI агента (только для разработки)
router.post('/mock-ai', mockAIAgent);

export default router;
