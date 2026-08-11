'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import CommandPalette from '../navigation/CommandPalette';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Model Houses' },
  { href: '/search', label: 'Search' },
  { href: '/blog', label: 'Journal' }
];

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <a
      href={href}
      className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${active ? 'text-[#071426]' : 'text-slate-600 hover:text-[#071426]'}`}
    >
      {label}
      <span className={`absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-[#b98a3d] transition-transform duration-300 ${active ? 'scale-x-100' : 'group-hover:scale-x-100'}`} />
    </a>
  );
}

export default function Header() {
  const pathname = usePathname();
  const hidePublicNav = pathname.startsWith('/dashboard') || pathname.startsWith('/auth/login') || pathname.startsWith('/auth/register');
  const isScrolledLike = pathname !== '/';

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto flex max-w-[1500px] items-center gap-3 rounded-full border px-3 py-3 shadow-[0_18px_48px_rgba(9,27,53,0.08)] backdrop-blur-2xl transition sm:px-4 ${
          isScrolledLike
            ? 'border-[rgba(215,190,138,0.55)] bg-[rgba(247,243,234,0.92)]'
            : 'border-[rgba(232,220,196,0.9)] bg-[rgba(255,255,255,0.92)]'
        }`}
      >
        <a href="/" className="flex items-center gap-3 pl-1">
          <Image src="/amicarealestate.jpg" alt="AMICA Condominium Realty Corporation" width={168} height={44} className="h-10 w-auto object-contain" priority />
        </a>

        {!hidePublicNav && (
          <nav className="hidden flex-1 items-center justify-center gap-1 rounded-full border border-[rgba(232,220,196,0.92)] bg-[rgba(247,243,234,0.84)] p-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))} />
            ))}
          </nav>
        )}

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <CommandPalette />
          {!hidePublicNav ? <a href="/search" className="hidden rounded-full border border-[rgba(231,220,200,0.9)] bg-white px-4 py-2 text-sm font-semibold text-[#071426] transition hover:border-[#b98a3d] hover:bg-[#fbf8f0] sm:inline-flex">Search</a> : null}
          {!hidePublicNav ? <a href="/auth/login" className="hidden rounded-full px-4 py-2 text-sm font-semibold text-[#071426] transition hover:bg-[#071426]/5 sm:inline-flex">Login</a> : null}
          {!hidePublicNav ? <a href="/auth/login/admin" className="hidden rounded-full px-4 py-2 text-sm font-semibold text-[#8a6428] transition hover:bg-[#f2cf5b]/20 sm:inline-flex">Admin</a> : null}
          <a href="/auth/register" className="rounded-full bg-[#071426] px-4 py-2.5 text-sm font-semibold text-white shadow-luxury transition hover:bg-[#0d2342]">Register</a>
        </div>
      </div>

      {!hidePublicNav && (
        <details className="group mx-auto mt-3 max-w-[1500px] overflow-hidden rounded-[1.75rem] border border-[#e8dcc4] bg-[rgba(255,255,255,0.94)] shadow-[0_16px_44px_rgba(9,27,53,0.07)] backdrop-blur-2xl lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-semibold text-[#071426]">
            <span>Menu</span>
            <span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <div className="border-t border-[#ece1d0] p-3">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-[#faf8f3] hover:text-[#071426]">
                  {item.label}
                </a>
              ))}
              <a href="/search" className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-[#faf8f3] hover:text-[#071426]">Quick search</a>
              <a href="/auth/login/admin" className="rounded-2xl px-4 py-3 text-sm font-medium text-[#8a6428] transition hover:bg-[#faf8f3] hover:text-[#071426]">Admin login</a>
            </div>
          </div>
        </details>
      )}
    </header>
  );
}
