import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  fetchUserAchievements,
  selectAchievements,
  selectAchievementsLoading,
  selectAchievementsError,
} from '../../../features/achievements/achievementsSlice';
import { selectUser } from '../../../features/auth/authSlice';
import styles from './AchievementsGrid.module.css';

export const AchievementsGrid: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const achievements = useAppSelector(selectAchievements);
  const loading = useAppSelector(selectAchievementsLoading);
  const error = useAppSelector(selectAchievementsError);

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchUserAchievements(user.id));
    }
  }, [dispatch, user?.id]);

  if (loading) {
    return (
      <div className={styles.achievementsWrapper}>
        <div className={styles.achievementsTitle}>
          <span role="img" aria-label="medal">
            🏅
          </span>{' '}
          Ваши достижения
        </div>
        <div className={styles.achievementsGrid}>
          <div>Загрузка достижений...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.achievementsWrapper}>
        <div className={styles.achievementsTitle}>
          <span role="img" aria-label="medal">
            🏅
          </span>{' '}
          Ваши достижения
        </div>
        <div className={styles.achievementsGrid}>
          <div>Ошибка загрузки: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.achievementsWrapper}>
      <div className={styles.achievementsTitle}>
        <span role="img" aria-label="medal">
          🏅
        </span>{' '}
        Ваши достижения
      </div>
      <div className={styles.achievementsGrid}>
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={
              styles.achievement +
              (!achievement.unlocked ? ' ' + styles.locked : '')
            }
          >
            <div className={styles.achievementIcon}>{achievement.icon}</div>
            <div className={styles.achievementTitle}>{achievement.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsGrid;
