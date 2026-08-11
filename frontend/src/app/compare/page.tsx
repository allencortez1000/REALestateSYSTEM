const comparisonListings = [
  {
    title: 'ATHENA MODEL HOUSE',
    bedrooms: '3 Bedrooms',
    bathrooms: '2 Common T&B',
    price: 'Starting at PHP 6,800,000.00',
    status: 'For Sale',
    type: 'Model House',
    currency: 'PHP',
  },
  {
    title: 'HERA MODEL HOUSE',
    bedrooms: '4 Bedrooms',
    bathrooms: '2 Common T&B',
    price: 'PHP 8,000,000.00',
    status: 'New Launching',
    type: 'Model House',
    currency: 'PHP',
  },
];

const features = ['Bedrooms', 'Bathrooms', 'Price', 'Status', 'Type', 'Currency'];

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
          <div className="grid grid-cols-3">
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
            <div key={feature} className="grid grid-cols-3 border-t border-[#e5dcc9]">
              <div className="border-r border-[#e5dcc9] bg-[#faf8f3] p-4 text-sm font-semibold text-[#08122c]">{feature}</div>
              {comparisonListings.map((property) => (
                <div key={`${property.title}-${feature}`} className="border-r border-[#e5dcc9] last:border-r-0 p-4 text-sm text-slate-600">
                  {feature === 'Bedrooms' && property.bedrooms}
                  {feature === 'Bathrooms' && property.bathrooms}
                  {feature === 'Price' && property.price}
                  {feature === 'Status' && property.status}
                  {feature === 'Type' && property.type}
                  {feature === 'Currency' && property.currency}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
