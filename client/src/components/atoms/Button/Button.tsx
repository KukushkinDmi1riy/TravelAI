import React from 'react';
import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps as MantineButtonProps } from '@mantine/core';
import styles from './Button.module.css';

interface ButtonProps extends Omit<MantineButtonProps, 'variant' | 'size'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  className = '',
  ...mantineProps
}: ButtonProps) => {
  // Преобразуем наши варианты в Mantine варианты
  const getMantineVariant = (): MantineButtonProps['variant'] => {
    switch (variant) {
      case 'primary':
        return 'filled';
      case 'secondary':
        return 'light';
      case 'outline':
        return 'outline';
      case 'ghost':
        return 'subtle';
      case 'gradient':
        return 'filled'; // Используем filled как базу для градиента
      default:
        return 'filled';
    }
  };

  // Получаем кастомный класс для градиента
  const getCustomClassName = (): string => {
    const baseClass = className;
    const gradientClass = variant === 'gradient' ? styles.buttonGradient : '';
    return `${baseClass} ${gradientClass}`.trim();
  };

  // Преобразуем размеры
  const getMantineSize = (): MantineButtonProps['size'] => {
    switch (size) {
      case 'sm':
        return 'sm';
      case 'md':
        return 'md';
      case 'lg':
        return 'lg';
      default:
        return 'md';
    }
  };

  return (
    <MantineButton
      variant={getMantineVariant()}
      size={getMantineSize()}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      className={getCustomClassName()}
      {...mantineProps}
    >
      {children}
    </MantineButton>
  );
};
