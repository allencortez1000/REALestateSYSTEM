import MarketingHeroSplit from '@/components/marketing/MarketingHeroSplit';
import WorkspaceStatCard from '@/components/ui/WorkspaceStatCard';
import { workspaceDashboardContent } from '@/data/content/workspaces';

export default function BuyerDashboardPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <MarketingHeroSplit
          badge={workspaceDashboardContent.buyer.badge}
          title={workspaceDashboardContent.buyer.title}
          description={workspaceDashboardContent.buyer.description}
          asideEyebrow={workspaceDashboardContent.buyer.asideEyebrow}
          asideTitle={workspaceDashboardContent.buyer.asideTitle}
          asideDescription={workspaceDashboardContent.buyer.asideDescription}
          className="bg-white/84 shadow-[0_24px_80px_rgba(9,21,64,0.10)]"
          asideClassName="bg-[linear-gradient(135deg,#071426_0%,#0d2342_55%,#b98a3d_180%)]"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {workspaceDashboardContent.buyer.items.map((item) => (
            <WorkspaceStatCard key={item.title} title={item.title} description={item.desc} count={item.count} />
          ))}
        </div>
      </section>
    </main>
  );
}
