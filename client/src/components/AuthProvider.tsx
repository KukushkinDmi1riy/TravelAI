import { useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { logout, setUser } from '../features/auth/authSlice';
import { getCurrentUser, refreshAccessToken } from '../features/auth/api';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const user = await getCurrentUser();
        dispatch(setUser(user));
      } catch {
        // Если access token невалидный или истёк, пробуем обновить через refresh token
        try {
          await refreshAccessToken();
          const user = await getCurrentUser();
          dispatch(setUser(user));
        } catch {
          dispatch(logout());
        }
      }
    };

    initAuth();
  }, [dispatch]);

  return <>{children}</>;
};
