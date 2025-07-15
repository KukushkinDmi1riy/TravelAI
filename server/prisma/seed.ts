import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function up() {
  console.log('🌱 Наполняем базу данных...');

  // Создаем пользователей по отдельности для лучшего контроля
  const users = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      role: 'user',
      status: 'active',
      isApprovedByAdmin: true,
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      role: 'user',
      status: 'active',
      isApprovedByAdmin: true,
    },
    {
      firstName: 'Admin',
      lastName: 'Administrator',
      email: 'admin@example.com',
      role: 'admin',
      status: 'active',
      isApprovedByAdmin: true,
    },
    {
      firstName: 'Pending',
      lastName: 'User',
      email: 'pending@example.com',
      role: 'user',
      status: 'active',
      isApprovedByAdmin: false,
    },
  ];

  for (const userData of users) {
    const passwordHash = bcrypt.hashSync('password123', 12);
    await prisma.user.create({
      data: {
        ...userData,
        passwordHash,
      },
    });
    console.log(
      `👤 Создан: ${userData.firstName} ${userData.lastName} (${userData.email})`,
    );
  }
}

async function down() {
  console.log('🧹 Очищаем таблицу пользователей...');
  await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
  console.log('✅ Таблица очищена и счетчики сброшены');
}

async function main() {
  console.log('🚀 Запуск сидов...');

  try {
    // Сначала очищаем данные
    await down();

    // Затем наполняем
    await up();

    console.log('\n🔐 Пароль для всех пользователей: password123');
    console.log('🎉 Сиды выполнены успешно!');
  } catch (error) {
    console.error('❌ Ошибка при выполнении сидов:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('❌ Ошибка при заполнении базы данных:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
