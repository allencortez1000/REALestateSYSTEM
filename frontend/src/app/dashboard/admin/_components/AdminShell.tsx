'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { brand } from '@/data/brand';
import { signOutMockUser } from '@/lib/mockAuth';

const sections = [
  { href: '/dashboard/admin', label: 'Dashboard' },
  { href: '/dashboard/admin/properties', label: 'Model Houses' },
  { href: '/dashboard/admin/categories', label: 'Model House Categories' },
  { href: '/dashboard/admin/locations', label: 'Locations' },
  { href: '/dashboard/admin/leads', label: 'Leads and Inquiries' },
  { href: '/dashboard/admin/appointments', label: 'Viewing Appointments' },
  { href: '/dashboard/admin/buyers', label: 'Buyers' },
  { href: '/dashboard/admin/sellers', label: 'Sellers' },
  { href: '/dashboard/admin/agents', label: 'Agents' },
  { href: '/dashboard/admin/users', label: 'Users' },
  { href: '/dashboard/admin/articles', label: 'Journal and Articles' },
  { href: '/dashboard/admin/testimonials', label: 'Testimonials' },
  { href: '/dashboard/admin/homepage', label: 'Homepage Content' },
  { href: '/dashboard/admin/media', label: 'Media Library' },
  { href: '/dashboard/admin/marketing', label: 'Marketing' },
  { href: '/dashboard/admin/reports', label: 'Reports and Analytics' },
  { href: '/dashboard/admin/notifications', label: 'Notifications' },
  { href: '/dashboard/admin/settings', label: 'Website Settings' },
  { href: '/dashboard/admin/accounts', label: 'Admin Accounts' },
  { href: '/dashboard/admin/audit-logs', label: 'Audit Logs' }
];

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-[#f3f7fc] hover:text-[#0b2d66]">
      {label}
    </Link>
  );
}

export default function AdminShell({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-[1600px] px-4 pb-14 pt-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 min-[1800px]:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="rounded-[2rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(255,255,255,0.92)] p-4 shadow-[0_20px_60px_rgba(9,21,64,0.08)] backdrop-blur-sm min-[1800px]:sticky min-[1800px]:top-6 min-[1800px]:h-[calc(100vh-3rem)] min-[1800px]:overflow-auto">
          <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,#071426_0%,#0d2342_100%)] p-5 text-white shadow-luxury">
            <Image src={brand.logo} alt={brand.name} width={220} height={72} className="h-14 w-auto object-contain" />
            <div className="mt-4 text-xs uppercase tracking-[0.35em] text-[#f2cf5b]/80">Admin portal</div>
            <div className="mt-3 text-2xl font-semibold leading-tight">Management system</div>
            <p className="mt-2 text-sm text-white/72">Role-based operations for model houses, users, content, and reporting across the Amica Residences platform.</p>
          </div>

          <div className="mt-4 hidden rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.86)] p-3 min-[1800px]:block">
            <div className="grid gap-2">{sections.map((item) => <NavLink key={item.href} {...item} />)}</div>
          </div>

          <details className="group mt-4 overflow-hidden rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(255,255,255,0.96)] min-[1800px]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-4 text-sm font-semibold text-[#08122c]">
              <span>Navigation</span>
              <span className="transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="border-t border-[rgba(231,220,200,0.95)] p-3">
              <div className="grid gap-2">{sections.map((item) => <NavLink key={item.href} {...item} />)}</div>
            </div>
          </details>

          <div className="mt-4 rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(255,255,255,0.96)] p-4">
            <div className="section-label">Account</div>
            <div className="mt-3 text-sm font-semibold text-[#08122c]">Super Admin</div>
            <div className="text-xs text-slate-500">admin@rabinohomebuilders.com</div>
            <Link href="/" onClick={() => signOutMockUser('admin')} className="mt-4 inline-flex rounded-full bg-[#08122c] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0f1d45]">
              Logout
            </Link>
          </div>
        </aside>

        <section className="min-w-0">
          <div className="rounded-[2.25rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,243,234,0.88))] p-5 shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm sm:p-6 lg:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-[#b98a3d]">Admin portal</div>
                <h1 className="mt-3 text-[clamp(2.2rem,4vw,3.5rem)] font-semibold tracking-[-0.05em] text-[#08122c]">{title}</h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="rounded-full border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.86)] px-4 py-2 text-sm text-slate-500 shadow-soft">Search</div>
                <div className="rounded-full border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.86)] px-4 py-2 text-sm text-slate-500 shadow-soft">Notifications</div>
                <div className="rounded-full bg-[#d7be8a] px-4 py-2 text-sm font-semibold text-[#08122c] shadow-luxury">Save changes</div>
              </div>
            </div>
          </div>

          <div className="mt-6">{children}</div>
        </section>
      </div>
    </main>
  );
}
