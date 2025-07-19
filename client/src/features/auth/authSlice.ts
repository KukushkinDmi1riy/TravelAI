import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectUser = (state: RootState): User | null => state.auth.user;
export const selectToken = (state: RootState): string | null =>
  state.auth.token;
