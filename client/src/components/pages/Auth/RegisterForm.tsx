import {
  Button,
  Center,
  Container,
  Group,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import type { RegisterData } from '../../../features/auth/api';
import { registerUser } from '../../../features/auth/api';
import type { User } from '../../../features/auth/authSlice';
import { setToken, setUser } from '../../../features/auth/authSlice';

interface RegisterFormProps {
  onBack: () => void;
  onRegister?: (data: User) => void;
}

type RegisterFormFields = RegisterData & { confirmPassword: string };

const RegisterForm = ({ onBack, onRegister }: RegisterFormProps) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormFields>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: RegisterFormFields) => {
      // Не отправляем confirmPassword на сервер
      const rest = Object.fromEntries(
        Object.entries(data).filter(([key]) => key !== 'confirmPassword'),
      );
      return registerUser(rest as RegisterData);
    },
    onSuccess: (data) => {
      dispatch(setUser(data.user));
      dispatch(setToken(data.token));
      if (onRegister) onRegister(data.user);
    },
    onError: (error: Error) => {
      alert(error.message);
    },
  });

  const onSubmit = (data: RegisterFormFields) => {
    mutation.mutate(data);
  };

  return (
    <Container
      size="xs"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <Paper
        shadow="md"
        p={40}
        radius="md"
        withBorder
        style={{ width: '100%', maxWidth: 500, minHeight: 650 }}
      >
        <Group mb="md">
          <Button variant="subtle" leftSection="←" onClick={onBack}>
            Назад
          </Button>
        </Group>

        <Center>
          <Title order={1} size="h2" ta="center">
            Регистрация
          </Title>
        </Center>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack gap="md">
            <TextInput
              label="Имя"
              placeholder="Введите ваше имя"
              autoComplete="given-name"
              style={{ color: 'black', fontSize: 18, height: 48 }}
              {...register('firstName', { required: 'Имя обязательно' })}
              error={errors.firstName?.message}
            />
            <TextInput
              label="Фамилия"
              placeholder="Введите вашу фамилию"
              autoComplete="family-name"
              style={{ color: 'black', fontSize: 18, height: 48 }}
              {...register('lastName', { required: 'Фамилия обязательна' })}
              error={errors.lastName?.message}
            />

            <TextInput
              label="Email"
              placeholder="your@email.com"
              type="email"
              autoComplete="email"
              style={{ color: 'black', fontSize: 18, height: 48 }}
              {...register('email', {
                required: 'Email обязателен',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Введите корректный email',
                },
              })}
              error={errors.email?.message}
            />

            <PasswordInput
              label="Пароль"
              placeholder="Введите пароль"
              autoComplete="new-password"
              style={{ color: 'black', fontSize: 18, height: 48 }}
              {...register('password', {
                required: 'Пароль обязателен',
                minLength: {
                  value: 6,
                  message: 'Минимум 6 символов',
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                  message:
                    'Пароль должен содержать заглавную, строчную букву и цифру',
                },
              })}
              error={errors.password?.message}
            />
            <PasswordInput
              label="Подтвердите пароль"
              placeholder="Повторите пароль"
              autoComplete="new-password"
              style={{ color: 'black', fontSize: 18, height: 48 }}
              {...register('confirmPassword', {
                required: 'Подтвердите пароль',
                validate: (value) => {
                  return value === watch('password') || 'Пароли не совпадают';
                },
              })}
              error={errors.confirmPassword?.message}
            />

            <Button
              type="submit"
              size="xl"
              leftSection="👤"
              fullWidth
              mt="md"
              loading={mutation.status === 'pending'}
              style={{ height: 56, fontSize: 20 }}
            >
              Зарегистрироваться
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterForm;
