import styles from './LessonCard.module.css';

type LessonStatus = 'in_progress' | 'new' | 'soon';

type LessonCardProps = {
  flag: string;
  title: string;
  minutes: number;
  lessonsCount: number;
  status?: LessonStatus;
  actionLabel: string;
  disabled?: boolean;
  onAction?: () => void;
};

const statusLabel: Record<LessonStatus, string> = {
  in_progress: 'В процессе',
  new: 'Новое',
  soon: 'Скоро',
};

export const LessonCard = ({
  flag,
  title,
  minutes,
  lessonsCount,
  status,
  actionLabel,
  disabled,
  onAction,
}: LessonCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.topArea}>
        {status && <div className={styles.badge}>{statusLabel[status]}</div>}
        <div className={styles.flag}>{flag}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.metaRow}>
          <span className={styles.metaIcon}>⏱️</span>
          <span className={styles.metaText}>{minutes} мин</span>
          <span className={styles.dot}>•</span>
          <span className={styles.metaText}>{lessonsCount} уроков</span>
        </div>
        <button
          className={styles.actionBtn}
          onClick={onAction}
          disabled={disabled}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};
