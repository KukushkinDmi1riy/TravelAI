import { Stack, Checkbox } from '@mantine/core';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { AuthInput, AuthPasswordInput } from '../../atoms';

export interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginFieldsProps {
  register: UseFormRegister<LoginData>;
  errors: FieldErrors<LoginData>;
}

const LoginFields = ({ register, errors }: LoginFieldsProps) => {
  return (
    <Stack gap={20}>
      <AuthInput
        label="Email"
        placeholder="your@email.com"
        type="email"
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

      <AuthPasswordInput
        label="Пароль"
        placeholder="Введите пароль"
        {...register('password', {
          required: 'Пароль обязателен',
        })}
        error={errors.password?.message}
        required
      />

      <Checkbox
        label="Запомнить меня"
        {...register('rememberMe')}
        styles={{
          label: {
            fontSize: 15,
            color: '#6b7280',
          },
          input: {
            '&:checked': {
              backgroundColor: '#667eea',
              borderColor: '#667eea',
            },
          },
        }}
      />
    </Stack>
  );
};

export default LoginFields;
