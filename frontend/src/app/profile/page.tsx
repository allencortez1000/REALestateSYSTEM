export default function ProfilePage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[2.75rem] border border-[#e7dcc8] bg-white/84 shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="badge bg-white/80 shadow-soft">Account</span>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.3rem)] leading-[0.9] tracking-[-0.085em] text-[#071426]">Profile settings.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">Manage your personal information and security settings in one refined workspace.</p>
            </div>
            <div className="bg-[linear-gradient(135deg,#071426_0%,#0d2342_55%,#b98a3d_180%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.35em] text-[#d7be8a]">AMICA profile</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">A polished account experience with premium control.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">Edit your details and security settings with confidence.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[240px_1fr]">
          <div className="card p-6 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#071426] text-3xl font-bold text-[#d7be8a] shadow-luxury">A</div>
            <div className="mt-4 font-bold text-[#071426]">AMICA Admin</div>
            <div className="text-sm text-slate-500">admin@amica.com</div>
            <div className="mt-3 inline-flex rounded-full bg-[#d7be8a]/20 px-3 py-1 text-xs font-semibold text-[#0d2342]">Administrator</div>
            <button className="btn-outline mt-5 w-full py-2 text-xs">Upload photo</button>
          </div>

          <div className="card p-8 md:p-10">
            <div className="section-label">Personal information</div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input className="input" placeholder="First name" />
              <input className="input" placeholder="Last name" />
              <input className="input" placeholder="Email address" />
              <input className="input" placeholder="Phone number" />
              <input className="input md:col-span-2" placeholder="Address" />
            </div>
            <div className="mt-6 border-t border-[#e8dfc8] pt-6">
              <div className="section-label">Security</div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input className="input" type="password" placeholder="Current password" />
                <input className="input" type="password" placeholder="New password" />
              </div>
            </div>
            <button className="btn-primary mt-6">Save all changes</button>
          </div>
        </div>
      </section>
    </main>
  );
}
