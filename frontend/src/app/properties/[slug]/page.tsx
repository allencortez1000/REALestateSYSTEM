import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from '@/components/properties/FavoriteButton';
import { modelHousesBySlug } from '@/data/modelHouses';
import FinancingCalculator from './FinancingCalculator';

type PropertyDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PropertyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = modelHousesBySlug[slug];

  if (!listing) {
    return {
      title: 'Property not found',
      description: 'The requested RHBC/AMICA model-house listing could not be found.'
    };
  }

  return {
    title: listing.title,
    description: listing.description,
    openGraph: {
      title: listing.title,
      description: listing.summary,
      images: [{ url: listing.image }]
    }
  };
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { slug } = await params;
  const listing = modelHousesBySlug[slug];

  if (!listing) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="card max-w-xl p-14 text-center">
          <div className="section-label text-[#b98a3d]">Listing unavailable</div>
          <h1 className="section-title mt-4">Property not found</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Please return to the portfolio to view the featured AMICA residences.
          </p>
          <Link href="/properties" className="btn-primary mt-6 inline-flex">
            ← Back to listings
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative px-4 pb-24 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2.75rem] border border-[rgba(231,220,200,0.95)] bg-white/92 shadow-[0_24px_80px_rgba(9,21,64,0.10)]">
              <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative min-h-[680px] overflow-hidden bg-[#071426]">
                  <Image src={listing.image} alt={listing.title} fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.12)_0%,rgba(7,20,38,0.62)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(185,138,61,0.14),transparent_28%)]" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/14 bg-[#071426]/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white backdrop-blur-md">Featured residence</div>
                  <div className="absolute right-6 top-6 flex max-w-[calc(100%-3rem)] flex-wrap justify-end gap-2">
                    <div className="rounded-full border border-white/60 bg-[rgba(255,252,246,0.92)] px-4 py-2 text-xs font-semibold text-[#071426] shadow-[0_12px_28px_rgba(7,20,38,0.10)]">{listing.availability}</div>
                    <div className="rounded-full border border-white/20 bg-[#071426]/86 px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_28px_rgba(7,20,38,0.16)] backdrop-blur-md">{listing.bestFor}</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                    <div className="max-w-3xl text-white">
                      <div className="section-label text-[#d7be8a]">{listing.location}</div>
                      <h1 className="mt-4 text-[clamp(3rem,7vw,6.5rem)] leading-[0.88] tracking-[-0.09em] text-white">{listing.title}</h1>
                      <p className="mt-5 max-w-2xl text-base leading-8 text-white/82">{listing.tagline}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,243,234,0.96))] p-6 sm:p-8 lg:p-10">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-white p-5">
                      <div className="section-label text-[#b98a3d]">Price</div>
                      <div className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#071426]">{listing.price}</div>
                    </div>
                    <div className="rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-white p-5">
                      <div className="section-label text-[#b98a3d]">Specifications</div>
                      <div className="mt-4 grid gap-3 text-sm text-slate-600">
                        <div className="flex items-center justify-between gap-3 border-b border-[#efe5c3] pb-2"><span>Lot area</span><strong className="text-[#071426]">{listing.lotArea}</strong></div>
                        <div className="flex items-center justify-between gap-3 border-b border-[#efe5c3] pb-2"><span>Floor area</span><strong className="text-[#071426]">{listing.floorArea}</strong></div>
                        <div className="flex items-center justify-between gap-3"><span>Status</span><strong className="text-[#071426]">{listing.availability}</strong></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <a href="#inquiry" className="btn-primary">Schedule viewing</a>
                    <a href="#gallery" className="btn-outline">View gallery</a>
                  </div>

                  <div id="features" className="mt-6 scroll-mt-28 rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.82)] p-5">
                    <div className="section-label">Main features</div>
                    <p className="mt-2 text-sm leading-6 text-slate-500">Quick view of the most important spaces and inclusions for this model.</p>
                    <div className="mt-4 grid gap-3">
                      {listing.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-2xl border border-[rgba(231,220,200,0.85)] bg-white px-4 py-3 text-sm font-medium text-[#071426]">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#071426] text-[10px] font-bold text-white">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav className="sticky top-4 z-20 overflow-hidden rounded-[1.75rem] border border-[#e7dcc8] bg-[rgba(255,255,255,0.92)] p-2 shadow-[0_18px_50px_rgba(9,21,64,0.08)] backdrop-blur-xl">
              <div className="flex gap-2 overflow-x-auto">
                {[
                  ['Overview', '#overview'],
                  ['Features', '#features'],
                  ['Gallery', '#gallery'],
                  ['Floor Plan', '#floor-plan'],
                  ['Design', '#design'],
                  ['Layout', '#layout'],
                  ['Location', '#location'],
                  ['Payment', '#payment'],
                  ['Inquiry', '#inquiry']
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 transition hover:bg-[#071426] hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </nav>

            <section id="gallery" className="scroll-mt-28 rounded-[2rem] border border-[#e7dcc8] bg-white p-5 shadow-[0_18px_50px_rgba(9,21,64,0.07)]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="section-label text-[#b98a3d]">Gallery</div>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">View the model references</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">A simple gallery guide to help buyers identify the main image and supporting design references.</p>
                </div>
                <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6428]">{listing.gallery.length} images</span>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
                {listing.gallery.map((src, index) => {
                  const labels = ['Main exterior', 'Design reference', 'Supporting image'];
                  return (
                    <div key={src} className={`group relative overflow-hidden rounded-[1.75rem] border border-[#e7dcc8] bg-[#071426] ${index === 0 ? 'h-80 md:h-[420px]' : 'h-56 md:h-[420px]'}`}>
                      <Image src={src} alt={`${listing.title} gallery ${index + 1}`} fill className="object-cover transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.02),rgba(7,20,38,0.55))]" />
                      <div className="absolute left-4 top-4 rounded-full border border-white/18 bg-white/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">{labels[index] ?? 'Reference'}</div>
                      <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/14 bg-[#071426]/72 p-4 text-white backdrop-blur-md">
                        <div className="text-xs uppercase tracking-[0.24em] text-[#d7be8a]">Image {index + 1}</div>
                        <div className="mt-1 text-sm font-semibold">{listing.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-3">
              <section id="overview" className="card scroll-mt-28 p-8 lg:col-span-2">
                <div className="section-label">Model overview</div>
                <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.05em] text-[#071426]">{listing.title}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">{listing.description}</p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ['Design type', listing.availability],
                    ['Best for', listing.bestFor],
                    ['Developer', listing.location]
                  ].map(([label, value]) => (
                    <div key={String(label)} className="rounded-2xl border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.82)] p-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{label}</div>
                      <div className="mt-2 text-base font-semibold text-[#071426]">{String(value)}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.75rem] border border-[#e7dcc8] bg-white p-5">
                  <div className="section-label text-[#b98a3d]">How to read this page</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Review the model overview first, then check the design inclusions, house features, size details, and payment computation. If a value says "Not shown," it means the supplied marketing reference did not include that specific detail.
                  </p>
                </div>

                <section className="mt-8 rounded-[2rem] border border-[#e7dcc8] bg-[linear-gradient(135deg,#071426_0%,#0d2342_100%)] p-5 text-white">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <div className="section-label text-[#d7be8a]">Buyer resources</div>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">Downloadable guide preview</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">Quick actions for buyers who want to review the model, computation, or request complete sales details. These are UI-only buttons for now.</p>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-3 lg:min-w-[520px]">
                      <button className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-[#071426] transition hover:bg-[#f8f3e8]">View brochure</button>
                      <button className="rounded-full border border-white/16 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/14">Computation sheet</button>
                      <button className="rounded-full border border-white/16 bg-transparent px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Request full details</button>
                    </div>
                  </div>
                </section>

                <section id="floor-plan" className="mt-8 scroll-mt-28 rounded-[2rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#fbf8f0_0%,#ffffff_100%)] p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="section-label text-[#b98a3d]">Floor plan preview</div>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">Understand the layout at a glance</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">This visual guide is a UI preview based on the available model details. It helps buyers quickly understand the major spaces before reviewing the full feature list.</p>
                    </div>
                    <div className="rounded-full border border-[#e7dcc8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">UI preview</div>
                  </div>

                  <div className="mt-6 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
                    <div className="overflow-hidden rounded-[1.75rem] border border-[#e7dcc8] bg-white p-3 shadow-[0_16px_40px_rgba(9,21,64,0.06)]">
                      <div className="grid min-h-[360px] grid-cols-4 grid-rows-4 gap-2 text-sm font-semibold text-[#071426]">
                        <div className="col-span-2 row-span-2 flex items-center justify-center rounded-[1.25rem] bg-[#071426] p-4 text-center text-white">Living Area</div>
                        <div className="col-span-2 flex items-center justify-center rounded-[1.25rem] bg-[#f4ead8] p-4 text-center">Dining Area</div>
                        <div className="flex items-center justify-center rounded-[1.25rem] bg-[#fbf8f0] p-4 text-center">Kitchen</div>
                        <div className="flex items-center justify-center rounded-[1.25rem] bg-[#fbf8f0] p-4 text-center">T&B</div>
                        <div className="flex items-center justify-center rounded-[1.25rem] bg-[#efe5d0] p-4 text-center">Bedroom</div>
                        <div className="flex items-center justify-center rounded-[1.25rem] bg-[#efe5d0] p-4 text-center">Bedroom</div>
                        <div className="col-span-2 flex items-center justify-center rounded-[1.25rem] bg-[#f8f3ea] p-4 text-center">Carport / Open Space</div>
                        <div className="flex items-center justify-center rounded-[1.25rem] bg-[#efe5d0] p-4 text-center">Bedroom</div>
                        <div className="flex items-center justify-center rounded-[1.25rem] bg-[#efe5d0] p-4 text-center">Bedroom</div>
                        <div className="col-span-2 flex items-center justify-center rounded-[1.25rem] bg-[#d7be8a] p-4 text-center text-[#071426]">Frontage / Entry</div>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {[
                        ['Lot area', listing.lotArea],
                        ['Floor area', listing.floorArea],
                        ['Package type', listing.availability],
                        ['Primary use', 'Family residential living']
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-[1.35rem] border border-[#e7dcc8] bg-white p-4">
                          <div className="text-xs uppercase tracking-[0.28em] text-slate-500">{label}</div>
                          <div className="mt-2 text-lg font-semibold text-[#071426]">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </section>

              <aside id="inquiry" className="card scroll-mt-28 p-8 lg:sticky lg:top-28 lg:self-start">
                <div className="section-label">Inquiry</div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">Speak with our team</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">Book a private viewing or request more details about this residence.</p>

                <div className="mt-6 rounded-[1.5rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#fbf8f0_0%,#ffffff_100%)] p-4">
                  <div className="section-label text-[#b98a3d]">Buyer journey</div>
                  <div className="mt-4 grid gap-3">
                    {[
                      ['01', 'Choose model', 'Review the design, features, and size details.'],
                      ['02', 'Submit inquiry', 'Send your contact details and preferred schedule.'],
                      ['03', 'Schedule viewing', 'Coordinate a model-house visit with the sales team.'],
                      ['04', 'Review computation', 'Check reservation, down payment, and monthly terms.'],
                      ['05', 'Reserve unit', 'Proceed once final terms and availability are confirmed.']
                    ].map(([step, title, text]) => (
                      <div key={step} className="grid grid-cols-[auto_1fr] gap-3 rounded-2xl border border-[rgba(231,220,200,0.85)] bg-white p-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#071426] text-[11px] font-bold text-white">{step}</div>
                        <div>
                          <div className="text-sm font-semibold text-[#071426]">{title}</div>
                          <div className="mt-1 text-xs leading-5 text-slate-500">{text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.82)] p-4">
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Assigned agent</div>
                  <div className="mt-2 text-lg font-semibold text-[#071426]">AMICA Sales Team</div>
                  <div className="text-sm text-slate-500">Metro Manila, Philippines</div>
                </div>
                <div className="mt-5 grid gap-3">
                  <label className="grid gap-2">
                    <span className="sr-only">Your name</span>
                    <input className="input" name="name" autoComplete="name" placeholder="Your name" />
                  </label>
                  <label className="grid gap-2">
                    <span className="sr-only">Email address</span>
                    <input className="input" name="email" type="email" autoComplete="email" placeholder="Email address" />
                  </label>
                  <label className="grid gap-2">
                    <span className="sr-only">Phone number</span>
                    <input className="input" name="phone" type="tel" autoComplete="tel" placeholder="Phone number" />
                  </label>
                  <label className="grid gap-2">
                    <span className="sr-only">Preferred viewing date</span>
                    <input className="input" name="preferredViewingDate" type="date" />
                  </label>
                  <button className="btn-primary mt-2 w-full">Schedule viewing</button>
                  <FavoriteButton slug={listing.slug} className="w-full" />
                </div>
                <div className="mt-6 space-y-3">
                  <a href="tel:+639123456789" className="btn-gold w-full">Call now</a>
                  <a href="mailto:hello@amica.com" className="btn-outline w-full">Send inquiry</a>
                </div>
              </aside>
            </div>
          </div>

          <div className="space-y-6 xl:sticky xl:top-28 xl:self-start">
            <section id="design" className="card scroll-mt-28 p-8">
              <div className="section-label">Design and package details</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">What is included</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">These items explain the design previews, package type, and notable selling points from the reference materials.</p>
              <div className="mt-5 grid gap-3">
                {listing.amenities.map((item, index) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-[rgba(231,220,200,0.85)] bg-[rgba(247,243,234,0.82)] px-4 py-3 text-sm text-[#071426]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b98a3d]">{String(index + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="layout" className="card scroll-mt-28 p-8">
              <div className="section-label">House features</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">Rooms and layout notes</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Use this section to understand the spaces, floor-plan notes, and functional areas included in the model.</p>
              <div className="mt-5 grid gap-3">
                {listing.floorFeatures.map((item, index) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-[rgba(231,220,200,0.85)] bg-white px-4 py-3 text-sm text-[#071426]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6428]">{String(index + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="location" className="card scroll-mt-28 p-8">
              <div className="section-label">Location access</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">Nearby conveniences</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">A simple guide to the community access points and nearby essentials mentioned for this listing.</p>
              <div className="mt-5 grid gap-3">
                {listing.nearby.map((item, index) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-[rgba(231,220,200,0.85)] bg-[rgba(247,243,234,0.82)] px-4 py-3 text-sm text-[#071426]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6428]">{String(index + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="card p-8">
              <div className="section-label">Buyer FAQ</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">Common questions before you inquire</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Quick answers to help buyers understand the next steps. These are UI-only guide notes and can be connected to real policies later.</p>
              <div className="mt-5 grid gap-3">
                {[
                  ['Can I schedule a viewing?', 'Yes. Use the inquiry form or floating button to request a preferred viewing date.'],
                  ['Are the computations final?', 'No. Computations shown are sample references and may change based on approval, terms, and prevailing rates.'],
                  ['What documents should I prepare?', 'Start with a valid government ID, proof of income, reservation form, payment slip, and signed computation sheet.'],
                  ['What does Not shown mean?', 'It means the supplied marketing reference did not include that specific size, financing, or feature detail.']
                ].map(([question, answer]) => (
                  <details key={question} className="group rounded-[1.35rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f0_100%)] p-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#071426]">
                      <span>{question}</span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#071426] text-xs text-white transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {'computation' in listing ? (
              <div id="payment" className="scroll-mt-28 space-y-6">
                <FinancingCalculator price={listing.price} />
                <section className="card overflow-hidden p-0">
                  <div className="border-b border-[#e7dcc8] bg-[linear-gradient(135deg,#071426_0%,#0d2342_100%)] p-6 text-white">
                    <div className="section-label text-[#d7be8a]">Payment guide</div>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">Sample computation</h3>
                    <p className="mt-2 text-sm leading-7 text-white/72">Use this as a quick reference for reservation, down payment, balance, and monthly terms shown in the supplied material.</p>
                  </div>
                  <div className="grid divide-y divide-[#e7dcc8]">
                    {listing.computation?.map(([label, value]) => (
                      <div key={label} className="grid gap-2 bg-white px-6 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                        <div className="text-sm font-medium text-slate-600">{label}</div>
                        <div className="text-base font-semibold text-[#071426] sm:text-right">{value}</div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <div className="fixed bottom-5 left-4 right-4 z-40 rounded-full border border-white/20 bg-[#071426]/94 p-2 shadow-[0_18px_60px_rgba(5,14,30,0.25)] backdrop-blur-xl sm:left-auto sm:right-6 sm:w-auto">
        <div className="flex items-center justify-between gap-3">
          <div className="hidden px-4 text-white sm:block">
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d7be8a]">Interested in this model?</div>
            <div className="text-sm font-semibold">{listing.title}</div>
          </div>
          <a href="#inquiry" className="w-full rounded-full bg-[#d7be8a] px-5 py-3 text-center text-sm font-semibold text-[#071426] transition hover:bg-[#e4cf9f] sm:w-auto">Inquire now</a>
          <a href="tel:+639123456789" className="hidden rounded-full border border-white/14 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:inline-flex">Call</a>
        </div>
      </div>
    </main>
  );
}
