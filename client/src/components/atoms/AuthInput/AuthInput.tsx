import { TextInput } from '@mantine/core';
import type { TextInputProps } from '@mantine/core';

export type AuthInputProps = TextInputProps;

const AuthInput = (props: AuthInputProps) => {
  return (
    <TextInput
      size="lg"
      styles={{
        label: {
          fontSize: 16,
          fontWeight: 500,
          color: '#374151',
          marginBottom: 8,
        },
        input: {
          height: 52,
          fontSize: 16,
          borderRadius: 12,
          border: '2px solid #e5e7eb',
          backgroundColor: '#ffffff',
          transition: 'all 0.2s ease',
          '&:focus': {
            borderColor: '#667eea',
            boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
          },
        },
        error: {
          fontSize: 14,
          marginTop: 4,
        },
      }}
      {...props}
    />
  );
};

export default AuthInput;
