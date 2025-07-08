import React from 'react';
import { DashboardTemplate } from '../../templates/DashboardTemplate/DashboardTemplate';

export const Dashboard: React.FC = () => {
  // Реальные данные для примера
  const userData = {
    name: 'Айгерим Касымова',
    level: 3,
    xp: 975,
    maxXp: 1500,
    stats: [
      { label: 'Направлений', value: '12' },
      { label: 'Точность', value: '87%' },
      { label: 'Дней подряд', value: '7' },
    ],
  };

  const activities = [
    {
      title: 'Микрообучение',
      description:
        '5-минутные уроки по направлениям. Изучайте Турцию, Египет и другие страны через интерактивные карточки.',
      buttonText: 'Начать урок',
      type: 'learning' as const,
      onButtonClick: () => console.log('Starting microlearning...'),
    },
    {
      title: 'Quick Battle',
      description:
        'Проверьте свои знания в быстрых квизах. Соревнуйтесь с коллегами и зарабатывайте XP!',
      buttonText: 'Играть',
      type: 'battle' as const,
      onButtonClick: () => console.log('Starting quick battle...'),
    },
    {
      title: 'AI-Практика',
      description:
        'Практикуйтесь в продажах с виртуальным клиентом. AI оценит ваши навыки общения.',
      buttonText: 'Тренироваться',
      type: 'practice' as const,
      onButtonClick: () => console.log('Starting AI practice...'),
    },
    {
      title: 'Командный батл',
      description:
        'Присоединяйтесь к еженедельным соревнованиям команд. Ваша команда "Альфа" на 2 месте!',
      buttonText: 'К соревнованию',
      type: 'team' as const,
      onButtonClick: () => console.log('Joining team battle...'),
    },
  ];

  const achievements = [
    { title: 'Снайпер продаж', type: 'sales' as const, unlocked: true },
    { title: 'Скоростной турагент', type: 'speed' as const, unlocked: true },
    { title: 'Знаток Турции', type: 'knowledge' as const, unlocked: true },
    { title: '7 дней подряд', type: 'streak' as const, unlocked: true },
    { title: 'Отличник квизов', type: 'quiz' as const, unlocked: true },
    { title: 'Знаток luxury', type: 'luxury' as const, unlocked: false },
  ];

  return (
    <DashboardTemplate
      userName={userData.name}
      userLevel={userData.level}
      userXp={userData.xp}
      userMaxXp={userData.maxXp}
      userStats={userData.stats}
      activities={activities}
      achievements={achievements}
    />
  );
};
