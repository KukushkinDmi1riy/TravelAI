import { getCsrfToken } from '../auth/api';

export type ChatRole = 'user' | 'assistant' | 'system';

export interface ChatTurn {
  role: ChatRole;
  content: string;
}

export async function sendChatMessage(params: {
  message: string;
  history: ChatTurn[];
  signal?: AbortSignal;
}): Promise<string> {
  const csrf = getCsrfToken();
  const res = await fetch('http://localhost:3005/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(csrf ? { 'x-xsrf-token': csrf } : {}),
    },
    credentials: 'include',
    body: JSON.stringify({ message: params.message, history: params.history }),
    signal: params.signal,
  });

  const data = await res.json();
  if (!res.ok || !data?.success) {
    throw new Error(data?.message || 'Не удалось получить ответ');
  }
  return String(data.reply ?? '').trim();
}
