import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useClickOutside } from '@mantine/hooks';
import styles from './NotificationPreview.module.css';

type NotificationPreviewProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  text: string;
  icon?: ReactNode;
  autoHideMs?: number;
  top?: number;
  right?: number;
};

export const NotificationPreview = ({
  open,
  onClose,
  title,
  text,
  icon = '🎯',
  autoHideMs,
  top = 8,
  right = 8,
}: NotificationPreviewProps) => {
  const cardRef = useClickOutside(onClose, ['mousedown', 'touchstart']);

  // Автоскрытие по таймеру при открытии

  useEffect(() => {
    if (!open || !autoHideMs) return;
    const t = setTimeout(onClose, autoHideMs);
    return () => clearTimeout(t);
  }, [open, autoHideMs, onClose]);

  if (!open) return null;

  return (
    <div className={styles.dock} style={{ top, right }}>
      <div className={styles.card} ref={cardRef}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.body}>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    </div>
  );
};
