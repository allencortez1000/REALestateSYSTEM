import type { Metadata } from 'next';
import MarketingHeroSplit from '@/components/marketing/MarketingHeroSplit';
import { brand } from '@/data/brand';
import { messagesPageContent } from '@/data/content/secondaryPages';
import MessagesExperience from './MessagesExperience';

export const metadata: Metadata = {
  title: 'Messages',
  description: `Review buyer, seller, and agent conversations across the ${brand.name} real estate platform.`
};

export default function MessagesPage() {
  return (
    <main className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <MarketingHeroSplit
          badge={messagesPageContent.badge}
          title={messagesPageContent.title}
          description={messagesPageContent.description}
          asideEyebrow={messagesPageContent.asideEyebrow}
          asideTitle={messagesPageContent.asideTitle}
          asideDescription={messagesPageContent.asideDescription}
        />

        <MessagesExperience />
      </section>
    </main>
  );
}
