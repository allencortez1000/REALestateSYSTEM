import { mockBlogPosts } from '@/data/mockData';

export default function BlogPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,243,234,0.88))] shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="badge bg-white/80 shadow-soft">Editorial</span>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.3rem)] leading-[0.9] tracking-[-0.085em] text-[#071426]">
                Stories from the property world.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Insight, design, and market intelligence presented with a refined editorial tone for discerning buyers in the Philippines.
              </p>
            </div>
            <div className="bg-[linear-gradient(135deg,#071426_0%,#0d2342_62%,#13273f_100%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.35em] text-[#d7be8a]">AMICA Journal</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">A more polished way to read the market in the Philippines.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">Thoughtful content curated to feel premium, calm, and easy to scan.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-3">
          {mockBlogPosts.map((post) => (
            <a key={post.id} href={`/blog/${post.slug}`} className="card card-hover group block overflow-hidden">
              <div className="relative h-52 overflow-hidden bg-[linear-gradient(150deg,_#071426,_#0d2342_60%,_#b98a3d_180%)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_45%)] transition group-hover:scale-110" />
                <div className="absolute left-4 bottom-4 rounded-full border border-white/16 bg-[#071426]/88 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/90">{post.category}</div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#071426]">{post.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                <div className="mt-5 text-xs font-semibold text-[#0d2342] underline-offset-4 group-hover:underline">Read article →</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
