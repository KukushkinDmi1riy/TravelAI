import type { User } from './authSlice';

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface ServerResponse<T> {
  success: boolean;
  message: string;
  token?: string;
  user?: T;
}

export interface RegisterResponse {
  user: User;
}

export interface LoginResponse {
  user: User;
}

export async function registerUser(
  data: RegisterData,
): Promise<RegisterResponse> {
  const csrf = getCsrfToken();
  const response = await fetch('http://localhost:3005/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(csrf ? { 'x-xsrf-token': csrf } : {}),
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  const result: ServerResponse<User> = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Ошибка регистрации');
  }

  if (!result.user) {
    throw new Error('Некорректный ответ сервера');
  }

  return {
    user: result.user,
  };
}

export async function loginUser(data: {
  email: string;
  password: string;
}): Promise<LoginResponse> {
  const csrf = getCsrfToken();
  const response = await fetch('http://localhost:3005/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(csrf ? { 'x-xsrf-token': csrf } : {}),
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  const result: ServerResponse<User> = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Ошибка входа');
  }

  if (!result.user) {
    throw new Error('Некорректный ответ сервера');
  }

  return {
    user: result.user,
  };
}

export async function getCurrentUser(): Promise<User> {
  const response = await fetch('http://localhost:3005/api/auth/me', {
    credentials: 'include',
  });

  const result: ServerResponse<User> = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Failed to get user data');
  }

  if (!result.user) {
    throw new Error('Некорректный ответ сервера');
  }

  return result.user;
}

export async function refreshAccessToken(): Promise<void> {
  const csrf = getCsrfToken();
  const response = await fetch('http://localhost:3005/api/auth/refresh', {
    method: 'POST',
    headers: {
      ...(csrf ? { 'x-xsrf-token': csrf } : {}),
    },
    credentials: 'include',
  });
  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Не удалось обновить токен');
  }
}

export async function logoutUser(): Promise<void> {
  const csrf = getCsrfToken();
  const response = await fetch('http://localhost:3005/api/auth/logout', {
    method: 'POST',
    headers: {
      ...(csrf ? { 'x-xsrf-token': csrf } : {}),
    },
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('Ошибка выхода');
  }
}

// Получить CSRF-токен из cookie
export function getCsrfToken(): string | undefined {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith('XSRF-TOKEN='))
    ?.split('=')[1];
}

// Получить/обновить CSRF-токен
export async function ensureCsrfToken(): Promise<void> {
  await fetch('http://localhost:3005/api/auth/csrf', {
    method: 'GET',
    credentials: 'include',
  });
}
