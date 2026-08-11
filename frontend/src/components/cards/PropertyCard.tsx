import { formatCurrency } from '@/lib/utils';
import type { Property } from '@/types';

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-[1.8rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,243,234,0.92))] shadow-[0_18px_50px_rgba(9,27,53,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(185,138,61,0.34)] hover:shadow-[0_24px_70px_rgba(9,27,53,0.14)]">
      <div className="relative h-60 overflow-hidden bg-[linear-gradient(180deg,#071426_0%,#0d2342_58%,#b98a3d_180%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_45%)] transition duration-700 group-hover:scale-110" />
        <div className="absolute left-5 top-5 rounded-full border border-white/16 bg-[#071426]/88 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur-md">
          Featured
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
          <div className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/88 backdrop-blur-md">Quick view</div>
          <button className="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md transition hover:bg-white/16">Save</button>
        </div>
      </div>
      <div className="p-6">
        <div className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#b98a3d]">Luxury residence</div>
        <h3 className="mt-3 text-[clamp(1.55rem,2vw,2rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#071426]">{property.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-500">{property.bedrooms} BR • {property.bathrooms} BA • Curated for premium living.</p>
        <div className="mt-5 flex items-end justify-between gap-3 border-t border-[rgba(231,220,200,0.95)] pt-4">
          <div className="text-xl font-semibold text-[#b98a3d]">{formatCurrency(property.price, property.currency)}</div>
          <a href={`/properties/${property.slug}`} className="inline-flex rounded-full border border-[#071426] px-4 py-2 text-xs font-semibold text-[#071426] transition hover:bg-[#071426] hover:text-white">
            View
          </a>
        </div>
      </div>
    </article>
  );
}
