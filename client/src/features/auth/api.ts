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
  token: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export async function registerUser(
  data: RegisterData,
): Promise<RegisterResponse> {
  const response = await fetch('http://localhost:3005/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result: ServerResponse<User> = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Ошибка регистрации');
  }

  if (!result.token || !result.user) {
    throw new Error('Некорректный ответ сервера');
  }

  return {
    user: result.user,
    token: result.token,
  };
}

export async function loginUser(data: {
  email: string;
  password: string;
}): Promise<LoginResponse> {
  const response = await fetch('http://localhost:3005/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result: ServerResponse<User> = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Ошибка входа');
  }

  if (!result.token || !result.user) {
    throw new Error('Некорректный ответ сервера');
  }

  return {
    user: result.user,
    token: result.token,
  };
}

export async function getCurrentUser(token: string): Promise<User> {
  const response = await fetch('http://localhost:3005/api/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
