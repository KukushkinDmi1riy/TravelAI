import { Stack } from '@mantine/core';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { AuthInput, AuthPasswordInput } from '../../atoms';

export interface LoginData {
  email: string;
  password: string;
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
    </Stack>
  );
};

export default LoginFields;
