import { useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import {
  logout,
  setUser,
  setAuthLoading,
  setInitialized,
} from '../features/auth/authSlice';
import {
  getCurrentUser,
  refreshAccessToken,
  ensureCsrfToken,
} from '../features/auth/api';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initAuth = async () => {
      dispatch(setAuthLoading(true));

      try {
        await ensureCsrfToken();

        const user = await getCurrentUser();
        dispatch(setUser(user));
      } catch {
        try {
          await refreshAccessToken();
          const user = await getCurrentUser();
          dispatch(setUser(user));
        } catch {
          dispatch(logout());
        }
      } finally {
        dispatch(setInitialized());
      }
    };

    initAuth();
  }, [dispatch]);

  return <>{children}</>;
};
