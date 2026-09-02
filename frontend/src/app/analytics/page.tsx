import RevenueChart from '@/components/charts/RevenueChart';
import MarketingHeroSplit from '@/components/marketing/MarketingHeroSplit';
import SectionHeader from '@/components/marketing/SectionHeader';
import InfoCard from '@/components/ui/InfoCard';
import { analyticsPageContent } from '@/data/content/workspaces';
import { mockStats } from '@/data/mockData';

export default function AnalyticsPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1560px]">
        <MarketingHeroSplit
          badge={analyticsPageContent.hero.badge}
          title={analyticsPageContent.hero.title}
          description={analyticsPageContent.hero.description}
          asideEyebrow={analyticsPageContent.hero.asideEyebrow}
          asideTitle={analyticsPageContent.hero.asideTitle}
          asideDescription={analyticsPageContent.hero.asideDescription}
          className="rounded-[2.5rem] border-[color:var(--border)] bg-[color:var(--cream)] shadow-[0_24px_80px_rgba(7,20,38,0.10)]"
          asideClassName="bg-[linear-gradient(135deg,rgba(7,20,38,0.98)_0%,rgba(13,35,66,0.96)_55%,rgba(215,190,138,0.78)_180%)]"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Object.entries(mockStats).slice(0, 4).map(([key, value]) => (
            <InfoCard
              key={key}
              label={key}
              value={value}
              note={analyticsPageContent.summaryStats.find((item) => item.label === key)?.note}
              className="card p-6"
              valueClassName="mt-3 text-4xl font-bold text-[color:var(--midnight)]"
              noteClassName="mt-2 text-xs font-semibold text-[color:var(--gold)]"
            />
          ))}
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-[1.2fr_0.8fr]">
          <RevenueChart />
          <div className="card p-7">
            <SectionHeader title={analyticsPageContent.sideMetricsTitle} className="gap-0" />
            <div className="mt-5 grid gap-3">
              {analyticsPageContent.summaryStats.map((metric) => (
                <div key={metric.label} className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-white/72 px-5 py-4">
                  <span className="text-sm text-[color:var(--warm-gray)]">{metric.label}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-[color:var(--gold)]">{metric.note}</span>
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
