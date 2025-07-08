import React from 'react';
import './Achievement.module.css';

interface AchievementProps {
  title: string;
  icon: React.ReactNode;
  unlocked?: boolean;
  className?: string;
}

export const Achievement: React.FC<AchievementProps> = ({
  title,
  icon,
  unlocked = false,
  className = '',
}) => {
  const achievementClass = `achievement ${unlocked ? 'achievement--unlocked' : 'achievement--locked'} ${className}`;

  return (
    <div className={achievementClass}>
      <div className="achievement__icon">{icon}</div>
      <div className="achievement__title">{title}</div>
    </div>
  );
};
