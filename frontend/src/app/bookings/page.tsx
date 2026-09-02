import type { Metadata } from 'next';
import HeroAsideIntro from '@/components/marketing/HeroAsideIntro';
import PageHero from '@/components/ui/PageHero';
import { bookingsPageContent } from '@/data/content/secondaryPages';
import BookingsExperience from './BookingsExperience';

export const metadata: Metadata = {
  title: 'Bookings',
  description: 'Manage model-house viewing requests and booking schedules in the Amica Residences customer experience.'
};

export default function BookingsPage() {
  return (
    <main className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <PageHero
          eyebrow={bookingsPageContent.badge}
          title={bookingsPageContent.title}
          description={bookingsPageContent.description}
          aside={
            <HeroAsideIntro
              eyebrow={bookingsPageContent.asideEyebrow}
              title={bookingsPageContent.asideTitle}
              description={bookingsPageContent.asideDescription}
            />
          }
        />

        <BookingsExperience />
      </section>
    </main>
  );
}
