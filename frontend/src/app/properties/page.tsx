import Image from 'next/image';

const featuredListings = [
  {
    title: 'ATHENA MODEL HOUSE',
    price: 'Starting at PHP 6,800,000.00',
    lotArea: '80 SQM',
    floorArea: '162 SQM',
    href: '/properties/athena-model-house',
    image: '/athena-model-house.png'
  },
  {
    title: 'HERA MODEL HOUSE',
    price: 'PHP 8,000,000.00',
    lotArea: '100–120 SQM',
    floorArea: '206 SQM',
    href: '/properties/hera-model-house',
    image: '/hera-model-house.png'
  },
  {
    title: 'JOYCE MODEL HOUSE',
    price: 'PHP 3,600,000.00',
    lotArea: '80 SQM',
    floorArea: '69 SQM',
    href: '/properties/joyce-model-house',
    image: '/joyce-model-house.png'
  },
  {
    title: 'KARLA MODEL HOUSE',
    price: 'PRICE STARTS PHP 5,500,000.00',
    lotArea: '100–120 SQM',
    floorArea: '124 SQM',
    href: '/properties/karla-model-house',
    image: '/karla-model-house.png'
  },
  {
    title: 'KASANDRA MODEL HOUSE',
    price: 'PHP 4,100,000.00',
    lotArea: '80 SQM',
    floorArea: '85 SQM',
    href: '/properties/kasandra-model-house',
    image: '/kasandra-model-house.png'
  },
  {
    title: 'MELVIN MODEL HOUSE',
    price: 'PHP 2,950,000.00',
    lotArea: '80 SQM',
    floorArea: '51.6 SQM',
    href: '/properties/melvin-model-house',
    image: '/melvin-model-house.png'
  }
];

export default function PropertiesPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[#e7dcc8] bg-white/84 shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.92fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="section-label text-[#b98a3d]">Portfolio</div>
              <h1 className="mt-4 max-w-xl text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.9] tracking-[-0.085em] text-[#071426]">
                Curated residences with an AMICA signature.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Browse a premium collection of model houses presented with stronger hierarchy, quieter spacing, and a more luxurious cadence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Model houses</span>
                <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Luxury homes</span>
                <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Investment ready</span>
              </div>
            </div>

            <div className="relative min-h-[320px] bg-[linear-gradient(135deg,#071426_0%,#0d2342_55%,#b98a3d_180%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] backdrop-blur-md">AMICA</div>
              <div className="flex h-full items-end">
                <div className="max-w-sm">
                  <div className="text-xs uppercase tracking-[0.35em] text-[#d7be8a]">Featured portfolio</div>
                  <div className="mt-4 text-3xl font-semibold leading-tight">Designed to present residences with editorial confidence.</div>
                  <p className="mt-4 text-sm leading-7 text-white/72">A gallery-like layout that makes each listing feel considered, aspirational, and easy to compare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredListings.map((listing) => (
            <article key={listing.title} className="card card-hover group overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-[#071426]">
                <Image src={listing.image} alt={listing.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.08),rgba(7,20,38,0.42))]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">Featured</div>
              </div>
              <div className="p-6">
                <div className="section-label text-[#b98a3d]">Luxury residence</div>
                <h2 className="mt-3 text-[clamp(2rem,3vw,2.75rem)] leading-[0.95] tracking-[-0.06em] text-[#071426]">{listing.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">{listing.lotArea} • {listing.floorArea}</p>
                <div className="mt-5 text-2xl font-semibold text-[#b98a3d]">{listing.price}</div>
                <a href={listing.href} className="btn-primary mt-6 inline-flex">View details</a>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
