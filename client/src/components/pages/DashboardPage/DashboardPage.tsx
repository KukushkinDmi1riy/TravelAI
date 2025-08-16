import { Text } from '@mantine/core';
import { useState } from 'react';
import { NotificationPreview } from '../../molecules/NotificationPreview/NotificationPreview';
import { StatsStripe, DailyProgress } from '../../molecules';
import ActivityCard from '../../organisms/ActivityCard/ActivityCard';
import { ChatButton } from '../../atoms/ChatButton/ChatButton';
import { ChatDialog } from '../../molecules/ChatDialog/ChatDialog';
import styles from './DashboardPage.module.css';

type Props = {
  level?: number;
  xp?: number;
  accuracyPercent?: number;
  dailyProgressPercent?: number;
};

export function DashboardPage({
  level = 3,
  xp = 975,
  accuracyPercent = 87,
  dailyProgressPercent = 65,
}: Props) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className={styles.page}>
      <div className={`${styles.headerBg} ${styles.headerFull}`}>
        <div className={styles.headerPaper}>
          <div className={styles.headerRow}>
            <Text fw={800} fz={28} className={styles.brand}>
              ✈️ TravelPro AI
            </Text>
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

          <StatsStripe
            level={level}
            xp={xp}
            accuracyPercent={accuracyPercent}
          />

          <DailyProgress percent={dailyProgressPercent} />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Продолжить обучение</div>
        <div className={styles.grid}>
          <ActivityCard
            icon="🇹🇷"
            title="Турция: Анталья"
            description=""
            buttonText="Продолжить"
            onButtonClick={() => {}}
            badgeText="В процессе"
            metaLeft="5 мин"
            metaRight="5 уроков"
          />
          <ActivityCard
            icon="🇪🇬"
            title="Египет: Шарм-эль-Шейх"
            description=""
            buttonText="Начать"
            onButtonClick={() => {}}
            badgeText="Новое"
            metaLeft="5 мин"
            metaRight="5 уроков"
          />
          <ActivityCard
            icon="🇦🇪"
            title="ОАЭ: Дубай"
            description=""
            buttonText="Заблокировано"
            onButtonClick={() => {}}
            badgeText="Скоро"
            metaLeft="5 мин"
            metaRight="6 уроков"
            disabled
          />
        </div>
      </div>

      <ChatButton onClick={() => setIsChatOpen(true)} />
      <ChatDialog opened={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}
