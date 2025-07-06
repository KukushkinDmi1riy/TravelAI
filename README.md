# TravelAI - Приложение для обучения

Это веб-приложение предназначено для обучения внутренних сотрудников.

## Структура проекта

Проект представляет собой монорепозиторий, управляемый с помощью [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

- `client/`: Фронтенд-приложение, созданное с помощью Vite и React.
- `server/`: Бэкенд-приложение на Express.js.

Все основные зависимости для разработки (ESLint, Prettier, Husky) установлены в корне проекта.

## Начало работы

### Требования

- [Node.js](https://nodejs.org/). Рекомендуемая версия указана в файле `.nvmrc`. Если у вас установлен [nvm](https://github.com/nvm-sh/nvm), просто выполните `nvm use` в корне проекта.
- [npm](https://www.npmjs.com/) (версия 7 или выше для поддержки workspaces)

### Установка

1.  Клонируйте репозиторий.
2.  Установите зависимости, выполнив в корне проекта:
    ```bash
    npm install
    ```

### Запуск в режиме разработки

Для одновременного запуска клиента и сервера выполните в корне проекта:

```bash
npm run dev
```

Эта команда использует `concurrently` для запуска обоих воркспейсов. Сервер будет доступен на `http://localhost:3001`, а клиент (Vite) обычно на `http://localhost:5173`.

## Процесс разработки

### Создание коммитов

Этот проект следует стандарту [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Перед созданием коммита `commitlint` проверит ваше сообщение.

**Примеры сообщений:**

- `feat: add user authentication feature`
- `fix: correct a typo in the main page`
- `docs: update README with setup instructions`
- `style: format code with Prettier`
- `refactor: simplify user creation logic`
- `test: add unit tests for the login component`
- `chore: update dependencies`

### Линтинг и форматирование

Перед каждым коммитом `lint-staged` и `Husky` автоматически запустят `Prettier` для форматирования и `ESLint` для проверки измененных файлов.

Вы также можете запустить эти инструменты вручную для всего проекта:

```bash
# Запустить ESLint
npm run lint

# Отформатировать весь проект с помощью Prettier
npm run format
```