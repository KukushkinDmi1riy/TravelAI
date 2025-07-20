import jwt, { SignOptions } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/User';
import type { UserProfile, AuthenticatedRequest } from '../types/index';
import crypto from 'crypto';

// Middleware для проверки JWT токена
export const authenticateToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const token = req.cookies?.accessToken;

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
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      status: user.status,
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

// Функция для генерации refresh token
export const generateRefreshToken = (userId: string): string => {
  const jwtSecret =
    process.env.JWT_REFRESH_SECRET ||
    'our_super_secret_refresh_jwt_key_change_in_production';
  const expiresIn = process.env.JWT_REFRESH_EXPIRES_IN || '30d';

  return jwt.sign({ userId }, jwtSecret, { expiresIn } as any);
};

// Middleware для генерации CSRF-токена (double submit cookie)
export const attachCsrfToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
    const token = crypto.randomBytes(32).toString('hex');
    res.cookie('XSRF-TOKEN', token, {
      httpOnly: false,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
    res.locals.csrfToken = token;
  }
  next();
};

// Middleware для проверки CSRF-токена
export const verifyCsrf = (req: Request, res: Response, next: NextFunction) => {
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
    const cookieToken = req.cookies['XSRF-TOKEN'];
    const headerToken = req.get('x-xsrf-token');
    if (!cookieToken || !headerToken || cookieToken !== headerToken) {
      return res
        .status(403)
        .json({ success: false, message: 'CSRF token invalid' });
    }
  }
  next();
};
