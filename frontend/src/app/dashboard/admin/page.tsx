import Link from 'next/link';
import DashboardPanel from '@/components/ui/DashboardPanel';
import SectionHeader from '@/components/marketing/SectionHeader';
import ChartPlaceholder from '@/components/ui/ChartPlaceholder';
import InfoCard from '@/components/ui/InfoCard';
import MetricCard from '@/components/ui/MetricCard';
import StatusBadge from '@/components/ui/StatusBadge';
import { adminDashboardContent, adminModelManagementRows } from '@/data/content/admin';
import AdminShell from './_components/AdminShell';

export default function AdminDashboardPage() {
  return (
    <AdminShell title="Dashboard" description="Premium overview of model houses, leads, appointments, performance, and platform activity across the Amica Residences admin system in the Philippines.">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {adminDashboardContent.metrics.map(([label, value]) => (
          <MetricCard key={label} label={label} value={value} className="bg-white p-6" />
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <DashboardPanel>
          <SectionHeader
            eyebrow={adminDashboardContent.analytics.eyebrow}
            title={adminDashboardContent.analytics.title}
            className="gap-4"
            action={
              <div className="flex gap-2 text-xs font-semibold text-slate-500">
                {adminDashboardContent.analytics.ranges.map((item) => (
                  <span key={item} className="rounded-full bg-[#fbf8f0] px-3 py-1">{item}</span>
                ))}
              </div>
            }
          />

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {adminDashboardContent.analytics.metrics.map(([label, value]) => (
              <MetricCard key={label} label={label} value={value} />
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {adminDashboardContent.analytics.charts.map((item) => (
              <ChartPlaceholder key={item} title={item} />
            ))}
          </div>
        </DashboardPanel>

        <DashboardPanel>
          <div className="section-label">{adminDashboardContent.recentActivity.eyebrow}</div>
          <div className="mt-4 grid gap-3">
            {adminDashboardContent.recentActivity.items.map((item) => (
              <div key={item} className="rounded-2xl bg-[#f8fbff] px-4 py-3 text-sm text-slate-600">{item}</div>
            ))}
          </div>
          <div className="mt-6 rounded-[1.5rem] bg-[linear-gradient(135deg,#071426_0%,#0d2342_100%)] p-5 text-white">
            <div className="text-xs uppercase tracking-[0.3em] text-[#d7be8a]/80">{adminDashboardContent.recentActivity.topAgent.eyebrow}</div>
            <div className="mt-3 text-2xl font-semibold">{adminDashboardContent.recentActivity.topAgent.name}</div>
            <div className="mt-2 text-sm text-white/60">{adminDashboardContent.recentActivity.topAgent.summary}</div>
          </div>
        </DashboardPanel>
      </div>

      <DashboardPanel className="mt-6">
        <SectionHeader
          eyebrow={adminDashboardContent.priorityQueue.eyebrow}
          title={adminDashboardContent.priorityQueue.title}
          className="gap-4"
          action={<Link href="/dashboard/admin/properties" className="btn-outline hidden md:inline-flex">{adminDashboardContent.priorityQueue.actionLabel}</Link>}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {adminDashboardContent.priorityQueue.items.map((item) => (
            <InfoCard
              key={item.title}
              label={item.title}
              value={item.meta}
              className="rounded-[1.5rem] border border-[#efe5c3] bg-[#fbf8f0] p-5"
              labelClassName="text-sm font-semibold text-[#071426]"
              valueClassName="mt-2 text-sm leading-6 text-slate-500"
            />
          ))}
        </div>
      </DashboardPanel>

      <DashboardPanel className="mt-6">
        <SectionHeader
          eyebrow={adminDashboardContent.salesPerformance.eyebrow}
          title={adminDashboardContent.salesPerformance.title}
          description={adminDashboardContent.salesPerformance.description}
          className="gap-4"
          action={<StatusBadge>{adminDashboardContent.salesPerformance.badge}</StatusBadge>}
        />

        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.75fr]">
          <div className="grid gap-4">
            {adminDashboardContent.salesPerformance.items.map((item) => (
              <article key={item.model} className="rounded-[1.35rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f0_100%)] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-[#071426]">{item.model}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.views} views • {item.inquiries} inquiries</div>
                  </div>
                  <StatusBadge tone="navy">{item.conversion} conversion</StatusBadge>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#efe5d0]">
                  <div className={`${item.width} h-full rounded-full bg-[linear-gradient(90deg,#b98a3d,#071426)]`} />
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#071426_0%,#0d2342_100%)] p-6 text-white">
            <div className="section-label text-[#d7be8a]">{adminDashboardContent.salesPerformance.insight.eyebrow}</div>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">{adminDashboardContent.salesPerformance.insight.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">{adminDashboardContent.salesPerformance.insight.description}</p>
            <div className="mt-6 grid gap-3">
              {adminDashboardContent.salesPerformance.insight.items.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/78">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </DashboardPanel>

      <DashboardPanel className="mt-6 overflow-hidden" padded={false}>
        <div className="flex flex-col gap-4 border-b border-[#e7dcc8] bg-[#fbf8f0] p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="section-label text-[#b98a3d]">{adminDashboardContent.modelManagement.eyebrow}</div>
            <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.4rem)] font-semibold text-[#071426]">{adminDashboardContent.modelManagement.title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{adminDashboardContent.modelManagement.description}</p>
          </div>
          <Link href="/dashboard/admin/properties" className="btn-primary">{adminDashboardContent.modelManagement.actionLabel}</Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[980px] w-full border-collapse text-left">
            <thead className="bg-white text-xs uppercase tracking-[0.24em] text-slate-500">
              <tr>
                {adminDashboardContent.modelManagement.columns.map((column) => (
                  <th key={column} className="border-b border-[#e7dcc8] px-6 py-4 font-semibold">{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {adminModelManagementRows.map((row) => (
                <tr key={row.model} className="align-top">
                  <td className="border-b border-[#f0e5d1] px-6 py-4">
                    <div className="font-semibold text-[#071426]">{row.model}</div>
                    <div className="mt-1 text-xs text-slate-400">Updated {row.updated}</div>
                  </td>
                  <td className="border-b border-[#f0e5d1] px-6 py-4 text-sm text-slate-600">{row.type}</td>
                  <td className="border-b border-[#f0e5d1] px-6 py-4 text-sm font-semibold text-[#8a6428]">{row.price}</td>
                  <td className="border-b border-[#f0e5d1] px-6 py-4"><StatusBadge tone="navy">{row.status}</StatusBadge></td>
                  <td className="border-b border-[#f0e5d1] px-6 py-4 text-sm font-semibold text-[#071426]">{row.inquiries}</td>
                  <td className="border-b border-[#f0e5d1] px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      <button className="rounded-full bg-[#d7be8a] px-3 py-2 text-xs font-semibold text-[#071426]">{adminDashboardContent.modelManagement.actions[0]}</button>
                      <button className="rounded-full border border-[#e7dcc8] px-3 py-2 text-xs font-semibold text-slate-500">{adminDashboardContent.modelManagement.actions[1]}</button>
                      <button className="rounded-full border border-[#e7dcc8] px-3 py-2 text-xs font-semibold text-slate-500">{adminDashboardContent.modelManagement.actions[2]}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardPanel>

      <DashboardPanel className="mt-6">
        <SectionHeader
          eyebrow={adminDashboardContent.leadPipeline.eyebrow}
          title={adminDashboardContent.leadPipeline.title}
          description={adminDashboardContent.leadPipeline.description}
          className="gap-4"
          action={
            <div className="flex flex-wrap gap-2">
              <StatusBadge>{adminDashboardContent.leadPipeline.badges[0]}</StatusBadge>
              <StatusBadge tone="navy">{adminDashboardContent.leadPipeline.badges[1]}</StatusBadge>
            </div>
          }
        />

        <div className="mt-6 grid gap-4 xl:grid-cols-4">
          {adminDashboardContent.leadPipeline.columns.map((column) => (
            <div key={column.stage} className="rounded-[1.5rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#fbf8f0_0%,#ffffff_100%)] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-[#071426]">{column.stage}</div>
                  <div className="mt-1 text-xs text-slate-500">{column.count} active leads</div>
                </div>
                <StatusBadge tone="gold">{column.count}</StatusBadge>
              </div>

              <div className="mt-4 grid gap-3">
                {column.leads.map((lead) => (
                  <article key={`${column.stage}-${lead.name}`} className="rounded-[1.25rem] border border-[#e7dcc8] bg-white p-4 shadow-[0_10px_24px_rgba(9,21,64,0.05)]">
                    <div className="text-sm font-semibold text-[#071426]">{lead.name}</div>
                    <StatusBadge tone="navy" className="mt-2">{lead.model}</StatusBadge>
                    <div className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-400">{adminDashboardContent.leadPipeline.nextActionLabel}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{lead.next}</div>
                    <div className="mt-4 flex gap-2">
                      <button className="rounded-full bg-[#d7be8a] px-3 py-2 text-xs font-semibold text-[#071426]">{adminDashboardContent.leadPipeline.actions[0]}</button>
                      <button className="rounded-full border border-[#e7dcc8] px-3 py-2 text-xs font-semibold text-slate-500">{adminDashboardContent.leadPipeline.actions[1]}</button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DashboardPanel>
    </AdminShell>
  );
}
