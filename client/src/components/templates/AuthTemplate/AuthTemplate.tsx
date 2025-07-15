import { Box, Container, Paper } from '@mantine/core';
import type { ReactNode } from 'react';

export interface AuthTemplateProps {
  children: ReactNode;
}

const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <Box
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Container size="sm">
        <Paper
          shadow="xl"
          p={48}
          radius="xl"
          withBorder={false}
          style={{
            width: 450,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
};

export default AuthTemplate;
