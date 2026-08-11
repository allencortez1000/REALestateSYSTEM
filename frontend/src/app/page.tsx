import Image from 'next/image';
import HeroSlideshow from '@/components/home/HeroSlideshow';

const featureBullets = [
  { title: 'Premium residences', text: 'Curated model houses and luxury communities across the Philippines' },
  { title: 'Guided service', text: 'Private viewings, inquiries, and portfolio support with a human touch' },
  { title: 'Investor ready', text: 'Clear pricing, strategic locations, and polished presentation' },
  { title: 'AMICA standard', text: 'Editorial design, trusted service, and a refined digital experience' }
];

const communities = [
  {
    title: 'HERA MODEL HOUSE',
    area: '80 / 100–120 SQM • 162 / 206 SQM',
    price: 'PHP 8,000,000.00',
    summary: 'Combined HERA reference covering the house-only and model-house marketing specifications.',
    accent: 'bg-[#b98a3d]'
  },
  {
    title: 'KASANDRA MODEL HOUSE',
    area: 'Size not shown',
    price: 'PHP 4,000,000.00',
    summary: 'A house-only model designed for real living with flexible in-house financing.',
    accent: 'bg-[#17365f]'
  },
  {
    title: 'LOW COST HOUSING PROJECT',
    area: '50 / 80 SQM • 32.5 SQM',
    price: 'PHP 950,000.00 – PHP 1,400,000.00',
    summary: 'Merged bungalow and duplex bungalow options for affordable home ownership.',
    accent: 'bg-[#0d2342]'
  }
];

const serviceCards = [
  { title: 'Buyer advisory', text: 'Shortlist, compare, and schedule private tours with confidence.' },
  { title: 'Seller marketing', text: 'Present your property with a premium listing experience and stronger visibility.' },
  { title: 'Admin oversight', text: 'Manage inquiries, approvals, and operations from a clear dashboard.' }
];

const processSteps = [
  { step: '01', title: 'Discover', text: 'Browse curated model houses matched to your budget and lifestyle.' },
  { step: '02', title: 'Compare', text: 'Review amenities, locations, pricing, and the details that matter most.' },
  { step: '03', title: 'Close', text: 'Move from interest to action with guided support and a clear process.' }
];

export default function HomePage() {
  return (
    <main className="px-4 pb-6 pt-4 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#fbf8f1_0%,#f4efe6_100%)] shadow-[0_30px_100px_rgba(5,14,30,0.10)]">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="px-6 pb-8 pt-6 sm:px-8 lg:px-10 lg:pb-10 lg:pt-8">
              <div className="max-w-xl animate-reveal">
                <div className="flex items-center gap-3">
                  <Image src="/amicarealestate.jpg" alt="AMICA Condominium Realty Corporation" width={300} height={100} className="h-20 w-auto object-contain" priority />
                </div>
                <div className="mt-6 section-label text-[#b98a3d]">Condominium realty corporation</div>
                <h1 className="mt-5 text-[clamp(3rem,6.2vw,6.2rem)] leading-[0.9] tracking-[-0.09em] text-[#071426]">
                  Elegant homes,
                  <span className="block text-[#0d2342]">distinctly AMICA.</span>
                </h1>
                <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
                  A luxury real estate platform for premium model houses, condominium residences, and investment opportunities across the Philippines.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="/properties" className="btn-primary">Explore residences</a>
                  <a href="/search" className="btn-outline">Search listings</a>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.35rem] border border-[#e7dcc8] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(5,14,30,0.05)]">
                    <div className="text-2xl font-semibold text-[#071426]">6</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">Model houses</div>
                  </div>
                  <div className="rounded-[1.35rem] border border-[#e7dcc8] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(5,14,30,0.05)]">
                    <div className="text-2xl font-semibold text-[#071426]">Metro Manila</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">Primary market</div>
                  </div>
                  <div className="rounded-[1.35rem] border border-[#e7dcc8] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(5,14,30,0.05)]">
                    <div className="text-2xl font-semibold text-[#071426]">4.9/5</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">Client rating</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 pb-4 pt-0 sm:px-5 lg:px-6 lg:pt-6">
              <HeroSlideshow />
            </div>
          </div>

          <div className="grid gap-3 border-t border-[rgba(231,220,200,0.9)] bg-[linear-gradient(180deg,rgba(247,243,234,0.86),rgba(255,255,255,0.92))] p-4 sm:grid-cols-2 xl:grid-cols-4 sm:p-5">
            {featureBullets.map((item, index) => {
              const delays = ['animate-reveal', 'animate-reveal-delay-1', 'animate-reveal-delay-2', 'animate-reveal-delay-3'];
              return (
                <div key={item.title} className={`rounded-[1.5rem] border border-[rgba(227,235,246,0.95)] bg-white/92 p-5 text-[#071426] shadow-[0_12px_30px_rgba(5,14,30,0.05)] ${delays[index]}`}>
                  <div className="text-[10px] uppercase tracking-[0.34em] text-[#b98a3d]">0{index + 1}</div>
                  <div className="mt-3 text-sm font-semibold">{item.title}</div>
                  <div className="mt-1 text-xs leading-6 text-slate-500">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[2.35rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,243,234,0.88))] p-6 shadow-[0_18px_60px_rgba(5,14,30,0.08)] sm:p-8">
            <div className="section-label">Featured model houses</div>
            <div className="mt-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="section-title text-[clamp(1.8rem,4vw,3rem)] text-[#071426]">Curated residences with editorial confidence.</h2>
              </div>
              <a href="/properties" className="hidden rounded-full border border-[#e7dcc8] px-4 py-2 text-sm font-semibold text-[#071426] transition hover:border-[#b98a3d] hover:bg-white md:inline-flex">View all</a>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {communities.map((community, index) => (
                <article key={community.title} className="group rounded-[1.85rem] border border-[rgba(227,235,246,0.95)] bg-white p-4 shadow-[0_14px_36px_rgba(5,14,30,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(185,138,61,0.28)] hover:shadow-[0_24px_60px_rgba(5,14,30,0.10)]">
                  <div className={`h-1.5 w-16 rounded-full ${community.accent}`} />
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.34em] text-[#b98a3d]">0{index + 1}</div>
                      <h3 className="mt-2 text-lg font-semibold text-[#071426]">{community.title}</h3>
                    </div>
                    <div className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-3 py-1.5 text-xs font-semibold text-[#8a6428]">{community.area}</div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-500">{community.summary}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#f0e5d1] pt-4">
                    <span className="text-sm font-semibold text-[#b98a3d]">{community.price}</span>
                    <a href="/properties" className="text-sm font-semibold text-[#071426] transition group-hover:text-[#0d2342]">Details →</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="grid gap-4">
            <section className="rounded-[2.35rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,#071426_0%,#0d2342_72%,#13273f_100%)] p-6 text-white shadow-[0_18px_60px_rgba(5,14,30,0.10)] sm:p-8">
              <div className="section-label text-[#d7be8a]">Why AMICA</div>
              <h2 className="mt-4 text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-white">A clearer, more premium real estate journey.</h2>
              <div className="mt-6 grid gap-3">
                {serviceCards.map((item, index) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-white/12 bg-white/[0.06] p-4">
                    <div className="text-[10px] uppercase tracking-[0.34em] text-[#d7be8a]">0{index + 1}</div>
                    <div className="mt-2 text-sm font-semibold text-white">{item.title}</div>
                    <p className="mt-1 text-sm leading-6 text-white/72">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2.35rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,243,234,0.88))] p-6 shadow-[0_18px_60px_rgba(5,14,30,0.08)] backdrop-blur-sm sm:p-8">
              <div className="section-label">How it works</div>
              <div className="mt-4 grid gap-3">
                {processSteps.map((step) => (
                  <div key={step.step} className="rounded-[1.5rem] border border-[rgba(227,235,246,0.95)] bg-white p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7dcc8] bg-[#fbf8f0] text-xs font-bold text-[#8a6428]">{step.step}</div>
                      <div>
                        <div className="text-sm font-semibold text-[#071426]">{step.title}</div>
                        <p className="mt-1 text-sm leading-6 text-slate-500">{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>

        <section className="mt-6 overflow-hidden rounded-[2.35rem] border border-[rgba(231,220,200,0.96)] bg-[linear-gradient(135deg,#071426_0%,#0d2342_62%,#13273f_100%)] px-6 py-8 text-white shadow-[0_18px_60px_rgba(5,14,30,0.10)] sm:px-8 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="section-label text-[#d7be8a]">Start here</div>
              <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">Built for buyers, sellers, and administrators in one premium system.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/74">AMICA is designed to feel modern, clean, and trustworthy — with strong branding, clear hierarchy, and a quietly luxurious finish.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href="/auth/register" className="btn-outline bg-white text-[#071426] hover:bg-[#f8f3e8]">Create account</a>
              <a href="/auth/login" className="rounded-full border border-white/18 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/14">Login</a>
              <a href="/dashboard/customer" className="rounded-full border border-white/18 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Customer portal</a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
