import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActivityCard from '../../organisms/ActivityCard/ActivityCard';
import { ChatButton } from '../../atoms/ChatButton/ChatButton';
import { ChatDialog } from '../../molecules/ChatDialog/ChatDialog';
import { DashboardHeader } from '../../organisms/DashboardHeader/DashboardHeader';
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
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <DashboardHeader
        level={level}
        xp={xp}
        accuracyPercent={accuracyPercent}
        dailyProgressPercent={dailyProgressPercent}
        onBack={() => navigate(-1)}
      />
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
