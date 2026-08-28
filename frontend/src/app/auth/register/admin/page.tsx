'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { adminRegisterContent } from '@/data/content/secondaryPages';
import { brand } from '@/data/brand';
import { signInMockUser } from '@/lib/mockAuth';

export default function AdminRegisterPage() {
  const router = useRouter();

  return (
    <main className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1200px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[#dbe5f2] bg-white/90 shadow-[0_18px_48px_rgba(5,14,30,0.08)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[linear-gradient(135deg,#071426_0%,#0d2342_58%,#b98a3d_180%)] p-8 text-white sm:p-10 lg:p-12">
              <Image src={brand.logo} alt={brand.name} width={280} height={92} className="h-16 w-auto object-contain" priority />
              <div className="mt-10 text-xs uppercase tracking-[0.26em] text-[#f2cf5b]">{adminRegisterContent.eyebrow}</div>
              <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.94] tracking-[-0.08em] text-white">{adminRegisterContent.title}</h1>
              <p className="mt-5 max-w-lg text-base leading-8 text-white/74">{adminRegisterContent.description}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {adminRegisterContent.features.map(([title, text]) => (
                  <div key={title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.07] p-4 backdrop-blur-sm">
                    <div className="text-sm font-semibold text-white">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-white/65">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <form
              className="bg-white p-8 sm:p-10 lg:p-12"
              onSubmit={(event) => {
                event.preventDefault();
                signInMockUser('admin');
                router.push('/dashboard/admin');
              }}
            >
              <span className="badge bg-white/80 shadow-soft">{adminRegisterContent.badge}</span>
              <h2 className="mt-6 text-[clamp(1.95rem,4vw,3.1rem)] font-semibold leading-[1.04] tracking-[-0.055em] text-[#08122c]">{adminRegisterContent.formTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{adminRegisterContent.formDescription}</p>

              <div className="mt-8 grid gap-4">
                <label className="grid gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Full name</span>
                  <input className="input" name="fullName" autoComplete="name" placeholder="Full name" defaultValue="Amica Residences Admin" />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Admin email</span>
                  <input className="input" name="email" type="email" autoComplete="email" placeholder="Admin email" defaultValue="admin@rabinohomebuilders.com" />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Password</span>
                  <input className="input" name="password" type="password" autoComplete="new-password" placeholder="Password" defaultValue="admin123" />
                </label>
                <button type="submit" className="btn-primary mt-2 w-full text-center">Create admin account</button>
              </div>

              <p className="mt-6 text-center text-sm text-slate-500">Already have an admin account? <Link href="/auth/login/admin" className="font-semibold text-[#0b2d66] underline underline-offset-4">Sign in here</Link></p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
