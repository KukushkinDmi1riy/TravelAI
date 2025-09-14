import { Group, Button, Center } from '@mantine/core';
import { AuthTitle } from '../../atoms';

export interface AuthFormHeaderProps {
  title: string;
  onBack: () => void;
  showBackButton?: boolean;
}

const AuthFormHeader = ({
  title,
  onBack,
  showBackButton = true,
}: AuthFormHeaderProps) => {
  return (
    <>
      {showBackButton && (
        <Group mb={24}>
          <Button
            variant="subtle"
            leftSection="←"
            onClick={onBack}
            style={{
              color: '#667eea',
              fontWeight: 500,
              padding: '8px 16px',
              borderRadius: 8,
            }}
            styles={{
              root: {
                '&:hover': {
                  background: 'rgba(102, 126, 234, 0.1)',
                },
              },
            }}
          >
            Назад
          </Button>
        </Group>
      )}

      <Center mb={32}>
        <AuthTitle>{title}</AuthTitle>
      </Center>
    </>
  );
};

export default AuthFormHeader;
