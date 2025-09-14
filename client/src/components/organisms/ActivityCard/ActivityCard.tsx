import { Card } from '@mantine/core';
import React from 'react';
import styles from './ActivityCard.module.css';
import { Logo } from '../../atoms';
import { Button } from '../../atoms/Button/Button';

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
          <div className={styles.cardTitle}>{title}</div>
        </div>
        <div className={styles.cardDescription}>{description}</div>
      </div>
      <Button
        className={styles.cardButton}
        variant="gradient"
        radius="md"
        size="lg"
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  </Card>
);

export default ActivityCard;
