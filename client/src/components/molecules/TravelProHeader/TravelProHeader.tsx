import { Box, Paper, Text } from '@mantine/core';
import { LogoutButton, Logo } from '../../atoms';
import styles from './TravelProHeader.module.css';

interface TravelProHeaderProps {
  title?: string;
  subtitle?: string;
  showLogout?: boolean;
  onLogout?: () => void;
}

export function TravelProHeader({
  title = 'TravelPro AI',
  subtitle = 'Ваш персональный тренер в туризме',
  showLogout = false,
  onLogout,
}: TravelProHeaderProps) {
  return (
    <Box className={styles.headerBg}>
      <Paper
        radius="lg"
        px="xl"
        py="lg"
        shadow="md"
        className={styles.headerPaper}
      >
        <div className={styles.headerContent}>
          <div className={styles.leftSection}>
            <Logo size="md" icon="✈️" />
            <div className={styles.textContent}>
              <Text fw={700} fz="xl" mb={2} className={styles.headerText}>
                {title}
              </Text>
              <Text className={styles.headerText}>{subtitle}</Text>
            </div>
          </div>
          {showLogout && onLogout && (
            <div className={styles.logoutButton}>
              <LogoutButton onLogout={onLogout} />
            </div>
          )}
        </div>
      </Paper>
    </Box>
  );
}
