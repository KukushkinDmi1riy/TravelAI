import { Text } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { AuthButton } from '../../atoms';
import { AuthFormHeader, LoginFields } from '../../molecules';
import type { LoginData } from '../../molecules/LoginFields/LoginFields';

export interface LoginFormProps {
  onBack: () => void;
  onLogin: (data: LoginData) => void;
}

const LoginForm = ({ onBack, onLogin }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginData) => {
    onLogin(data);
  };

  return (
    <>
      <AuthFormHeader title="Вход в систему" onBack={onBack} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginFields register={register} errors={errors} />

        <AuthButton type="submit" leftSection="🔑" variant="gradient" mt={16}>
          Войти
        </AuthButton>
      </form>

      <Text ta="center" size="14px" c="dimmed" mt={32}>
        Забыли пароль?{' '}
        <Text
          component="a"
          href="#"
          style={{
            color: '#667eea',
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          Восстановить
        </Text>
      </Text>
    </>
  );
};

export default LoginForm;
