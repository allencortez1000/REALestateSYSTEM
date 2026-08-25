import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import { inquiryTopics } from '@/data/contact';
import { brand } from '@/data/brand';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact RHBC',
  description: 'Send a model-house inquiry, ask about payment computations, schedule viewings, or request buyer guidance.'
};


const contactMethods = [
  { label: 'Email', value: brand.email, note: 'Send model-house and document inquiries anytime.' },
  { label: 'Phone', value: brand.phone, note: 'Call for viewing schedules and quick computation questions.' },
  { label: 'Location', value: brand.location, note: 'Serving buyers across Metro Manila and nearby key cities.' }
];

const responseSteps = [
  { step: '01', title: 'Submit inquiry', text: 'Tell us which model or housing project you are interested in.' },
  { step: '02', title: 'Sales review', text: 'Our team reviews your preferred schedule, budget, and questions.' },
  { step: '03', title: 'Get guidance', text: 'Receive next steps for viewing, computation, documents, or reservation.' }
];

export default function ContactPage() {
  return (
    <main className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1500px]">
        <PageHero
          eyebrow="Model-house inquiry"
          title="Ask about a model house."
          description={`Use this page to ask about viewing schedules, payment computations, requirements, or which ${brand.companyName} model best fits your budget and lifestyle.`}
          aside={
            <>
              <div className="section-label text-[#d7be8a]">Concierge support</div>
              <div className="mt-4 text-3xl font-semibold leading-tight">Clear guidance from inquiry to viewing.</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">We help buyers understand model options, sample computations, schedule requirements, and next steps before reservation.</p>
              <div className="mt-7 grid gap-3">
                {responseSteps.map((item) => (
                  <div key={item.step} className="rounded-[1.35rem] border border-white/10 bg-white/8 p-4">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d7be8a]">{item.step}</div>
                    <div className="mt-2 text-sm font-semibold text-white">{item.title}</div>
                    <p className="mt-1 text-sm leading-6 text-white/68">{item.text}</p>
                  </div>
                ))}
              </div>
            </>
          }
        >
          <div className="mt-7 flex flex-wrap gap-2">
            {inquiryTopics.slice(0, 4).map((topic) => (
              <span key={topic} className="rounded-full border border-[#e7dcc8] bg-white px-3 py-2 text-xs font-semibold text-[#8a6428]">{topic}</span>
            ))}
          </div>
        </PageHero>

        <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,0.88fr)_minmax(360px,1.12fr)]">
          <div className="space-y-4">
            {contactMethods.map((item) => (
              <div key={item.label} className="card p-6">
                <div className="section-label">{item.label}</div>
                <div className="mt-2 text-lg font-semibold text-[#071426]">{item.value}</div>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.note}</p>
              </div>
            ))}

            <div className="rounded-[1.75rem] border border-[#e7dcc8] bg-[linear-gradient(135deg,#071426_0%,#0d2342_100%)] p-6 text-white shadow-[0_16px_50px_rgba(9,21,64,0.08)]">
              <div className="section-label text-[#d7be8a]">Common inquiry topics</div>
              <div className="mt-4 grid gap-2">
                {inquiryTopics.map((topic) => (
                  <div key={topic} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/78">{topic}</div>
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
