'use client';

import { useEffect, useMemo, useState } from 'react';
import ResponsiveGrid from '@/components/ui/ResponsiveGrid';
import { comparisonModelHouses } from '@/data/modelHouses';

const featureRows = [
  ['Best for', 'bestFor'],
  ['Price', 'price'],
  ['Size', 'size'],
  ['Type', 'type'],
  ['Key features', 'features']
] as const;

const COMPARE_SELECTION_KEY = 'amicaCompareSelections';
const defaultSelected = comparisonModelHouses.slice(0, 4).map((property) => property.title);

function readSelectedModels() {
  if (typeof window === 'undefined') return defaultSelected;

  try {
    const raw = window.localStorage.getItem(COMPARE_SELECTION_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    const validTitles = comparisonModelHouses.map((property) => property.title);
    const selected = Array.isArray(parsed) ? parsed.filter((title): title is string => typeof title === 'string' && validTitles.includes(title)) : [];
    return selected.length > 0 ? selected : defaultSelected;
  } catch {
    return defaultSelected;
  }
}

export default function CompareExperience() {
  const [selectedTitles, setSelectedTitles] = useState(defaultSelected);
    const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setSelectedTitles(readSelectedModels());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(COMPARE_SELECTION_KEY, JSON.stringify(selectedTitles));
  }, [hydrated, selectedTitles]);

  const selectedListings = useMemo(
    () => comparisonModelHouses.filter((property) => selectedTitles.includes(property.title)),
    [selectedTitles]
  );

  function toggleModel(title: string) {
    setSelectedTitles((current) => {
      if (current.includes(title)) {
        return current.length === 1 ? current : current.filter((item) => item !== title);
      }

      return [...current, title];
    });
  }

  if (!hydrated) {
    return (
      <div className="mt-6 grid gap-6">
        <div className="animate-pulse rounded-[2rem] border border-[#e5dcc9] bg-white/78 p-6 shadow-[0_14px_34px_rgba(9,21,64,0.06)] sm:p-8">
          <div className="h-4 w-32 rounded-full bg-[#e7dcc8]" />
          <div className="mt-4 h-8 w-72 max-w-full rounded-full bg-[#e7dcc8]" />
          <div className="mt-3 h-4 w-full max-w-xl rounded-full bg-[#efe7d8]" />
          <div className="mt-6 flex flex-wrap gap-2">
            {[1, 2, 3, 4].map((item) => <div key={item} className="h-10 w-36 rounded-full bg-[#efe7d8]" />)}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((item) => <div key={item} className="h-52 animate-pulse rounded-[2rem] border border-[#e7dcc8] bg-white/70" />)}
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="mt-6 rounded-[2rem] border border-[#e5dcc9] bg-white/92 p-6 shadow-[0_14px_34px_rgba(9,21,64,0.06)] backdrop-blur sm:p-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="section-label text-[#b98a3d]">Choose columns</div>
            <h2 className="mt-3 text-[clamp(1.9rem,4vw,2.7rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-[#071426]">Select models to compare</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">Pick at least one model. The side-by-side table updates instantly from the shared model-house data.</p>
          </div>
          <button
            type="button"
            onClick={() => setSelectedTitles(comparisonModelHouses.map((property) => property.title))}
            className="btn-outline"
          >
            Select all
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {comparisonModelHouses.map((property) => {
            const isSelected = selectedTitles.includes(property.title);

            return (
              <button
                key={property.title}
                type="button"
                onClick={() => toggleModel(property.title)}
                className={`rounded-full border px-4 py-2.5 text-xs font-semibold uppercase leading-5 tracking-[0.12em] transition sm:tracking-[0.18em] ${
                  isSelected
                    ? 'border-[#071426] bg-[#071426] text-white'
                    : 'border-[#e7dcc8] bg-[#fbf8f0] text-[#8a6428] hover:border-[#b98a3d] hover:bg-white'
                }`}
                aria-pressed={isSelected}
              >
                {property.title}
              </button>
            );
          })}
        </div>
      </section>

      <ResponsiveGrid as="section" className="mt-6 gap-5">
        {selectedListings.map((property) => (
          <article key={property.title} className="rounded-[1.5rem] border border-[#e7dcc8] bg-white p-5 shadow-[0_12px_28px_rgba(9,21,64,0.05)] sm:rounded-[2rem] sm:p-6">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#071426] px-3 py-1 text-[10px] font-semibold uppercase leading-4 tracking-[0.14em] text-white">{property.tag}</span>
              <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-3 py-1 text-[10px] font-semibold uppercase leading-4 tracking-[0.14em] text-[#8a6428]">Best for {property.bestFor}</span>
            </div>
            <h2 className="mt-5 text-[1.8rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#071426]">{property.title}</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="rounded-2xl border border-[#e7dcc8] bg-[#fbf8f0] p-4">
                <div className="text-xs uppercase leading-5 tracking-[0.16em] text-slate-500">Price</div>
                <div className="mt-2 break-words font-semibold text-[#071426]">{property.price}</div>
              </div>
              <div className="rounded-2xl border border-[#e7dcc8] bg-white p-4">
                <div className="text-xs uppercase leading-5 tracking-[0.16em] text-slate-500">Size</div>
                <div className="mt-2 break-words font-semibold text-[#071426]">{property.size}</div>
              </div>
            </div>
          </article>
        ))}
      </ResponsiveGrid>

      <section className="mt-6 overflow-hidden rounded-[2rem] border border-[#e5dcc9] bg-white/92 shadow-[0_14px_34px_rgba(9,21,64,0.06)] backdrop-blur">
        <div className="border-b border-[#e5dcc9] bg-[#fbf8f0] p-6">
          <div className="section-label text-[#b98a3d]">Detailed comparison</div>
          <h2 className="mt-3 text-[clamp(1.9rem,4vw,2.7rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-[#071426]">Review selected models side by side</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">Scroll horizontally on smaller screens. Each column represents one selected model or housing project.</p>
        </div>

        <div className="overflow-x-auto">
          <div style={{ minWidth: `${190 + selectedListings.length * 230}px` }}>
            <div className="grid" style={{ gridTemplateColumns: `190px repeat(${selectedListings.length}, minmax(210px, 1fr))` }}>
              <div className="border-r border-[#e5dcc9] bg-[#faf8f3] p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Compare by</div>
              </div>
              {selectedListings.map((property) => (
                <div key={property.title} className="border-r border-[#e5dcc9] p-5 last:border-r-0">
                  <div className="text-sm font-bold text-[#08122c]">{property.title}</div>
                  <div className="mt-2 inline-flex rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-3 py-1 text-[10px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#8a6428]">{property.type}</div>
                </div>
              ))}
            </div>

            {featureRows.map(([label, key]) => (
              <div key={label} className="grid border-t border-[#e5dcc9]" style={{ gridTemplateColumns: `190px repeat(${selectedListings.length}, minmax(210px, 1fr))` }}>
                <div className="border-r border-[#e5dcc9] bg-[#faf8f3] p-5 text-sm font-semibold text-[#08122c]">{label}</div>
                {selectedListings.map((property) => (
                  <div key={`${property.title}-${label}`} className="border-r border-[#e5dcc9] p-5 text-sm leading-6 text-slate-600 last:border-r-0">
                    {property[key]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
