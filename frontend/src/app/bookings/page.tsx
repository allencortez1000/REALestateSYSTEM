import type { Metadata } from 'next';
import BookingsExperience from './BookingsExperience';

export const metadata: Metadata = {
  title: 'Bookings',
  description: 'Manage model-house viewing requests and booking schedules in the Amica Residences customer experience.'
};

export default function BookingsPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,243,234,0.88))] shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[0.98fr_1.02fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="badge bg-white/80 shadow-soft">Calendar</span>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.3rem)] leading-[0.9] tracking-[-0.085em] text-[#071426]">Bookings made effortless.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">Schedule, reschedule, and manage private viewings through a clean premium workflow across Metro Manila and nearby cities.</p>
            </div>
            <div className="bg-[linear-gradient(135deg,#071426_0%,#0d2342_62%,#13273f_100%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.35em] text-[#d7be8a]">Amica Residences bookings</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">A calmer appointment system for premium viewings.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">Coordinate tours with clarity and confidence.</p>
            </div>
          </div>
        </div>

        <BookingsExperience />
      </section>
    </main>
  );
}
