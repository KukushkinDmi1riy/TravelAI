import bcrypt from 'bcryptjs';
import { PrismaClient } from '../generated/prisma';
import type { User, UserProfile } from '../types/index';

const prisma = new PrismaClient();

export class UserModel {
  static async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  }

  static async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  static async create(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: string;
  }): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 12);

    const newUser = await prisma.user.create({
      data: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        passwordHash: hashedPassword,
        role: userData.role || 'user',
        isApprovedByAdmin: false, // По умолчанию требует одобрения админа
      },
    });

    return newUser;
  }

  static async validatePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  static async getAll(): Promise<UserProfile[]> {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        role: true,
        status: true,
        email: true,
        isApprovedByAdmin: true,
        createdAt: true,
      },
    });
    return users;
  }

  static async updateApprovalStatus(
    userId: string,
    isApproved: boolean,
  ): Promise<User | null> {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { isApprovedByAdmin: isApproved },
    });
    return updatedUser;
  }

  // Функция для корректного закрытия соединения с базой данных
  static async disconnect(): Promise<void> {
    await prisma.$disconnect();
  }
}

export default UserModel;
