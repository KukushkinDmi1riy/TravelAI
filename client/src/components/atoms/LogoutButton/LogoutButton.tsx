import React from 'react';
import { Button } from '../Button/Button';

interface LogoutButtonProps {
  onLogout: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({
  onLogout,
  variant = 'gradient',
  size = 'sm',
  className = '',
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onLogout}
      className={className}
    >
      Выйти
    </Button>
  );
};
