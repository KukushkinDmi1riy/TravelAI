/*
  Warnings:

  - Added the required column `firstName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `users` table without a default value. This is not possible if the table is not empty.

*/

-- Шаг 1: Добавляем поля как nullable
ALTER TABLE "users" ADD COLUMN "firstName" TEXT,
ADD COLUMN "lastName" TEXT,
ADD COLUMN "role" TEXT NOT NULL DEFAULT 'user',
ADD COLUMN "status" TEXT NOT NULL DEFAULT 'active';

-- Шаг 2: Заполняем значения по умолчанию для существующих записей
UPDATE "users" SET 
  "firstName" = CASE 
    WHEN email = 'admin@example.com' THEN 'Admin'
    WHEN email = 'user@example.com' THEN 'User'
    WHEN email = 'pending@example.com' THEN 'Pending'
    ELSE 'Unknown'
  END,
  "lastName" = CASE 
    WHEN email = 'admin@example.com' THEN 'Administrator'
    WHEN email = 'user@example.com' THEN 'Example'
    WHEN email = 'pending@example.com' THEN 'User'
    ELSE 'User'
  END
WHERE "firstName" IS NULL OR "lastName" IS NULL;

-- Шаг 3: Делаем поля обязательными
ALTER TABLE "users" ALTER COLUMN "firstName" SET NOT NULL;
ALTER TABLE "users" ALTER COLUMN "lastName" SET NOT NULL;
