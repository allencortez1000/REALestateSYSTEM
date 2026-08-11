import RevenueChart from '@/components/charts/RevenueChart';
import { mockStats } from '@/data/mockData';

const metrics = [
  { label: 'Sales growth', value: '18%', delta: '+4.2%' },
  { label: 'Lead conversion', value: '12%', delta: '+1.8%' },
  { label: 'Bookings', value: '84', delta: '+12' },
  { label: 'Active listings', value: '1,284', delta: '+38' }
];

export default function AnalyticsPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1560px]">
        <div className="overflow-hidden rounded-[2.5rem] border border-[color:var(--border)] bg-[color:var(--cream)] shadow-[0_24px_80px_rgba(7,20,38,0.10)]">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="badge bg-white/80 shadow-soft">Insights</span>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.3rem)] leading-[0.9] tracking-[-0.085em] text-[color:var(--midnight)]">Analytics.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--warm-gray)]">Premium metrics and performance views tailored for a refined Philippine real estate business.</p>
            </div>
            <div className="bg-[linear-gradient(135deg,rgba(7,20,38,0.98)_0%,rgba(13,35,66,0.96)_55%,rgba(215,190,138,0.78)_180%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.35em] text-[color:var(--champagne)]">AMICA insights</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">Measure growth with clarity and discretion.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">Beautiful reporting with a calmer, more polished visual language for local property operations.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Object.entries(mockStats).slice(0, 4).map(([key, value]) => (
            <div key={key} className="card p-6">
              <div className="section-label">{key}</div>
              <div className="mt-3 text-4xl font-bold text-[color:var(--midnight)]">{value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-[1.2fr_0.8fr]">
          <RevenueChart />
          <div className="card p-7">
            <div className="section-label">Key metrics</div>
            <div className="mt-5 grid gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-white/72 px-5 py-4">
                  <span className="text-sm text-[color:var(--warm-gray)]">{metric.label}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-[color:var(--gold)]">{metric.delta}</span>
                    <span className="text-base font-bold text-[color:var(--midnight)]">{metric.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
