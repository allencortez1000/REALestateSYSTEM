import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
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
          eyebrow="Calendar"
          title="Bookings made effortless."
          description="Schedule, reschedule, and manage private viewings through a clean premium workflow across Metro Manila and nearby cities."
          aside={
            <div className="flex min-h-[220px] items-end">
              <div className="max-w-sm">
                <div className="section-label text-[#d7be8a]">Amica Residences bookings</div>
                <div className="mt-4 text-3xl font-semibold leading-tight">A calmer appointment system for premium viewings.</div>
                <p className="mt-4 text-sm leading-7 text-white/72">Coordinate tours with clarity and confidence.</p>
              </div>
            </div>
          }
        />

        <BookingsExperience />
      </section>
    </main>
  );
}
