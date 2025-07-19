import { Text } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useAppDispatch } from '../../../app/hooks';
import { setUser, type User } from '../../../features/auth/authSlice';
import { loginUser } from '../../../features/auth/api';
import { AuthButton } from '../../atoms';
import { AuthFormHeader, LoginFields } from '../../molecules';

export interface LoginFormProps {
  onBack: () => void;
}

interface LoginData {
  email: string;
  password: string;
}

const LoginForm = ({ onBack }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const mutation = useMutation<{ user: User }, Error, LoginData>({
    mutationFn: loginUser,
    onSuccess: (data) => {
      dispatch(setUser(data.user));
    },
    onError: (error: Error) => {
      alert(error.message);
    },
  });

  const onSubmit = (data: LoginData) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AuthFormHeader title="Вход в систему" onBack={onBack} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginFields register={register} errors={errors} />

        <AuthButton
          type="submit"
          leftSection="🔑"
          variant="gradient"
          mt={16}
          loading={mutation.status === 'pending'}
        >
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
