import type { Metadata } from 'next';
import MarketingHeroSplit from '@/components/marketing/MarketingHeroSplit';
import ProfileExperience from './ProfileExperience';

export const metadata: Metadata = {
  title: 'Profile Settings',
  description: 'Manage your Amica Residences customer profile, contact details, and account preferences.'
};

export default function ProfilePage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <MarketingHeroSplit
          badge="Account"
          title="Profile settings."
          description="Manage your personal information and security settings in one refined workspace."
          asideEyebrow="Amica Residences profile"
          asideTitle="A polished account experience with premium control."
          asideDescription="Edit your details and security settings with confidence."
          className="bg-white/84 shadow-[0_24px_80px_rgba(9,21,64,0.10)]"
          asideClassName="bg-[linear-gradient(135deg,#071426_0%,#0d2342_55%,#b98a3d_180%)]"
        />

        <ProfileExperience />
      </section>
    </main>
  );
}
