import { createTheme } from '@mantine/core';
import type { MantineColorsTuple } from '@mantine/core';

// Создаем кастомные цвета на основе наших Design Tokens
const travelPrimary: MantineColorsTuple = [
  '#f0f3ff',
  '#e5edff',
  '#d1dcff',
  '#b8cbff',
  '#9bb8ff',
  '#667eea', // наш основной цвет
  '#5a67d8',
  '#4c51bf',
  '#434190',
  '#3c366b',
];

const travelSecondary: MantineColorsTuple = [
  '#f8f4ff',
  '#ede5ff',
  '#ddc9ff',
  '#ccabff',
  '#b88dff',
  '#764ba2', // наш вторичный цвет
  '#6b4190',
  '#5d377e',
  '#4f2d6b',
  '#422359',
];

export const mantineTheme = createTheme({
  /** Основная цветовая схема */
  primaryColor: 'travelPrimary',

  /** Кастомные цвета */
  colors: {
    travelPrimary,
    travelSecondary,
  },

  /** Шрифты */
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  fontFamilyMonospace:
    'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, monospace',

  /** Размеры шрифтов (соответствуют нашим токенам) */
  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
  },

  /** Отступы (соответствуют нашим токенам) */
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
  },

  /** Радиусы (соответствуют нашим токенам) */
  radius: {
    xs: '0.375rem', // 6px
    sm: '0.5rem', // 8px
    md: '0.75rem', // 12px
    lg: '1rem', // 16px
    xl: '1.5rem', // 24px
  },

  /** Тени (соответствуют нашим токенам) */
  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
    md: '0 4px 16px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.15)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },

  /** Переопределение компонентов */
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
      styles: {
        root: {
          fontWeight: 500,
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
      },
    },

    Card: {
      defaultProps: {
        shadow: 'sm',
        radius: 'lg',
        padding: 'lg',
      },
      styles: {
        root: {
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },

    Badge: {
      defaultProps: {
        radius: 'sm',
      },
      styles: {
        root: {
          fontWeight: 500,
        },
      },
    },

    Avatar: {
      defaultProps: {
        radius: 'xl',
      },
    },

    Progress: {
      defaultProps: {
        radius: 'xl',
      },
      styles: {
        root: {
          backgroundColor: '#f3f4f6',
        },
      },
    },
  },

  /** Градиенты (наши фирменные) */
  other: {
    gradients: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      success: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
      warning: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      error: 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
      info: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    },
  },
});
