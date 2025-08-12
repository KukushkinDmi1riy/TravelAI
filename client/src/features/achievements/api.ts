import { getCsrfToken } from '../auth/api';

export interface Achievement {
  id: string;
  code: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  achievedAt: string | null;
}

export interface AchievementsResponse {
  success: boolean;
  data: Achievement[];
  total: number;
  unlocked: number;
}

export interface AwardAchievementRequest {
  userId: string;
  achievementCode: string;
}

export interface AwardAchievementResponse {
  success: boolean;
  data: unknown;
  message: string;
}

// Получить достижения пользователя
export const getUserAchievements = async (
  userId: string,
): Promise<AchievementsResponse> => {
  const csrf = getCsrfToken();
  const response = await fetch(
    `http://localhost:3005/api/achievements/user/${userId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(csrf ? { 'x-xsrf-token': csrf } : {}),
      },
      credentials: 'include',
    },
  );

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Ошибка загрузки достижений');
  }

  return result;
};

// Получить все доступные достижения
export const getAllAchievements = async (): Promise<AchievementsResponse> => {
  const response = await fetch('http://localhost:3005/api/achievements/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Ошибка загрузки достижений');
  }

  return result;
};

// Наградить пользователя достижением
export const awardAchievement = async (
  data: AwardAchievementRequest,
): Promise<AwardAchievementResponse> => {
  const csrf = getCsrfToken();
  const response = await fetch('http://localhost:3005/api/achievements/award', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(csrf ? { 'x-xsrf-token': csrf } : {}),
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Ошибка награждения достижением');
  }

  return result;
};
