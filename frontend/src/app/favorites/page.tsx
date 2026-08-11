const favoriteListings = [
  {
    title: 'HERA MODEL HOUSE',
    price: 'PHP 8,000,000.00',
    slug: '/properties/hera-model-house',
    image: '/hera-model-house.png',
  },
  {
    title: 'KASANDRA MODEL HOUSE',
    price: 'PHP 4,000,000.00',
    slug: '/properties/kasandra-model-house',
    image: '/kasandra-model-house.png',
  },
  {
    title: 'LOW COST HOUSING PROJECT',
    price: 'PHP 950,000.00 – PHP 1,400,000.00',
    slug: '/properties/low-cost-housing',
    image: '/kasandra-model-house.png',
  },
];

export default function FavoritesPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1560px]">
        <div className="overflow-hidden rounded-[2.5rem] border border-[#dbe5f2] bg-white/84 shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="badge bg-white/80 shadow-soft">Saved</span>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.3rem)] leading-[0.9] tracking-[-0.085em] text-[#08122c]">Your favorites.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">A shortlist of the AMICA model houses you’ve saved for review and comparison.</p>
            </div>
            <div className="bg-[linear-gradient(135deg,#08122c_0%,#0b2d66_55%,#7fd34e_180%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.35em] text-[#f2cf5b]">AMICA favorites</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">Keep track of the listings that matter most.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">Save, compare, and return whenever you're ready to move forward.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {favoriteListings.map((property) => (
            <article key={property.title} className="card card-hover group overflow-hidden">
              <div className="relative h-52 overflow-hidden bg-[linear-gradient(150deg,_#08122c,_#0b2d66_60%,_#7fd34e_180%)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_45%)] transition group-hover:scale-110" />
                <button className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-red-500">♥ Remove</button>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#08122c]">{property.title}</h2>
                <div className="mt-3 text-2xl font-bold text-[#0b2d66]">{property.price}</div>
                <div className="mt-5 flex gap-3">
                  <a href={property.slug} className="btn-outline px-5 py-2 text-xs">View</a>
                  <a href="/compare" className="btn-primary px-5 py-2 text-xs">Compare</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
