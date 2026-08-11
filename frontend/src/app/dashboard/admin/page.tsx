import AdminShell from './_components/AdminShell';

const metrics = [
  ['Total model houses', '1,248'],
  ['Active listings', '932'],
  ['Sold residences', '216'],
  ['Pending listings', '100'],
  ['Total buyers', '1,482'],
  ['Total sellers', '614'],
  ['Total agents', '38'],
  ['Total inquiries', '2,109']
];

const recentItems = [
  'New inquiry from an AMICA model-house listing',
  'Listing status changed to sold',
  'Agent Maria assigned to 12 listings',
  'Homepage hero updated successfully',
  '3 new leads imported from Facebook'
];

const priorityQueue = [
  { title: 'Hera model house', meta: 'Merged house-only and model-house references • PHP 8,000,000.00' },
  { title: 'Kasandra model house', meta: 'House-only package • PHP 4,000,000.00' },
  { title: 'Low cost housing project', meta: 'Bungalow and duplex options • 4 follow-ups' }
];

export default function AdminDashboardPage() {
  return (
    <AdminShell title="Dashboard" description="Premium overview of model houses, leads, appointments, performance, and platform activity across the AMICA admin system in the Philippines.">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map(([label, value]) => (
          <div key={label} className="rounded-[1.75rem] border border-[rgba(231,220,200,0.95)] bg-white p-6 shadow-[0_16px_50px_rgba(9,21,64,0.08)]">
            <div className="section-label">{label}</div>
            <div className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#071426]">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-[1.75rem] border border-[rgba(231,220,200,0.95)] bg-white p-6 shadow-[0_16px_50px_rgba(9,21,64,0.08)] sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="section-label">Analytics</div>
              <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.6rem)] font-semibold text-[#071426]">Lead conversion summary</h2>
            </div>
            <div className="flex gap-2 text-xs font-semibold text-slate-500">
              <span className="rounded-full bg-[#fbf8f0] px-3 py-1">Today</span>
              <span className="rounded-full bg-[#fbf8f0] px-3 py-1">This week</span>
              <span className="rounded-full bg-[#fbf8f0] px-3 py-1">This month</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[#efe5c3] bg-[#fbf8f0] p-5">
              <div className="text-sm text-slate-500">Monthly leads</div>
              <div className="mt-2 text-3xl font-semibold text-[#071426]">284</div>
            </div>
            <div className="rounded-[1.5rem] border border-[#efe5c3] bg-[#fbf8f0] p-5">
              <div className="text-sm text-slate-500">Scheduled viewings</div>
              <div className="mt-2 text-3xl font-semibold text-[#071426]">68</div>
            </div>
            <div className="rounded-[1.5rem] border border-[#efe5c3] bg-[#fbf8f0] p-5">
              <div className="text-sm text-slate-500">Total property value</div>
              <div className="mt-2 text-3xl font-semibold text-[#071426]">₱1.42B</div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {['Property status chart', 'Listings by location chart', 'Monthly inquiry chart'].map((item) => (
              <div key={item} className="h-56 rounded-[1.5rem] border border-dashed border-[#dccfa9] bg-gradient-to-br from-[#f8fbff] to-white p-4">
                <div className="text-sm font-semibold text-[#071426]">{item}</div>
                <div className="mt-4 h-40 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(185,138,61,0.22),_transparent_55%),linear-gradient(180deg,rgba(9,21,64,0.04),rgba(9,21,64,0.01))]" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[rgba(231,220,200,0.95)] bg-white p-6 shadow-[0_16px_50px_rgba(9,21,64,0.08)] sm:p-8">
          <div className="section-label">Recent activity</div>
          <div className="mt-4 grid gap-3">
            {recentItems.map((item) => (
              <div key={item} className="rounded-2xl bg-[#f8fbff] px-4 py-3 text-sm text-slate-600">{item}</div>
            ))}
          </div>
          <div className="mt-6 rounded-[1.5rem] bg-[linear-gradient(135deg,#071426_0%,#0d2342_100%)] p-5 text-white">
            <div className="text-xs uppercase tracking-[0.3em] text-[#d7be8a]/80">Top-performing agent</div>
            <div className="mt-3 text-2xl font-semibold">Maria Santos</div>
            <div className="mt-2 text-sm text-white/60">₱24.8M monthly sales • 18 qualified leads • 9 completed viewings</div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-[1.75rem] border border-[rgba(231,220,200,0.95)] bg-white p-6 shadow-[0_16px_50px_rgba(9,21,64,0.08)] sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="section-label">Priority queue</div>
            <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.4rem)] font-semibold text-[#071426]">Listings needing attention</h2>
          </div>
          <a href="/dashboard/admin/properties" className="btn-outline hidden md:inline-flex">Manage listings</a>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {priorityQueue.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-[#efe5c3] bg-[#fbf8f0] p-5">
              <div className="text-sm font-semibold text-[#071426]">{item.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-500">{item.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
