import {
  Button,
  Center,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from 'react-hook-form';

export interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

type LoginFormProps = {
  onBack: () => void;
  onLogin: (data: LoginData) => void;
};

const inputStyle = {
  color: 'black',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: 10,
  fontSize: 18,
  height: 48,
};

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
            Вход в систему
          </Title>
        </Center>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap="md">
            <TextInput
              label="Email"
              placeholder="your@email.com"
              type="email"
              size="lg"
              style={inputStyle}
              {...register('email', {
                required: 'Email обязателен',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Введите корректный email',
                },
              })}
              error={errors.email?.message}
              required
            />

            <PasswordInput
              label="Пароль"
              placeholder="Введите пароль"
              size="lg"
              style={inputStyle}
              {...register('password', {
                required: 'Пароль обязателен',
              })}
              error={errors.password?.message}
              required
            />

            <Checkbox label="Запомнить меня" {...register('rememberMe')} />

            <Button
              type="submit"
              size="xl"
              leftSection="🔑"
              variant="filled"
              color="blue"
              fullWidth
              mt="md"
              style={{ height: 56, fontSize: 20 }}
            >
              Войти
            </Button>
          </Stack>
        </form>

        <Text ta="center" size="sm" c="dimmed" mt="xl">
          Забыли пароль?{' '}
          <Text
            component="a"
            href="#"
            c="blue"
            style={{ textDecoration: 'none' }}
          >
            Восстановить
          </Text>
        </Text>
      </Paper>
    </Container>
  );
};

export default LoginForm;
