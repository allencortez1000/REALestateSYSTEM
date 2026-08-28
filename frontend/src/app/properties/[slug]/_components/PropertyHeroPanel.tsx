import Image from 'next/image';
import type { ModelHouse } from '@/data/modelHouses';

type PropertyHeroPanelProps = {
  listing: ModelHouse;
};

export default function PropertyHeroPanel({ listing }: PropertyHeroPanelProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[rgba(231,220,200,0.95)] bg-white/92 shadow-[0_18px_56px_rgba(9,21,64,0.08)] sm:rounded-[2.75rem]">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)]">
        <div className="relative min-h-[500px] overflow-hidden bg-[#071426] sm:min-h-[580px] lg:min-h-[640px]">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            priority
            sizes="(min-width: 1280px) 760px, (min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.12)_0%,rgba(7,20,38,0.62)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(185,138,61,0.14),transparent_28%)]" />
          <div className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full border border-white/14 bg-[#071426]/92 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:text-[11px] sm:tracking-[0.32em]">Featured residence</div>
          <div className="absolute left-4 right-4 top-16 flex flex-wrap gap-2 sm:left-auto sm:right-6 sm:top-6 sm:max-w-[calc(100%-3rem)] sm:justify-end">
            <div className="rounded-full border border-white/60 bg-[rgba(255,252,246,0.92)] px-4 py-2 text-xs font-semibold text-[#071426] shadow-[0_12px_28px_rgba(7,20,38,0.10)]">{listing.availability}</div>
            <div className="rounded-full border border-white/18 bg-[#071426]/82 px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_22px_rgba(7,20,38,0.14)] backdrop-blur-md">{listing.bestFor}</div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
            <div className="max-w-3xl text-white">
              <div className="section-label text-[#d7be8a]">{listing.location}</div>
              <h1 className="mt-4 max-w-3xl text-[clamp(2.45rem,8vw,5.6rem)] leading-[0.92] tracking-[-0.075em] text-white">{listing.title}</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/84 sm:text-base sm:leading-8">{listing.tagline}</p>
            </div>
          </div>
        </div>

        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,243,234,0.96))] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-white p-5 shadow-[0_10px_26px_rgba(9,21,64,0.04)]">
              <div className="section-label text-[#b98a3d]">Price</div>
              <div className="mt-3 break-words text-[1.85rem] font-semibold tracking-[-0.04em] text-[#071426] sm:text-[2.15rem]">{listing.price}</div>
            </div>
            <div className="rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-white p-5 shadow-[0_10px_26px_rgba(9,21,64,0.04)]">
              <div className="section-label text-[#b98a3d]">Specifications</div>
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                <div className="flex items-start justify-between gap-3 border-b border-[#efe5c3] pb-2"><span>Lot area</span><strong className="text-right text-[#071426]">{listing.lotArea}</strong></div>
                <div className="flex items-start justify-between gap-3 border-b border-[#efe5c3] pb-2"><span>Floor area</span><strong className="text-right text-[#071426]">{listing.floorArea}</strong></div>
                <div className="flex items-start justify-between gap-3"><span>Status</span><strong className="text-right text-[#071426]">{listing.availability}</strong></div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a href="#inquiry" className="btn-primary">Schedule viewing</a>
            <a href="#gallery" className="btn-outline">View gallery</a>
          </div>

          <div id="features" className="mt-6 scroll-mt-28 rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.82)] p-5">
            <div className="section-label">Main features</div>
            <p className="mt-2 text-sm leading-6 text-slate-500">A quick view of the key spaces and inclusions.</p>
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
  );
}
