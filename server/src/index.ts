import cors from 'cors';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth';
import chatRoutes from './routes/chat';
import UserModel from './models/User';
import { attachCsrfToken, verifyCsrf } from './middleware/auth';

export const app = express();
const port = process.env.PORT || 3005;

// Middleware
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:3000',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'x-xsrf-token',
    ],
    optionsSuccessStatus: 200, // Для старых браузеров
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(attachCsrfToken);
app.use(verifyCsrf);

// Логирование запросов
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Маршруты
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

// Существующий маршрут
app.get('/api/data', (req: Request, res: Response) => {
  res.json({ message: 'Привет с сервера Express!' });
});

// Обработка 404
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Маршрут не найден',
  });
});

// Глобальная обработка ошибок
app.use((error: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error('Необработанная ошибка:', error);
  res.status(500).json({
    success: false,
    message: 'Внутренняя ошибка сервера',
  });
});

let server: ReturnType<typeof app.listen> | undefined;
if (process.env.NODE_ENV !== 'test') {
  server = app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
    console.log('Доступные маршруты:');
    console.log('- POST /api/auth/register - Регистрация');
    console.log('- POST /api/auth/login - Вход');
    console.log('- GET /api/auth/profile - Профиль пользователя');
    console.log('- GET /api/auth/verify-token - Проверка токена');
    console.log('- GET /api/auth/dashboard - Личный кабинет');
    console.log('- GET /api/auth/users - Список пользователей');
    console.log('- PATCH /api/auth/users/:id/approve - Одобрение пользователя');
  });

  // Graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\nПолучен сигнал SIGINT. Корректное завершение...');

    // Закрываем HTTP сервер
    server?.close(() => {
      console.log('HTTP сервер закрыт.');
    });

    // Закрываем соединение с базой данных
    try {
      await UserModel.disconnect();
      console.log('Соединение с базой данных закрыто.');
    } catch (error) {
      console.error('Ошибка при закрытии соединения с базой данных:', error);
    }

    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    console.log('\nПолучен сигнал SIGTERM. Корректное завершение...');

    // Закрываем HTTP сервер
    server?.close(() => {
      console.log('HTTP сервер закрыт.');
    });

    // Закрываем соединение с базой данных
    try {
      await UserModel.disconnect();
      console.log('Соединение с базой данных закрыто.');
    } catch (error) {
      console.error('Ошибка при закрытии соединения с базой данных:', error);
    }

    process.exit(0);
  });
}

export { server };
