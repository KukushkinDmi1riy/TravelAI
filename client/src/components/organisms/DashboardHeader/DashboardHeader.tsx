import { useState } from 'react';
import { Text } from '@mantine/core';
import { NotificationPreview } from '../../molecules/NotificationPreview/NotificationPreview';
import { StatsStripe } from '../../molecules/StatsStripe/StatsStripe';
import { DailyProgress } from '../../molecules/DailyProgress/DailyProgress';
import styles from './DashboardHeader.module.css';

type DashboardHeaderProps = {
  level: number;
  xp: number;
  accuracyPercent: number;
  dailyProgressPercent: number;
  onBack: () => void;
};

export const DashboardHeader = ({
  level,
  xp,
  accuracyPercent,
  dailyProgressPercent,
  onBack,
}: DashboardHeaderProps) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className={`${styles.headerBg} ${styles.headerFull}`.trim()}>
      <div className={styles.headerPaper}>
        <div className={styles.headerRow}>
          <Text fw={800} fz={28} className={styles.brand}>
            ✈️ TravelPro AI
          </Text>
          <div className={styles.headerActions}>
            <div
              className={styles.iconButton}
              aria-label="back"
              onClick={onBack}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === 'Enter' || e.key === ' ') && onBack()
              }
            >
              ←
            </div>
            <div
              className={styles.bell}
              aria-label="notifications"
              onClick={() => setShowNotifications((v) => !v)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === 'Enter' || e.key === ' ') &&
                setShowNotifications((v) => !v)
              }
            >
              🔔
            </div>
          </div>
        </div>

        <div className={styles.notifDock}>
          <div className={styles.notifCenter}>
            <NotificationPreview
              open={showNotifications}
              onClose={() => setShowNotifications(false)}
              title="Новый челлендж!"
              text="Пройди квиз по Египту и получи +100 XP"
              icon="🎯"
              autoHideMs={3000}
            />
          </div>
        </div>

        <StatsStripe level={level} xp={xp} accuracyPercent={accuracyPercent} />

        <DailyProgress percent={dailyProgressPercent} />
      </div>
    </div>
  );
};
