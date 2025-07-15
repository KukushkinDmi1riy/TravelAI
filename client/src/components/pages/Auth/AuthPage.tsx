import {
  Button,
  Center,
  Container,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';

type AuthPageProps = {
  onRegister: () => void;
  onLogin: () => void;
};

const AuthPage = ({ onRegister, onLogin }: AuthPageProps) => {
  return (
    <Container
      size="sm"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        withBorder
        style={{ width: '100%' }}
      >
        <Center mb="xl">
          <Title order={1} size="h2" ta="center">
            🧳 TravelAI
          </Title>
        </Center>

        <Text ta="center" c="dimmed" mb="xl">
          Добро пожаловать в TravelAI — ваш умный помощник для путешествий
        </Text>

        <Stack gap="md">
          <Button
            size="lg"
            leftSection="👤"
            onClick={onRegister}
            fullWidth
            color="blue"
          >
            Зарегистрироваться
          </Button>

          <Button
            size="lg"
            leftSection="🔑"
            onClick={onLogin}
            fullWidth
            variant="outline"
            color="blue"
          >
            Войти
          </Button>
        </Stack>

        <Text ta="center" size="sm" c="dimmed" mt="xl">
          Начните своё путешествие с нами
        </Text>
      </Paper>
    </Container>
  );
};

export default AuthPage;
