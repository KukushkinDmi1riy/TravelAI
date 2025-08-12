import { useState, useEffect } from 'react';

export const useCsrfToken = () => {
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        // Делаем GET запрос к любому endpoint для получения CSRF токена
        const response = await fetch('http://localhost:3005/api/auth/csrf', {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          // CSRF токен будет установлен в cookies сервером
          // Теперь можем его получить из cookies
          const cookies = document.cookie.split(';');
          const csrfCookie = cookies.find((cookie) =>
            cookie.trim().startsWith('XSRF-TOKEN='),
          );

          if (csrfCookie) {
            const token = csrfCookie.split('=')[1];
            setCsrfToken(token);
          }
        }
      } catch (error) {
        console.error('Ошибка получения CSRF токена:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCsrfToken();
  }, []);

  return { csrfToken, isLoading };
};
