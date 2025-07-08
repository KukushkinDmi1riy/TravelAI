import React from 'react';
import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps as MantineButtonProps } from '@mantine/core';

interface ButtonProps extends Omit<MantineButtonProps, 'variant' | 'size'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  className = '',
  ...mantineProps
}) => {
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
      default:
        return 'filled';
    }
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
      className={className}
      {...mantineProps}
    >
      {children}
    </MantineButton>
  );
};
