'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { brand } from '@/data/brand';
import CommandPalette from '../navigation/CommandPalette';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Model Houses' },
  { href: '/search', label: 'Search' },
  { href: '/blog', label: 'Journal' }
];

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${active ? 'text-[#071426]' : 'text-slate-600 hover:text-[#071426]'}`}
      aria-current={active ? 'page' : undefined}
    >
      {label}
      <span className={`absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-[#b98a3d] transition-transform duration-300 ${active ? 'scale-x-100' : 'group-hover:scale-x-100'}`} />
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hidePublicNav = pathname.startsWith('/dashboard') || pathname.startsWith('/auth/login') || pathname.startsWith('/auth/register');
  const isScrolledLike = pathname !== '/';

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto flex max-w-[1500px] items-center gap-3 rounded-full border px-3 py-3 shadow-[0_18px_48px_rgba(9,27,53,0.08)] backdrop-blur-2xl transition sm:px-4 ${
          isScrolledLike
            ? 'border-[rgba(215,190,138,0.55)] bg-[rgba(247,243,234,0.92)]'
            : 'border-[rgba(232,220,196,0.9)] bg-[rgba(255,255,255,0.92)]'
        }`}
      >
        <Link href="/" className="flex min-w-0 items-center gap-3 pl-1" aria-label={`${brand.name} home`}>
          <Image src={brand.logo} alt={brand.name} width={168} height={72} className="h-9 w-auto max-w-[150px] object-contain sm:h-10 sm:max-w-none" priority />
        </Link>

        {!hidePublicNav && (
          <nav className="hidden flex-1 items-center justify-center gap-1 rounded-full border border-[rgba(232,220,196,0.92)] bg-[rgba(247,243,234,0.84)] p-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))} />
            ))}
          </nav>
        )}

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <CommandPalette />
          {!hidePublicNav ? <Link href="/search" className="hidden rounded-full border border-[rgba(231,220,200,0.9)] bg-white px-4 py-2 text-sm font-semibold text-[#071426] transition hover:border-[#b98a3d] hover:bg-[#fbf8f0] sm:inline-flex">Search</Link> : null}
          {!hidePublicNav ? <Link href="/auth/login" className="hidden rounded-full px-4 py-2 text-sm font-semibold text-[#071426] transition hover:bg-[#071426]/5 md:inline-flex">Login</Link> : null}
          {!hidePublicNav ? <Link href="/auth/login/admin" className="hidden rounded-full px-4 py-2 text-sm font-semibold text-[#8a6428] transition hover:bg-[#f2cf5b]/20 md:inline-flex">Admin</Link> : null}
          <Link href="/auth/register" className="hidden rounded-full bg-[#071426] px-4 py-2.5 text-sm font-semibold text-white shadow-luxury transition hover:bg-[#0d2342] sm:inline-flex">Register</Link>
          {!hidePublicNav ? (
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e7dcc8] bg-white text-[#071426] shadow-[0_8px_24px_rgba(9,27,53,0.08)] transition hover:border-[#b98a3d] hover:bg-[#fbf8f0] lg:hidden"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span className="sr-only">Menu</span>
              <span aria-hidden="true" className="grid gap-1.5">
                <span className={`block h-0.5 w-4 rounded-full bg-current transition ${mobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-4 rounded-full bg-current transition ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-4 rounded-full bg-current transition ${mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </span>
            </button>
          ) : null}
        </div>
      </div>

      {!hidePublicNav && mobileMenuOpen ? (
        <div id="mobile-navigation" className="mx-auto mt-3 max-w-[1500px] overflow-hidden rounded-[1.75rem] border border-[#e8dcc4] bg-[rgba(255,255,255,0.96)] shadow-[0_16px_44px_rgba(9,27,53,0.09)] backdrop-blur-2xl lg:hidden">
          <nav className="grid gap-1 p-3" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${active ? 'bg-[#071426] text-white shadow-[0_10px_26px_rgba(7,20,38,0.16)]' : 'text-slate-600 hover:bg-[#faf8f3] hover:text-[#071426]'}`}
                                    aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="grid gap-2 border-t border-[#ece1d0] p-3 sm:grid-cols-3">
            <Link href="/search" className="rounded-2xl border border-[#e7dcc8] bg-[#fbf8f0] px-4 py-3 text-center text-sm font-bold text-[#071426] transition hover:border-[#b98a3d]">Quick search</Link>
            <Link href="/auth/login" className="rounded-2xl border border-[#e7dcc8] bg-white px-4 py-3 text-center text-sm font-bold text-[#071426] transition hover:border-[#b98a3d]">Login</Link>
            <Link href="/auth/login/admin" className="rounded-2xl border border-[#f2cf5b]/50 bg-[#f2cf5b]/18 px-4 py-3 text-center text-sm font-bold text-[#8a6428] transition hover:bg-[#f2cf5b]/28">Admin login</Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
