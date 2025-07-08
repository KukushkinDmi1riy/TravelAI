import React from 'react';
import { Button } from '../../atoms/Button/Button';
import './ActivityCard.module.css';

interface ActivityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  description,
  icon,
  buttonText,
  onButtonClick,
  className = '',
}) => {
  return (
    <div className={`activity-card ${className}`}>
      <div className="activity-card__icon">{icon}</div>

      <div className="activity-card__content">
        <h3 className="activity-card__title">{title}</h3>
        <p className="activity-card__description">{description}</p>
      </div>

      <div className="activity-card__footer">
        <Button variant="primary" size="md" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
