type WorkspaceStatCardProps = {
  title: string;
  description: string;
  count: number | null;
  countClassName?: string;
};

export default function WorkspaceStatCard({
  title,
  description,
  count,
  countClassName = 'rounded-full bg-[#071426] px-2.5 py-0.5 text-xs font-bold text-white'
}: WorkspaceStatCardProps) {
  return (
    <div className="card card-hover p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="section-label">{title}</div>
        {count !== null ? <span className={countClassName}>{count}</span> : null}
      </div>
      <p className="mt-3 text-sm text-slate-500">{description}</p>
    </div>
  );
}
