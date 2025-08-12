# Интеграция чата с AI агентом в клиентской части

## Обзор

Клиентская часть интегрирована с серверным API для работы с AI агентом через вебхук. Пользователи могут отправлять сообщения и получать ответы от AI агента в реальном времени.

## Компоненты

### 1. ChatDialog
Основной компонент чата, расположенный в `src/components/molecules/ChatDialog/ChatDialog.tsx`

**Функциональность:**
- Отображение сообщений пользователя и AI агента
- Отправка сообщений на сервер
- Автопрокрутка к последнему сообщению
- Индикатор загрузки во время обработки
- Загрузка истории чата при открытии

**Использование:**
```tsx
import { ChatDialog } from './components/molecules/ChatDialog/ChatDialog';

// В компоненте
const [chatOpened, setChatOpened] = useState(false);

<ChatDialog 
  opened={chatOpened} 
  onClose={() => setChatOpened(false)} 
/>
```

### 2. ChatService
Сервис для работы с API чата, расположенный в `src/services/chatService.ts`

**Основные функции:**
- `sendMessageToAI()` - отправка сообщения AI агенту
- `getChatHistory()` - получение истории чата
- `getAIAgentStatus()` - проверка статуса интеграции

## API Endpoints

### Отправка сообщения
```
POST /api/chat/send-message
```

**Заголовки:**
- `Content-Type: application/json`
- Cookies с токеном аутентификации

**Тело запроса:**
```json
{
  "message": "Привет! Помоги спланировать путешествие",
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

**Ответ:**
```json
{
  "success": true,
  "message": "Сообщение обработано",
  "aiResponse": "Привет! Я помогу вам спланировать путешествие...",
  "suggestions": [
    "Показать достопримечательности",
    "Рекомендовать отели"
  ]
}
```

### Получение истории чата
```
GET /api/chat/history
```

**Ответ:**
```json
{
  "success": true,
  "message": "История чата получена",
  "data": {
    "userId": "user-123",
    "messages": [
      {
        "id": "msg-1",
        "text": "Привет!",
        "isAI": true,
        "timestamp": "2024-01-15T10:30:00Z"
      }
    ]
  }
}
```

## Аутентификация и безопасность

### Аутентификация
Клиентская часть использует httpOnly cookies для аутентификации:
- Токен устанавливается сервером при входе пользователя
- Cookies автоматически отправляются с каждым запросом
- Используется `credentials: 'include'` в fetch запросах

### CSRF защита
Для защиты от CSRF атак используется двойная отправка токена:
- CSRF токен устанавливается сервером в cookie `XSRF-TOKEN`
- Клиент отправляет токен в заголовке `x-xsrf-token`
- Хук `useCsrfToken` автоматически получает и управляет CSRF токеном

**Компоненты для работы с CSRF:**
- `useCsrfToken` - хук для получения CSRF токена
- `CsrfTest` - компонент для тестирования CSRF защиты

## Обработка ошибок

### Типичные ошибки:
1. **401 Unauthorized** - пользователь не аутентифицирован
2. **400 Bad Request** - неверный формат сообщения
3. **500 Internal Server Error** - ошибка сервера

### Обработка в компоненте:
- Ошибки отображаются как сообщения AI агента
- Пользователь видит понятное сообщение об ошибке
- Логирование ошибок в консоль для отладки

## Тестирование

### Компонент ChatTest
Для тестирования интеграции создан компонент `ChatTest`:
```tsx
import { ChatTest } from './components/molecules/ChatDialog/ChatTest';

// Использование
<ChatTest />
```

**Функциональность:**
- Проверка статуса интеграции с AI агентом
- Отображение детальной информации о соединении
- Обработка ошибок подключения

## Стилизация

Компонент использует CSS модули (`ChatDialog.module.css`):
- Градиентный заголовок
- Разные стили для сообщений пользователя и AI
- Адаптивный дизайн
- Анимации и переходы

## Расширение функциональности

### Добавление новых типов сообщений:
```tsx
interface Message {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: string;
  // Добавьте новые поля
  type?: 'text' | 'image' | 'suggestion';
  metadata?: any;
}
```

### Интеграция с контекстом пользователя:
```tsx
// В ChatDialog
const user = useSelector(selectUser);

const context = {
  userProfile: {
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
  },
  // Добавьте другие данные
};
```

### Добавление предложений:
```tsx
// Отображение предложений от AI агента
{response.suggestions && (
  <div className={styles.suggestions}>
    {response.suggestions.map((suggestion, index) => (
      <Button key={index} onClick={() => handleSuggestion(suggestion)}>
        {suggestion}
      </Button>
    ))}
  </div>
)}
```

## Производительность

### Оптимизации:
- Автопрокрутка только при новых сообщениях
- Отключение ввода во время загрузки
- Кэширование истории чата
- Ограничение размера истории сообщений

### Мониторинг:
- Логирование времени ответа AI агента
- Отслеживание ошибок соединения
- Метрики использования чата 