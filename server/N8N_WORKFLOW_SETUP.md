# Настройка n8n Workflow для AI агента

## Проблема

Сейчас n8n workflow возвращает `"Workflow was started"` вместо реального ответа AI агента. Это происходит потому, что workflow запускается асинхронно.

## Решения

### Вариант 1: Немедленный ответ (Рекомендуется)

Настройте n8n workflow так, чтобы он возвращал ответ AI агента сразу:

1. **Webhook Trigger** - получает данные от TravelAI
2. **AI Agent Node** - обрабатывает сообщение
3. **Respond to Webhook** - возвращает ответ AI агента

**Структура ответа:**
```json
{
  "response": "Ответ от AI агента",
  "suggestions": ["Предложение 1", "Предложение 2"],
  "metadata": {
    "processingTime": 1500,
    "confidence": 0.95
  }
}
```

### Вариант 2: Callback через WebSocket

1. **Webhook Trigger** - получает данные
2. **AI Agent Node** - обрабатывает сообщение
3. **HTTP Request** - отправляет ответ обратно на TravelAI сервер

**Настройка callback:**
```json
{
  "method": "POST",
  "url": "http://localhost:3005/api/chat/ai-webhook",
  "body": {
    "type": "ai_response",
    "data": {
      "userId": "{{ $json.userId }}",
      "response": "Ответ от AI агента",
      "suggestions": ["Предложение 1", "Предложение 2"]
    }
  }
}
```

### Вариант 3: Сохранение в базу данных

1. **Webhook Trigger** - получает данные
2. **AI Agent Node** - обрабатывает сообщение
3. **Database Node** - сохраняет ответ
4. **HTTP Request** - уведомляет о готовности ответа

## Рекомендуемая структура n8n Workflow

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

### Шаг 2: AI Agent Processing
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

### Шаг 3: Response Formatting
```json
{
  "name": "Format Response",
  "type": "function",
  "code": `
    const aiResponse = $input.all()[0].json;
    const userMessage = $input.all()[1].json;
    
    return {
      response: aiResponse.content,
      suggestions: [
        "Показать достопримечательности",
        "Рекомендовать отели",
        "Составить маршрут"
      ],
      metadata: {
        userId: userMessage.userId,
        processingTime: Date.now() - userMessage.timestamp,
        messageLength: userMessage.userMessage.length
      }
    };
  `
}
```

### Шаг 4: Respond to Webhook
```json
{
  "name": "Send Response",
  "type": "respondToWebhook",
  "responseBody": "={{ $json }}"
}
```

## Ожидаемые форматы данных

### Входящие данные (от TravelAI):
```json
{
  "userId": "user-123",
  "userMessage": "Привет! Помоги спланировать путешествие в Париж",
  "conversationHistory": [
    {
      "id": "msg-1",
      "text": "Привет!",
      "isAI": true,
      "timestamp": "2024-01-15T10:30:00Z"
    }
  ],
  "context": {
    "userProfile": {
      "firstName": "Иван",
      "lastName": "Иванов"
    },
    "travelPreferences": {
      "budget": "medium",
      "duration": "1 week"
    }
  }
}
```

### Исходящие данные (к TravelAI):
```json
{
  "response": "Привет! Я помогу вам спланировать путешествие в Париж. Вот что я могу предложить...",
  "suggestions": [
    "Показать достопримечательности",
    "Рекомендовать отели",
    "Составить маршрут"
  ],
  "metadata": {
    "processingTime": 1500,
    "confidence": 0.95
  }
}
```

## Тестирование

### Тестовый запрос:
```bash
curl -X POST https://n8n.gulnazbakinova.com/webhook/travel_bd_test \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "test-user",
    "userMessage": "Привет! Помоги спланировать путешествие",
    "conversationHistory": [],
    "context": {
      "userProfile": {
        "firstName": "Тест",
        "lastName": "Пользователь"
      }
    }
  }'
```

### Ожидаемый ответ:
```json
{
  "response": "Привет! Я помогу вам спланировать путешествие...",
  "suggestions": ["Достопримечательности", "Отели", "Маршрут"],
  "metadata": {
    "processingTime": 1200,
    "confidence": 0.95
  }
}
```

## Отладка

### Логи в n8n:
- Проверьте логи каждого узла в workflow
- Убедитесь, что AI Agent получает правильные данные
- Проверьте формат ответа

### Логи в TravelAI сервере:
```bash
# В консоли сервера должны появиться:
Отправка сообщения AI агенту: { userId: 'user-123', messageLength: 45, ... }
Ответ от AI агента: { response: 'Привет! Я помогу...', ... }
```

## Оптимизация

1. **Кэширование** - сохраняйте частые запросы
2. **Ограничение скорости** - добавьте rate limiting
3. **Мониторинг** - отслеживайте время ответа и ошибки
4. **Масштабирование** - используйте несколько AI агентов при высокой нагрузке 