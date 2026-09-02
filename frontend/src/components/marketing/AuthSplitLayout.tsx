import Image from 'next/image';
import type { ReactNode } from 'react';
import { brand } from '@/data/brand';

type AuthSplitLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  features: readonly (readonly [string, string])[];
  badge: string;
  formTitle: string;
  formDescription: string;
  form: ReactNode;
  footer?: ReactNode;
};

export default function AuthSplitLayout({
  eyebrow,
  title,
  description,
  features,
  badge,
  formTitle,
  formDescription,
  form,
  footer
}: AuthSplitLayoutProps) {
  return (
    <main className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1200px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[#dbe5f2] bg-white/90 shadow-[0_18px_48px_rgba(5,14,30,0.08)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[linear-gradient(135deg,#071426_0%,#0d2342_58%,#b98a3d_180%)] p-8 text-white sm:p-10 lg:p-12">
              <Image src={brand.logo} alt={brand.name} width={280} height={92} className="h-16 w-auto object-contain" priority />
              <div className="mt-10 text-xs uppercase tracking-[0.26em] text-[#f2cf5b]">{eyebrow}</div>
              <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.94] tracking-[-0.08em] text-white">{title}</h1>
              <p className="mt-5 max-w-lg text-base leading-8 text-white/74">{description}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {features.map(([featureTitle, featureText]) => (
                  <div key={featureTitle} className="rounded-[1.4rem] border border-white/10 bg-white/[0.07] p-4 backdrop-blur-sm">
                    <div className="text-sm font-semibold text-white">{featureTitle}</div>
                    <div className="mt-1 text-sm leading-6 text-white/65">{featureText}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 lg:p-12">
              <span className="badge bg-white/80 shadow-soft">{badge}</span>
              <h2 className="mt-6 text-[clamp(1.95rem,4vw,3.1rem)] font-semibold leading-[1.04] tracking-[-0.055em] text-[#08122c]">{formTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{formDescription}</p>

              <div className="mt-8">{form}</div>

              {footer ? <div className="mt-6 text-center text-sm text-slate-500">{footer}</div> : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
