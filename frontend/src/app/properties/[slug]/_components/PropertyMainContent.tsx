import Image from 'next/image';
import type { ModelHouse } from '@/data/modelHouses';

type PropertyMainContentProps = {
  listing: ModelHouse;
};

export default function PropertyMainContent({ listing }: PropertyMainContentProps) {
  return (
    <>
      <nav className="sticky top-4 z-20 overflow-hidden rounded-[1.25rem] border border-[#e7dcc8] bg-[rgba(255,255,255,0.94)] p-2 shadow-[0_14px_36px_rgba(9,21,64,0.06)] backdrop-blur-xl sm:rounded-[1.75rem] lg:top-24">
        <div className="flex gap-2 overflow-x-auto">
          {[
            ['Overview', '#overview'],
            ['Features', '#features'],
            ['Gallery', '#gallery'],
            ['Floor Plan', '#floor-plan'],
            ['Design', '#design'],
            ['Layout', '#layout'],
            ['Location', '#location'],
            ['Payment', '#payment'],
            ['Inquiry', '#inquiry']
          ].map(([label, href]) => (
            <a key={label} href={href} className="shrink-0 rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 transition hover:bg-[#071426] hover:text-white sm:px-4 sm:text-xs sm:tracking-[0.22em]">
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section id="gallery" className="scroll-mt-28 rounded-[2rem] border border-[#e7dcc8] bg-white p-5 shadow-[0_14px_36px_rgba(9,21,64,0.06)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="section-label text-[#b98a3d]">Gallery</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">View the model references</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">A simple gallery guide to help buyers identify the main image and supporting design references.</p>
          </div>
          <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6428]">{listing.gallery.length} images</span>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          {listing.gallery.map((src, index) => {
            const labels = ['Main exterior', 'Design reference', 'Supporting image'];
            return (
              <div key={src} className={`group relative overflow-hidden rounded-[1.5rem] border border-[#e7dcc8] bg-[#071426] sm:rounded-[1.75rem] ${index === 0 ? 'h-72 sm:h-80 lg:h-[420px]' : 'h-64 lg:h-[420px]'}`}>
                <Image
                  src={src}
                  alt={`${listing.title} gallery ${index + 1}`}
                  fill
                  sizes={index === 0 ? '(min-width: 1024px) 40vw, 100vw' : '(min-width: 1024px) 30vw, 100vw'}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.02),rgba(7,20,38,0.55))]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/18 bg-white/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">{labels[index] ?? 'Reference'}</div>
                <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/14 bg-[#071426]/72 p-4 text-white backdrop-blur-md">
                  <div className="text-xs uppercase tracking-[0.24em] text-[#d7be8a]">Image {index + 1}</div>
                  <div className="mt-1 text-sm font-semibold">{listing.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="overview" className="card scroll-mt-28 p-5 sm:p-8">
        <div className="section-label">Model overview</div>
        <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-[#071426]">{listing.title}</h2>
        <p className="mt-4 text-[1.02rem] leading-8 text-slate-600">{listing.description}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ['Design type', listing.availability],
            ['Best for', listing.bestFor],
            ['Developer', listing.location]
          ].map(([label, value]) => (
            <div key={String(label)} className="rounded-2xl border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.82)] p-4">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{label}</div>
              <div className="mt-2 text-base font-semibold text-[#071426]">{String(value)}</div>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-[1.6rem] border border-[#e7dcc8] bg-white p-5">
          <div className="section-label text-[#b98a3d]">How to read this page</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">Review the model overview first, then check the design inclusions, house features, size details, and payment computation. If a value says "Not shown," it means the supplied marketing reference did not include that specific detail.</p>
        </div>

        <section className="mt-7 rounded-[1.85rem] border border-[#e7dcc8] bg-[linear-gradient(135deg,#071426_0%,#0d2342_100%)] p-5 text-white shadow-[0_14px_34px_rgba(9,21,64,0.09)]">
          <div className="grid gap-4">
            <div>
              <div className="section-label text-[#d7be8a]">Buyer resources</div>
              <h3 className="mt-3 text-[1.7rem] font-semibold tracking-[-0.04em] text-white">Downloadable guide preview</h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">Quick actions for reviewing the model, computation, and sales details.</p>
            </div>
            <div className="grid w-full gap-3 md:grid-cols-3">
              <button className="min-w-0 rounded-full bg-white px-4 py-3 text-sm font-semibold text-[#071426] transition hover:bg-[#f8f3e8]">View brochure</button>
              <button className="min-w-0 rounded-full border border-white/14 bg-white/8 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/12">Computation sheet</button>
              <button className="min-w-0 rounded-full border border-white/14 bg-transparent px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/8">Request details</button>
            </div>
          </div>
        </section>

        <section id="floor-plan" className="mt-7 scroll-mt-28 rounded-[1.85rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#fbf8f0_0%,#ffffff_100%)] p-5 shadow-[0_12px_34px_rgba(9,21,64,0.04)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="section-label text-[#b98a3d]">Floor plan preview</div>
              <h3 className="mt-3 text-[1.7rem] font-semibold tracking-[-0.04em] text-[#071426]">Understand the layout at a glance</h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">This visual guide is a UI preview based on the available model details. It helps buyers quickly understand the major spaces before reviewing the full feature list.</p>
            </div>
            <div className="rounded-full border border-[#e7dcc8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">UI preview</div>
          </div>

          <div className="mt-6 grid gap-5">
            <div className="overflow-x-auto rounded-[1.75rem] border border-[#e7dcc8] bg-white p-3 shadow-[0_16px_40px_rgba(9,21,64,0.06)]">
              <div className="grid min-h-[300px] min-w-[360px] grid-cols-4 grid-rows-4 gap-2 text-xs font-semibold leading-tight text-[#071426] sm:min-h-[360px] sm:min-w-0 sm:text-sm">
                <div className="col-span-2 row-span-2 flex items-center justify-center rounded-[1.25rem] bg-[#071426] p-3 text-center text-white sm:p-4">Living Area</div>
                <div className="col-span-2 flex items-center justify-center rounded-[1.25rem] bg-[#f4ead8] p-3 text-center sm:p-4">Dining Area</div>
                <div className="flex items-center justify-center rounded-[1.25rem] bg-[#fbf8f0] p-2 text-center sm:p-4">Kitchen</div>
                <div className="flex items-center justify-center rounded-[1.25rem] bg-[#fbf8f0] p-2 text-center sm:p-4">T&B</div>
                <div className="flex items-center justify-center rounded-[1.25rem] bg-[#efe5d0] p-2 text-center sm:p-4">Bedroom</div>
                <div className="flex items-center justify-center rounded-[1.25rem] bg-[#efe5d0] p-2 text-center sm:p-4">Bedroom</div>
                <div className="col-span-2 flex items-center justify-center rounded-[1.25rem] bg-[#f8f3ea] p-3 text-center sm:p-4">Carport / Open Space</div>
                <div className="flex items-center justify-center rounded-[1.25rem] bg-[#efe5d0] p-2 text-center sm:p-4">Bedroom</div>
                <div className="flex items-center justify-center rounded-[1.25rem] bg-[#efe5d0] p-2 text-center sm:p-4">Bedroom</div>
                <div className="col-span-2 flex items-center justify-center rounded-[1.25rem] bg-[#d7be8a] p-3 text-center text-[#071426] sm:p-4">Frontage / Entry</div>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ['Lot area', listing.lotArea],
                ['Floor area', listing.floorArea],
                ['Package type', listing.availability],
                ['Primary use', 'Family residential living']
              ].map(([label, value]) => (
                <div key={label} className="rounded-[1.35rem] border border-[#e7dcc8] bg-white p-4">
                  <div className="text-xs uppercase tracking-[0.28em] text-slate-500">{label}</div>
                  <div className="mt-2 text-lg font-semibold text-[#071426]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
