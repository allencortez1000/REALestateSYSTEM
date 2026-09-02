import MarketingHeroSplit from '@/components/marketing/MarketingHeroSplit';
import WorkspaceStatCard from '@/components/ui/WorkspaceStatCard';
import { workspaceDashboardContent } from '@/data/content/workspaces';

export default function SellerDashboardPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <MarketingHeroSplit
          badge={workspaceDashboardContent.seller.badge}
          title={workspaceDashboardContent.seller.title}
          description={workspaceDashboardContent.seller.description}
          asideEyebrow={workspaceDashboardContent.seller.asideEyebrow}
          asideTitle={workspaceDashboardContent.seller.asideTitle}
          asideDescription={workspaceDashboardContent.seller.asideDescription}
          className="bg-white/84 shadow-[0_24px_80px_rgba(9,21,64,0.10)]"
          asideClassName="bg-[linear-gradient(135deg,#071426_0%,#0d2342_55%,#b98a3d_180%)]"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {workspaceDashboardContent.seller.items.map((item) => (
            <WorkspaceStatCard
              key={item.title}
              title={item.title}
              description={item.desc}
              count={item.count}
              countClassName="rounded-full bg-[#d7be8a] px-2.5 py-0.5 text-xs font-bold text-[#071426]"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
