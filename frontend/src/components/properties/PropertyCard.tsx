import { formatCurrency } from '@/lib/utils';
import type { Property } from '@/types';

type PropertyCardProps = {
  property: Property;
  [key: string]: unknown;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/78 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:shadow-card-hover dark:border-white/10 dark:bg-white/5">
      <div className="relative h-60 overflow-hidden bg-[linear-gradient(150deg,_#050e1e,_#16396d_60%,_#c99700_140%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_45%)] transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">Featured</div>
        <button className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white/25">♥</button>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="rounded-full bg-black/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">Quick view</div>
          <div className="rounded-full bg-gold-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-navy-950">Active</div>
        </div>
      </div>
      <div className="p-6">
        <div className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold-700 dark:text-gold-200">Luxury residence</div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-navy-950 dark:text-[#f5f7fb]">{property.title}</h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-white/60">{property.bedrooms} BR • {property.bathrooms} BA</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="text-2xl font-bold text-gold-700 dark:text-gold-200">{formatCurrency(property.price, property.currency)}</div>
          <a href={`/properties/${property.slug}`} className="rounded-full bg-navy-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-navy-900">View</a>
        </div>
      </div>
    </article>
  );
}
