import type { Metadata } from 'next';
import CompareExperience from './CompareExperience';

export const metadata: Metadata = {
  title: 'Compare Model Houses',
  description: 'Compare Amica Residences by Rabino Home Builders Corporation model houses side by side by price, size, package type, features, and buyer fit.'
};

export default function ComparePage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1560px]">
        <div className="overflow-hidden rounded-[2.5rem] border border-[#dbe5f2] bg-white/84 shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="badge bg-white/80 shadow-soft">Side by side</span>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.3rem)] leading-[0.9] tracking-[-0.085em] text-[#08122c]">Compare model houses.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">A clearer comparison view for buyers who want to quickly understand price, fit, size, and package type.</p>
            </div>
            <div className="bg-[linear-gradient(135deg,#08122c_0%,#0b2d66_55%,#b98a3d_180%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.35em] text-[#f2cf5b]">RHBC compare</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">Choose based on lifestyle, budget, and home type.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">Use the selector and comparison table below to find the model that best matches your needs.</p>
            </div>
          </div>
        </div>

        <CompareExperience />
      </section>
    </main>
  );
}
