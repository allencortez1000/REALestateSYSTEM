import type { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
};

export default function SectionHeader({ eyebrow, title, description, action, className = '' }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between ${className}`}>
      <div>
        {eyebrow ? <div className="section-label text-[#b98a3d]">{eyebrow}</div> : null}
        <h2 className="mt-3 text-[clamp(1.95rem,4vw,2.8rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-[#071426]">{title}</h2>
        {description ? <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{description}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
