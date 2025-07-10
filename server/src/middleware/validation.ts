import { body, ValidationChain } from 'express-validator';

// Валидация для регистрации
export const validateRegister: ValidationChain[] = [
  body('email')
    .isEmail()
    .withMessage('Введите корректный email')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Пароль должен содержать минимум 6 символов')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage(
      'Пароль должен содержать минимум одну заглавную букву, одну строчную букву и одну цифру',
    ),
];

// Валидация для входа
export const validateLogin: ValidationChain[] = [
  body('email')
    .isEmail()
    .withMessage('Введите корректный email')
    .normalizeEmail(),
  body('password').notEmpty().withMessage('Пароль обязателен'),
];

// Валидация для одобрения пользователя
export const validateApproval: ValidationChain[] = [
  body('isApproved')
    .isBoolean()
    .withMessage('isApproved должно быть булевым значением'),
];
