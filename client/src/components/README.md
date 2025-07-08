# TravelPro AI Components - Atomic Design

Полностью переструктурированная UI библиотека в соответствии с методологией **Atomic Design**.

## 🏗️ Структура

```
client/src/components/
├── atoms/                  # ⚛️ Базовые элементы
│   ├── Button/            
│   ├── Badge/
│   ├── Avatar/
│   ├── Icon/
│   ├── ProgressBar/
│   └── index.ts
│
├── molecules/             # 🔬 Комбинации атомов  
│   ├── Card/
│   ├── Achievement/
│   └── index.ts
│
├── organisms/             # 🦠 Сложные композиты
│   ├── UserProfile/
│   ├── ActivityCard/
│   └── index.ts
│
├── templates/             # 📄 Макеты страниц
│   ├── DashboardTemplate/
│   └── index.ts
│
├── pages/                 # 📱 Готовые страницы
│   ├── Dashboard/
│   └── index.ts
│
├── tokens/                # 🎨 Дизайн токены
│   ├── colors.css
│   ├── spacing.css
│   ├── typography.css
│   ├── shadows.css
│   └── index.ts
│
└── index.ts               # 📦 Главный экспорт
```

## 📊 Уровни Atomic Design

### ⚛️ Atoms (Атомы)
**Назначение**: Базовые неделимые элементы UI
**Примеры**: Button, Badge, Avatar, Icon, ProgressBar

```tsx
import { Button, Avatar } from '@/components/atoms';

<Button variant="primary" size="md">Нажать</Button>
<Avatar initials="АК" size="lg" />
```

### 🔬 Molecules (Молекулы)  
**Назначение**: Группы атомов, выполняющие конкретную функцию
**Примеры**: Card, Achievement

```tsx
import { Card, Achievement } from '@/components/molecules';

<Card variant="elevated">
  Содержимое карточки
</Card>

<Achievement 
  title="Чемпион" 
  icon={<StarIcon />}
  unlocked={true} 
/>
```

### 🦠 Organisms (Организмы)
**Назначение**: Сложные компоненты с бизнес-логикой
**Примеры**: UserProfile, ActivityCard

```tsx
import { UserProfile, ActivityCard } from '@/components/organisms';

<UserProfile
  name="Пользователь"
  level={3}
  xp={975}
  maxXp={1500}
  stats={[...]}
/>

<ActivityCard
  title="Урок"
  description="Описание урока"
  icon={<BookIcon />}
  buttonText="Начать"
/>
```

### 📄 Templates (Шаблоны)
**Назначение**: Макеты страниц без данных
**Примеры**: DashboardTemplate

```tsx
import { DashboardTemplate } from '@/components/templates';

<DashboardTemplate
  userName="Пользователь"
  userLevel={3}
  userXp={975}
  userMaxXp={1500}
  userStats={[...]}
  activities={[...]}
  achievements={[...]}
/>
```

### 📱 Pages (Страницы)
**Назначение**: Готовые страницы с реальными данными
**Примеры**: Dashboard

```tsx
import { Dashboard } from '@/components/pages';

<Dashboard />
```

## 🎨 Design Tokens

Система дизайна через CSS переменные:

```css
/* Цвета */
--color-primary-500: #667eea;
--color-gray-100: #f3f4f6;

/* Отступы */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */

/* Радиусы */
--radius-lg: 0.75rem; /* 12px */
--radius-xl: 1rem;    /* 16px */

/* Типографика */
--text-base: 1rem;    /* 16px */
--font-semibold: 600;

/* Тени */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

## 🚀 Использование

### Импорт по уровням
```tsx
// Атомы
import { Button, Badge } from '@/components/atoms';

// Молекулы  
import { Card } from '@/components/molecules';

// Организмы
import { UserProfile } from '@/components/organisms';

// Шаблоны
import { DashboardTemplate } from '@/components/templates';

// Страницы
import { Dashboard } from '@/components/pages';
```

### Единый импорт (рекомендуется)
```tsx
import { 
  Button, Badge,           // atoms
  Card, Achievement,       // molecules  
  UserProfile,            // organisms
  DashboardTemplate,      // templates
  Dashboard              // pages
} from '@/components';
```

### Legacy импорт (для совместимости)
```tsx
// Старый способ все еще работает
import { Button, Card, UserProfile } from '@/components';
```

## 🔄 Миграция с ui/

Старая структура автоматически поддерживается через legacy экспорты:

```tsx
// ✅ Работает (старый способ)
import { Button, UserProfile } from '@/components/ui';

// ✅ Работает (новый способ)  
import { Button, UserProfile } from '@/components';

// ✅ Работает (по уровням)
import { Button } from '@/components/atoms';
import { UserProfile } from '@/components/organisms';
```

## 📋 Принципы Atomic Design

### 1. **Однонаправленная зависимость**
- Atoms не зависят ни от чего
- Molecules зависят только от Atoms
- Organisms зависят от Atoms и Molecules
- Templates зависят от всего ниже
- Pages зависят от Templates

### 2. **Переиспользуемость** 
- Atoms максимально переиспользуемы
- Molecules решают конкретные задачи
- Organisms содержат бизнес-логику
- Templates определяют макеты
- Pages содержат данные

### 3. **Тестируемость**
- Atoms: Unit тесты
- Molecules: Integration тесты
- Organisms: Component тесты
- Templates: Layout тесты
- Pages: E2E тесты

## 🛠️ Разработка

### Добавление нового компонента

1. **Определите уровень**:
   - Atom: базовый элемент (кнопка, инпут)
   - Molecule: группа атомов (форма поиска)
   - Organism: сложный блок (навигация)

2. **Создайте структуру**:
```bash
# Для атома
mkdir src/components/atoms/NewAtom
touch src/components/atoms/NewAtom/NewAtom.tsx
touch src/components/atoms/NewAtom/NewAtom.module.css

# Добавьте в index.ts
echo "export { NewAtom } from './NewAtom/NewAtom';" >> src/components/atoms/index.ts
```

3. **Следуйте паттерну**:
```tsx
// NewAtom.tsx
import React from 'react';
import './NewAtom.module.css';

interface NewAtomProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary';
  className?: string;
}

export const NewAtom: React.FC<NewAtomProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  return (
    <div className={`new-atom new-atom--${variant} ${className}`}>
      {children}
    </div>
  );
};
```

### Использование Design Tokens

```css
/* NewAtom.module.css */
.new-atom {
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  background: var(--color-gray-100);
  color: var(--color-gray-800);
  font-size: var(--text-base);
  transition: var(--transition-normal);
}

.new-atom--primary {
  background: var(--gradient-primary);
  color: white;
}
```

## 📖 Дополнительные ресурсы

- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Storybook для документации компонентов](https://storybook.js.org/)
- [Design Tokens спецификация](https://design-tokens.github.io/community-group/)

Эта структура обеспечивает максимальную переиспользуемость, поддерживаемость и масштабируемость для TravelPro AI! 🚀 