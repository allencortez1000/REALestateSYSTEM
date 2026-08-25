import type { Metadata } from 'next';
import MessagesExperience from './MessagesExperience';

export const metadata: Metadata = {
  title: 'Messages',
  description: 'Review buyer, seller, and agent conversations across the Amica Residences by Rabino Home Builders Corporation real estate platform.'
};

export default function MessagesPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,243,234,0.88))] shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="badge bg-white/80 shadow-soft">Inbox</span>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.3rem)] leading-[0.9] tracking-[-0.085em] text-[#071426]">Messages.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">A focused messaging workspace for buyers, sellers, and agents across the Amica Residences network and the Philippine property market.</p>
            </div>
            <div className="bg-[linear-gradient(135deg,#071426_0%,#0d2342_62%,#13273f_100%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.35em] text-[#d7be8a]">Amica Residences inbox</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">Confident, fast conversations with a concierge feel.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">Keep communication clear, organized, and easy to act on.</p>
            </div>
          </div>
        </div>

        <MessagesExperience />
      </section>
    </main>
  );
}
