import { useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { logout, setToken, setUser } from '../features/auth/authSlice';
import { getCurrentUser } from '../features/auth/api';
import { getStoredToken, removeToken } from '../features/auth/tokenStorage';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initAuth = async () => {
      const token = getStoredToken();

      if (token) {
        try {
          dispatch(setToken(token));
          const user = await getCurrentUser(token);
          dispatch(setUser(user));
        } catch {
          // Если токен невалидный или истек, очищаем состояние
          removeToken();
          dispatch(logout());
        }
      }
    };

    initAuth();
  }, [dispatch]);

  return <>{children}</>;
};
