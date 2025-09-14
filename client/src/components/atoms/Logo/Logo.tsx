import React from 'react';
import { Box } from '@mantine/core';
import styles from './Logo.module.css';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  icon,
}) => {
  return (
    <Box
      className={`${styles.logoContainer} ${styles[`logoContainer--${size}`]} ${className}`}
    >
      <span className={styles.logoIcon}>{icon}</span>
    </Box>
  );
};
