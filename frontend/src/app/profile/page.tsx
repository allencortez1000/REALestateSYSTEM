import type { Metadata } from 'next';
import ProfileExperience from './ProfileExperience';

export const metadata: Metadata = {
  title: 'Profile Settings',
  description: 'Manage your Amica Residences customer profile, contact details, and account preferences.'
};

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
              <div className="text-xs uppercase tracking-[0.35em] text-[#d7be8a]">Amica Residences profile</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">A polished account experience with premium control.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">Edit your details and security settings with confidence.</p>
            </div>
          </div>
        </div>

        <ProfileExperience />
      </section>
    </main>
  );
}
