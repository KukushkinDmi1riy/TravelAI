import { Button } from '@mantine/core';
import type { ButtonProps } from '@mantine/core';

export interface AuthButtonProps extends ButtonProps {
  variant?: 'gradient' | 'outline';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const AuthButton = ({ variant = 'gradient', ...props }: AuthButtonProps) => {
  const isGradient = variant === 'gradient';

  return (
    <Button
      size="lg"
      fullWidth
      style={{
        height: 56,
        fontSize: 16,
        fontWeight: 600,
        borderRadius: 12,
        transition: 'all 0.2s ease',
        ...(isGradient
          ? {
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
            }
          : {
              borderColor: '#667eea',
              color: '#667eea',
              borderWidth: 2,
              background: 'transparent',
            }),
      }}
      styles={{
        root: {
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: isGradient
              ? '0 8px 25px rgba(102, 126, 234, 0.4)'
              : '0 8px 25px rgba(102, 126, 234, 0.2)',
            ...(isGradient ? {} : { background: 'rgba(102, 126, 234, 0.1)' }),
          },
        },
      }}
      variant={isGradient ? 'filled' : 'outline'}
      {...props}
    />
  );
};

export default AuthButton;
