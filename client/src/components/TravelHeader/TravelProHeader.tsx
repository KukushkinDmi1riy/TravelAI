import { Box, Paper, Text} from '@mantine/core';
import styles from './TravelProHeader.module.css';

export function TravelProHeader() {
  return (
    <Box className={styles.headerBg}>
      <Paper
        radius="lg"
        px="xl"
        py="lg"
        shadow="md"
        className={styles.headerPaper}
      >
        <div>
          <Text fw={700} fz="xl" mb={2} className={styles.headerText}>
            TravelPro AI
          </Text>
          <Text className={styles.headerText}>
            Ваш персональный тренер в туризме
          </Text>
        </div>
      </Paper>
    </Box>
  );
}
