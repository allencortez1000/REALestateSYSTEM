import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
          <h1 className="section-title">Post not found</h1>
          <Link href="/blog" className="btn-primary mt-6 inline-flex">← Back to Journal</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1100px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[#e7dcc8] bg-white/84 shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="bg-[linear-gradient(135deg,#071426_0%,#0d2342_55%,#b98a3d_180%)] p-6 text-white sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="badge bg-white/80 shadow-soft">{post.category}</span>
              <span className="text-xs uppercase tracking-[0.3em] text-white/70">Editorial feature</span>
            </div>
            <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.8rem)] leading-[0.92] tracking-[-0.08em] text-white">{post.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/78">A polished journal article formatted like a premium real-estate magazine feature.</p>
          </div>
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-lg leading-8 text-slate-600">{post.excerpt}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#efe5c3] bg-[#fbf8f0] p-5">
                <div className="section-label">Read time</div>
                <div className="mt-2 text-2xl font-semibold text-[#071426]">5 min read</div>
              </div>
              <div className="rounded-[1.5rem] border border-[#efe5c3] bg-[#fbf8f0] p-5">
                <div className="section-label">Published</div>
                <div className="mt-2 text-2xl font-semibold text-[#071426]">Premium edition</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
