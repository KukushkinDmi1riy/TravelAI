import express, { Response } from 'express';
import {
  register,
  login,
  getProfile,
  verifyToken,
  getAllUsers,
  approveUser,
  refreshToken,
  logout as logoutController,
} from '../controllers/authController';

import { authenticateToken, requireAdminApproval } from '../middleware/auth';
import {
  validateRegister,
  validateLogin,
  validateApproval,
} from '../middleware/validation';
import type { AuthenticatedRequest } from '../types/index';

const router = express.Router();

// Публичные маршруты
router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);
router.get('/me', authenticateToken, getProfile);

// Обновление access token по refresh token
router.post('/refresh', refreshToken);

// Logout
router.post('/logout', logoutController);

// Эндпоинт для получения CSRF-токена
router.get('/csrf', (req, res) => {
  res.status(200).json({ success: true });
});

// Защищенные маршруты (требуют аутентификации)
router.get('/profile', authenticateToken, getProfile);
router.get('/verify-token', authenticateToken, verifyToken);

// Маршруты для одобренных пользователей
router.get(
  '/dashboard',
  authenticateToken,
  requireAdminApproval,
  (req: AuthenticatedRequest, res: Response) => {
    res.json({
      success: true,
      message: 'Добро пожаловать в личный кабинет!',
      data: req.user,
    });
  },
);

// Административные маршруты (пока доступны всем аутентифицированным пользователям)
// В будущем можно добавить проверку роли администратора
router.get('/users', authenticateToken, getAllUsers);
router.patch(
  '/users/:userId/approve',
  authenticateToken,
  validateApproval,
  approveUser,
);

export default router;
