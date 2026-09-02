type ChartPlaceholderProps = {
  title: string;
  className?: string;
};

export default function ChartPlaceholder({ title, className = '' }: ChartPlaceholderProps) {
  return (
    <div className={`h-56 rounded-[1.5rem] border border-dashed border-[#dccfa9] bg-gradient-to-br from-[#f8fbff] to-white p-4 ${className}`}>
      <div className="text-sm font-semibold text-[#071426]">{title}</div>
      <div className="mt-4 h-40 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(185,138,61,0.22),_transparent_55%),linear-gradient(180deg,rgba(9,21,64,0.04),rgba(9,21,64,0.01))]" />
    </div>
  );
}
