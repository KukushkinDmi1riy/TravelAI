# TravelAI Server API

## Установка и запуск

### 1. Установка зависимостей
```bash
npm install
```

### 2. Настройка переменных окружения
Создайте файл `.env` в корне папки server со следующими переменными:

```env
JWT_SECRET=your_super_secret_jwt_key_change_in_production
JWT_EXPIRES_IN=7d
PORT=3001
NODE_ENV=development
```

### 3. Запуск сервера
```bash
# Режим разработки (с автоперезагрузкой)
npm run dev

# Обычный запуск
npm start
```

## API Endpoints

### Публичные маршруты

#### Регистрация пользователя
```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "Password123"
}
```

#### Вход в систему
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com", 
  "password": "Password123"
}
```

### Защищенные маршруты (требуют токен)

Добавьте заголовок: `Authorization: Bearer YOUR_JWT_TOKEN`

#### Получение профиля
```
GET /api/auth/profile
```

#### Проверка токена
```
GET /api/auth/verify-token
```

#### Личный кабинет (требует одобрения админа)
```
GET /api/auth/dashboard
```

#### Получение всех пользователей
```
GET /api/auth/users
```

#### Одобрение/блокировка пользователя
```
PATCH /api/auth/users/:userId/approve
Content-Type: application/json

{
  "isApproved": true
}
```

## Тестовые пользователи

По умолчанию в системе есть два тестовых пользователя:

1. **admin@example.com** / **password123** (одобрен)
2. **user@example.com** / **password123** (одобрен)

## Модель пользователя

```typescript
interface User {
  id: string;
  email: string;
  passwordHash: string;
  isApprovedByAdmin: boolean;
  createdAt: Date;
}
```

## Следующие шаги

- [ ] Интеграция с Prisma ORM
- [ ] Добавление ролей (admin, user)
- [ ] Система сброса пароля
- [ ] Email верификация
- [ ] Rate limiting
- [ ] Логирование действий

## Архитектура

Проект использует ES modules и следующую структуру:

```
server/
├── controllers/     # Бизнес-логика
├── middleware/      # Промежуточные обработчики
├── models/          # Модели данных
├── routes/          # Маршруты API
└── index.js         # Точка входа
``` 