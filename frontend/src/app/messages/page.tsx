import { mockMessages } from '@/data/mockData';

const chat = [
  { id: 1, from: 'them', text: "Hello! I'm interested in the BGC property." },
  { id: 2, from: 'me', text: 'Hi! Great choice. When would you like to visit?' },
  { id: 3, from: 'them', text: 'This Saturday if possible — around 3 PM?' },
  { id: 4, from: 'me', text: "Perfect. I'll confirm the booking for you now." }
];

export default function MessagesPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,243,234,0.88))] shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="badge bg-white/80 shadow-soft">Inbox</span>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.3rem)] leading-[0.9] tracking-[-0.085em] text-[#071426]">Messages.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">A focused messaging workspace for buyers, sellers, and agents across the AMICA network and the Philippine property market.</p>
            </div>
            <div className="bg-[linear-gradient(135deg,#071426_0%,#0d2342_62%,#13273f_100%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.35em] text-[#d7be8a]">AMICA inbox</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">Confident, fast conversations with a concierge feel.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">Keep communication clear, organized, and easy to act on.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-[340px_1fr]">
          <aside className="card p-5">
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Conversations</div>
            <div className="grid gap-2">
              {mockMessages.map((msg) => (
                <div key={msg.id} className="flex cursor-pointer items-center gap-3 rounded-2xl bg-[#fbf8f0] p-4 transition hover:bg-[#f3f7fc]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#071426] text-sm font-bold text-white">{msg.name.charAt(0)}</div>
                  <div className="overflow-hidden">
                    <div className="font-semibold text-[#071426]">{msg.name}</div>
                    <div className="truncate text-xs text-slate-500">{msg.preview}</div>
                  </div>
                  <div className="ml-auto shrink-0 text-[10px] text-slate-400">{msg.time}</div>
                </div>
              ))}
            </div>
          </aside>

          <div className="card flex flex-col justify-between p-7" style={{ minHeight: '560px' }}>
            <div>
              <div className="flex items-center gap-3 border-b border-[#e8dfc8] pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071426] text-base font-bold text-white">M</div>
                <div>
                  <div className="font-semibold text-[#071426]">Maria Santos</div>
                  <div className="text-xs text-[#8a6428]">● Online</div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {chat.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.from === 'me' ? 'justify-end' : ''}`}>
                    <div className={`max-w-[75%] rounded-2xl px-5 py-3 text-sm leading-6 ${msg.from === 'me' ? 'bg-[#071426] text-white' : 'bg-[#fbf8f0] text-slate-800'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form className="mt-6 flex gap-3">
              <input className="input flex-1" placeholder="Type a message…" />
              <button className="btn-primary px-6">Send</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
