import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function up() {
  console.log('🌱 Наполняем базу данных...');

  // 1. Создаем пользователей
  console.log('\n👥 Создаем пользователей...');
  const usersData = [
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

  const createdUsers: any[] = [];
  for (const userData of usersData) {
    const passwordHash = bcrypt.hashSync('password123', 12);
    const user = await prisma.user.create({
      data: {
        ...userData,
        passwordHash,
      },
    });
    createdUsers.push(user);
    console.log(
      `  ✓ ${userData.firstName} ${userData.lastName} (${userData.email})`,
    );
  }

  // 2. Создаем достижения
  console.log('\n🏆 Создаем достижения...');
  const achievementsData = [
    {
      code: 'FIRST_LOGIN',
      name: 'Первый вход',
      description: 'Добро пожаловать! Вы впервые вошли в систему',
      icon: '👋',
    },
    {
      code: 'WEEK_STREAK',
      name: 'Неделя подряд',
      description: 'Заходили в систему 7 дней подряд',
      icon: '🔥',
    },
    {
      code: 'HUNDRED_XP',
      name: 'Сотня очков',
      description: 'Заработали 100 очков опыта',
      icon: '💯',
    },
    {
      code: 'PERFECT_QUIZ',
      name: 'Идеальный тест',
      description: 'Прошли тест на 100%',
      icon: '⭐',
    },
    {
      code: 'TEAM_PLAYER',
      name: 'Командный игрок',
      description: 'Присоединились к команде',
      icon: '🤝',
    },
  ];

  const createdAchievements: any[] = [];
  for (const achievementData of achievementsData) {
    const achievement = await prisma.achievement.create({
      data: achievementData,
    });
    createdAchievements.push(achievement);
    console.log(`  ✓ ${achievementData.name} (${achievementData.code})`);
  }

  // 3. Создаем прогресс для пользователей
  console.log('\n📊 Создаем прогресс пользователей...');
  const progressData = [
    {
      userId: createdUsers[0].id,
      xp: 150,
      level: 2,
      streak: 3,
      accuracy: 0.85,
    }, // John
    {
      userId: createdUsers[1].id,
      xp: 320,
      level: 3,
      streak: 7,
      accuracy: 0.92,
    }, // Jane
    {
      userId: createdUsers[2].id,
      xp: 500,
      level: 5,
      streak: 14,
      accuracy: 0.98,
    }, // Admin
    { userId: createdUsers[3].id, xp: 50, level: 1, streak: 1, accuracy: 0.7 }, // Pending
  ];

  for (let i = 0; i < progressData.length; i++) {
    const progress = await prisma.userProgress.create({
      data: progressData[i],
    });
    console.log(
      `  ✓ ${createdUsers[i].firstName}: ${progress.xp} XP, уровень ${progress.level}`,
    );
  }

  // 4. Награждаем пользователей достижениями
  console.log('\n🎖️  Награждаем достижениями...');
  const userAchievements = [
    // John получает первый вход и сотню очков
    { userId: createdUsers[0].id, achievementId: createdAchievements[0].id },
    { userId: createdUsers[0].id, achievementId: createdAchievements[2].id },

    // Jane получает первый вход, неделю подряд и сотню очков
    { userId: createdUsers[1].id, achievementId: createdAchievements[0].id },
    { userId: createdUsers[1].id, achievementId: createdAchievements[1].id },
    { userId: createdUsers[1].id, achievementId: createdAchievements[2].id },

    // Admin получает все достижения
    { userId: createdUsers[2].id, achievementId: createdAchievements[0].id },
    { userId: createdUsers[2].id, achievementId: createdAchievements[1].id },
    { userId: createdUsers[2].id, achievementId: createdAchievements[2].id },
    { userId: createdUsers[2].id, achievementId: createdAchievements[3].id },
    { userId: createdUsers[2].id, achievementId: createdAchievements[4].id },

    // Pending получает только первый вход
    { userId: createdUsers[3].id, achievementId: createdAchievements[0].id },
  ];

  for (const userAchievement of userAchievements) {
    await prisma.userAchievement.create({
      data: userAchievement,
    });
  }

  // Подсчитываем и выводим статистику по достижениям
  for (const user of createdUsers) {
    const achievementCount = await prisma.userAchievement.count({
      where: { userId: user.id },
    });
    console.log(`  ✓ ${user.firstName}: ${achievementCount} достижений`);
  }
}

async function down() {
  console.log('🧹 Очищаем все таблицы...');

  // Очищаем в правильном порядке (сначала зависимые таблицы)
  try {
    await prisma.$executeRaw`TRUNCATE TABLE "UserAchievement" RESTART IDENTITY CASCADE`;
    console.log('  ✓ UserAchievement очищена');
  } catch (e) {
    console.log('  ⚠️ UserAchievement не найдена или уже пуста');
  }

  try {
    await prisma.$executeRaw`TRUNCATE TABLE "UserProgress" RESTART IDENTITY CASCADE`;
    console.log('  ✓ UserProgress очищена');
  } catch (e) {
    console.log('  ⚠️ UserProgress не найдена или уже пуста');
  }

  try {
    await prisma.$executeRaw`TRUNCATE TABLE "Achievement" RESTART IDENTITY CASCADE`;
    console.log('  ✓ Achievement очищена');
  } catch (e) {
    console.log('  ⚠️ Achievement не найдена или уже пуста');
  }

  try {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    console.log('  ✓ User очищена');
  } catch (e) {
    console.log('  ⚠️ User не найдена или уже пуста');
  }

  console.log('✅ Все таблицы очищены и счетчики сброшены');
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
