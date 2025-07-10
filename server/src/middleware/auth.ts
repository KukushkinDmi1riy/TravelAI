import jwt, { SignOptions } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/User';
import type { UserProfile, AuthenticatedRequest } from '../types/index';

// Middleware для проверки JWT токена
export const authenticateToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      res.status(401).json({
        success: false,
        message: 'Токен доступа не предоставлен',
      });
      return;
    }

    // Получаем секрет из переменной окружения или используем дефолтный
    const jwtSecret =
      process.env.JWT_SECRET || 'our_super_secret_jwt_key_change_in_production';

    const decoded = jwt.verify(token, jwtSecret) as { userId: string };
    const user = await UserModel.findById(decoded.userId);

    if (!user) {
      res.status(401).json({
        success: false,
        message: 'Пользователь не найден',
      });
      return;
    }

    // Добавляем информацию о пользователе в объект запроса
    req.user = {
      id: user.id,
      email: user.email,
      isApprovedByAdmin: user.isApprovedByAdmin,
      createdAt: user.createdAt,
    };

    next();
  } catch (error) {
    res.status(403).json({
      success: false,
      message: 'Недействительный токен',
    });
  }
};

// Middleware для проверки одобрения администратором
export const requireAdminApproval = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): void => {
  if (!req.user?.isApprovedByAdmin) {
    res.status(403).json({
      success: false,
      message: 'Доступ запрещен. Ожидается одобрение администратора.',
    });
    return;
  }
  next();
};

// Функция для генерации JWT токена
export const generateToken = (userId: string): string => {
  const jwtSecret =
    process.env.JWT_SECRET || 'our_super_secret_jwt_key_change_in_production';
  const expiresIn = process.env.JWT_EXPIRES_IN || '7d';

  return jwt.sign({ userId }, jwtSecret, { expiresIn } as any);
};
