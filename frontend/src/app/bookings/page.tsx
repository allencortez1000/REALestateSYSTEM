import { mockBookings } from '@/data/mockData';

export default function BookingsPage() {
  const statusColor: Record<string, string> = {
    confirmed: 'bg-emerald-100 text-emerald-700',
    pending: 'bg-amber-100 text-amber-700',
    rescheduled: 'bg-blue-100 text-blue-700'
  };

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
              <div className="text-xs uppercase tracking-[0.35em] text-[#d7be8a]">AMICA bookings</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">A calmer appointment system for premium viewings.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">Coordinate tours with clarity and confidence.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card p-7 md:col-span-2">
            <div className="section-label">Schedule a new viewing</div>
            <div className="mt-5 grid gap-4 md:grid-cols-4">
              <input className="input" placeholder="Property name" />
              <input className="input" placeholder="Date" />
              <input className="input" placeholder="Time" />
              <button className="btn-primary w-full text-center">Confirm</button>
            </div>
          </div>

          {mockBookings.map((booking) => (
            <div key={booking.id} className="card card-hover p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-bold text-[#071426]">{booking.propertyTitle}</div>
                  <div className="mt-1 text-sm text-slate-500">{booking.date} at {booking.time}</div>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor[booking.status] ?? 'bg-[#f8f3e8] text-[#8a6428]'}`}>
                  {booking.status}
                </span>
              </div>
              <div className="mt-5 flex gap-2">
                <button className="btn-outline py-2 px-4 text-xs">Reschedule</button>
                <button className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-4 py-2 text-xs font-semibold text-[#8a6428] transition hover:bg-[#f4ead7]">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
