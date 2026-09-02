type HeroAsideIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  eyebrowClassName?: string;
};

export default function HeroAsideIntro({
  eyebrow,
  title,
  description,
  eyebrowClassName = 'text-[#d7be8a]'
}: HeroAsideIntroProps) {
  return (
    <div className="flex min-h-[220px] items-end">
      <div className="max-w-sm">
        <div className={`section-label ${eyebrowClassName}`}>{eyebrow}</div>
        <div className="mt-4 text-3xl font-semibold leading-tight">{title}</div>
        <p className="mt-4 text-sm leading-7 text-white/72">{description}</p>
      </div>
    </div>
  );
}
