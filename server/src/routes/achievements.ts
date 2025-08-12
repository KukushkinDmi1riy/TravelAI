import { Router, Request } from 'express';
import { PrismaClient } from '../generated/prisma';
import { authenticateToken } from '../middleware/auth';

// Расширяем тип Request для включения пользователя
interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}

const router = Router();
const prisma = new PrismaClient();

// Получить все достижения пользователя
router.get(
  '/user/:userId',
  authenticateToken,
  async (req: AuthenticatedRequest, res) => {
    try {
      const { userId } = req.params;

      // Проверяем, что пользователь запрашивает свои достижения
      if (!req.user || req.user.id !== userId) {
        return res.status(403).json({ error: 'Доступ запрещен' });
      }

      const userAchievements = await prisma.userAchievement.findMany({
        where: {
          userId: userId,
        },
        include: {
          achievement: true,
        },
        orderBy: {
          achievedAt: 'desc',
        },
      });

      // Получаем все доступные достижения для сравнения
      const allAchievements = await prisma.achievement.findMany({
        orderBy: {
          name: 'asc',
        },
      });

      // Создаем полный список достижений с флагом unlocked
      const achievementsWithStatus = allAchievements.map((achievement) => {
        const userAchievement = userAchievements.find(
          (ua) => ua.achievementId === achievement.id,
        );

        return {
          id: achievement.id,
          code: achievement.code,
          name: achievement.name,
          description: achievement.description,
          icon: achievement.icon,
          unlocked: !!userAchievement,
          achievedAt: userAchievement?.achievedAt || null,
        };
      });

      res.json({
        success: true,
        data: achievementsWithStatus,
        total: achievementsWithStatus.length,
        unlocked: userAchievements.length,
      });
    } catch (error) {
      console.error('Ошибка при получении достижений:', error);
      res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
  },
);

// Получить все доступные достижения (без привязки к пользователю)
router.get('/all', async (req, res) => {
  try {
    const achievements = await prisma.achievement.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    res.json({
      success: true,
      data: achievements,
      total: achievements.length,
    });
  } catch (error) {
    console.error('Ошибка при получении всех достижений:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

// Наградить пользователя достижением
router.post(
  '/award',
  authenticateToken,
  async (req: AuthenticatedRequest, res) => {
    try {
      const { userId, achievementCode } = req.body;

      // Проверяем, что пользователь награждает себя
      if (!req.user || req.user.id !== userId) {
        return res.status(403).json({ error: 'Доступ запрещен' });
      }

      // Находим достижение по коду
      const achievement = await prisma.achievement.findUnique({
        where: {
          code: achievementCode,
        },
      });

      if (!achievement) {
        return res.status(404).json({ error: 'Достижение не найдено' });
      }

      // Проверяем, не получено ли уже это достижение
      const existingAchievement = await prisma.userAchievement.findFirst({
        where: {
          userId: userId,
          achievementId: achievement.id,
        },
      });

      if (existingAchievement) {
        return res.status(400).json({ error: 'Достижение уже получено' });
      }

      // Награждаем пользователя
      const userAchievement = await prisma.userAchievement.create({
        data: {
          userId: userId,
          achievementId: achievement.id,
        },
        include: {
          achievement: true,
        },
      });

      res.json({
        success: true,
        data: userAchievement,
        message: `Поздравляем! Вы получили достижение "${achievement.name}"`,
      });
    } catch (error) {
      console.error('Ошибка при награждении достижением:', error);
      res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
  },
);

export default router;
