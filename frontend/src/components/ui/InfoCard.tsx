import type { ReactNode } from 'react';

type InfoCardProps = {
  label: ReactNode;
  value: ReactNode;
  note?: ReactNode;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
  noteClassName?: string;
};

export default function InfoCard({
  label,
  value,
  note,
  className = '',
  labelClassName = 'section-label',
  valueClassName = 'mt-2 text-lg font-semibold text-[#071426]',
  noteClassName = 'mt-2 text-sm leading-6 text-slate-500'
}: InfoCardProps) {
  return (
    <div className={className}>
      <div className={labelClassName}>{label}</div>
      <div className={valueClassName}>{value}</div>
      {note ? <p className={noteClassName}>{note}</p> : null}
    </div>
  );
}
