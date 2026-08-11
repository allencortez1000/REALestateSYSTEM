import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';

const sections = [
  { href: '/dashboard/customer', label: 'Dashboard' },
  { href: '/dashboard/customer/properties', label: 'Browse Model Houses' },
  { href: '/dashboard/customer/saved', label: 'Saved Homes' },
  { href: '/dashboard/customer/comparisons', label: 'Home Comparisons' },
  { href: '/dashboard/customer/inquiries', label: 'My Inquiries' },
  { href: '/dashboard/customer/appointments', label: 'Viewing Appointments' },
  { href: '/dashboard/customer/messages', label: 'Messages' },
  { href: '/dashboard/customer/notifications', label: 'Notifications' },
  { href: '/dashboard/customer/progress', label: 'Purchase or Rental Progress' },
  { href: '/dashboard/customer/documents', label: 'Documents' },
  { href: '/dashboard/customer/listings', label: 'My Listings' },
  { href: '/dashboard/customer/submit', label: 'Submit a Property' },
  { href: '/dashboard/customer/profile', label: 'Profile' },
  { href: '/dashboard/customer/settings', label: 'Account Settings' },
  { href: '/dashboard/customer/help', label: 'Help and Support' }
];

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-[#f3f7fc] hover:text-[#0b2d66]">
      {label}
    </Link>
  );
}

export default function CustomerShell({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-[1600px] px-4 pb-14 pt-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="rounded-[2rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(255,255,255,0.92)] p-4 shadow-[0_20px_60px_rgba(9,21,64,0.08)] backdrop-blur-sm xl:sticky xl:top-6 xl:h-[calc(100vh-3rem)] xl:overflow-auto">
          <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,#071426_0%,#0d2342_100%)] p-5 text-white shadow-luxury">
            <Image src="/amicarealestate.jpg" alt="AMICA Condominium Realty Corporation" width={220} height={72} className="h-14 w-auto object-contain" />
            <div className="mt-4 text-xs uppercase tracking-[0.35em] text-[#f2cf5b]/80">Customer portal</div>
            <div className="mt-3 text-2xl font-semibold leading-tight">Buyer & Seller workspace</div>
            <p className="mt-2 text-sm text-white/72">Saved homes, inquiries, model-house listings, messages, and support in one place for discerning Philippine clients.</p>
          </div>

          <details className="group mt-4 overflow-hidden rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(255,255,255,0.96)] xl:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-4 text-sm font-semibold text-[#08122c]">
              <span>Navigation</span>
              <span className="transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="border-t border-[rgba(231,220,200,0.95)] p-3">
              <div className="grid gap-2">{sections.map((item) => <NavLink key={item.href} {...item} />)}</div>
            </div>
          </details>

          <div className="mt-4 hidden rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.86)] p-3 xl:block">
            <div className="grid gap-2">{sections.map((item) => <NavLink key={item.href} {...item} />)}</div>
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(255,255,255,0.96)] p-4">
            <div className="section-label">Account</div>
            <div className="mt-3 text-sm font-semibold text-[#08122c]">Customer Demo</div>
            <div className="text-xs text-slate-500">customer@rhbcrealestate.com</div>
            <Link href="/" className="mt-4 inline-flex rounded-full bg-[#08122c] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0f1d45]">
              Logout
            </Link>
          </div>
        </aside>

        <section className="min-w-0">
          <div className="rounded-[2.25rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,243,234,0.88))] p-5 shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm sm:p-6 lg:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-[#b98a3d]">Customer portal</div>
                <h1 className="mt-3 text-[clamp(2.2rem,4vw,3.5rem)] font-semibold tracking-[-0.05em] text-[#08122c]">{title}</h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="rounded-full border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.86)] px-4 py-2 text-sm text-slate-500 shadow-soft">Saved properties</div>
                <div className="rounded-full border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.86)] px-4 py-2 text-sm text-slate-500 shadow-soft">Messages</div>
                <div className="rounded-full bg-[#d7be8a] px-4 py-2 text-sm font-semibold text-[#08122c] shadow-luxury">Account settings</div>
              </div>
            </div>
          </div>

          <div className="mt-6">{children}</div>
        </section>
      </div>
    </main>
  );
}
