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

export default function SearchPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.93),rgba(247,243,234,0.88))] shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="section-label text-[#b98a3d]">Search</div>
              <h1 className="mt-4 max-w-xl text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.9] tracking-[-0.085em] text-[#071426]">
                Find the right home, faster.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                Browse only the current AMICA model-house listings featured in the portfolio.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {['Buy', 'Rent', 'Model house', 'Condo', 'House', 'Lot', 'Bedrooms', 'Budget'].map((chip) => (
                  <button key={chip} className="rounded-full border border-[rgba(231,220,200,0.95)] bg-white px-4 py-3 text-xs font-semibold text-[#071426] transition hover:border-[#b98a3d] hover:bg-[#fbf8f0]">
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] bg-[linear-gradient(135deg,#071426_0%,#0d2342_62%,#b98a3d_180%)] p-4 sm:p-6 lg:p-8">
              <div className="rounded-[2rem] border border-white/12 bg-[rgba(255,255,255,0.06)] p-5 text-white backdrop-blur-xl sm:p-6">
                <div className="grid gap-3 md:grid-cols-[1.5fr_0.9fr_0.9fr_auto]">
                  <input className="rounded-full border border-white/14 bg-white/[0.08] px-5 py-4 text-sm text-white placeholder:text-white/55 outline-none backdrop-blur-md" placeholder="Search model house" />
                  <input className="rounded-full border border-white/14 bg-white/[0.08] px-5 py-4 text-sm text-white placeholder:text-white/55 outline-none backdrop-blur-md" placeholder="Property type" />
                  <input className="rounded-full border border-white/14 bg-white/[0.08] px-5 py-4 text-sm text-white placeholder:text-white/55 outline-none backdrop-blur-md" placeholder="Budget" />
                  <button className="rounded-full bg-[#d7be8a] px-6 py-4 text-sm font-bold text-[#071426] shadow-gold transition hover:bg-[#e4cf9f]">Search</button>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3">
                  {featuredListings.slice(0, 3).map((listing) => (
                    <article key={listing.title} className="rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-4 backdrop-blur-md">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[#d7be8a]">Featured in portfolio</div>
                      <div className="mt-2 text-lg font-semibold">{listing.title}</div>
                      <div className="mt-2 text-sm text-white/72">{listing.price}</div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {featuredListings.map((listing) => (
            <article key={listing.title} className="card card-hover group overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-[#071426]">
                <Image src={listing.image} alt={listing.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.08),rgba(7,20,38,0.42))]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">Featured</div>
              </div>
              <div className="p-6">
                <div className="section-label text-[#b98a3d]">Luxury residence</div>
                <h3 className="mt-3 text-[clamp(1.5rem,2vw,1.95rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#071426]">{listing.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{listing.lotArea} • {listing.floorArea}</p>
                <div className="mt-4 text-xl font-semibold text-[#b98a3d]">{listing.price}</div>
                <a href={listing.href} className="btn-primary mt-6 inline-flex">View details</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
