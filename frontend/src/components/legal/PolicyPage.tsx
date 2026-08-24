type PolicyPageProps = {
  label: string;
  title: string;
  intro: string;
  sections: Array<readonly [title: string, text: string]>;
};

export default function PolicyPage({ label, title, intro, sections }: PolicyPageProps) {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-[2.5rem] border border-[#e7dcc8] bg-white/90 p-8 shadow-[0_24px_80px_rgba(9,21,64,0.10)] sm:p-10">
        <div className="section-label text-[#b98a3d]">{label}</div>
        <h1 className="mt-4 text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.9] tracking-[-0.085em] text-[#071426]">{title}</h1>
        <p className="mt-5 text-sm leading-7 text-slate-600">{intro}</p>
        <div className="mt-8 grid gap-4">
          {sections.map(([sectionTitle, text]) => (
            <section key={sectionTitle} className="rounded-[1.5rem] border border-[#e7dcc8] bg-[#fbf8f0] p-5">
              <h2 className="text-xl font-semibold tracking-[-0.04em] text-[#071426]">{sectionTitle}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
