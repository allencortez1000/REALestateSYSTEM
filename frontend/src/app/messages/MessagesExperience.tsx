'use client';

import { useEffect, useMemo, useState } from 'react';
import { mockMessages } from '@/data/mockData';

const LOCAL_MESSAGES_KEY = 'amicaLocalMessages';

const initialChat = [
  { id: 1, from: 'them', text: "Hello! I'm interested in the BGC property." },
  { id: 2, from: 'me', text: 'Hi! Great choice. When would you like to visit?' },
  { id: 3, from: 'them', text: 'This Saturday if possible — around 3 PM?' },
  { id: 4, from: 'me', text: "Perfect. I'll confirm the booking for you now." }
];

type ChatMessage = {
  id: number;
  from: string;
  text: string;
};

type ChatMap = Record<string, ChatMessage[]>;

function createInitialChatMap() {
  return Object.fromEntries(mockMessages.map((message) => [message.id, initialChat])) as ChatMap;
}

function readLocalChats() {
  if (typeof window === 'undefined') return createInitialChatMap();

  try {
    const raw = window.localStorage.getItem(LOCAL_MESSAGES_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === 'object' ? { ...createInitialChatMap(), ...parsed } as ChatMap : createInitialChatMap();
  } catch {
    return createInitialChatMap();
  }
}

export default function MessagesExperience() {
  const [activeId, setActiveId] = useState(mockMessages[0]?.id ?? 'msg-1');
  const [chats, setChats] = useState<ChatMap>(createInitialChatMap());
  const [message, setMessage] = useState('');
  const chat = chats[activeId] ?? initialChat;

  const activeConversation = useMemo(
    () => mockMessages.find((item) => item.id === activeId) ?? mockMessages[0],
    [activeId]
  );

  useEffect(() => {
    setChats(readLocalChats());
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_MESSAGES_KEY, JSON.stringify(chats));
  }, [chats]);

  function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = message.trim();
    if (!trimmed) return;

    setChats((current) => ({
      ...current,
      [activeId]: [...(current[activeId] ?? initialChat), { id: Date.now(), from: 'me', text: trimmed }]
    }));
    setMessage('');
  }

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[340px_1fr]">
      <aside className="card p-5 shadow-[0_12px_28px_rgba(9,21,64,0.05)]">
        <div className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Conversations</div>
        <div className="grid gap-2">
          {mockMessages.map((msg) => {
            const isActive = msg.id === activeId;

            return (
              <button
                key={msg.id}
                type="button"
                onClick={() => setActiveId(msg.id)}
                className={`flex items-center gap-3 rounded-2xl p-4 text-left transition ${isActive ? 'bg-[#071426] text-white shadow-[0_10px_24px_rgba(7,20,38,0.14)]' : 'bg-[#fbf8f0] hover:bg-[#f3f7fc]'}`}
                aria-pressed={isActive}
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${isActive ? 'bg-white text-[#071426]' : 'bg-[#071426] text-white'}`}>{msg.name.charAt(0)}</div>
                <div className="overflow-hidden">
                  <div className={`font-semibold ${isActive ? 'text-white' : 'text-[#071426]'}`}>{msg.name}</div>
                  <div className={`truncate text-xs ${isActive ? 'text-white/65' : 'text-slate-500'}`}>{msg.preview}</div>
                </div>
                <div className={`ml-auto shrink-0 text-[10px] ${isActive ? 'text-white/50' : 'text-slate-400'}`}>{msg.time}</div>
              </button>
            );
          })}
        </div>
      </aside>

      <div className="card flex flex-col justify-between p-7 shadow-[0_14px_34px_rgba(9,21,64,0.06)]" style={{ minHeight: '560px' }}>
        <div>
          <div className="flex items-center gap-3 border-b border-[#e8dfc8] pb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071426] text-base font-bold text-white">{activeConversation.name.charAt(0)}</div>
            <div>
              <div className="font-semibold text-[#071426]">{activeConversation.name}</div>
              <div className="text-xs text-[#8a6428]">● Online • frontend demo</div>
            </div>
          </div>
          <div className="mt-6 space-y-4" aria-live="polite">
            {chat.map((msg) => (
              <div key={msg.id} className={`flex ${msg.from === 'me' ? 'justify-end' : ''}`}>
                <div className={`max-w-[75%] rounded-2xl px-5 py-3 text-sm leading-7 ${msg.from === 'me' ? 'bg-[#071426] text-white' : 'bg-[#fbf8f0] text-slate-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <form className="mt-6 flex gap-3" onSubmit={sendMessage}>
          <label className="sr-only" htmlFor="message-input">Type a message</label>
          <input id="message-input" name="message" className="input flex-1" placeholder="Type a message…" value={message} onChange={(event) => setMessage(event.target.value)} />
          <button className="btn-primary px-6">Send</button>
        </form>
      </div>
    </div>
  );
}
