import { useState, useCallback } from 'react';

interface PollingOptions {
  interval?: number;
  maxAttempts?: number;
  onSuccess?: (data: unknown) => void;
  onError?: (error: string) => void;
}

export const usePolling = (options: PollingOptions = {}) => {
  const { interval = 2000, maxAttempts = 10, onSuccess, onError } = options;

  const [isPolling, setIsPolling] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [data, setData] = useState<unknown | null>(null);

  const startPolling = useCallback(
    async (pollingFunction: () => Promise<unknown>) => {
      setIsPolling(true);
      setAttempts(0);
      setData(null);

      const poll = async () => {
        try {
          const result = await pollingFunction();

          // Проверяем, является ли это финальным ответом
          if (
            result &&
            result.aiResponse &&
            !result.aiResponse.includes('обрабатывается') &&
            !result.aiResponse.includes('ожидайте')
          ) {
            setData(result);
            setIsPolling(false);
            onSuccess?.(result);
            return;
          }

          setAttempts((prev) => {
            const newAttempts = prev + 1;
            if (newAttempts >= maxAttempts) {
              setIsPolling(false);
              onError?.('Превышено время ожидания ответа');
              return newAttempts;
            }
            return newAttempts;
          });

          // Продолжаем polling
          setTimeout(() => poll(), interval);
        } catch (error) {
          setIsPolling(false);
          onError?.(error instanceof Error ? error.message : 'Ошибка polling');
        }
      };

      poll();
    },
    [interval, maxAttempts, onSuccess, onError],
  );

  const stopPolling = useCallback(() => {
    setIsPolling(false);
    setAttempts(0);
  }, []);

  return {
    isPolling,
    attempts,
    data,
    startPolling,
    stopPolling,
  };
};
