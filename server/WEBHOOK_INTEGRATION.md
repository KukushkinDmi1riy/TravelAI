# Интеграция с AI агентом через вебхук

## Обзор

Данная интеграция позволяет вашему приложению взаимодействовать с AI агентом через вебхук `https://n8n.gulnazbakinova.com/webhook/travel_bd_test` для обработки запросов пользователей и предоставления ответов.

## Архитектура

```
Пользователь → TravelAI Server → AI Agent Webhook → AI Agent
                ↓
            Ответ AI агента → TravelAI Server → Пользователь
```

## API Endpoints

### 1. Отправка сообщения AI агенту
```
POST /api/chat/send-message
```

**Заголовки:**
- `Authorization: Bearer <token>` (требуется аутентификация)
- `Content-Type: application/json`

**Тело запроса:**
```json
{
  "message": "Привет! Я хочу спланировать путешествие в Париж",
  "conversationHistory": [
    {
      "id": "msg-1",
      "userId": "user-123",
      "message": "Привет!",
      "timestamp": "2024-01-15T10:30:00Z",
      "isFromUser": true
    }
  ],
  "context": {
    "userProfile": {
      "firstName": "Иван",
      "lastName": "Иванов",
      "email": "ivan@example.com"
    },
    "travelPreferences": {
      "budget": "medium",
      "duration": "1 week",
      "interests": ["culture", "food", "sightseeing"]
    },
    "currentLocation": "Москва"
  }
}
```

**Ответ:**
```json
{
  "success": true,
  "message": "Сообщение обработано",
  "aiResponse": "Привет! Я помогу вам спланировать путешествие в Париж...",
  "suggestions": [
    "Показать достопримечательности",
    "Рекомендовать отели",
    "Составить маршрут"
  ]
}
```

### 2. Получение истории чата
```
GET /api/chat/history
```

**Заголовки:**
- `Authorization: Bearer <token>` (требуется аутентификация)

**Ответ:**
```json
{
  "success": true,
  "message": "История чата получена",
  "data": {
    "userId": "user-123",
    "messages": []
  }
}
```

### 3. Вебхук от AI агента
```
POST /api/chat/ai-webhook
```

**Тело запроса (от AI агента):**
```json
{
  "type": "message_response",
  "data": {
    "userId": "user-123",
    "response": "Вот план вашего путешествия...",
    "suggestions": ["Подробнее", "Изменить план"]
  }
}
```

### 4. Статус интеграции с AI агентом
```
GET /api/chat/status
```

**Ответ:**
```json
{
  "success": true,
  "message": "Интеграция с AI агентом активна",
  "webhookUrl": "https://n8n.gulnazbakinova.com/webhook/travel_bd_test",
  "timestamp": "2024-01-15T10:30:00Z",
  "endpoints": {
    "sendMessage": "/api/chat/send-message",
    "getHistory": "/api/chat/history",
    "aiWebhook": "/api/chat/ai-webhook"
  }
}
```

## Интеграция с внешним вебхуком

### Отправка данных на AI агента

Сервер автоматически отправляет данные на вебхук `https://n8n.gulnazbakinova.com/webhook/travel_bd_test` со следующей структурой:

```json
{
  "userId": "user-123",
  "userMessage": "Сообщение пользователя",
  "conversationHistory": [
    {
      "id": "msg-1",
      "userId": "user-123",
      "message": "Предыдущее сообщение",
      "timestamp": "2024-01-15T10:30:00Z",
      "isFromUser": true
    }
  ],
  "context": {
    "userProfile": {
      "firstName": "Иван",
      "lastName": "Иванов",
      "email": "ivan@example.com"
    },
    "travelPreferences": {
      "budget": "medium",
      "duration": "1 week",
      "interests": ["culture", "food", "sightseeing"]
    },
    "currentLocation": "Москва"
  }
}
```

### Ожидаемый ответ от AI агента

AI агент должен возвращать ответ в формате:

```json
{
  "response": "Текст ответа AI агента",
  "suggestions": [
    "Предложение 1",
    "Предложение 2"
  ],
  "metadata": {
    "confidence": 0.95,
    "processingTime": 1500
  }
}
```

## Тестирование

### Запуск тестового файла
```bash
cd server
node test-webhook.js
```

### Тестирование через curl
```bash
# Отправка сообщения (требуется токен)
curl -X POST http://localhost:3005/api/chat/send-message \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Привет! Помоги спланировать путешествие",
    "context": {
      "userProfile": {
        "firstName": "Тест",
        "lastName": "Пользователь"
      }
    }
  }'
```

## Обработка ошибок

### Типичные ошибки

1. **401 Unauthorized** - Пользователь не аутентифицирован
2. **400 Bad Request** - Неверный формат сообщения
3. **500 Internal Server Error** - Ошибка при отправке на вебхук

### Логирование

Все взаимодействия с AI агентом логируются в консоль сервера:
- Отправка сообщений
- Получение ответов
- Ошибки соединения

## Безопасность

- Все запросы к чату требуют аутентификации
- Вебхук от AI агента не требует аутентификации (публичный endpoint)
- Рекомендуется добавить валидацию входящих вебхуков от AI агента

## Расширение функциональности

### Добавление новых типов контекста
```typescript
interface ChatContext {
  userProfile?: UserProfile;
  travelPreferences?: TravelPreferences;
  currentLocation?: string;
  // Добавьте новые поля здесь
  weatherInfo?: WeatherData;
  currencyRates?: CurrencyData;
}
```

### Обработка новых типов событий от AI агента
```typescript
switch (webhookData.type) {
  case 'message_response':
    // Обработка ответа
    break;
  case 'suggestion_update':
    // Обновление предложений
    break;
  case 'error_notification':
    // Уведомление об ошибке
    break;
  case 'booking_request':
    // Запрос на бронирование
    break;
}
``` 