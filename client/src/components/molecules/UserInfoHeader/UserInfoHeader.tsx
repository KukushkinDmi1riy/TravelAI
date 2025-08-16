import { Box, Paper, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../atoms';
import styles from './UserInfoHeader.module.css';

interface UserInfoHeaderProps {
  title?: string;
  subtitle?: string;
}

export function UserInfoHeader({
  title = 'Айгерим Касымова',
  subtitle = 'Ученик TravelPro AI',
}: UserInfoHeaderProps) {
  const navigate = useNavigate();
  const handleOpenDashboard = () => navigate('/dashboard');
  return (
    <Box className={styles.headerBg}>
      <Paper
        bdrs="xl"
        px="xl"
        py="lg"
        shadow="md"
        className={styles.headerPaper}
      >
        <div className={styles.headerContent}>
          <div
            className={styles.leftSection}
            onClick={handleOpenDashboard}
            style={{ cursor: 'pointer' }}
          >
            <Logo size="md" icon="😎" />
            <div className={styles.textContent}>
              <Text fw={700} fz="xl" mb={2} className={styles.headerText}>
                {title}
              </Text>
              <Text className={styles.headerText}>{subtitle}</Text>
            </div>
          </div>
          <div className={styles.rightSection}>
            UserInfo, тут какая-то статистика UserInfo, тут какая-то статистика
          </div>
        </div>
      </Paper>
    </Box>
  );
}
