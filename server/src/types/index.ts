import { Request } from 'express';

// Основные типы пользователя
export interface User {
  id: string;
  email: string;
  passwordHash: string;
  isApprovedByAdmin: boolean;
  createdAt: Date;
}

export interface UserProfile {
  id: string;
  email: string;
  isApprovedByAdmin: boolean;
  createdAt: Date;
}

// Типы для API запросов
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: UserProfile;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  user?: UserProfile;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any[];
}

export interface UserApprovalRequest {
  isApproved: boolean;
}

// Типы для middleware
export interface AuthenticatedRequest extends Request {
  user?: UserProfile;
}

// Типы ошибок
export interface ValidationError {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}
