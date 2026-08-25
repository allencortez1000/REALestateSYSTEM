import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  className?: string;
  asideClassName?: string;
};

export default function PageHero({ eyebrow, title, description, children, aside, className = '', asideClassName = '' }: PageHeroProps) {
  return (
    <section className={`overflow-hidden rounded-[2rem] border border-[rgba(231,220,200,0.95)] bg-white/84 shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm sm:rounded-[2.75rem] ${className}`}>
      <div className="grid gap-0 xl:grid-cols-[minmax(0,1fr)_minmax(340px,0.95fr)]">
        <div className="p-6 sm:p-8 lg:p-10">
          {eyebrow ? <div className="section-label text-[#b98a3d]">{eyebrow}</div> : null}
          <h1 className="mt-4 max-w-3xl text-[clamp(2.35rem,10vw,5.3rem)] leading-[0.94] tracking-[-0.075em] text-[#071426] sm:leading-[0.9] sm:tracking-[-0.085em]">
            {title}
          </h1>
          {description ? <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{description}</p> : null}
          {children}
        </div>
        {aside ? (
          <div className={`bg-[linear-gradient(135deg,#071426_0%,#0d2342_62%,#b98a3d_180%)] p-6 text-white sm:p-8 lg:p-10 ${asideClassName}`}>
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
