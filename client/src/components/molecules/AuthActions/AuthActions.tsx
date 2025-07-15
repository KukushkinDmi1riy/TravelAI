import { Stack } from '@mantine/core';
import { AuthButton } from '../../atoms';

export interface AuthActionsProps {
  onRegister: () => void;
  onLogin: () => void;
}

const AuthActions = ({ onRegister, onLogin }: AuthActionsProps) => {
  return (
    <Stack gap={16}>
      <AuthButton leftSection="👤" onClick={onRegister} variant="gradient">
        Зарегистрироваться
      </AuthButton>

      <AuthButton leftSection="🔑" onClick={onLogin} variant="outline">
        Войти
      </AuthButton>
    </Stack>
  );
};

export default AuthActions;
