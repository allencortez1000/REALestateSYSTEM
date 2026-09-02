import type { Metadata } from 'next';
import HeroAsideSteps from '@/components/marketing/HeroAsideSteps';
import InfoCard from '@/components/ui/InfoCard';
import PageHero from '@/components/ui/PageHero';
import { inquiryTopics } from '@/data/contact';
import { contactPageContent } from '@/data/content/publicPages';
import { brand } from '@/data/brand';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact RHBC',
  description: 'Send a model-house inquiry, ask about payment computations, schedule viewings, or request buyer guidance.'
};

export default function ContactPage() {
  return (
    <main className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <PageHero
          eyebrow="Model-house inquiry"
          title="Ask about a model house."
          description={contactPageContent.heroDescription}
          aside={
            <HeroAsideSteps
              eyebrow={contactPageContent.asideLabel}
              title={contactPageContent.asideTitle}
              description={contactPageContent.asideText}
              steps={contactPageContent.responseSteps}
            />
          }
        >
          <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-600">{contactPageContent.heroSupport}</p>
        </PageHero>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)]">
          <div className="space-y-4">
            {contactPageContent.contactMethods.map((item) => (
              <InfoCard
                key={item.label}
                label={item.label}
                value={item.label === 'Email' ? brand.email : item.label === 'Phone' ? brand.phone : brand.location}
                note={item.note}
                className="card p-6 shadow-[0_10px_24px_rgba(9,21,64,0.04)]"
              />
            ))}

            <div className="rounded-[1.75rem] border border-[#e7dcc8] bg-[linear-gradient(135deg,#071426_0%,#0d2342_100%)] p-6 text-white shadow-[0_14px_34px_rgba(9,21,64,0.07)]">
              <div className="section-label text-[#d7be8a]">{contactPageContent.inquiryTopicsTitle}</div>
              <div className="mt-4 grid gap-2">
                {inquiryTopics.map((topic) => (
                  <div key={topic} className="rounded-2xl border border-white/8 bg-white/[0.06] px-4 py-3 text-sm text-white/76">{topic}</div>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
