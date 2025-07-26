import React from 'react';
import styles from './AchievementsGrid.module.css';

const achievements = [
  { icon: '🎯', title: 'Снайпер продаж', unlocked: true },
  { icon: '🚀', title: 'Скоростной турагент', unlocked: true },
  { icon: '🌍', title: 'Знаток Турции', unlocked: true },
  { icon: '🔥', title: '7 дней подряд', unlocked: true },
  { icon: '🎓', title: 'Отличник квизов', unlocked: true },
  { icon: '💎', title: 'Знаток luxury', unlocked: false },
];

export const AchievementsGrid: React.FC = () => (
  <div className={styles.achievementsWrapper}>
    <div className={styles.achievementsTitle}>
      <span role="img" aria-label="medal">
        🏅
      </span>{' '}
      Ваши достижения
    </div>
    <div className={styles.achievementsGrid}>
      {achievements.map((ach, idx) => (
        <div
          key={idx}
          className={
            styles.achievement + (!ach.unlocked ? ' ' + styles.locked : '')
          }
        >
          <div className={styles.achievementIcon}>{ach.icon}</div>
          <div className={styles.achievementTitle}>{ach.title}</div>
        </div>
      ))}
    </div>
  </div>
);

export default AchievementsGrid;
