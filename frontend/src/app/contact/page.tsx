export default function ContactPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,243,234,0.88))] shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="badge bg-white/80 shadow-soft">Let's talk</span>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.3rem)] leading-[0.9] tracking-[-0.085em] text-[#071426]">Contact AMICA.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">Speak with our advisors about your goals, private viewings, or any enquiry across Metro Manila and nearby key cities.</p>
            </div>
            <div className="bg-[linear-gradient(135deg,#071426_0%,#0d2342_62%,#13273f_100%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.35em] text-[#d7be8a]">Concierge support</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">Fast, personal, premium service with a concierge touch.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">We respond with clarity and guide every inquiry with care and discretion.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {[
              { label: 'Email', value: 'hello@amica.com' },
              { label: 'Phone', value: '+63 912 345 6789' },
              { label: 'Location', value: 'Metro Manila, Philippines' }
            ].map((item) => (
              <div key={item.label} className="card p-6">
                <div className="section-label">{item.label}</div>
                <div className="mt-2 text-lg font-semibold text-[#071426]">{item.value}</div>
              </div>
            ))}
          </div>

          <form className="card p-8 md:p-10">
            <div className="section-label">Send us a message</div>
            <h2 className="mt-3 text-[clamp(2rem,4vw,2.8rem)] font-semibold text-[#071426]">We'd love to hear from you</h2>
            <div className="mt-7 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="input" placeholder="First name" />
                <input className="input" placeholder="Last name" />
              </div>
              <input className="input" placeholder="Email address" />
              <input className="input" placeholder="Phone number" />
              <textarea className="input resize-none" rows={6} placeholder="Your message…" />
              <button className="btn-primary w-full text-center">Send message</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
