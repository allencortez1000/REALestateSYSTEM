'use client';

import { useMemo, useState } from 'react';
import { mockMessages } from '@/data/mockData';
import { useLocalStorageState } from './useLocalStorageState';

export type ChatMessage = {
  id: number;
  from: string;
  text: string;
};

export type ChatMap = Record<string, ChatMessage[]>;

export const LOCAL_MESSAGES_KEY = 'amicaLocalMessages';

export const initialChat: ChatMessage[] = [
  { id: 1, from: 'them', text: "Hello! I'm interested in the BGC property." },
  { id: 2, from: 'me', text: 'Hi! Great choice. When would you like to visit?' },
  { id: 3, from: 'them', text: 'This Saturday if possible — around 3 PM?' },
  { id: 4, from: 'me', text: "Perfect. I'll confirm the booking for you now." }
];

function createInitialChatMap() {
  return Object.fromEntries(mockMessages.map((message) => [message.id, initialChat])) as ChatMap;
}

function parseChats(raw: string | null) {
  try {
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === 'object'
      ? { ...createInitialChatMap(), ...parsed } as ChatMap
      : createInitialChatMap();
  } catch {
    return createInitialChatMap();
  }
}

export function useMessages() {
  const [activeId, setActiveId] = useState(mockMessages[0]?.id ?? 'msg-1');
  const [message, setMessage] = useState('');
  const { value: chats, setValue: setChats } = useLocalStorageState<ChatMap>({
    storageKey: LOCAL_MESSAGES_KEY,
    initialValue: createInitialChatMap(),
    read: parseChats
  });

  const activeConversation = useMemo(
    () => mockMessages.find((item) => item.id === activeId) ?? mockMessages[0],
    [activeId]
  );

  const chat = chats[activeId] ?? initialChat;

  function sendMessage() {
    const trimmed = message.trim();
    if (!trimmed) return false;

    setChats((current) => ({
      ...current,
      [activeId]: [...(current[activeId] ?? initialChat), { id: Date.now(), from: 'me', text: trimmed }]
    }));
    setMessage('');
    return true;
  }

  return {
    activeId,
    setActiveId,
    activeConversation,
    chat,
    chats,
    message,
    setMessage,
    sendMessage
  };
}
