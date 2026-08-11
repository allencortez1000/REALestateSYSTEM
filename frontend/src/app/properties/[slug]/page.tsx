import Image from 'next/image';

const listings = {
  'athena-model-house': {
    slug: 'athena-model-house',
    title: 'ATHENA MODEL HOUSE',
    tagline: 'ELEVATE YOUR LIVING EXPERIENCE',
    price: 'Starting at PHP 6,800,000.00',
    lotArea: '80 SQM',
    floorArea: '162 SQM',
    highlights: ['Living Room', '3 Bedrooms', 'Dining Area', 'Carport'],
    floorFeatures: ['Dining Area', '2 Common T&B', 'Roof Deck'],
    amenities: ['Private driveway', 'Natural light', 'Open living plan', 'Roof deck lounge'],
    nearby: ['Metro Manila business districts', 'Lifestyle malls', 'Premium schools', 'Healthcare access'],
    availability: 'For Sale',
    location: 'Philippines',
    description:
      'Athena Model House is presented as a refined family residence with a generous interior flow, balanced proportions, and a premium facade experience that feels both modern and welcoming.',
    image: '/athena-model-house.png',
    gallery: ['/athena-model-house.png', '/hera-model-house.png', '/joyce-model-house.png'],
    accent: 'gold',
  },
  'hera-model-house': {
    slug: 'hera-model-house',
    title: 'HERA MODEL HOUSE',
    tagline: 'ELEVATE YOUR LIVING EXPERIENCE',
    price: 'PHP 8,000,000.00',
    lotArea: '100–120 SQM',
    floorArea: '206 SQM',
    highlights: ['Kitchen', 'Living Area', 'Dining Area', 'Carport'],
    floorFeatures: ['4 Bedrooms', '2 Common T&B', '1 Powder Room', 'Fence & Gate'],
    amenities: ['Wide balcony', 'Private garage', 'Expansive dining space', 'Family lounge'],
    nearby: ['CBD districts', 'Schools and hospitals', 'Retail and leisure', 'Transport connections'],
    availability: 'New Launching',
    location: 'Philippines',
    description:
      'HERA Model House is a thoughtfully planned residential home designed for families who value space, style, and serenity, with elevated interiors and a timeless luxury presentation.',
    image: '/hera-model-house.png',
    gallery: ['/hera-model-house.png', '/karla-model-house.png', '/kasandra-model-house.png'],
    accent: 'bronze',
  },
  'joyce-model-house': {
    slug: 'joyce-model-house',
    title: 'JOYCE MODEL HOUSE',
    tagline: 'ELEVATE YOUR LIVING EXPERIENCE',
    price: 'PHP 3,600,000.00',
    lotArea: '80 SQM',
    floorArea: '69 SQM',
    highlights: ['Kitchen', 'Living Area', 'Dining Area', 'Carport'],
    floorFeatures: ['4 Bedrooms', '2 Common T&B', '1 Powder Room', 'Fence & Gate'],
    amenities: ['Compact family plan', 'Efficient floor flow', 'In-house financing', 'Private outdoor space'],
    nearby: ['Convenient community access', 'Schools', 'Local retail', 'Public transport'],
    availability: 'In-House Financing',
    location: 'Philippines',
    description:
      'Joyce Model House is a compact yet refined family home designed to deliver quality living, smart investment value, and a warm residential experience with practical in-house financing options.',
    image: '/joyce-model-house.png',
    gallery: ['/joyce-model-house.png', '/athena-model-house.png', '/melvin-model-house.png'],
    accent: 'amber',
    computation: [
      ['Total contract price', 'PHP 3,600,000.00'],
      ['Reservation', 'PHP 50,000.00'],
      ['Downpayment', 'PHP 670,000.00'],
      ['Balance', 'PHP 2,880,000.00'],
      ['6 months', 'PHP 111,667.00'],
      ['12 months', 'PHP 55,834.00'],
      ['24 months', 'PHP 27,917.00'],
      ['5 years (0%)', 'PHP 48,000.00'],
      ['10 years (7.1%)', 'PHP 34,273.08'],
    ],
  },
  'karla-model-house': {
    slug: 'karla-model-house',
    title: 'KARLA MODEL HOUSE',
    tagline: 'LUXURY LIVING IN EVERY CORNER',
    price: 'PRICE STARTS PHP 5,500,000.00',
    lotArea: '100–120 SQM',
    floorArea: '124 SQM',
    highlights: ['3 Bedrooms', '3 Bathrooms', 'Modern kitchen', 'Spacious living area'],
    floorFeatures: ['Fence & Gate', 'Vault Type Door', 'Balcony'],
    amenities: ['Open dining area', 'Feature balcony', 'Secure frontage', 'Modern finishes'],
    nearby: ['Urban conveniences', 'Retail centers', 'Work hubs', 'Lifestyle amenities'],
    availability: 'Available Now',
    location: 'Philippines',
    description:
      'Karla Model is a stylish family residence with a modern layout, generous living spaces, and refined features designed for comfortable everyday living.',
    image: '/karla-model-house.png',
    gallery: ['/karla-model-house.png', '/hera-model-house.png', '/athena-model-house.png'],
    accent: 'sand',
  },
  'kasandra-model-house': {
    slug: 'kasandra-model-house',
    title: 'KASANDRA MODEL HOUSE',
    tagline: 'ELEVATE YOUR LIVING EXPERIENCE',
    price: 'PHP 4,100,000.00',
    lotArea: '80 SQM',
    floorArea: '85 SQM',
    highlights: ['PAG-IBIG Financing', 'Total Contract Price', 'Reservation', 'Downpayment'],
    floorFeatures: ['12 Months', '6 Months', 'Loanable Amount', '5 to 30 Years'],
    amenities: ['Practical family plan', 'Long-term financing', 'Clean modern facade', 'Efficient lot use'],
    nearby: ['Community essentials', 'Schools', 'Transportation', 'Commercial services'],
    availability: 'PAG-IBIG Financing',
    location: 'Philippines',
    description:
      'Kasandra Model is a practical family home with a premium presentation and a financing structure suited for long-term ownership through Pag-IBIG.',
    image: '/kasandra-model-house.png',
    gallery: ['/kasandra-model-house.png', '/joyce-model-house.png', '/melvin-model-house.png'],
    accent: 'olive',
    computation: [
      ['Total contract price', 'PHP 4,100,000.00'],
      ['Reservation', 'PHP 50,000.00'],
      ['Downpayment', 'PHP 550,000.00'],
      ['12 months', 'PHP 22,916.00'],
      ['6 months', 'PHP 45,833.00'],
      ['Loanable amount', 'PHP 3,500,000.00'],
      ['5 years', 'PHP 69,269.09'],
      ['10 years', 'PHP 41,651.31'],
      ['15 years', 'PHP 33,732.15'],
      ['20 years', 'PHP 31,161.31'],
      ['25 years', 'PHP 30,459.55'],
      ['30 years', 'PHP 30,857.90'],
    ],
  },
  'melvin-model-house': {
    slug: 'melvin-model-house',
    title: 'MELVIN MODEL HOUSE',
    tagline: 'ELEVATE YOUR LIVING EXPERIENCE',
    price: 'PHP 2,950,000.00',
    lotArea: '80 SQM',
    floorArea: '51.6 SQM',
    highlights: ['In-House Financing', 'Total Contract Price', 'Reservation', 'Downpayment'],
    floorFeatures: ['6 Months', '12 Months', '24 Months', '5 Years', '10 Years'],
    amenities: ['Accessible pricing', 'Practical footprint', 'In-house financing', 'Compact luxury feel'],
    nearby: ['Local conveniences', 'Community roads', 'Essential services', 'Transport access'],
    availability: 'In-House Financing',
    location: 'Philippines',
    description:
      'Melvin Model offers a compact, practical home with a luxury presentation and a financing structure designed for accessible ownership.',
    image: '/melvin-model-house.png',
    gallery: ['/melvin-model-house.png', '/athena-model-house.png', '/hera-model-house.png'],
    accent: 'espresso',
    computation: [
      ['Total contract price', 'PHP 2,950,000.00'],
      ['Reservation', 'PHP 50,000.00'],
      ['Downpayment', 'PHP 540,000.00'],
      ['Balance', 'PHP 2,300,000.00'],
      ['6 months', 'PHP 90,000.00'],
      ['12 months', 'PHP 49,167.00'],
      ['24 months', 'PHP 22,500.00'],
      ['5 years (0%)', 'PHP 39,334.00'],
      ['10 years (7.1%)', 'PHP 28,084.88'],
    ],
  },
} as const;

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const listing = listings[params.slug as keyof typeof listings];

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
                    <div className="section-label">Key details</div>
                    <div className="mt-4 grid gap-3">
                      {listing.highlights.map((item) => (
                        <div key={item} className="rounded-2xl border border-[rgba(231,220,200,0.85)] bg-white px-4 py-3 text-sm font-medium text-[#071426]">{item}</div>
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
                <div className="section-label">Overview</div>
                <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.05em] text-[#071426]">{listing.title}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">{listing.description}</p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ['Style', 'Luxury model house'],
                    ['Suitability', 'Family living'],
                    ['Status', listing.availability]
                  ].map(([label, value]) => (
                    <div key={String(label)} className="rounded-2xl border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.82)] p-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{label}</div>
                      <div className="mt-2 text-base font-semibold text-[#071426]">{String(value)}</div>
                    </div>
                  ))}
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
              <div className="section-label">Amenities</div>
              <div className="mt-4 grid gap-3">
                {listing.amenities.map((item, index) => (
                  <div key={item} className="rounded-2xl border border-[rgba(231,220,200,0.85)] bg-[rgba(247,243,234,0.82)] px-4 py-3 text-sm text-[#071426]">
                    <span className="mr-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b98a3d]">0{index + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="card p-8">
              <div className="section-label">Nearby landmarks</div>
              <div className="mt-4 grid gap-3">
                {listing.nearby.map((item, index) => (
                  <div key={item} className="rounded-2xl border border-[rgba(231,220,200,0.85)] bg-[rgba(247,243,234,0.82)] px-4 py-3 text-sm text-[#071426]">
                    <span className="mr-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6428]">0{index + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="card p-8">
              <div className="section-label">Floor features</div>
              <div className="mt-4 grid gap-3">
                {listing.floorFeatures.map((item, index) => (
                  <div key={item} className="rounded-2xl border border-[rgba(231,220,200,0.85)] bg-[rgba(247,243,234,0.82)] px-4 py-3 text-sm text-[#071426]">
                    <span className="mr-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6428]">0{index + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {listing.slug === 'joyce-model-house' || listing.slug === 'kasandra-model-house' || listing.slug === 'melvin-model-house' ? (
              <section className="card p-8">
                <div className="section-label">Computation</div>
                <div className="mt-4 grid gap-3">
                  {listing.computation?.map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-[rgba(231,220,200,0.85)] bg-[rgba(247,243,234,0.82)] px-4 py-3">
                      <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{label}</div>
                      <div className="mt-1 text-sm font-semibold text-[#071426]">{value}</div>
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
