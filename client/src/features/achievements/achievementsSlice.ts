import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  getUserAchievements,
  getAllAchievements,
  awardAchievement,
} from './api';
import type { Achievement } from './api';

interface AchievementsState {
  achievements: Achievement[];
  loading: boolean;
  error: string | null;
  total: number;
  unlocked: number;
}

const initialState: AchievementsState = {
  achievements: [],
  loading: false,
  error: null,
  total: 0,
  unlocked: 0,
};

export const fetchUserAchievements = createAsyncThunk(
  'achievements/fetchUserAchievements',
  async (userId: string) => {
    const response = await getUserAchievements(userId);
    return response;
  },
);

export const fetchAllAchievements = createAsyncThunk(
  'achievements/fetchAllAchievements',
  async () => {
    const response = await getAllAchievements();
    return response;
  },
);

export const awardUserAchievement = createAsyncThunk(
  'achievements/awardAchievement',
  async ({
    userId,
    achievementCode,
  }: {
    userId: string;
    achievementCode: string;
  }) => {
    const response = await awardAchievement({ userId, achievementCode });
    return response;
  },
);

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    clearAchievements: (state) => {
      state.achievements = [];
      state.loading = false;
      state.error = null;
      state.total = 0;
      state.unlocked = 0;
    },
    setAchievementUnlocked: (
      state,
      action: PayloadAction<{ achievementId: string; unlocked: boolean }>,
    ) => {
      const achievement = state.achievements.find(
        (a) => a.id === action.payload.achievementId,
      );
      if (achievement) {
        achievement.unlocked = action.payload.unlocked;
        if (action.payload.unlocked) {
          achievement.achievedAt = new Date().toISOString();
          state.unlocked += 1;
        } else {
          achievement.achievedAt = null;
          state.unlocked = Math.max(0, state.unlocked - 1);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAchievements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserAchievements.fulfilled, (state, action) => {
        state.loading = false;
        state.achievements = action.payload.data;
        state.total = action.payload.total;
        state.unlocked = action.payload.unlocked;
      })
      .addCase(fetchUserAchievements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки достижений';
      })
      .addCase(fetchAllAchievements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllAchievements.fulfilled, (state, action) => {
        state.loading = false;
        state.achievements = action.payload.data;
        state.total = action.payload.total;
      })
      .addCase(fetchAllAchievements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки достижений';
      })
      .addCase(awardUserAchievement.fulfilled, () => {
        // Обновляем состояние после награждения
        // Можно добавить уведомление или обновить список
      })
      .addCase(awardUserAchievement.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка награждения достижением';
      });
  },
});

export const { clearAchievements, setAchievementUnlocked } =
  achievementsSlice.actions;

export const selectAchievements = (state: {
  achievements: AchievementsState;
}) => state.achievements.achievements;
export const selectAchievementsLoading = (state: {
  achievements: AchievementsState;
}) => state.achievements.loading;
export const selectAchievementsError = (state: {
  achievements: AchievementsState;
}) => state.achievements.error;
export const selectAchievementsStats = (state: {
  achievements: AchievementsState;
}) => ({
  total: state.achievements.total,
  unlocked: state.achievements.unlocked,
});

export default achievementsSlice.reducer;
