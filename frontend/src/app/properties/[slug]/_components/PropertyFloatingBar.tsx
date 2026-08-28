import { brand } from '@/data/brand';

type PropertyFloatingBarProps = {
  title: string;
};

export default function PropertyFloatingBar({ title }: PropertyFloatingBarProps) {
  return (
    <div suppressHydrationWarning className="fixed bottom-4 left-3 right-3 z-40 rounded-[1.5rem] border border-[#d7be8a]/45 bg-[#071426] p-2.5 shadow-[0_20px_70px_rgba(5,14,30,0.38)] sm:bottom-5 sm:left-auto sm:right-6 sm:w-auto sm:min-w-[430px] sm:rounded-full">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <div className="px-3 text-white sm:px-5">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2cf5b]">Interested in this model?</div>
          <div className="mt-0.5 truncate text-sm font-bold text-white sm:max-w-[190px]">{title}</div>
        </div>
        <a href="#inquiry" className="w-full rounded-full bg-[#d7be8a] px-5 py-3 text-center text-sm font-bold text-[#071426] shadow-[0_10px_26px_rgba(215,190,138,0.35)] transition hover:bg-[#f2cf5b] sm:w-auto">Inquire now</a>
        <a href={brand.phoneHref} className="w-full rounded-full border border-white/45 bg-white/10 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/18 sm:w-auto sm:inline-flex">Call</a>
      </div>
    </div>
  );
}
