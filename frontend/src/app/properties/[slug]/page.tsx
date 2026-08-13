import Image from 'next/image';

const listings = {
  'hera-model-house': {
    slug: 'hera-model-house',
    title: 'HERA MODEL HOUSE',
    tagline: 'Rabino Home Builders Corporation • HERA',
    price: 'PHP 8,000,000.00',
    lotArea: '80 SQM / 100–120 SQM',
    floorArea: '162 SQM / 206 SQM',
    highlights: ['Living Area', '4 Bedrooms', 'Dining Area', 'Carport'],
    floorFeatures: ['2 Toilet & Bath / 2 Common T&B', 'Powder Room', 'Kitchen', 'Fence and Gate', 'Roof Deck'],
    amenities: ['House-only package', 'Model-house package', 'Living room preview', 'Bedroom preview', 'Kitchen preview'],
    nearby: ['Philippine residential communities', 'Schools', 'Retail essentials', 'Transport access'],
    availability: 'House Only / Model House',
    location: 'Rabino Home Builders Corporation',
    description:
      'HERA combines both provided references: the house-only image with 80 sqm lot area and 162 sqm floor area, and the second model-house marketing image with 100–120 sqm lot area and 206 sqm floor area. Both references show the same HERA model but with different specifications, so both are presented together instead of choosing one over the other.',
    image: '/hera-model-house.png',
    gallery: ['/hera-model-house.png', '/hera-model-house.jpg', '/athena-model-house.png'],
    accent: 'bronze',
    computation: [
      ['House-only total contract price', 'PHP 8,000,000.00'],
      ['House-only reservation', 'PHP 50,000.00'],
      ['House-only downpayment', 'PHP 1,950,000.00'],
      ['House-only 6 months', 'PHP 325,000.00/month'],
      ['House-only 12 months', 'PHP 162,500.00/month'],
      ['House-only 24 months', 'PHP 81,250.00/month'],
      ['House-only balance', 'PHP 6,000,000.00'],
      ['House-only 5 years (0%)', 'PHP 100,000.00/month'],
      ['House-only 10 years (7.1%)', 'PHP 71,402.24/month'],
      ['House-only 15 years (7.7%)', 'PHP 57,826.54/month'],
      ['Model-house starting price', 'PHP 8,000,000.00'],
      ['Model-house lot area', '100–120 SQM'],
      ['Model-house floor area', '206 SQM'],
    ],
  },
  'athena-model-house': {
    slug: 'athena-model-house',
    title: 'ATHENA MODEL HOUSE',
    tagline: 'Rabino Home Builders Corporation • ATHENA',
    price: 'Price not shown',
    lotArea: 'Not shown',
    floorArea: 'Not shown',
    highlights: ['Luxury residence', 'Exterior architectural design', 'Refined living', 'Prestige-focused presentation'],
    floorFeatures: ['Financing not shown', 'Lot area not shown', 'Floor area not shown', 'Detailed features not shown'],
    amenities: ['Elegant exterior design', 'Premium architecture', 'Comfort-focused residence', 'Prestige presentation'],
    nearby: ['Philippine residential communities', 'Lifestyle destinations', 'Schools', 'Essential services'],
    availability: 'Reference Image',
    location: 'Rabino Home Builders Corporation',
    description:
      'Experience refined living in this exceptional luxury residence—where architecture meets elegance and every detail is crafted for comfort and prestige. The available reference mainly presents the exterior architectural design of the Athena model.',
    image: '/athena-model-house.png',
    gallery: ['/athena-model-house.png', '/athena-model-house.jpg', '/hera-model-house.png'],
    accent: 'gold',
  },
  'kasandra-model-house': {
    slug: 'kasandra-model-house',
    title: 'KASANDRA MODEL HOUSE',
    tagline: 'Rabino Home Builders Corporation • KASANDRA',
    price: 'PHP 4,000,000.00',
    lotArea: 'Not shown',
    floorArea: 'Not shown',
    highlights: ['In-house financing', 'House only', 'Purposeful rooms', 'Practical family living'],
    floorFeatures: ['TCP', 'Reservation', 'Downpayment', 'Balance'],
    amenities: ['Real-living layout', 'Flexible payment terms', 'Family-ready planning', 'Comfortable home character'],
    nearby: ['Community essentials', 'Schools', 'Transportation', 'Commercial services'],
    availability: 'House Only',
    location: 'Rabino Home Builders Corporation',
    description:
      'Step into a space designed for real living, where every room holds a purpose and every corner feels like home.',
    image: '/kasandra-model-house.png',
    gallery: ['/kasandra-model-house.png', '/kasandra-model-house.jpg', '/joyce-model-house.png'],
    accent: 'olive',
    computation: [
      ['TCP', 'PHP 4,000,000.00'],
      ['Reservation', 'PHP 50,000.00'],
      ['Downpayment', 'PHP 750,000.00'],
      ['6 months', 'PHP 125,000.00/month'],
      ['12 months', 'PHP 62,500.00/month'],
      ['24 months', 'PHP 31,250.00/month'],
      ['Balance', 'PHP 3,200,000.00'],
      ['5 years (0%)', 'PHP 53,333.00/month'],
      ['10 years (7.1%)', 'PHP 38,081.20/month'],
    ],
  },
  'melvin-model-house': {
    slug: 'melvin-model-house',
    title: 'MELVIN MODEL HOUSE',
    tagline: 'Rabino Home Builders Corporation • MELVIN',
    price: 'PHP 2,950,000.00',
    lotArea: 'Not shown',
    floorArea: 'Not shown',
    highlights: ['House & Lot', 'Duplex home', 'In-house financing', 'Functional layout'],
    floorFeatures: ['Reservation', 'Downpayment', '6/12/24-month terms', '5-year and 10-year options'],
    amenities: ['Duplex living', 'Space and style', 'Functional home planning', 'Accessible ownership'],
    nearby: ['Local conveniences', 'Community roads', 'Essential services', 'Transport access'],
    availability: 'House & Lot',
    location: 'Rabino Home Builders Corporation',
    description:
      'Step into elevated living with this beautifully designed duplex home—where space, style, and functionality come together seamlessly.',
    image: '/melvin-model-house.png',
    gallery: ['/melvin-model-house.png', '/melvin-model-house.jpg', '/athena-model-house.png'],
    accent: 'espresso',
    computation: [
      ['TCP', 'PHP 2,950,000.00'],
      ['Reservation', 'PHP 50,000.00'],
      ['Downpayment', 'PHP 540,000.00'],
      ['6 months', 'PHP 90,000.00/month'],
      ['12 months', 'PHP 49,167.00/month'],
      ['24 months', 'PHP 22,500.00/month'],
      ['Balance', 'PHP 2,360,000.00'],
      ['5 years (0%)', 'PHP 39,334.00/month'],
      ['10 years (7.1%)', 'PHP 28,084.88/month'],
    ],
  },
  'joyce-model-house': {
    slug: 'joyce-model-house',
    title: 'JOYCE MODEL HOUSE',
    tagline: 'Rabino Home Builders Corporation • JOYCE',
    price: 'PHP 3,000,000.00',
    lotArea: 'Not shown',
    floorArea: 'Not shown',
    highlights: ['House only', 'In-house financing', 'Purposeful rooms', 'Comfortable daily living'],
    floorFeatures: ['TCP', 'Reservation', 'Downpayment', 'Balance'],
    amenities: ['Practical room planning', 'Flexible payment terms', 'Warm home character', 'Family-focused design'],
    nearby: ['Convenient community access', 'Schools', 'Local retail', 'Public transport'],
    availability: 'House Only',
    location: 'Rabino Home Builders Corporation',
    description:
      'Step into a space designed for real living, where every room holds a purpose and every corner feels like home.',
    image: '/joyce-model-house.png',
    gallery: ['/joyce-model-house.png', '/joyce-model-house.jpg', '/melvin-model-house.png'],
    accent: 'amber',
    computation: [
      ['TCP', 'PHP 3,000,000.00'],
      ['Reservation', 'PHP 50,000.00'],
      ['Downpayment', 'PHP 550,000.00'],
      ['6 months', 'PHP 91,667.00/month'],
      ['12 months', 'PHP 45,833.00/month'],
      ['24 months', 'PHP 22,917.00/month'],
      ['Balance', 'PHP 2,400,000.00'],
      ['5 years (0%)', 'PHP 40,000.00/month'],
      ['10 years (7.1%)', 'PHP 28,560.90/month'],
    ],
  },
  'low-cost-housing': {
    slug: 'low-cost-housing',
    title: 'LOW COST HOUSING PROJECT',
    tagline: 'Bungalow and Duplex Bungalow options',
    price: 'PHP 950,000.00 – PHP 1,400,000.00',
    lotArea: '50 SQM / 80 SQM',
    floorArea: '32.5 SQM',
    highlights: ['Bungalow: 5m × 10m lot', 'Duplex Bungalow: 8m × 10m lot', 'Toilet & Bath', 'Kitchen', 'Bare Type'],
    floorFeatures: ['Bungalow floor dimensions: 5m × 6.5m', 'Duplex floor dimensions: 5m × 6.5m', 'Front/open spaces', 'Kitchen/utility area', 'Duplex includes 2 carport'],
    amenities: ['Low Cost, High Value', 'Affordable Monthly Payment', 'Built for Comfort & Durability', 'Perfect for Starting Families'],
    nearby: ['Community essentials', 'Schools', 'Transport access', 'Local retail'],
    availability: 'Low Cost Housing',
    location: 'Low Cost Housing Project',
    description:
      'The Low Cost Housing Project combines the Bungalow and Duplex Bungalow references in one listing. The Bungalow option is priced at PHP 950,000.00 with 50 sqm lot area and 32.5 sqm floor area. The Duplex Bungalow option is priced at PHP 1,400,000.00 with 80 sqm lot area, 32.5 sqm floor area, and 2 carport. Monthly amortization is subject to bank approval and prevailing interest rate.',
    image: '/kasandra-model-house.png',
    gallery: ['/kasandra-model-house.png', '/melvin-model-house.png', '/joyce-model-house.png'],
    accent: 'olive',
    computation: [
      ['Bungalow price', 'PHP 950,000.00'],
      ['Bungalow reservation fee', 'PHP 20,000.00'],
      ['Bungalow down payment (20%)', 'PHP 170,000.00'],
      ['Bungalow 6 months', 'PHP 28,333.33'],
      ['Bungalow 12 months', 'PHP 14,166.67'],
      ['Bungalow 24 months', 'PHP 7,083.33'],
      ['Bungalow balance (80%)', 'PHP 760,000.00'],
      ['Bungalow 15 years', 'PHP 10,641.13/month'],
      ['Bungalow 20 years', 'PHP 10,013.05/month'],
      ['Bungalow 25 years', 'PHP 9,739.77/month'],
      ['Bungalow 30 years', 'PHP 9,606.19/month'],
      ['Duplex bungalow price', 'PHP 1,400,000.00'],
      ['Duplex reservation', 'PHP 20,000.00'],
      ['Duplex down payment (20%)', 'PHP 260,000.00'],
      ['Duplex 6 months', 'PHP 43,333.33'],
      ['Duplex 12 months', 'PHP 21,666.67'],
      ['Duplex 24 months', 'PHP 10,833.33'],
      ['Duplex balance (80%)', 'PHP 1,120,000.00'],
      ['Duplex 15 years', 'PHP 15,678.34/month'],
      ['Duplex 20 years', 'PHP 14,738.46/month'],
      ['Duplex 25 years', 'PHP 14,212.20/month'],
      ['Duplex 30 years', 'PHP 13,897.40/month'],
    ],
  },
} as const;

type PropertyDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { slug } = await params;
  const listing = listings[slug as keyof typeof listings];

  if (!listing) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="card max-w-xl p-14 text-center">
          <div className="section-label text-[#b98a3d]">Listing unavailable</div>
          <h1 className="section-title mt-4">Property not found</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Please return to the portfolio to view the featured AMICA residences.
          </p>
          <a href="/properties" className="btn-primary mt-6 inline-flex">
            ← Back to listings
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
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
                  <div className="absolute right-6 top-6 rounded-full border border-white/60 bg-[rgba(255,252,246,0.92)] px-4 py-2 text-xs font-semibold text-[#071426] shadow-[0_12px_28px_rgba(7,20,38,0.10)]">{listing.availability}</div>
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

                  <div className="mt-6 rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.82)] p-5">
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

            <div id="gallery" className="grid gap-4 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
              {listing.gallery.map((src, index) => (
                <div key={src} className={`relative overflow-hidden rounded-[1.75rem] border border-[#e7dcc8] bg-[#071426] ${index === 0 ? 'h-80 md:h-[420px]' : 'h-56 md:h-[420px]'}`}>
                  <Image src={src} alt={`${listing.title} gallery ${index + 1}`} fill className="object-cover transition duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.02),rgba(7,20,38,0.3))]" />
                </div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <section className="card p-8 lg:col-span-2">
                <div className="section-label">Model overview</div>
                <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.05em] text-[#071426]">{listing.title}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">{listing.description}</p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ['Design type', listing.availability],
                    ['Best for', 'Family living'],
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
              </section>

              <aside id="inquiry" className="card p-8 lg:sticky lg:top-28 lg:self-start">
                <div className="section-label">Inquiry</div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">Speak with our team</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">Book a private viewing or request more details about this residence.</p>
                <div className="mt-6 rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.82)] p-4">
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Assigned agent</div>
                  <div className="mt-2 text-lg font-semibold text-[#071426]">AMICA Sales Team</div>
                  <div className="text-sm text-slate-500">Metro Manila, Philippines</div>
                </div>
                <div className="mt-5 grid gap-3">
                  <input className="input" placeholder="Your name" />
                  <input className="input" placeholder="Email address" />
                  <input className="input" placeholder="Phone number" />
                  <input className="input" placeholder="Preferred viewing date" />
                  <button className="btn-primary mt-2 w-full">Schedule viewing</button>
                  <button className="btn-outline w-full">Save property</button>
                </div>
                <div className="mt-6 space-y-3">
                  <a href="tel:+639123456789" className="btn-gold w-full">Call now</a>
                  <a href="mailto:hello@amica.com" className="btn-outline w-full">Send inquiry</a>
                </div>
              </aside>
            </div>
          </div>

          <div className="space-y-6 xl:sticky xl:top-28 xl:self-start">
            <section className="card p-8">
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

            <section className="card p-8">
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

            <section className="card p-8">
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

            {'computation' in listing ? (
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
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
