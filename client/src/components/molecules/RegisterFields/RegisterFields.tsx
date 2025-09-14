import { Stack } from '@mantine/core';
import type {
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
} from 'react-hook-form';
import { AuthInput, AuthPasswordInput } from '../../atoms';

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export interface RegisterFieldsProps {
  register: UseFormRegister<RegisterData>;
  errors: FieldErrors<RegisterData>;
  watch: UseFormWatch<RegisterData>;
}

const RegisterFields = ({ register, errors, watch }: RegisterFieldsProps) => {
  return (
    <Stack gap={18}>
      <AuthInput
        label="Имя"
        placeholder="Введите ваше имя"
        autoComplete="given-name"
        {...register('firstName', { required: 'Имя обязательно' })}
        error={errors.firstName?.message}
      />
      <AuthInput
        label="Фамилия"
        placeholder="Введите вашу фамилию"
        autoComplete="family-name"
        {...register('lastName', { required: 'Фамилия обязательна' })}
        error={errors.lastName?.message}
      />
      <AuthInput
        label="Email"
        placeholder="your@email.com"
        type="email"
        autoComplete="email"
        {...register('email', {
          required: 'Email обязателен',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Введите корректный email',
          },
        })}
        error={errors.email?.message}
      />

      <AuthPasswordInput
        label="Пароль"
        placeholder="Введите пароль"
        autoComplete="new-password"
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

      <AuthPasswordInput
        label="Подтвердите пароль"
        placeholder="Повторите пароль"
        autoComplete="new-password"
        {...register('confirmPassword', {
          required: 'Подтвердите пароль',
          validate: (value) => {
            return value === watch('password') || 'Пароли не совпадают';
          },
        })}
        error={errors.confirmPassword?.message}
      />
    </Stack>
  );
};

export default RegisterFields;
