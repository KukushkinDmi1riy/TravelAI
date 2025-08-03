import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  fetchUserAchievements,
  selectAchievements,
  selectAchievementsLoading,
  selectAchievementsError,
} from '../../../features/achievements/achievementsSlice';
import { selectUser } from '../../../features/auth/authSlice';
import { LoadingSpinner } from '../../molecules/LoadingSpinner/LoadingSpinner';
import { Button } from '../../atoms/Button/Button';
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
        <div className={styles.achievementsTitle}>Ваши достижения</div>
        <div className={styles.centeredContent}>
          <LoadingSpinner
            size="md"
            title="🏆 Загрузка достижений"
            subtitle="Получаем ваши награды..."
            fullScreen={false}
            background="transparent"
            color="#667eea"
            animation="fade"
            duration={300}
          />
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
        <div className={styles.centeredContent}>
          <div className={styles.errorContainer}>
            <div className={styles.errorIcon}>⚠️</div>
            <div className={styles.errorText}>Ошибка загрузки достижений</div>
            <div className={styles.errorDetails}>{error}</div>
            <Button
              variant="primary"
              size="md"
              onClick={() =>
                user?.id && dispatch(fetchUserAchievements(user.id))
              }
            >
              Попробовать снова
            </Button>
          </div>
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
