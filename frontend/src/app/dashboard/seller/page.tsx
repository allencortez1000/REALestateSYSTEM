const items = [
  { title: 'Add Properties', desc: 'Publish new listings', count: null },
  { title: 'Edit Listings', desc: 'Update pricing & media', count: 6 },
  { title: 'Offers', desc: 'Pending buyer offers', count: 3 },
  { title: 'Analytics', desc: 'Views & lead tracking', count: null },
  { title: 'Inquiries', desc: 'Buyer messages', count: 7 }
];

export default function SellerDashboardPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[#e7dcc8] bg-white/84 shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="badge bg-white/80 shadow-soft">Seller workspace</span>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.3rem)] leading-[0.9] tracking-[-0.085em] text-[#071426]">Seller Dashboard.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">Listings, leads, and performance tracking in a clean, premium layout for property owners and sellers.</p>
            </div>
            <div className="bg-[linear-gradient(135deg,#071426_0%,#0d2342_55%,#b98a3d_180%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.35em] text-[#d7be8a]">Amica Residences sellers</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">Present your listings with confidence and clarity.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">A polished workspace for every stage of the sales journey.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {items.map((item) => (
            <div key={item.title} className="card card-hover p-6">
              <div className="flex items-start justify-between">
                <div className="section-label">{item.title}</div>
                {item.count ? <span className="rounded-full bg-[#d7be8a] px-2.5 py-0.5 text-xs font-bold text-[#071426]">{item.count}</span> : null}
              </div>
              <p className="mt-3 text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
