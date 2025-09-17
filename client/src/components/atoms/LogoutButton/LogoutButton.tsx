import { Button } from '../Button/Button';

interface LogoutButtonProps {
  onLogout: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LogoutButton = ({
  onLogout,
  variant = 'gradient',
  size = 'sm',
  className = '',
}: LogoutButtonProps) => {
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
