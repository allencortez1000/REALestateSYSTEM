'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import FavoriteButton from '@/components/properties/FavoriteButton';
import { featuredModelHouses, getModelHouseHref } from '@/data/modelHouses';

const homeTypeOptions = ['All types', 'Luxury Residence', 'House Only', 'House & Lot', 'Low-Cost Housing', 'House Only / Model House'];
const budgetOptions = ['Any budget', 'Below PHP 1.5M', 'PHP 2M–3M', 'PHP 3M–5M', 'PHP 8M+'];
const buyerOptions = ['Any buyer fit', 'Starting families', 'Growing families', 'Luxury buyers', 'Duplex living', 'Practical ownership', 'Compact family living'];

function parseFirstPrice(price: string) {
  const firstAmount = price.match(/[\d,]+(?:\.\d+)?/);
  return firstAmount ? Number(firstAmount[0].replace(/,/g, '')) : null;
}

function matchesBudget(price: string, budget: string) {
  if (budget === 'Any budget') return true;

  const amount = parseFirstPrice(price);
  if (amount === null) return budget === 'Any budget';

  if (budget === 'Below PHP 1.5M') return amount < 1500000;
  if (budget === 'PHP 2M–3M') return amount >= 2000000 && amount <= 3000000;
  if (budget === 'PHP 3M–5M') return amount >= 3000000 && amount <= 5000000;
  if (budget === 'PHP 8M+') return amount >= 8000000;

  return true;
}

export default function SearchExperience() {
  const [query, setQuery] = useState('');
  const [homeType, setHomeType] = useState('All types');
  const [budget, setBudget] = useState('Any budget');
  const [buyerFit, setBuyerFit] = useState('Any buyer fit');

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return featuredModelHouses.filter((listing) => {
      const haystack = [
        listing.title,
        listing.price,
        listing.lotArea,
        listing.floorArea,
        listing.type,
        listing.bestFor,
        listing.summary,
        listing.description,
        ...listing.highlights,
        ...listing.floorFeatures
      ].join(' ').toLowerCase();

      const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery);
      const matchesType = homeType === 'All types' || listing.type === homeType || listing.availability === homeType;
      const matchesBuyer = buyerFit === 'Any buyer fit' || listing.bestFor.toLowerCase().includes(buyerFit.toLowerCase());

      return matchesQuery && matchesType && matchesBuyer && matchesBudget(listing.price, budget);
    });
  }, [budget, buyerFit, homeType, query]);

  function resetFilters() {
    setQuery('');
    setHomeType('All types');
    setBudget('Any budget');
    setBuyerFit('Any buyer fit');
  }

  return (
    <>
      <section className="mt-10 rounded-[2.25rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f0_100%)] p-6 shadow-[0_18px_50px_rgba(9,21,64,0.07)] sm:p-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="section-label text-[#b98a3d]">Search filters</div>
            <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-semibold tracking-[-0.05em] text-[#071426]">Narrow your preferred model</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">Filter the current shared model-house list by keyword, home type, budget, and buyer fit.</p>
          </div>
          <button type="button" onClick={resetFilters} className="rounded-full border border-[#e7dcc8] bg-white px-5 py-3 text-sm font-semibold text-[#071426] transition hover:border-[#b98a3d] hover:bg-[#fbf8f0]">Reset filters</button>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr]">
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Keyword</span>
            <input className="input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search HERA, low-cost, roof deck…" />
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Home type</span>
            <select className="input" value={homeType} onChange={(event) => setHomeType(event.target.value)}>
              {homeTypeOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Budget</span>
            <select className="input" value={budget} onChange={(event) => setBudget(event.target.value)}>
              {budgetOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Best for</span>
            <select className="input" value={buyerFit} onChange={(event) => setBuyerFit(event.target.value)}>
              {buyerOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="section-label text-[#b98a3d]">Results</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">{results.length} matching model{results.length === 1 ? '' : 's'}</h2>
        </div>
        <p className="text-sm text-slate-500">Frontend-only filtering from the shared model-house data.</p>
      </div>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {results.map((listing) => (
            <article key={listing.title} className="card card-hover group overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-[#071426]">
                <Image src={listing.image} alt={listing.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.08),rgba(7,20,38,0.42))]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">{listing.type}</div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="section-label text-[#b98a3d]">Model house</div>
                  <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6428]">{listing.bestFor}</span>
                </div>
                <h3 className="mt-3 text-[clamp(1.5rem,2vw,1.95rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#071426]">{listing.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{listing.lotArea} • {listing.floorArea}</p>
                <div className="mt-4 text-xl font-semibold text-[#b98a3d]">{listing.price}</div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={getModelHouseHref(listing.slug)} className="btn-primary inline-flex">View details</Link>
                  <FavoriteButton slug={listing.slug} />
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-[2rem] border border-[#e7dcc8] bg-white p-8 text-center shadow-[0_18px_50px_rgba(9,21,64,0.07)]">
          <div className="section-label text-[#b98a3d]">No matches</div>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">Try a broader search</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">Adjust the keyword, home type, budget, or buyer-fit filters to see more model houses.</p>
          <button type="button" onClick={resetFilters} className="btn-primary mt-5">Reset filters</button>
        </div>
      )}
    </>
  );
}
