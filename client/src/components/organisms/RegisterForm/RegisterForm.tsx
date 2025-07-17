import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useAppDispatch } from '../../../app/hooks';
import { AuthButton } from '../../atoms';
import { AuthFormHeader, RegisterFields } from '../../molecules';
import type { RegisterData } from '../../molecules/RegisterFields/RegisterFields';
import { registerUser } from '../../../features/auth/api';
import type { User } from '../../../features/auth/authSlice';
import { setToken, setUser } from '../../../features/auth/authSlice';
import { toast } from 'react-toastify';

export interface RegisterFormProps {
  onBack: () => void;
  onRegister?: (data: User) => void;
}

const RegisterForm = ({ onBack, onRegister }: RegisterFormProps) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterData>({
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
    mutationFn: async (data: RegisterData) => {
      // Не отправляем confirmPassword на сервер
      const rest = Object.fromEntries(
        Object.entries(data).filter(([key]) => key !== 'confirmPassword'),
      );
      return registerUser(rest as Omit<RegisterData, 'confirmPassword'>);
    },
    onSuccess: (data) => {
      dispatch(setUser(data.user));
      dispatch(setToken(data.token));
      if (onRegister) onRegister(data.user);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (data: RegisterData) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AuthFormHeader title="Регистрация" onBack={onBack} />

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <RegisterFields register={register} errors={errors} watch={watch} />

        <AuthButton
          type="submit"
          leftSection="👤"
          variant="gradient"
          mt={20}
          loading={mutation.status === 'pending'}
        >
          Зарегистрироваться
        </AuthButton>
      </form>
    </>
  );
};

export default RegisterForm;
