import React from 'react';
import { UserProfile } from '../../organisms/UserProfile/UserProfile';
import { ActivityCard } from '../../organisms/ActivityCard/ActivityCard';
import { Achievement } from '../../molecules/Achievement/Achievement';
import { Card } from '../../molecules/Card/Card';
import {
  BookIcon,
  TargetIcon,
  StarIcon,
  TrophyIcon,
  FireIcon,
  GraduationIcon,
  RocketIcon,
  DiamondIcon,
} from './IconComponents.tsx';
import './DashboardTemplate.module.css';

interface DashboardTemplateProps {
  userName: string;
  userLevel: number;
  userXp: number;
  userMaxXp: number;
  userStats: Array<{
    label: string;
    value: string | number;
  }>;
  activities: Array<{
    title: string;
    description: string;
    buttonText: string;
    type: 'learning' | 'battle' | 'practice' | 'team';
    onButtonClick?: () => void;
  }>;
  achievements: Array<{
    title: string;
    type: 'sales' | 'speed' | 'knowledge' | 'streak' | 'quiz' | 'luxury';
    unlocked: boolean;
  }>;
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  userName,
  userLevel,
  userXp,
  userMaxXp,
  userStats,
  activities,
  achievements,
}) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'learning':
        return <BookIcon />;
      case 'battle':
        return <TargetIcon />;
      case 'practice':
        return <StarIcon />;
      case 'team':
        return <TrophyIcon />;
      default:
        return <BookIcon />;
    }
  };

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'sales':
        return <TargetIcon />;
      case 'speed':
        return <RocketIcon />;
      case 'knowledge':
        return <StarIcon />;
      case 'streak':
        return <FireIcon />;
      case 'quiz':
        return <GraduationIcon />;
      case 'luxury':
        return <DiamondIcon />;
      default:
        return <StarIcon />;
    }
  };

  return (
    <div className="dashboard-template">
      {/* Заголовок приложения */}
      <Card className="app-header">
        <div className="app-header__content">
          <div className="app-header__icon">✈️</div>
          <div>
            <h1 className="app-header__title">TravelPro AI</h1>
            <p className="app-header__subtitle">
              Ваш персональный тренер в туризме
            </p>
          </div>
        </div>
      </Card>

      {/* Профиль пользователя */}
      <UserProfile
        name={userName}
        level={userLevel}
        xp={userXp}
        maxXp={userMaxXp}
        stats={userStats}
      />

      {/* Карточки активностей */}
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            title={activity.title}
            description={activity.description}
            icon={getActivityIcon(activity.type)}
            buttonText={activity.buttonText}
            className={`activity-card--${activity.type}`}
            onButtonClick={activity.onButtonClick}
          />
        ))}
      </div>

      {/* Достижения */}
      <Card>
        <h2 className="achievements-title">🏆 Ваши достижения</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <Achievement
              key={index}
              title={achievement.title}
              icon={getAchievementIcon(achievement.type)}
              unlocked={achievement.unlocked}
              className={`achievement--${achievement.type}`}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};
