import React, { useEffect, useRef } from 'react';
import styles from './NotificationPreview.module.css';

type NotificationPreviewProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  text: string;
  icon?: React.ReactNode;
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
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (cardRef.current && !cardRef.current.contains(target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open, onClose]);

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
