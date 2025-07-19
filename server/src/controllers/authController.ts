import { Response } from 'express';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import UserModel from '../models/User';
import { generateToken, generateRefreshToken } from '../middleware/auth';
import type {
  LoginRequest,
  RegisterRequest,
  LoginResponse,
  RegisterResponse,
  ApiResponse,
  UserApprovalRequest,
  AuthenticatedRequest,
} from '../types/index';

// Типизированный интерфейс для запросов
interface TypedRequest<T = {}> extends Express.Request {
  body: T;
}

// Регистрация нового пользователя
export const register = async (
  req: TypedRequest<RegisterRequest>,
  res: Response<RegisterResponse>,
): Promise<void> => {
  try {
    // Проверяем валидацию
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Ошибки валидации',
        errors: errors.array(),
      } as any);
      return;
    }

    const { firstName, lastName, email, password, role } = req.body;

    // Проверяем, существует ли пользователь
    const existingUser = await UserModel.findByEmail(email);
    if (existingUser) {
      res.status(400).json({
        success: false,
        message: 'Пользователь с таким email уже существует',
      });
      return;
    }

    // Создаем нового пользователя
    const newUser = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
      role,
    });

    // Генерируем JWT токен
    const token = generateToken(newUser.id);
    const refreshToken = generateRefreshToken(newUser.id);

    // Устанавливаем access token и refresh token в httpOnly cookie
    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 дней
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
    });

    res.status(201).json({
      success: true,
      message:
        'Пользователь успешно зарегистрирован. Ожидайте одобрения администратора.',
      user: {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        role: newUser.role,
        status: newUser.status,
        email: newUser.email,
        isApprovedByAdmin: newUser.isApprovedByAdmin,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    console.error('Ошибка регистрации:', error);
    res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера',
    });
  }
};

// Вход пользователя
export const login = async (
  req: TypedRequest<LoginRequest>,
  res: Response<LoginResponse>,
): Promise<void> => {
  try {
    // Проверяем валидацию
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      res.status(400).json({
        success: false,
        message: 'Ошибки валидации',
        errors: errors.array(),
      } as any);
      return;
    }

    const { email, password } = req.body;
    console.log('Login attempt:', { email, password: '***' });

    // Ищем пользователя
    const user = await UserModel.findByEmail(email);
    console.log(
      'Found user:',
      user ? { id: user.id, email: user.email } : 'null',
    );

    if (!user) {
      console.log('User not found for email:', email);
      res.status(401).json({
        success: false,
        message: 'Неверный email или пароль',
      });
      return;
    }

    // Проверяем пароль
    console.log('Validating password...');
    const isValidPassword = await UserModel.validatePassword(
      password,
      user.passwordHash,
    );
    console.log('Password valid:', isValidPassword);

    if (!isValidPassword) {
      console.log('Invalid password for user:', email);
      res.status(401).json({
        success: false,
        message: 'Неверный email или пароль',
      });
      return;
    }

    // Генерируем JWT токен
    const token = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    // Устанавливаем access token и refresh token в httpOnly cookie
    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 дней
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
    });

    res.json({
      success: true,
      message: 'Успешный вход в систему',
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        status: user.status,
        email: user.email,
        isApprovedByAdmin: user.isApprovedByAdmin,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error('Ошибка входа:', error);
    res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера',
    });
  }
};

// Получение информации о текущем пользователе
export const getProfile = async (
  req: AuthenticatedRequest,
  res: Response<ApiResponse>,
): Promise<void> => {
  try {
    const user = await UserModel.findById(req.user!.id);

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'Пользователь не найден',
      });
      return;
    }

    res.json({
      success: true,
      message: 'Профиль получен',
      data: {
        id: user.id,
        email: user.email,
        isApprovedByAdmin: user.isApprovedByAdmin,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error('Ошибка получения профиля:', error);
    res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера',
    });
  }
};

// Проверка токена
export const verifyToken = async (
  req: AuthenticatedRequest,
  res: Response<ApiResponse>,
): Promise<void> => {
  res.json({
    success: true,
    message: 'Токен действительный',
    data: req.user,
  });
};

// Получение всех пользователей (для админа)
export const getAllUsers = async (
  req: AuthenticatedRequest,
  res: Response<ApiResponse>,
): Promise<void> => {
  try {
    const users = await UserModel.getAll();

    res.json({
      success: true,
      message: 'Список пользователей получен',
      data: users,
    });
  } catch (error) {
    console.error('Ошибка получения пользователей:', error);
    res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера',
    });
  }
};

// Одобрение пользователя администратором
export const approveUser = async (
  req: TypedRequest<UserApprovalRequest> & { params: { userId: string } },
  res: Response<ApiResponse>,
): Promise<void> => {
  try {
    const { userId } = req.params;
    const { isApproved } = req.body;

    const updatedUser = await UserModel.updateApprovalStatus(
      userId,
      isApproved,
    );

    if (!updatedUser) {
      res.status(404).json({
        success: false,
        message: 'Пользователь не найден',
      });
      return;
    }

    res.json({
      success: true,
      message: `Пользователь ${isApproved ? 'одобрен' : 'заблокирован'}`,
      data: {
        id: updatedUser.id,
        email: updatedUser.email,
        isApprovedByAdmin: updatedUser.isApprovedByAdmin,
        createdAt: updatedUser.createdAt,
      },
    });
  } catch (error) {
    console.error('Ошибка одобрения пользователя:', error);
    res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера',
    });
  }
};

// Обновление access token по refresh token
export const refreshToken = async (req: any, res: Response) => {
  try {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      return res
        .status(401)
        .json({ success: false, message: 'Refresh token отсутствует' });
    }
    const jwtSecret =
      process.env.JWT_REFRESH_SECRET ||
      'our_super_secret_refresh_jwt_key_change_in_production';
    let payload: any;
    try {
      payload = jwt.verify(refreshToken, jwtSecret);
    } catch (e) {
      return res
        .status(403)
        .json({ success: false, message: 'Refresh token невалиден' });
    }
    const user = await UserModel.findById(payload.userId);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: 'Пользователь не найден' });
    }
    const newAccessToken = generateToken(user.id);
    // Устанавливаем новый access token в cookie
    res.cookie('accessToken', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 дней
    });
    res.json({ success: true });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Ошибка обновления токена' });
  }
};

// Logout пользователя: удаляет accessToken и refreshToken cookie
export const logout = (req: any, res: Response) => {
  res.clearCookie('accessToken', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
  res.clearCookie('refreshToken', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
  res.clearCookie('XSRF-TOKEN', {
    httpOnly: false,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
  res.json({ success: true, message: 'Выход выполнен' });
};
