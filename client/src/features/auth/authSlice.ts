import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  status: string;
  isApprovedByAdmin: boolean;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isInitialized: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isInitialized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isLoading = false;
      state.isInitialized = true;
    },
    logout(state) {
      state.user = null;
      state.isLoading = false;
      state.isInitialized = true;
    },
    setInitialized(state) {
      state.isInitialized = true;
      state.isLoading = false;
    },
  },
});

export const { setUser, logout, setAuthLoading, setInitialized } =
  authSlice.actions;
export default authSlice.reducer;

export const selectUser = (state: RootState): User | null => state.auth.user;
export const selectAuthLoading = (state: RootState): boolean =>
  state.auth.isLoading;
export const selectAuthInitialized = (state: RootState): boolean =>
  state.auth.isInitialized;
