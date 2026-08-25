import Link from 'next/link';

export default function CommandPalette() {
  return (
    <Link href="/search" className="hidden items-center gap-2 rounded-full border border-[#e7dcc8] bg-[rgba(255,255,255,0.84)] px-4 py-2 text-sm text-slate-500 shadow-soft backdrop-blur transition hover:border-[#c99700] hover:bg-white md:inline-flex" aria-label="Open model-house search">
      <span className="rounded-full bg-[#f7f3ea] px-2 py-0.5 text-[10px] font-bold text-[#8a6428]" aria-hidden="true">Search</span>
      <span>Find model houses</span>
    </Link>
  );
}
