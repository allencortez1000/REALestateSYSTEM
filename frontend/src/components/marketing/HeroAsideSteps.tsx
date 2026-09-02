type HeroAsideStep = {
  step: string;
  title: string;
  text: string;
};

type HeroAsideStepsProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: readonly HeroAsideStep[];
};

export default function HeroAsideSteps({ eyebrow, title, description, steps }: HeroAsideStepsProps) {
  return (
    <>
      <div className="section-label text-[#d7be8a]">{eyebrow}</div>
      <div className="mt-4 text-3xl font-semibold leading-tight">{title}</div>
      <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">{description}</p>
      <div className="mt-7 grid gap-3">
        {steps.map((item) => (
          <div key={item.step} className="rounded-[1.35rem] border border-white/10 bg-white/[0.07] p-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d7be8a]">{item.step}</div>
            <div className="mt-2 text-sm font-semibold text-white">{item.title}</div>
            <p className="mt-1 text-sm leading-6 text-white/68">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
