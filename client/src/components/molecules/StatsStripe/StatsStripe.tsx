import styles from './StatsStripe.module.css';

type StatsStripeProps = {
  level: number;
  xp: number;
  accuracyPercent: number;
  className?: string;
};

export const StatsStripe = ({
  level,
  xp,
  accuracyPercent,
  className = '',
}: StatsStripeProps) => {
  return (
    <div className={`${styles.statsStripe} ${className}`.trim()}>
      <div className={styles.statRow}>
        <div className={styles.statItem}>
          <div className={styles.statValue}>Гид</div>
          <div className={styles.statLabel}>Уровень {level}</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statValue}>{xp}</div>
          <div className={styles.statLabel}>XP</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statValue}>{accuracyPercent}%</div>
          <div className={styles.statLabel}>Точность</div>
        </div>
      </div>
    </div>
  );
};
