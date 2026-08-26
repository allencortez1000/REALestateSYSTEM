import Link from 'next/link';
import HeroSlideshow from '@/components/home/HeroSlideshow';
import PropertyCard from '@/components/properties/PropertyCard';
import PageHero from '@/components/ui/PageHero';
import ResponsiveGrid from '@/components/ui/ResponsiveGrid';
import { brand } from '@/data/brand';
import { getModelHouseHref, homeFeaturedModelHouses, homePaymentPreviews } from '@/data/modelHouses';

const featureBullets = [
  { title: 'Premium residences', text: 'Curated model houses and luxury communities across the Philippines' },
  { title: 'Guided service', text: 'Private viewings, inquiries, and portfolio support with a human touch' },
  { title: 'Investor ready', text: 'Clear pricing, strategic locations, and polished presentation' },
  { title: 'Amica Residences standard', text: 'Editorial design, trusted service, and a refined digital experience' }
];


const homeTypes = [
  {
    title: 'Luxury Residence',
    bestFor: 'Prestige-focused buyers',
    text: 'Premium exterior presentation and elevated design details for buyers who value architecture and status.',
    example: 'ATHENA MODEL HOUSE'
  },
  {
    title: 'House Only',
    bestFor: 'Lot owners and practical buyers',
    text: 'Model-house packages focused on the structure and core living spaces, with sample in-house computations.',
    example: 'KASANDRA / JOYCE'
  },
  {
    title: 'House & Lot',
    bestFor: 'Move-in focused families',
    text: 'Combined home and lot options for buyers who want a more complete ownership package.',
    example: 'MELVIN MODEL HOUSE'
  },
  {
    title: 'Low-Cost Housing',
    bestFor: 'Starting families',
    text: 'Affordable bungalow and duplex bungalow options with flexible payment references.',
    example: 'LOW COST HOUSING PROJECT'
  },
  {
    title: 'Model House',
    bestFor: 'Growing families',
    text: 'Full model-house references with key features, size details, and buyer-friendly presentation.',
    example: 'HERA MODEL HOUSE'
  }
];

const brandStatements = [
  {
    title: 'Vision',
    text: 'To be a trusted leader in homebuilding and community development, transforming the dreams of Filipino families into lasting possibilities through innovative, quality, and sustainable homes.'
  },
  {
    title: 'Mission',
    text: 'Rabino Home Builders Corporation is committed to turning dreams into possibilities by providing quality homes, innovative construction solutions, and exceptional customer service. We strive to build communities that inspire growth, create lasting value, and improve the lives of every family we serve.'
  },
  {
    title: 'Core message',
    text: 'At Rabino Home Builders Corporation, we believe that every family deserves a place to call home. Through integrity, excellence, and innovation, we turn dreams into possibilities — one home, one family, and one community at a time.'
  }
];


const processSteps = [
  { step: '01', title: 'Discover', text: 'Browse curated model houses matched to your budget and lifestyle.' },
  { step: '02', title: 'Compare', text: 'Review amenities, locations, pricing, and the details that matter most.' },
  { step: '03', title: 'Close', text: 'Move from interest to action with guided support and a clear process.' }
];

const buyerJourney = [
  { step: '01', title: 'Choose a model', text: 'Review HERA, ATHENA, KASANDRA, MELVIN, JOYCE, or Low Cost Housing options.' },
  { step: '02', title: 'Check the details', text: 'Understand price, lot area, floor area, features, and sample computation.' },
  { step: '03', title: 'Compare options', text: 'Use the comparison page to see which model fits your needs and budget.' },
  { step: '04', title: 'Schedule a viewing', text: 'Request a model-house viewing or ask the sales team for clarification.' },
  { step: '05', title: 'Prepare documents', text: 'Prepare your valid ID, proof of income, and reservation requirements before final confirmation.' },
  { step: '06', title: 'Reserve your unit', text: 'Proceed once availability, computation, and final terms are confirmed.' }
];

export default function HomePage() {
  return (
    <main className="px-4 pb-6 pt-4 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <PageHero
          className="bg-[linear-gradient(180deg,#fbf8f1_0%,#f4efe6_100%)] shadow-[0_30px_100px_rgba(5,14,30,0.10)]"
          innerClassName="xl:grid-cols-[minmax(0,0.98fr)_minmax(500px,1.02fr)]"
          eyebrow={brand.companyName}
          title={
            <>
              Elegant homes,
              <span className="block text-[#0d2342]">distinctly Amica.</span>
            </>
          }
          description={`${brand.name} presents premium model houses, housing options, and investment-ready residences across the Philippines.`}
          contentClassName="xl:flex xl:min-h-[600px] xl:flex-col xl:justify-center xl:px-8 min-[1400px]:px-10"
          asideClassName="bg-[linear-gradient(180deg,#071426_0%,#13273f_100%)] p-4 sm:p-5 xl:flex xl:min-h-[600px] xl:items-center xl:p-6"
          aside={<HeroSlideshow />}
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/properties" className="btn-primary">Explore residences</Link>
            <Link href="/search" className="btn-outline">Search listings</Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 xl:grid-cols-1 min-[1400px]:grid-cols-3">
            {[
              ['6', 'Model houses'],
              ['Metro Manila', 'Primary market'],
              ['4.9/5', 'Client rating']
            ].map(([value, label]) => (
              <div key={label} className="rounded-[1.35rem] border border-[#e7dcc8] bg-white px-4 py-3 shadow-[0_10px_28px_rgba(5,14,30,0.05)]">
                <div className="break-words text-2xl font-semibold text-[#071426]">{value}</div>
                <div className="mt-1 text-xs uppercase leading-5 tracking-[0.16em] text-slate-500">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 border-t border-[rgba(231,220,200,0.9)] pt-5 sm:grid-cols-2 xl:grid-cols-1 min-[1400px]:grid-cols-2">
            {featureBullets.map((item, index) => {
              const delays = ['animate-reveal', 'animate-reveal-delay-1', 'animate-reveal-delay-2', 'animate-reveal-delay-3'];
              return (
                <div key={item.title} className={`rounded-[1.35rem] border border-[rgba(227,235,246,0.95)] bg-white/92 p-4 text-[#071426] shadow-[0_12px_30px_rgba(5,14,30,0.05)] ${delays[index]}`}>
                  <div className="text-[10px] uppercase leading-4 tracking-[0.16em] text-[#b98a3d]">0{index + 1}</div>
                  <div className="mt-3 text-sm font-semibold">{item.title}</div>
                  <div className="mt-1 text-xs leading-6 text-slate-500">{item.text}</div>
                </div>
              );
            })}
          </div>
        </PageHero>

        <section className="mt-6 rounded-[1.75rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,243,234,0.88))] p-6 shadow-[0_18px_60px_rgba(5,14,30,0.08)] sm:rounded-[2.35rem] sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="section-label text-[#b98a3d]">Choose your home type</div>
              <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-[#071426]">Find the category that matches your budget and lifestyle.</h2>
            </div>
            <Link href="/compare" className="rounded-full border border-[#e7dcc8] bg-white px-5 py-3 text-sm font-semibold text-[#071426] transition hover:border-[#b98a3d] hover:bg-[#fbf8f0]">Compare all models</Link>
          </div>

          <ResponsiveGrid columns="auto" className="mt-7 xl:grid-cols-3 min-[1500px]:grid-cols-5">
            {homeTypes.map((type, index) => (
              <article key={type.title} className="group rounded-[1.75rem] border border-[#e7dcc8] bg-white p-5 shadow-[0_14px_36px_rgba(5,14,30,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(5,14,30,0.10)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071426] text-xs font-bold text-white">0{index + 1}</div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-[#071426]">{type.title}</h3>
                <div className="mt-3 inline-flex rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-3 py-1 text-[10px] font-semibold uppercase leading-4 tracking-[0.16em] text-[#8a6428]">Best for {type.bestFor}</div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{type.text}</p>
                <div className="mt-5 border-t border-[#f0e5d1] pt-4">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Example</div>
                  <div className="mt-1 text-sm font-semibold text-[#071426]">{type.example}</div>
                </div>
              </article>
            ))}
          </ResponsiveGrid>
        </section>

        <section className="mt-6 overflow-hidden rounded-[2.35rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(135deg,#071426_0%,#0d2342_62%,#13273f_100%)] p-6 text-white shadow-[0_18px_60px_rgba(5,14,30,0.10)] sm:p-8">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,0.85fr)_minmax(360px,1.15fr)] xl:items-center">
            <div>
              <div className="section-label text-[#d7be8a]">Sample monthly payment</div>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-white">Preview affordability before you inquire.</h2>
              <p className="mt-4 text-sm leading-7 text-white/72">These are UI-only sample computations based on the provided reference materials. Final terms are subject to approval and prevailing rates.</p>
            </div>

            <ResponsiveGrid columns="auto" className="md:grid-cols-2 min-[1400px]:grid-cols-3">
              {homePaymentPreviews.map((item) => (
                <article key={item.model} className="rounded-[1.65rem] border border-white/12 bg-white/[0.08] p-5 backdrop-blur-sm">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d7be8a]">{item.model}</div>
                  <div className="mt-4 text-sm text-white/62">Starting price</div>
                  <div className="mt-1 text-lg font-semibold text-white">{item.price}</div>
                  <div className="mt-4 rounded-[1.2rem] bg-white p-4 text-[#071426]">
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Sample monthly</div>
                    <div className="mt-2 text-xl font-semibold tracking-[-0.04em]">{item.monthly}</div>
                    <div className="mt-1 text-xs text-slate-500">{item.term}</div>
                  </div>
                </article>
              ))}
            </ResponsiveGrid>
          </div>
        </section>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="grid gap-4">
            <section className="rounded-[1.75rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,243,234,0.88))] p-6 shadow-[0_18px_60px_rgba(5,14,30,0.08)] sm:rounded-[2.35rem] sm:p-8">
              <div className="section-label">Featured model houses</div>
              <div className="mt-4 flex items-end justify-between gap-4">
                <div>
                  <h2 className="section-title text-[clamp(1.8rem,4vw,3rem)] text-[#071426]">Curated residences with editorial confidence.</h2>
                </div>
                <Link href="/properties" className="hidden rounded-full border border-[#e7dcc8] px-4 py-2 text-sm font-semibold text-[#071426] transition hover:border-[#b98a3d] hover:bg-white md:inline-flex">View all</Link>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 min-[1400px]:grid-cols-3">
                {homeFeaturedModelHouses.map((community, index) => (
                  <PropertyCard key={community.slug} listing={community} label={`Featured 0${index + 1}`} variant="compact" showFavorite={false} />
                ))}
              </div>
            </section>

            <section className="rounded-[2.35rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,243,234,0.88))] p-6 shadow-[0_18px_60px_rgba(5,14,30,0.08)] backdrop-blur-sm sm:p-8">
              <div className="flex flex-col gap-4 min-[1400px]:flex-row min-[1400px]:items-center min-[1400px]:justify-between">
                <div>
                  <div className="section-label">How it works</div>
                  <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-[#071426]">A simple path to your next home.</h2>
                </div>
                <Link href="/contact" className="rounded-full border border-[#e7dcc8] bg-white px-5 py-3 text-sm font-semibold text-[#071426] transition hover:border-[#b98a3d] hover:bg-[#fbf8f0]">Talk to sales</Link>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {processSteps.map((step) => (
                  <div key={step.step} className="rounded-[1.5rem] border border-[rgba(227,235,246,0.95)] bg-white p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7dcc8] bg-[#fbf8f0] text-xs font-bold text-[#8a6428]">{step.step}</div>
                    <div className="mt-4 text-sm font-semibold text-[#071426]">{step.title}</div>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{step.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="flex">
            <section className="relative flex min-h-full flex-col overflow-hidden rounded-[2.35rem] border border-[rgba(215,190,138,0.38)] bg-[radial-gradient(circle_at_top_left,rgba(215,190,138,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%),linear-gradient(160deg,#071426_0%,#0d2342_58%,#13273f_100%)] p-6 text-white shadow-[0_24px_80px_rgba(5,14,30,0.18)] sm:p-8 lg:p-10 xl:p-11">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10 bg-white/[0.03]" />
              <div className="pointer-events-none absolute -bottom-24 left-8 h-44 w-44 rounded-full bg-[#d7be8a]/10 blur-3xl" />

              <div className="relative flex flex-1 flex-col">
                <div className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 backdrop-blur-md">
                  <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.24em] text-[#d7be8a]">{brand.companyName}</span>
                </div>

                <h2 className="mt-6 text-[clamp(2.15rem,4.4vw,3.45rem)] font-semibold leading-[1.02] tracking-[-0.065em] text-white">Turning dreams into possibilities.</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">Official brand foundation guiding every home, family, and community we serve.</p>

                <div className="mt-8 grid flex-1 content-between gap-4">
                  {brandStatements.map((item, index) => (
                    <article key={item.title} className="group rounded-[1.85rem] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.06))] p-5 shadow-[0_18px_42px_rgba(0,0,0,0.12)] backdrop-blur-sm transition hover:border-[#d7be8a]/40 hover:bg-white/[0.11] sm:p-6">
                      <div>
                        <div className="text-base font-extrabold uppercase leading-6 tracking-[0.28em] text-[#d7be8a] sm:text-lg">{item.title}</div>
                        <p className="mt-4 text-[0.95rem] leading-8 text-white/78">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </aside>
        </div>

        <section className="mt-6 rounded-[2.35rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,243,234,0.88))] p-6 shadow-[0_18px_60px_rgba(5,14,30,0.08)] sm:p-8">
          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,0.8fr)_minmax(360px,1.2fr)] xl:items-start">
            <div>
              <div className="section-label text-[#b98a3d]">Buyer journey</div>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-[#071426]">From browsing to reservation, clearly explained.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">This UI guide helps buyers understand the next steps before speaking with the sales team.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/properties" className="btn-primary">Browse models</Link>
                <Link href="/compare" className="btn-outline">Compare models</Link>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {buyerJourney.map((item) => (
                <article key={item.step} className="rounded-[1.5rem] border border-[#e7dcc8] bg-white p-5 shadow-[0_12px_32px_rgba(5,14,30,0.05)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#071426] text-xs font-bold text-white">{item.step}</div>
                    <div>
                      <h3 className="text-base font-semibold text-[#071426]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-[2.35rem] border border-[rgba(231,220,200,0.96)] bg-[linear-gradient(135deg,#071426_0%,#0d2342_62%,#13273f_100%)] px-6 py-8 text-white shadow-[0_18px_60px_rgba(5,14,30,0.10)] sm:px-8 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="section-label text-[#d7be8a]">Start here</div>
              <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">Built for buyers, sellers, and administrators in one premium system.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/74">Amica Residences is designed to feel modern, clean, and trustworthy — with strong branding, clear hierarchy, and a quietly luxurious finish.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/auth/register" className="btn-outline bg-white text-[#071426] hover:bg-[#f8f3e8]">Create account</Link>
              <Link href="/auth/login" className="rounded-full border border-white/18 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/14">Login</Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
