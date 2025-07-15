import { Center, Text, Box } from '@mantine/core';
import { AuthTitle } from '../../atoms';
import { AuthActions } from '../../molecules';

export interface AuthWelcomeProps {
  onRegister: () => void;
  onLogin: () => void;
}

const AuthWelcome = ({ onRegister, onLogin }: AuthWelcomeProps) => {
  return (
    <>
      <Center mb={32}>
        <Box style={{ textAlign: 'center' }}>
          <Text
            size="60px"
            style={{
              lineHeight: 1,
              marginBottom: 16,
            }}
          >
            🧳
          </Text>
          <AuthTitle
            size="32px"
            style={{
              marginBottom: 8,
            }}
          >
            TravelAI
          </AuthTitle>
        </Box>
      </Center>

      <Text
        ta="center"
        size="16px"
        c="dimmed"
        mb={40}
        style={{
          lineHeight: 1.5,
          color: '#6b7280',
        }}
      >
        Добро пожаловать в TravelAI — ваш умный помощник для путешествий
      </Text>

      <AuthActions onRegister={onRegister} onLogin={onLogin} />

      <Text
        ta="center"
        size="14px"
        c="dimmed"
        mt={32}
        style={{
          color: '#9ca3af',
        }}
      >
        Начните своё путешествие с нами
      </Text>
    </>
  );
};

export default AuthWelcome;
