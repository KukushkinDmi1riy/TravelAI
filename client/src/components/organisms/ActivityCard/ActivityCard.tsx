import { Card } from '@mantine/core';
import styles from './ActivityCard.module.css';
import { Logo } from '../../atoms';
import { Button } from '../../atoms/Button/Button';

interface ActivityCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  // Optional props to reuse for learning cards
  badgeText?: string;
  metaLeft?: string; // e.g. "5 мин"
  metaRight?: string; // e.g. "5 уроков"
  disabled?: boolean;
}

export const ActivityCard = ({
  icon,
  title,
  description,
  buttonText,
  onButtonClick,
  badgeText,
  metaLeft,
  metaRight,
  disabled,
}: ActivityCardProps) => (
  <Card shadow="md" radius="xl" padding="xl" className={styles.card}>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Top area (icon + optional badge) */}
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div className={styles.cardIcon}>
            <Logo size="md" icon={icon} />
          </div>
          {badgeText && <div className={styles.badge}>{badgeText}</div>}
        </div>
      </div>
      {/* Title */}
      <div className={styles.cardTitle}>{title}</div>

      {/* Optional meta row */}
      {(metaLeft || metaRight) && (
        <div className={styles.metaRow}>
          {metaLeft && <span className={styles.metaText}>{metaLeft}</span>}
          {metaLeft && metaRight && <span className={styles.dot}>•</span>}
          {metaRight && <span className={styles.metaText}>{metaRight}</span>}
        </div>
      )}

      {/* Description */}
      <div className={styles.cardDescription}>{description}</div>

      {/* Action */}
      <Button
        className={styles.cardButton}
        variant="gradient"
        radius="md"
        size="lg"
        onClick={onButtonClick}
        disabled={disabled}
      >
        {buttonText}
      </Button>
    </div>
  </Card>
);

export default ActivityCard;
