export default function CommandPalette() {
  return (
    <a href="/search" className="hidden items-center gap-2 rounded-full border border-[#e7dcc8] bg-[rgba(255,255,255,0.84)] px-4 py-2 text-sm text-slate-500 shadow-soft backdrop-blur transition hover:border-[#c99700] hover:bg-white md:inline-flex" aria-label="Open quick search">
      <span className="text-xs text-slate-400">⌘K</span>
      <span>Search anything</span>
    </a>
  );
}
