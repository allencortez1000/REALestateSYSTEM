const comparisonListings = [
  {
    title: 'HERA MODEL HOUSE',
    size: '80 / 100–120 SQM lot • 162 / 206 SQM floor',
    price: 'PHP 8,000,000.00',
    features: 'Living Area, 4 Bedrooms, Dining Area, Carport, Kitchen, Powder Room, 2 T&B / 2 Common T&B, Fence and Gate, Roof Deck',
    type: 'House Only / Model House',
  },
  {
    title: 'ATHENA MODEL HOUSE',
    size: 'Not shown',
    price: 'Not shown',
    features: 'Exterior architectural design reference; detailed features not shown',
    type: 'Luxury Residence',
  },
  {
    title: 'KASANDRA MODEL HOUSE',
    size: 'Not shown',
    price: 'PHP 4,000,000.00',
    features: 'House-only in-house financing reference',
    type: 'House Only',
  },
  {
    title: 'MELVIN MODEL HOUSE',
    size: 'Not shown',
    price: 'PHP 2,950,000.00',
    features: 'Beautifully designed duplex home',
    type: 'House & Lot',
  },
  {
    title: 'JOYCE MODEL HOUSE',
    size: 'Not shown',
    price: 'PHP 3,000,000.00',
    features: 'House-only in-house financing reference',
    type: 'House Only',
  },
  {
    title: 'LOW COST HOUSING PROJECT',
    size: '50 / 80 SQM lot • 32.5 SQM floor',
    price: 'PHP 950,000.00 – PHP 1,400,000.00',
    features: 'Bungalow and duplex bungalow options: Toilet & Bath, Kitchen, Bare Type, optional 2 Carport for duplex',
    type: 'Low-Cost Housing',
  },
];

const features = ['Size', 'Price', 'Features', 'Type'];

export default function ComparePage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1560px]">
        <div className="overflow-hidden rounded-[2.5rem] border border-[#dbe5f2] bg-white/84 shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="badge bg-white/80 shadow-soft">Side by side</span>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.3rem)] leading-[0.9] tracking-[-0.085em] text-[#08122c]">Compare model houses.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">A focused comparison view for AMICA's current model-house portfolio.</p>
            </div>
            <div className="bg-[linear-gradient(135deg,#08122c_0%,#0b2d66_55%,#7fd34e_180%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.35em] text-[#f2cf5b]">AMICA compare</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">Review the real listings without any extra noise.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">Compare the model houses that are actually featured across the properties experience.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#e5dcc9] bg-white/80 shadow-deep backdrop-blur">
          <div className="grid grid-cols-[180px_repeat(6,minmax(220px,1fr))] overflow-x-auto">
            <div className="border-r border-[#e5dcc9] bg-[#faf8f3] p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Feature</div>
            </div>
            {comparisonListings.map((property) => (
              <div key={property.title} className="border-r border-[#e5dcc9] last:border-r-0 p-6">
                <div className="text-sm font-bold text-[#08122c]">{property.title}</div>
                <div className="mt-1 text-xs text-slate-500">AMICA model house</div>
              </div>
            ))}
          </div>
          {features.map((feature) => (
            <div key={feature} className="grid grid-cols-[180px_repeat(6,minmax(220px,1fr))] border-t border-[#e5dcc9]">
              <div className="border-r border-[#e5dcc9] bg-[#faf8f3] p-4 text-sm font-semibold text-[#08122c]">{feature}</div>
              {comparisonListings.map((property) => (
                <div key={`${property.title}-${feature}`} className="border-r border-[#e5dcc9] last:border-r-0 p-4 text-sm text-slate-600">
                  {feature === 'Size' && property.size}
                  {feature === 'Price' && property.price}
                  {feature === 'Features' && property.features}
                  {feature === 'Type' && property.type}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
