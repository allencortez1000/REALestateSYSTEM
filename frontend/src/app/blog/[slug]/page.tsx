import type { Metadata } from 'next';
import Link from 'next/link';
import { blogDetailContent } from '@/data/content/detailPages';
import { mockBlogPosts } from '@/data/mockData';

const posts = Object.fromEntries(mockBlogPosts.map((post) => [post.slug, post]));

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return {
      title: 'Journal post not found',
      description: 'The requested Amica Residences journal article could not be found.'
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article'
    }
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="card p-14 text-center">
          <h1 className="section-title">{blogDetailContent.notFound.title}</h1>
          <Link href="/blog" className="btn-primary mt-6 inline-flex">{blogDetailContent.notFound.backLabel}</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1100px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[#e7dcc8] bg-white/88 shadow-[0_18px_48px_rgba(9,21,64,0.08)] backdrop-blur-sm">
          <div className="bg-[linear-gradient(135deg,#071426_0%,#0d2342_55%,#b98a3d_180%)] p-6 text-white sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="badge bg-white/80 shadow-soft">{post.category}</span>
              <span className="text-xs uppercase tracking-[0.24em] text-white/70">{blogDetailContent.hero.editionLabel}</span>
            </div>
            <h1 className="mt-6 text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.07em] text-white">{post.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/76">{blogDetailContent.hero.description}</p>
          </div>
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-lg leading-8 text-slate-600">{post.excerpt}</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#efe5c3] bg-[#fbf8f0] p-5">
                <div className="section-label">{blogDetailContent.meta.readTimeLabel}</div>
                <div className="mt-2 text-2xl font-semibold text-[#071426]">{blogDetailContent.meta.readTimeValue}</div>
              </div>
              <div className="rounded-[1.5rem] border border-[#efe5c3] bg-[#fbf8f0] p-5">
                <div className="section-label">{blogDetailContent.meta.publishedLabel}</div>
                <div className="mt-2 text-2xl font-semibold text-[#071426]">{blogDetailContent.meta.publishedValue}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
