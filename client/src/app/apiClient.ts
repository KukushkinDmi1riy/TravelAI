const BASE_URL = 'http://localhost:3005/api';

// Функция для получения токена
const getAuthToken = (): string | null => {
  return localStorage.getItem('token');
};

// Функция для создания заголовков
const createHeaders = (): HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const token = getAuthToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

// Функция для обработки ошибок
const handleResponse = async (response: Response) => {
  if (response.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/auth';
    throw new Error('Unauthorized');
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// API клиент с методами
export const apiClient = {
  get: async (url: string) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: createHeaders(),
      credentials: 'include',
    });
    return handleResponse(response);
  },

  post: async (url: string, data?: unknown) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: createHeaders(),
      credentials: 'include',
      body: data ? JSON.stringify(data) : undefined,
    });
    return handleResponse(response);
  },

  put: async (url: string, data?: unknown) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: createHeaders(),
      credentials: 'include',
      body: data ? JSON.stringify(data) : undefined,
    });
    return handleResponse(response);
  },

  delete: async (url: string) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: createHeaders(),
      credentials: 'include',
    });
    return handleResponse(response);
  },
};
