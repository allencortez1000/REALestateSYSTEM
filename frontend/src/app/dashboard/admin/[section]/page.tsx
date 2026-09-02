import { notFound } from 'next/navigation';
import { adminSectionModules } from '@/data/content/admin';
import AdminShell from '../_components/AdminShell';

type SectionPageProps = {
  params: Promise<{ section: string }>;
};

export async function generateStaticParams() {
  return Object.keys(adminSectionModules).map((section) => ({ section }));
}

export default async function AdminSectionPage({ params }: SectionPageProps) {
  const { section } = await params;
  const module = adminSectionModules[section];

  if (!module) notFound();

  return (
    <AdminShell title={module.title} description={module.description}>
      <div className="grid gap-6 lg:grid-cols-2">
        {module.blocks.map((block, index) => (
          <div key={block.title} className="rounded-[1.75rem] border border-[color:var(--border)] bg-white/90 p-6 shadow-[0_16px_50px_rgba(7,20,38,0.08)] sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div className="section-label">{block.title}</div>
              <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--cream)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--warm-gray)]">0{index + 1}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-[color:var(--warm-gray)]">{block.body}</p>
            <div className="mt-5 h-52 rounded-[1.5rem] border border-dashed border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(13,35,66,0.03),rgba(247,243,234,0.96))]" />
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
