import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import authRoutes from './routes/auth';

const app = express();
const port = process.env.PORT || 3005;

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // URL фронтенда (Vite)
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Логирование запросов
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Маршруты
app.use('/api/auth', authRoutes);

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
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Необработанная ошибка:', error);
  res.status(500).json({
    success: false,
    message: 'Внутренняя ошибка сервера',
  });
});

app.listen(port, () => {
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
