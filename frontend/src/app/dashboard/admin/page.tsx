import Link from 'next/link';
import { modelHouses } from '@/data/modelHouses';
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
  'New inquiry from an Amica Residences model-house listing',
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

const modelManagementMeta = [
  { slug: 'hera-model-house', status: 'Featured', inquiries: '18', updated: 'Today' },
  { slug: 'kasandra-model-house', status: 'Active', inquiries: '9', updated: 'Yesterday' },
  { slug: 'melvin-model-house', status: 'Active', inquiries: '7', updated: 'Aug 24' },
  { slug: 'joyce-model-house', status: 'Active', inquiries: '6', updated: 'Aug 23' },
  { slug: 'low-cost-housing', status: 'Priority', inquiries: '24', updated: 'Today' }
];

const modelManagementRows = modelManagementMeta.map((item) => {
  const listing = modelHouses.find((model) => model.slug === item.slug)!;

  return {
    model: listing.title,
    type: listing.type,
    price: listing.price,
    status: item.status,
    inquiries: item.inquiries,
    updated: item.updated
  };
});

const salesPerformance = [
  { model: 'LOW COST HOUSING PROJECT', views: '3,420', inquiries: '24', conversion: '18%', width: 'w-[92%]' },
  { model: 'HERA MODEL HOUSE', views: '2,860', inquiries: '18', conversion: '15%', width: 'w-[78%]' },
  { model: 'KASANDRA MODEL HOUSE', views: '1,940', inquiries: '9', conversion: '11%', width: 'w-[58%]' },
  { model: 'MELVIN MODEL HOUSE', views: '1,520', inquiries: '7', conversion: '9%', width: 'w-[45%]' }
];

const leadPipeline = [
  {
    stage: 'New leads',
    count: '12',
    tone: 'bg-[#fbf8f0] text-[#8a6428]',
    leads: [
      { name: 'Rabin Cortez', model: 'HERA MODEL HOUSE', next: 'Call within today' },
      { name: 'Allen Cortez', model: 'LOW COST HOUSING PROJECT', next: 'Send computation' }
    ]
  },
  {
    stage: 'Contacted',
    count: '8',
    tone: 'bg-[#eef4ff] text-[#0d2342]',
    leads: [
      { name: 'Maria Santos', model: 'KASANDRA MODEL HOUSE', next: 'Waiting for documents' },
      { name: 'John Dela Cruz', model: 'JOYCE MODEL HOUSE', next: 'Follow up tomorrow' }
    ]
  },
  {
    stage: 'Viewing scheduled',
    count: '6',
    tone: 'bg-[#f4ead8] text-[#8a6428]',
    leads: [
      { name: 'Lea Ramirez', model: 'MELVIN MODEL HOUSE', next: 'Saturday, 11:00 AM' },
      { name: 'Jasper Cruz', model: 'HERA MODEL HOUSE', next: 'Friday, 2:30 PM' }
    ]
  },
  {
    stage: 'Reservation pending',
    count: '3',
    tone: 'bg-emerald-50 text-emerald-700',
    leads: [
      { name: 'Paolo Reyes', model: 'LOW COST HOUSING PROJECT', next: 'Verify payment slip' },
      { name: 'Ana Cruz', model: 'HERA MODEL HOUSE', next: 'Prepare reservation form' }
    ]
  }
];

export default function AdminDashboardPage() {
  return (
    <AdminShell title="Dashboard" description="Premium overview of model houses, leads, appointments, performance, and platform activity across the Amica Residences admin system in the Philippines.">
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
          <Link href="/dashboard/admin/properties" className="btn-outline hidden md:inline-flex">Manage listings</Link>
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

      <section className="mt-6 rounded-[1.75rem] border border-[rgba(231,220,200,0.95)] bg-white p-6 shadow-[0_16px_50px_rgba(9,21,64,0.08)] sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="section-label">Sales performance</div>
            <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.4rem)] font-semibold text-[#071426]">Top model-house activity</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">Static UI preview for views, inquiries, and conversion indicators across key RHBC models.</p>
          </div>
          <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6428]">Monthly preview</span>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.75fr]">
          <div className="grid gap-4">
            {salesPerformance.map((item) => (
              <article key={item.model} className="rounded-[1.35rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f0_100%)] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-[#071426]">{item.model}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.views} views • {item.inquiries} inquiries</div>
                  </div>
                  <span className="rounded-full bg-[#071426] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">{item.conversion} conversion</span>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#efe5d0]">
                  <div className={`${item.width} h-full rounded-full bg-[linear-gradient(90deg,#b98a3d,#071426)]`} />
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#071426_0%,#0d2342_100%)] p-6 text-white">
            <div className="section-label text-[#d7be8a]">Admin insight</div>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">Low-cost housing is generating the strongest buyer interest.</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">Use this panel to quickly identify which models may need more sales focus, updated photos, or clearer computation details.</p>
            <div className="mt-6 grid gap-3">
              {['Most viewed: Low Cost Housing', 'Most premium: HERA Model House', 'Needs follow-up: Kasandra inquiries'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/78">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 overflow-hidden rounded-[1.75rem] border border-[rgba(231,220,200,0.95)] bg-white shadow-[0_16px_50px_rgba(9,21,64,0.08)]">
        <div className="flex flex-col gap-4 border-b border-[#e7dcc8] bg-[#fbf8f0] p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="section-label text-[#b98a3d]">Model house management</div>
            <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.4rem)] font-semibold text-[#071426]">Listing control preview</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">A UI-only table showing how admins could review model status, inquiry volume, pricing, and quick actions.</p>
          </div>
          <Link href="/dashboard/admin/properties" className="btn-primary">Open listings</Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[980px] w-full border-collapse text-left">
            <thead className="bg-white text-xs uppercase tracking-[0.24em] text-slate-500">
              <tr>
                <th className="border-b border-[#e7dcc8] px-6 py-4 font-semibold">Model</th>
                <th className="border-b border-[#e7dcc8] px-6 py-4 font-semibold">Type</th>
                <th className="border-b border-[#e7dcc8] px-6 py-4 font-semibold">Price</th>
                <th className="border-b border-[#e7dcc8] px-6 py-4 font-semibold">Status</th>
                <th className="border-b border-[#e7dcc8] px-6 py-4 font-semibold">Inquiries</th>
                <th className="border-b border-[#e7dcc8] px-6 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {modelManagementRows.map((row) => (
                <tr key={row.model} className="align-top">
                  <td className="border-b border-[#f0e5d1] px-6 py-4">
                    <div className="font-semibold text-[#071426]">{row.model}</div>
                    <div className="mt-1 text-xs text-slate-400">Updated {row.updated}</div>
                  </td>
                  <td className="border-b border-[#f0e5d1] px-6 py-4 text-sm text-slate-600">{row.type}</td>
                  <td className="border-b border-[#f0e5d1] px-6 py-4 text-sm font-semibold text-[#8a6428]">{row.price}</td>
                  <td className="border-b border-[#f0e5d1] px-6 py-4"><span className="rounded-full bg-[#071426] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">{row.status}</span></td>
                  <td className="border-b border-[#f0e5d1] px-6 py-4 text-sm font-semibold text-[#071426]">{row.inquiries}</td>
                  <td className="border-b border-[#f0e5d1] px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      <button className="rounded-full bg-[#d7be8a] px-3 py-2 text-xs font-semibold text-[#071426]">View</button>
                      <button className="rounded-full border border-[#e7dcc8] px-3 py-2 text-xs font-semibold text-slate-500">Edit</button>
                      <button className="rounded-full border border-[#e7dcc8] px-3 py-2 text-xs font-semibold text-slate-500">Feature</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 rounded-[1.75rem] border border-[rgba(231,220,200,0.95)] bg-white p-6 shadow-[0_16px_50px_rgba(9,21,64,0.08)] sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="section-label">Lead pipeline</div>
            <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.4rem)] font-semibold text-[#071426]">Track inquiries by sales stage</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">A UI-only board showing how customer inquiries could move from first contact to reservation. Cards are static placeholders for presentation.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6428]">Kanban preview</span>
            <span className="rounded-full bg-[#071426] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">Admin UI</span>
          </div>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-4">
          {leadPipeline.map((column) => (
            <div key={column.stage} className="rounded-[1.5rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#fbf8f0_0%,#ffffff_100%)] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-[#071426]">{column.stage}</div>
                  <div className="mt-1 text-xs text-slate-500">{column.count} active leads</div>
                </div>
                <span className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${column.tone}`}>{column.count}</span>
              </div>

              <div className="mt-4 grid gap-3">
                {column.leads.map((lead) => (
                  <article key={`${column.stage}-${lead.name}`} className="rounded-[1.25rem] border border-[#e7dcc8] bg-white p-4 shadow-[0_10px_24px_rgba(9,21,64,0.05)]">
                    <div className="text-sm font-semibold text-[#071426]">{lead.name}</div>
                    <div className="mt-2 rounded-full bg-[#071426] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">{lead.model}</div>
                    <div className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-400">Next action</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{lead.next}</div>
                    <div className="mt-4 flex gap-2">
                      <button className="rounded-full bg-[#d7be8a] px-3 py-2 text-xs font-semibold text-[#071426]">View</button>
                      <button className="rounded-full border border-[#e7dcc8] px-3 py-2 text-xs font-semibold text-slate-500">Move</button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
