type MetricCardProps = {
  label: string;
  value: string;
  note?: string;
  className?: string;
};

export default function MetricCard({ label, value, note, className = '' }: MetricCardProps) {
  return (
    <div className={`rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.86)] p-4 ${className}`}>
      <div className="text-[11px] uppercase leading-5 tracking-[0.16em] text-slate-500">{label}</div>
      <div className="mt-2 break-words text-2xl font-semibold leading-tight text-[#071426] sm:text-3xl">{value}</div>
      {note ? <p className="mt-2 text-xs leading-5 text-slate-500">{note}</p> : null}
    </div>
  );
}
