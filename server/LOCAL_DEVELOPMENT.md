# Локальная разработка с AI агентом

## Проблема

n8n, размещенный на внешнем сервере, не может отправить callback на `localhost`. Это создает проблемы для локальной разработки.

## Решения

### Вариант 1: Mock AI Agent (Рекомендуется для разработки)

Используйте встроенный mock AI агент для локальной разработки:

```bash
# Запустите сервер в режиме разработки
NODE_ENV=development npm run dev
```

**Mock AI агент автоматически:**
- Имитирует обработку AI агента
- Отправляет ответы через callback
- Поддерживает polling систему
- Работает без внешних зависимостей

### Вариант 2: ngrok (Для тестирования с реальным n8n)

Создайте публичный туннель к вашему локальному серверу:

```bash
# Установите ngrok
npm install -g ngrok

# Создайте туннель
ngrok http 3005
```

Получите URL вида: `https://abc123.ngrok.io`

**Используйте этот URL в n8n callback:**
```json
{
  "url": "https://abc123.ngrok.io/api/chat/ai-webhook"
}
```

### Вариант 3: localtunnel

Альтернатива ngrok:

```bash
# Установите localtunnel
npm install -g localtunnel

# Создайте туннель
lt --port 3005
```

## Настройка окружения

### Переменные окружения
```bash
# .env
NODE_ENV=development
PORT=3005
```

### Запуск в разных режимах
```bash
# Режим разработки (использует mock AI)
NODE_ENV=development npm run dev

# Режим продакшена (использует n8n)
NODE_ENV=production npm run dev
```

## Тестирование

### Тест mock AI агента
```bash
curl -X POST http://localhost:3005/api/mock-ai \
  -H "Content-Type: application/json" \
  -d '{
    "userMessage": "Привет! Помоги спланировать путешествие в Париж",
    "requestId": "test-123",
    "callbackUrl": "http://localhost:3005/api/chat/ai-webhook"
  }'
```

### Тест полного цикла
```bash
# 1. Отправьте сообщение
curl -X POST http://localhost:3005/api/chat/send-message \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Привет! Помоги спланировать путешествие",
    "conversationHistory": [],
    "context": {
      "userProfile": {
        "firstName": "Тест",
        "lastName": "Пользователь"
      }
    }
  }'

# 2. Получите requestId из ответа и используйте для polling
curl -X GET http://localhost:3005/api/chat/poll-response/{requestId}
```

## Логи и отладка

### Логи mock AI агента
```bash
# В консоли сервера должны появиться:
Mock AI Agent получил запрос: { userMessage: '...', requestId: '...' }
Mock AI Agent отправил ответ на callback: { status: 200, requestId: '...' }
```

### Проверка callback
```bash
# В логах сервера должны появиться:
Получен вебхук от AI агента: { type: 'ai_response', requestId: '...' }
Ответ сохранен для polling: test-123
```

## Особенности mock AI агента

### Поддерживаемые запросы
- **"Привет"** - приветствие и общие предложения
- **"Париж"** - информация о Париже
- **"Бюджет"** - планирование бюджета
- **"Виза"** - информация о визах
- **Другие** - общие рекомендации

### Время обработки
- **Случайное время**: 1-4 секунды
- **Имитация реальной обработки** AI агента

### Формат ответов
```json
{
  "type": "ai_response",
  "requestId": "test-123",
  "data": {
    "aiResponse": "Текст ответа от AI агента",
    "suggestions": ["Предложение 1", "Предложение 2"]
  }
}
```

## Переход к продакшену

### 1. Настройте n8n workflow
Следуйте инструкциям в `N8N_CALLBACK_SETUP.md`

### 2. Используйте ngrok для тестирования
```bash
ngrok http 3005
# Используйте полученный URL в n8n callback
```

### 3. Измените переменную окружения
```bash
NODE_ENV=production npm run dev
```

## Альтернативные решения

### 1. Docker с n8n локально
```bash
# Запустите n8n локально
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

### 2. Локальный AI сервис
```bash
# Запустите локальный AI сервис
python -m http.server 8000
# Настройте callback на localhost:8000
```

### 3. WebSocket для real-time
```javascript
// Установите WebSocket соединение
const ws = new WebSocket('ws://localhost:3005/ws');
ws.onmessage = (event) => {
  const response = JSON.parse(event.data);
  // Обновить UI
};
```

## Рекомендации

1. **Используйте mock AI для разработки** - быстро и надежно
2. **Тестируйте с ngrok** - перед деплоем
3. **Логируйте все запросы** - для отладки
4. **Используйте разные окружения** - dev/prod
5. **Мониторьте производительность** - время ответа 