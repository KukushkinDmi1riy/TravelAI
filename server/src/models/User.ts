import bcrypt from 'bcryptjs';
import type { User, UserProfile } from '../types/index';

// Моковые данные пользователей (в будущем заменим на Prisma)
let users: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    passwordHash:
      '$2a$12$B48MjXMkbKXQhCEp6Lq9NO8jT7hPqhslmtPzcmptiSmvEXH9m4jA.', // password123
    isApprovedByAdmin: true,
    createdAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    email: 'user@example.com',
    passwordHash:
      '$2a$12$B48MjXMkbKXQhCEp6Lq9NO8jT7hPqhslmtPzcmptiSmvEXH9m4jA.', // password123
    isApprovedByAdmin: true,
    createdAt: new Date('2024-01-02'),
  },
];

export class UserModel {
  static async findByEmail(email: string): Promise<User | undefined> {
    return users.find((user) => user.email === email);
  }

  static async findById(id: string): Promise<User | undefined> {
    return users.find((user) => user.id === id);
  }

  static async create(userData: {
    email: string;
    password: string;
  }): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 12);

    const newUser: User = {
      id: (users.length + 1).toString(),
      email: userData.email,
      passwordHash: hashedPassword,
      isApprovedByAdmin: false, // По умолчанию требует одобрения админа
      createdAt: new Date(),
    };

    users.push(newUser);
    return newUser;
  }

  static async validatePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  static async getAll(): Promise<UserProfile[]> {
    return users.map((user) => ({
      id: user.id,
      email: user.email,
      isApprovedByAdmin: user.isApprovedByAdmin,
      createdAt: user.createdAt,
    }));
  }

  static async updateApprovalStatus(
    userId: string,
    isApproved: boolean,
  ): Promise<User | null> {
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      users[userIndex].isApprovedByAdmin = isApproved;
      return users[userIndex];
    }
    return null;
  }
}

export default UserModel;
