import React from 'react';
import { Progress, Group, Text } from '@mantine/core';
import type { ProgressProps as MantineProgressProps } from '@mantine/core';

interface ProgressBarProps
  extends Omit<MantineProgressProps, 'value' | 'size' | 'color'> {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'info';
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar = ({
  value,
  max = 100,
  size = 'md',
  color = 'primary',
  showLabel = false,
  className = '',
  ...mantineProps
}: ProgressBarProps) => {
  const percentage = Math.min((value / max) * 100, 100);

  // Преобразуем размеры
  const getMantineSize = (): MantineProgressProps['size'] => {
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

  // Преобразуем цвета
  const getMantineColor = () => {
    switch (color) {
      case 'primary':
        return 'travelPrimary';
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

  if (showLabel) {
    return (
      <Group gap="sm" className={className}>
        <Progress
          value={percentage}
          size={getMantineSize()}
          color={getMantineColor()}
          style={{ flex: 1 }}
          {...mantineProps}
        />
        <Text size="sm" c="dimmed" style={{ minWidth: '3ch' }}>
          {Math.round(percentage)}%
        </Text>
      </Group>
    );
  }

  return (
    <Progress
      value={percentage}
      size={getMantineSize()}
      color={getMantineColor()}
      className={className}
      {...mantineProps}
    />
  );
};
