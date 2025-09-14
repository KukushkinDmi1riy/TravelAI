import React from 'react';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { Badge } from '../../atoms/Badge/Badge';
import { ProgressBar } from '../../atoms/ProgressBar/ProgressBar';
import './UserProfile.module.css';

interface UserProfileProps {
  name: string;
  avatar?: string;
  level: number;
  xp: number;
  maxXp: number;
  stats: Array<{
    label: string;
    value: string | number;
    color?: 'primary' | 'success' | 'warning' | 'info';
  }>;
  className?: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  name,
  avatar,
  level,
  xp,
  maxXp,
  stats,
  className = '',
}) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className={`user-profile ${className}`}>
      <div className="user-profile__header">
        <Avatar src={avatar} initials={initials} size="lg" alt={name} />
        <div className="user-profile__info">
          <h2 className="user-profile__name">{name}</h2>
          <div className="user-profile__level">
            <Badge variant="secondary" size="sm">
              Уровень {level}
            </Badge>
          </div>
          <div className="user-profile__xp">
            <span className="user-profile__xp-text">
              {xp} / {maxXp} XP до следующего уровня
            </span>
            <ProgressBar value={xp} max={maxXp} size="sm" color="primary" />
          </div>
        </div>
      </div>

      <div className="user-profile__stats">
        {stats.map((stat, index) => (
          <div key={index} className="user-profile__stat">
            <div className="user-profile__stat-value">{stat.value}</div>
            <div className="user-profile__stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
