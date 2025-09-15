import React from 'react';
import { Card as MantineCard } from '@mantine/core';
import type { CardProps as MantineCardProps } from '@mantine/core';

interface CardProps extends Omit<MantineCardProps, 'children'> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  onClick?: () => void;
}

export const Card = ({
  children,
  className = '',
  variant = 'default',
  onClick,
  ...mantineProps
}: CardProps) => {
  // Преобразуем варианты в Mantine пропсы
  const getMantineProps = () => {
    switch (variant) {
      case 'default':
        return { shadow: 'sm', withBorder: false };
      case 'elevated':
        return { shadow: 'md', withBorder: false };
      case 'outlined':
        return { shadow: 'none', withBorder: true };
      default:
        return { shadow: 'sm', withBorder: false };
    }
  };

  return (
    <MantineCard
      className={className}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      {...getMantineProps()}
      {...mantineProps}
    >
      {children}
    </MantineCard>
  );
};
