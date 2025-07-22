import { Card, Button } from '@mantine/core';
import React from 'react';
import styles from './ActivityCard.module.css';
import { Logo } from '../../atoms';

interface ActivityCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  onButtonClick,
}) => (
  <Card shadow="md" radius="xl" padding="xl" className={styles.card}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Logo size="md" icon={icon} />
          <div className={styles['card-title']}>{title}</div>
        </div>
        <div className={styles['card-description']}>{description}</div>
      </div>
      <Button
        className={styles['card-button']}
        variant="gradient"
        gradient={{ from: 'indigo', to: 'violet', deg: 90 }}
        radius="md"
        size="md"
        onClick={onButtonClick}
        style={{ height: 52 }}
      >
        {buttonText}
      </Button>
    </div>
  </Card>
);

export default ActivityCard;
