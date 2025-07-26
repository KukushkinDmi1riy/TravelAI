import React, { useState } from 'react';
import ActivityCard from './ActivityCard';
import styles from './ActivitiesGrid.module.css';
import { Modal } from '@mantine/core';
import AchievementsGrid from '../Achievement/AchievementsGrid';

const activities = [
  {
    icon: '📚',
    title: 'Микрообучение',
    description:
      '5-минутные уроки по направлениям. Изучайте Турцию, Египет и другие страны через интерактивные карточки.',
    buttonText: 'Начать урок',
  },
  {
    icon: '🎯',
    title: 'Quick Battle',
    description:
      'Проверьте свои знания в быстрых квизах. Соревнуйтесь с коллегами и зарабатывайте XP!',
    buttonText: 'Играть',
  },
  {
    icon: '🎭',
    title: 'AI-Практика',
    description:
      'Практикуйтесь в продажах с виртуальным клиентом. AI оценит ваши навыки общения.',
    buttonText: 'Тренироваться',
  },
  {
    icon: '🏆',
    title: 'Командный батл',
    description:
      'Присоединяйтесь к еженедельным соревнованиям команд. Ваша команда "Альфа" на 2 месте!',
    buttonText: 'К соревнованию',
  },
];

export const ActivitiesGrid: React.FC = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleCardButtonClick = () => {
    setModalOpened(true);
  };

  return (
    <>
      <div className={styles.grid} style={{ marginTop: 40 }}>
        {activities.map((activity, idx) => (
          <ActivityCard
            key={idx}
            {...activity}
            onButtonClick={handleCardButtonClick}
          />
        ))}
      </div>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title=""
      >
        {/* Пустое модальное окно */}
      </Modal>
      <AchievementsGrid />
    </>
  );
};

export default ActivitiesGrid;
