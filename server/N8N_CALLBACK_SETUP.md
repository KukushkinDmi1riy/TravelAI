# Настройка n8n для Callback Webhook

## Проблема

HTTP/HTTPS соединения не поддерживают push-уведомления. После отправки запроса на n8n webhook соединение закрывается, и n8n не может отправить ответ обратно клиенту.

## Решение: Callback Webhook

n8n отправляет ответ на ваш сервер через callback webhook, а клиент получает ответ через polling.

## Архитектура

```
Клиент → n8n webhook → n8n обрабатывает → n8n → ваш сервер → клиент polling
```

## Настройка n8n Workflow

### Шаг 1: Webhook Trigger
```json
{
  "name": "TravelAI Webhook",
  "type": "webhook",
  "httpMethod": "POST",
  "path": "travel_bd_test",
  "responseMode": "responseNode"
}
```

### Шаг 2: AI Agent Node
```json
{
  "name": "AI Agent",
  "type": "aiAgent",
  "configuration": {
    "model": "gpt-3.5-turbo",
    "prompt": "Ты AI помощник для туристического агентства. Помоги пользователю с планированием путешествия.",
    "input": "{{ $json.userMessage }}",
    "context": "{{ $json.context }}"
  }
}
```

### Шаг 3: HTTP Request Node (Callback)
```json
{
  "name": "Send Response",
  "type": "httpRequest",
  "configuration": {
    "method": "POST",
    "url": "{{ $json.callbackUrl }}",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "type": "ai_response",
      "requestId": "{{ $json.requestId }}",
      "data": {
        "aiResponse": "{{ $json.content }}",
        "suggestions": [
          "Показать достопримечательности",
          "Рекомендовать отели",
          "Составить маршрут"
        ]
      }
    }
  }
}
```

## Формат данных

### Входящие данные (от TravelAI):
```json
{
  "userId": "user-123",
  "userMessage": "Привет! Помоги спланировать путешествие в Париж",
  "conversationHistory": [...],
  "context": {
    "userProfile": {...},
    "travelPreferences": {...}
  },
  "requestId": "user-123-1234567890",
  "callbackUrl": "http://localhost:3005/api/chat/ai-webhook"
}
```

### Исходящие данные (к TravelAI):
```json
{
  "type": "ai_response",
  "requestId": "user-123-1234567890",
  "data": {
    "aiResponse": "Привет! Я помогу вам спланировать путешествие в Париж...",
    "suggestions": [
      "Показать достопримечательности",
      "Рекомендовать отели",
      "Составить маршрут"
    ]
  }
}
```

## Пошаговая настройка

### 1. Откройте n8n интерфейс
Перейдите в ваш n8n dashboard и найдите workflow с webhook `travel_bd_test`.

### 2. Добавьте AI Agent узел
- Найдите и добавьте узел **AI Agent** или **OpenAI**
- Настройте модель (GPT-3.5-turbo, GPT-4, etc.)
- Укажите промпт для туристического помощника

### 3. Добавьте HTTP Request узел
- Добавьте узел **HTTP Request**
- Настройте метод: `POST`
- URL: `{{ $json.callbackUrl }}`
- Headers: `Content-Type: application/json`
- Body: используйте формат выше

### 4. Настройте связи
```
Webhook Trigger → AI Agent → HTTP Request
```

### 5. Активируйте workflow
Убедитесь, что workflow активен и webhook доступен.

## Тестирование

### Тестовый запрос:
```bash
curl -X POST https://n8n.gulnazbakinova.com/webhook/travel_bd_test \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "test-user",
    "userMessage": "Привет! Помоги спланировать путешествие",
    "requestId": "test-123",
    "callbackUrl": "http://localhost:3005/api/chat/ai-webhook"
  }'
```

### Проверка callback:
```bash
# В логах сервера должны появиться:
Получен вебхук от AI агента: { type: 'ai_response', requestId: 'test-123', ... }
Ответ сохранен для polling: test-123
```

## Отладка

### Логи n8n:
- Проверьте логи каждого узла в workflow
- Убедитесь, что AI Agent получает правильные данные
- Проверьте, что HTTP Request отправляется

### Логи TravelAI сервера:
```bash
# В консоли сервера должны появиться:
Отправка сообщения AI агенту: { userId: 'user-123', ... }
Отправка запроса с callback: { requestId: 'user-123-1234567890', ... }
Получен вебхук от AI агента: { type: 'ai_response', ... }
Ответ сохранен для polling: user-123-1234567890
```

## Альтернативные решения

### 1. WebSocket (Real-time)
```javascript
// Установить WebSocket соединение
const ws = new WebSocket('ws://localhost:3005/ws');
ws.onmessage = (event) => {
  const response = JSON.parse(event.data);
  // Обновить UI
};
```

### 2. Server-Sent Events (SSE)
```javascript
// Подписаться на события
const eventSource = new EventSource('/api/chat/events');
eventSource.onmessage = (event) => {
  const response = JSON.parse(event.data);
  // Обновить UI
};
```

### 3. База данных
- Сохранять ответы в БД
- Polling читает из БД
- Более надежно, но медленнее

## Рекомендации

1. **Используйте callback webhook** - самое простое решение
2. **Добавьте таймауты** - предотвратите зависшие запросы
3. **Логируйте все запросы** - для отладки
4. **Добавьте обработку ошибок** - graceful degradation
5. **Мониторьте производительность** - отслеживайте время ответа 