'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'ATHENA MODEL HOUSE',
    location: 'Philippines',
    price: 'Starting at PHP 6,800,000.00',
    area: '80 SQM lot • 162 SQM floor • premium family residence',
    image: '/athena-model-house.png'
  },
  {
    title: 'HERA MODEL HOUSE',
    location: 'Philippines',
    price: 'PHP 8,000,000.00',
    area: '100–120 SQM lot • 206 SQM floor • elevated contemporary home',
    image: '/hera-model-house.png'
  },
  {
    title: 'JOYCE MODEL HOUSE',
    location: 'Philippines',
    price: 'PHP 3,600,000.00',
    area: '80 SQM lot • 69 SQM floor • in-house financing residence',
    image: '/joyce-model-house.png'
  },
  {
    title: 'KARLA MODEL HOUSE',
    location: 'Philippines',
    price: 'PRICE STARTS PHP 5,500,000.00',
    area: '100–120 SQM lot • 124 SQM floor • refined family home',
    image: '/karla-model-house.png'
  },
  {
    title: 'KASANDRA MODEL HOUSE',
    location: 'Philippines',
    price: 'PHP 4,100,000.00',
    area: '80 SQM lot • 85 SQM floor • Pag-IBIG-ready model house',
    image: '/kasandra-model-house.png'
  },
  {
    title: 'MELVIN MODEL HOUSE',
    location: 'Philippines',
    price: 'PHP 2,950,000.00',
    area: '80 SQM lot • 51.6 SQM floor • compact luxury residence',
    image: '/melvin-model-house.png'
  }
] as const;

export default function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 7200);

    return () => window.clearInterval(interval);
  }, []);



  return (
    <div className="relative min-h-[640px] overflow-hidden rounded-[2.25rem] border border-[rgba(231,220,200,0.9)] bg-[linear-gradient(180deg,#f1e9db_0%,#d7e0ea_22%,#8d9eb4_56%,#071426_100%)] shadow-[0_32px_110px_rgba(5,14,30,0.16)]">
      <Image src={activeSlide.image} alt={activeSlide.title} fill priority className="object-cover object-center opacity-75 saturate-90 contrast-105 transition-opacity duration-1000" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,243,234,0.08)_0%,rgba(7,20,38,0.16)_28%,rgba(7,20,38,0.68)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(185,138,61,0.14),transparent_30%)]" />

      <div className="absolute left-4 top-4 z-20 rounded-full border border-white/14 bg-[#071426]/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white shadow-[0_12px_30px_rgba(7,20,38,0.25)]">
        Featured residences
      </div>
      <div className="absolute right-4 top-4 z-20 rounded-full border border-white/70 bg-[rgba(255,252,246,0.92)] px-4 py-2 text-xs font-semibold text-[#071426] shadow-[0_12px_28px_rgba(7,20,38,0.10)]">
        {activeSlide.price}
      </div>

      <div className="absolute inset-x-6 bottom-6 rounded-[1.9rem] border border-white/24 bg-[rgba(7,20,38,0.66)] p-5 shadow-[0_24px_60px_rgba(7,14,30,0.22)] backdrop-blur-xl sm:inset-x-7 sm:p-6">
        <div className="section-label text-[#d7be8a]">Preview listing</div>
        <div className="mt-2 text-[clamp(1.55rem,2.4vw,2.35rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-white">
          {activeSlide.title}
        </div>
        <div className="mt-2 text-sm leading-7 text-white/70">{activeSlide.area}</div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-medium tracking-[0.18em] text-white/70">
            Featured AMICA listing
          </span>
          <a href="/properties" className="btn-primary px-5 py-3">View properties</a>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-20 hidden items-center gap-2 rounded-full border border-white/14 bg-white/10 px-3 py-2 backdrop-blur-xl md:flex">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Show ${slide.title}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-[#d7be8a]' : 'w-2.5 bg-white/45 hover:bg-white/70'}`}
          />
        ))}
      </div>


    </div>
  );
}
