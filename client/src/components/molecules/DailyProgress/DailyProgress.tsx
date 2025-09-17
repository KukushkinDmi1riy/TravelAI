import { Progress } from '@mantine/core';
import styles from './DailyProgress.module.css';

type DailyProgressProps = {
  percent: number;
  title?: string;
  className?: string;
};

export const DailyProgress = ({
  percent,
  title = 'Дневной прогресс',
  className = '',
}: DailyProgressProps) => {
  return (
    <div className={`${styles.progressBlock} ${className}`.trim()}>
      <div className={styles.progressHeader}>{title}</div>
      <div className={styles.progressBarWrapper}>
        <Progress value={percent}></Progress>
        <div className={styles.progressPercent}>{percent}%</div>
      </div>
    </div>
  );
};
