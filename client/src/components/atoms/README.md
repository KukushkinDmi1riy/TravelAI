# Atoms - Mantine Integration

Наши атомы теперь используют **Mantine** как основу, но предоставляют унифицированный API.

## 🎯 Подход

### Wrapper Pattern
Мы оборачиваем Mantine компоненты в наши атомы:
- ✅ Единый API во всем приложении
- ✅ Кастомизация под наш дизайн
- ✅ Гибкость Mantine + наши стандарты
- ✅ Простая миграция

## 🔧 Реализация

### Button
```tsx
// Наш API
<Button variant="primary" size="md">Click me</Button>

// Преобразуется в Mantine
<MantineButton variant="filled" size="md">Click me</MantineButton>
```

**Маппинг вариантов:**
- `primary` → `filled`
- `secondary` → `light` 
- `outline` → `outline`
- `ghost` → `subtle`

### Badge  
```tsx
// Наш API
<Badge variant="success" size="sm">Active</Badge>

// Преобразуется в Mantine
<MantineBadge color="green" size="sm">Active</MantineBadge>
```

**Маппинг цветов:**
- `primary` → `travelPrimary` (кастомный цвет)
- `secondary` → `gray`
- `success` → `green`
- `warning` → `yellow`
- `info` → `blue`

### Avatar
```tsx
// Наш API
<Avatar size="lg" initials="АК" />

// Преобразуется в Mantine
<MantineAvatar size={64}>АК</MantineAvatar>
```

**Маппинг размеров:**
- `sm` → `32px`
- `md` → `48px`
- `lg` → `64px`
- `xl` → `80px`

### ProgressBar
```tsx
// Наш API
<ProgressBar value={75} max={100} color="primary" showLabel />

// Преобразуется в Mantine
<Group>
  <Progress value={75} color="travelPrimary" />
  <Text>75%</Text>
</Group>
```

## 🎨 Тема Mantine

Наша тема настроена в `src/theme/mantine.ts`:

```tsx
export const mantineTheme = createTheme({
  primaryColor: 'travelPrimary',
  colors: {
    travelPrimary: ['#f0f3ff', ..., '#667eea', ..., '#3c366b'],
    travelSecondary: ['#f8f4ff', ..., '#764ba2', ..., '#422359'],
  },
  // Соответствие нашим Design Tokens
  fontSizes: { xs: '0.75rem', sm: '0.875rem', md: '1rem', ... },
  spacing: { xs: '0.25rem', sm: '0.5rem', md: '1rem', ... },
  radius: { xs: '0.375rem', sm: '0.5rem', md: '0.75rem', ... },
});
```

## ✨ Преимущества

### 1. **Лучшая доступность**
Mantine компоненты имеют встроенную поддержку A11Y

### 2. **Богатый функционал**
- Встроенные хуки (`useHover`, `useClickOutside`)
- Анимации и переходы
- Темы и цветовые схемы

### 3. **TypeScript поддержка**
Полная типизация из коробки

### 4. **Производительность**
Оптимизированные компоненты и ленивая загрузка

### 5. **Совместимость**
Полная обратная совместимость с нашим старым API

## 🔄 Расширение функционала

Любой компонент может получить дополнительные Mantine пропсы:

```tsx
<Button 
  variant="primary"           // наш API
  leftSection={<IconPlus />}  // Mantine API
  loading={isLoading}         // Mantine API
  loaderProps={{ type: 'dots' }} // Mantine API
>
  Создать
</Button>
```

## 📦 Зависимости

```json
{
  "@mantine/core": "^7.x.x",
  "@mantine/hooks": "^7.x.x", 
  "@emotion/react": "^11.x.x"
}
```

## 🎯 Следующие шаги

1. ✅ Button, Badge, Avatar, ProgressBar, Card
2. 🔄 Icon (Tabler Icons интеграция)  
3. 📝 Input, TextArea, Select (новые атомы)
4. 📊 Table, Modal, Drawer (новые организмы)
5. 🎨 Notification system

Эта интеграция дает нам лучшее из двух миров: гибкость Mantine + наша архитектура! 🚀 