import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  createdAt: number;
}

export interface ChatState {
  conversations: Record<string, ChatMessage[]>; // key: conversationId
  activeConversationId: string;
}

const initialConversationId = 'default';

const initialState: ChatState = {
  conversations: {
    [initialConversationId]: [
      {
        id: 'welcome',
        role: 'assistant',
        content:
          'Привет! Я твой AI-помощник. Могу помочь с информацией об отелях, ценах, визах или подсказать в работе с клиентами. Что тебя интересует?',
        createdAt: Date.now(),
      },
    ],
  },
  activeConversationId: initialConversationId,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActiveConversation(state, action: PayloadAction<string>) {
      state.activeConversationId = action.payload;
      if (!state.conversations[action.payload]) {
        state.conversations[action.payload] = [];
      }
    },
    addMessage(
      state,
      action: PayloadAction<{ conversationId?: string; message: ChatMessage }>,
    ) {
      const conversationId =
        action.payload.conversationId ?? state.activeConversationId;
      if (!state.conversations[conversationId]) {
        state.conversations[conversationId] = [];
      }
      state.conversations[conversationId].push(action.payload.message);
    },
    clearConversation(
      state,
      action: PayloadAction<{ conversationId?: string } | undefined>,
    ) {
      const conversationId =
        action?.payload?.conversationId ?? state.activeConversationId;
      state.conversations[conversationId] = [];
    },
  },
});

export const { setActiveConversation, addMessage, clearConversation } =
  chatSlice.actions;
export default chatSlice.reducer;

export const selectConversations = (state: RootState) =>
  state.chat.conversations;
export const selectActiveConversationId = (state: RootState) =>
  state.chat.activeConversationId;
