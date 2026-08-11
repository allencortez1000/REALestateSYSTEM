import Image from 'next/image';

export default function RegisterPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1200px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[#dbe5f2] bg-white/88 shadow-[0_30px_100px_rgba(5,14,30,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[linear-gradient(135deg,#071426_0%,#0d2342_58%,#b98a3d_180%)] p-8 text-white sm:p-10 lg:p-12">
              <Image src="/amicarealestate.jpg" alt="AMICA Condominium Realty Corporation" width={280} height={92} className="h-16 w-auto object-contain" priority />
              <div className="mt-10 text-xs uppercase tracking-[0.35em] text-[#f2cf5b]">New account</div>
              <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.94] tracking-[-0.08em] text-white">Create your AMICA account.</h1>
              <p className="mt-5 max-w-lg text-base leading-8 text-white/74">Start browsing premium model houses, saving favorites, and scheduling private viewings in seconds.</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  ['Fast onboarding', 'Create an account in minutes'],
                  ['Curated listings', 'Browse premium model houses'],
                  ['Personal workspace', 'Save, compare, and inquire']
                ].map(([title, text]) => (
                  <div key={title} className="rounded-[1.4rem] border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                    <div className="text-sm font-semibold text-white">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-white/65">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <form className="bg-white p-8 sm:p-10 lg:p-12">
              <span className="badge bg-white/80 shadow-soft">Join AMICA</span>
              <h2 className="mt-6 text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.06em] text-[#08122c]">Create account</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Set up a customer profile to start saving model houses and booking private viewings.</p>

              <div className="mt-8 grid gap-4">
                <input className="input" placeholder="Full name" />
                <input className="input" placeholder="Email address" />
                <input className="input" type="password" placeholder="Password" />
                <button className="btn-primary mt-2 w-full text-center">Create account</button>
              </div>

              <p className="mt-6 text-center text-sm text-slate-500">Already have an account? <a href="/auth/login" className="font-semibold text-[#0b2d66] underline underline-offset-4">Sign in</a></p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
