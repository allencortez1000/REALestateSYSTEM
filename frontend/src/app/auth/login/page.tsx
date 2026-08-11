import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1200px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[#dbe5f2] bg-white/88 shadow-[0_30px_100px_rgba(5,14,30,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[linear-gradient(135deg,#071426_0%,#0d2342_58%,#b98a3d_180%)] p-8 text-white sm:p-10 lg:p-12">
              <Image src="/amicarealestate.jpg" alt="AMICA Condominium Realty Corporation" width={280} height={92} className="h-16 w-auto object-contain" priority />
              <div className="mt-10 text-xs uppercase tracking-[0.35em] text-[#f2cf5b]">Customer access</div>
              <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.94] tracking-[-0.08em] text-white">Sign in to your AMICA workspace.</h1>
              <p className="mt-5 max-w-lg text-base leading-8 text-white/74">Access saved homes, inquiries, viewings, and messages through a clean, premium portal experience.</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  ['Secure access', 'Private customer login'],
                  ['Saved homes', 'Compare and review later'],
                  ['Viewing support', 'Book and manage tours']
                ].map(([title, text]) => (
                  <div key={title} className="rounded-[1.4rem] border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                    <div className="text-sm font-semibold text-white">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-white/65">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <form className="bg-white p-8 sm:p-10 lg:p-12">
              <span className="badge bg-white/80 shadow-soft">Welcome back</span>
              <h2 className="mt-6 text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.06em] text-[#08122c]">Customer sign in</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Use your customer account to manage model houses, bookings, and conversations across Metro Manila and beyond.</p>

              <div className="mt-6 rounded-[1.5rem] border border-[#dbe5f2] bg-[#f8fbff] p-4 text-sm text-slate-600">
                <div className="font-semibold text-[#08122c]">Demo customer account</div>
                <div className="mt-2 grid gap-1">
                  <div><span className="font-medium text-slate-500">Email:</span> customer@rhbcrealestate.com</div>
                  <div><span className="font-medium text-slate-500">Password:</span> customer123</div>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                <input className="input" placeholder="Email address" defaultValue="customer@rhbcrealestate.com" />
                <input className="input" type="password" placeholder="Password" defaultValue="customer123" />
                <Link href="/dashboard/customer" className="btn-primary mt-2 w-full text-center">Sign in</Link>
              </div>

              <div className="mt-6 flex flex-col items-center gap-3 text-center text-sm text-slate-500 sm:flex-row sm:justify-between">
                <p>Don't have an account? <a href="/auth/register" className="font-semibold text-[#0b2d66] underline underline-offset-4">Register</a></p>
                <a href="/auth/login/admin" className="font-semibold text-[#8a6428] underline underline-offset-4">Admin login</a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
