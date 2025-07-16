import type { User } from './authSlice';

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface RegisterResponse {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
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
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Ошибка регистрации');
  }
  return response.json();
}

export async function loginUser(data: {
  email: string;
  password: string;
}): Promise<{ user: User; token: string }> {
  const response = await fetch('http://localhost:3005/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Ошибка входа');
  }
  return response.json();
}
