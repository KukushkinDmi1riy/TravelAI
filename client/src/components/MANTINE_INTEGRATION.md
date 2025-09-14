# 🚀 Mantine + Atomic Design Integration

## ✅ Успешно интегрировано!

Библиотека **Mantine** теперь полностью интегрирована в наш Atomic Design паттерн.

## 🎯 Что было сделано

### 1. **Установка зависимостей**
```bash
npm install @mantine/core @mantine/hooks @emotion/react
```

### 2. **Настройка темы**
- ✅ Создана `src/theme/mantine.ts` 
- ✅ Кастомные цвета: `travelPrimary`, `travelSecondary`
- ✅ Соответствие нашим Design Tokens
- ✅ Переопределение компонентов

### 3. **Обновленные атомы**
- ✅ `Button` → `MantineButton` wrapper
- ✅ `Badge` → `MantineBadge` wrapper  
- ✅ `Avatar` → `MantineAvatar` wrapper
- ✅ `ProgressBar` → `Progress` + `Group` + `Text`

### 4. **Обновленные молекулы**
- ✅ `Card` → `MantineCard` wrapper

## 🔧 Архитектура

### Wrapper Pattern
```tsx
// Наш компонент
export const Button: React.FC<ButtonProps> = (props) => {
  // Преобразование API
  const mantineProps = transformToMantine(props);
  
  // Используем Mantine компонент  
  return <MantineButton {...mantineProps} />;
};
```

### Преимущества:
- ✅ **Единый API** - наш интерфейс остается неизменным
- ✅ **Гибкость** - доступ к полному Mantine API через `...mantineProps`
- ✅ **Производительность** - оптимизированные Mantine компоненты
- ✅ **A11Y** - встроенная доступность
- ✅ **TypeScript** - полная типизация

## 🎨 Использование

### Базовый API (наш)
```tsx
<Button variant="primary" size="md">
  Создать
</Button>

<Badge variant="success" size="sm">
  Активен
</Badge>

<Avatar size="lg" initials="АК" />

<ProgressBar value={75} max={100} showLabel />
```

### Расширенный API (Mantine)
```tsx
<Button 
  variant="primary"              // наш API
  leftSection={<IconPlus />}     // Mantine API
  loading={isLoading}            // Mantine API
  loaderProps={{ type: 'dots' }} // Mantine API
>
  Создать с иконкой
</Button>
```

## 🎨 Тема

### Цвета
- **Primary**: `#667eea` → `#764ba2` (градиент)
- **Secondary**: оттенки серого
- **Success**: зеленые оттенки
- **Warning**: желтые оттенки  
- **Info**: синие оттенки

### Размеры
- **Font**: xs(12px), sm(14px), md(16px), lg(18px), xl(20px)
- **Spacing**: xs(4px), sm(8px), md(16px), lg(24px), xl(32px)
- **Radius**: xs(6px), sm(8px), md(12px), lg(16px), xl(24px)

## 📦 Структура

```
src/
├── theme/
│   └── mantine.ts          # Тема Mantine
├── components/
│   ├── atoms/
│   │   ├── Button/         # Mantine Button wrapper
│   │   ├── Badge/          # Mantine Badge wrapper
│   │   ├── Avatar/         # Mantine Avatar wrapper
│   │   └── ProgressBar/    # Mantine Progress wrapper
│   └── molecules/
│       └── Card/           # Mantine Card wrapper
```

## 🔄 Миграция

### До (CSS Modules)
```tsx
<button className={`btn btn--primary btn--md`}>
  Click me
</button>
```

### После (Mantine)
```tsx
<Button variant="primary" size="md">
  Click me  
</Button>
```

**Результат**: Тот же API, но лучшая производительность, доступность и функционал!

## 🎯 Следующие шаги

### 1. **Новые атомы** (готовы к созданию)
- `Input` (TextInput wrapper)
- `Select` (Select wrapper)
- `Checkbox` (Checkbox wrapper)
- `Switch` (Switch wrapper)

### 2. **Новые молекулы**
- `SearchInput` (Input + Icon)
- `FormField` (Input + Label + Error)

### 3. **Новые организмы**
- `DataTable` (Table wrapper)
- `Modal` (Modal wrapper)
- `Navigation` (Navigation wrapper)

## 🚀 Готово к использованию!

Наша Atomic Design архитектура теперь работает на основе **Mantine**, обеспечивая:

- 🎨 **Красивый дизайн** из коробки
- ♿ **Доступность** по стандартам
- 🚀 **Производительность** промышленного уровня
- 🔧 **Гибкость** для любых задач
- 📱 **Responsive** адаптивность
- 🌙 **Dark mode** поддержка (готов к включению)

**Можете начинать использовать обновленные компоненты прямо сейчас!** 🎉 