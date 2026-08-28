import type { Metadata } from 'next';
import MarketingHeroSplit from '@/components/marketing/MarketingHeroSplit';
import { brand } from '@/data/brand';
import { blogPageContent } from '@/data/content/secondaryPages';
import { mockBlogPosts } from '@/data/mockData';

export const metadata: Metadata = {
  title: `${brand.shortName} Journal`,
  description: `Read ${brand.name} real estate articles about buying, design, location, and Philippine property market guidance.`
};

export default function BlogPage() {
  return (
    <main className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <MarketingHeroSplit
          badge={blogPageContent.badge}
          title={blogPageContent.title}
          description={blogPageContent.description}
          asideEyebrow={blogPageContent.asideEyebrow}
          asideTitle={blogPageContent.asideTitle}
          asideDescription={blogPageContent.asideDescription}
        />

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {mockBlogPosts.map((post) => (
            <a key={post.id} href={`/blog/${post.slug}`} className="card card-hover group block overflow-hidden shadow-[0_12px_28px_rgba(9,21,64,0.05)]">
              <div className="relative h-52 overflow-hidden bg-[linear-gradient(150deg,_#071426,_#0d2342_60%,_#b98a3d_180%)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_45%)] transition group-hover:scale-110" />
                <div className="absolute left-4 bottom-4 rounded-full border border-white/16 bg-[#071426]/88 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/90">{post.category}</div>
              </div>
              <div className="p-6">
                <h2 className="text-[1.45rem] font-bold leading-[1.06] tracking-[-0.04em] text-[#071426]">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                <div className="mt-5 text-xs font-semibold text-[#0d2342] underline-offset-4 group-hover:underline">Read article →</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
