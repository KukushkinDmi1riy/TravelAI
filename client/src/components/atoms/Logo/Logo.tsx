import { Box } from '@mantine/core';
import styles from './Logo.module.css';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon: string;
}

export const Logo = ({ size = 'md', className = '', icon }: LogoProps) => {
  return (
    <Box
      className={`${styles.logoContainer} ${styles[`logoContainer--${size}`]} ${className}`}
    >
      <span className={styles.logoIcon}>{icon}</span>
    </Box>
  );
};
