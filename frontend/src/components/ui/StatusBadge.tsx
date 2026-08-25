import type { ReactNode } from 'react';

type StatusBadgeProps = {
  children: ReactNode;
  tone?: 'navy' | 'gold' | 'cream' | 'success' | 'danger' | 'muted';
  className?: string;
};

const toneClasses = {
  navy: 'border-[#071426] bg-[#071426] text-white',
  gold: 'border-[#d7be8a] bg-[#d7be8a] text-[#071426]',
  cream: 'border-[#e7dcc8] bg-[#fbf8f0] text-[#8a6428]',
  success: 'border-emerald-100 bg-emerald-50 text-emerald-700',
  danger: 'border-rose-100 bg-rose-50 text-rose-700',
  muted: 'border-[#e7dcc8] bg-white text-slate-500'
};

export default function StatusBadge({ children, tone = 'cream', className = '' }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase leading-4 tracking-[0.14em] ${toneClasses[tone]} ${className}`}>
      {children}
    </span>
  );
}
