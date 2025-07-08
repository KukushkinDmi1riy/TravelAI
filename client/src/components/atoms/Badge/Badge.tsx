import React from 'react';
import { Badge as MantineBadge } from '@mantine/core';
import type { BadgeProps as MantineBadgeProps } from '@mantine/core';

interface BadgeProps
  extends Omit<MantineBadgeProps, 'variant' | 'size' | 'color'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...mantineProps
}) => {
  // Преобразуем наши варианты в Mantine цвета и варианты
  const getMantineColor = () => {
    switch (variant) {
      case 'primary':
        return 'travelPrimary';
      case 'secondary':
        return 'gray';
      case 'success':
        return 'green';
      case 'warning':
        return 'yellow';
      case 'info':
        return 'blue';
      default:
        return 'travelPrimary';
    }
  };

  const getMantineSize = (): MantineBadgeProps['size'] => {
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
    <MantineBadge
      color={getMantineColor()}
      size={getMantineSize()}
      className={className}
      {...mantineProps}
    >
      {children}
    </MantineBadge>
  );
};
