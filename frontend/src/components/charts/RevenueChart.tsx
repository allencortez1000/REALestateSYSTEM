const bars = [40, 65, 55, 80, 60, 90, 70, 85];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Today'];

export default function RevenueChart() {
  return (
    <div className="card p-7">
      <div className="flex items-center justify-between">
        <div>
          <div className="section-label">Revenue</div>
          <div className="mt-2 text-3xl font-bold text-[color:var(--midnight)]">₱68.4M</div>
        </div>
        <span className="rounded-full border border-[color:var(--border)] bg-white/80 px-3 py-1.5 text-xs font-semibold text-[color:var(--gold)]">+18% this month</span>
      </div>
      <div className="mt-8 flex h-56 items-end gap-2">
        {bars.map((height, index) => (
          <div key={index} className="group flex flex-1 flex-col items-center gap-2">
            <div className="relative w-full overflow-hidden rounded-t-xl transition-all duration-300 group-hover:opacity-80" style={{ height: `${height}%`, background: 'linear-gradient(180deg, #b98a3d, #071426)' }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent)]" />
            </div>
            <span className="text-[10px] text-[color:var(--warm-gray)]">{days[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
