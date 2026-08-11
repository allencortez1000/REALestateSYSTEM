import CustomerShell from '../_components/CustomerShell';
import { notFound } from 'next/navigation';

type SectionPageProps = {
  params: Promise<{ section: string }>;
};

const modules: Record<string, { title: string; description: string; blocks: { title: string; body: string }[] }> = {
  properties: {
    title: 'Browse Model Houses',
    description: 'Search, sort, filter, compare, save, and view detailed AMICA model-house listings with premium browsing controls tailored for discerning Philippine buyers.',
    blocks: [{ title: 'Property browsing', body: 'Grid, list, featured section, map view, and model-house cards with save and compare actions.' }]
  },
  saved: {
    title: 'Saved Properties',
    description: 'Manage saved AMICA listings with search, filtering, sorting, and quick actions.',
    blocks: [{ title: 'Saved list management', body: 'View, remove, compare, schedule viewings, send inquiries, and share model houses.' }]
  },
  comparisons: {
    title: 'Property Comparisons',
    description: 'Compare up to four AMICA model houses side-by-side with highlighted best values and actions.',
    blocks: [{ title: 'Comparison matrix', body: 'Price, location, model type, bedrooms, bathrooms, area, amenities, status, and agent.' }]
  },
  inquiries: {
    title: 'My Inquiries',
    description: 'Track inquiry reference numbers for AMICA model houses, assigned agents, follow-ups, conversations, and statuses.',
    blocks: [{ title: 'Inquiry timeline', body: 'Submitted, received, in review, agent assigned, responded, viewing scheduled, negotiating, and closed.' }]
  },
  appointments: {
    title: 'Viewing Appointments',
    description: 'Upcoming, completed, and cancelled appointments for model-house viewings with calendar and list views.',
    blocks: [{ title: 'Appointment manager', body: 'Schedule, confirm, reschedule, cancel, open map, message agent, and leave feedback.' }]
  },
  messages: {
    title: 'Messages',
    description: 'Private, real-time customer conversations with agents and listing labels for AMICA homes.',
    blocks: [{ title: 'Secure messaging', body: 'Conversation list, search, attachments, typing indicator, and unread markers.' }]
  },
  notifications: {
    title: 'Notifications',
    description: 'Inquiry replies, reminders, listing changes, message alerts, and notification preferences.',
    blocks: [{ title: 'Notification center', body: 'Mark as read, filter unread, remove notifications, and open related pages.' }]
  },
  progress: {
    title: 'Purchase or Rental Progress',
    description: 'Track the full journey from inquiry to completion for AMICA model houses with milestones, documents, and payment steps.',
    blocks: [{ title: 'Progress tracker', body: 'Timeline history, current stage, pending requirements, assigned agent, and payment summary.' }]
  },
  documents: {
    title: 'Documents',
    description: 'Secure document storage for uploads, previews, verification status, downloads, and access control.',
    blocks: [{ title: 'Document center', body: 'Valid identification, proof of income, contracts, receipts, ownership documents, and private signed URLs.' }]
  },
  listings: {
    title: 'My Listings',
    description: 'Seller customers can manage model-house listings, approvals, views, inquiries, and submission status.',
    blocks: [{ title: 'Listing workflow', body: 'Draft, submitted, under review, changes requested, approved, published, sold, rented, archived, rejected.' }]
  },
  submit: {
    title: 'Submit a Property',
    description: 'Multi-step seller submission form for AMICA residences with validation, media, documents, and review flow.',
    blocks: [{ title: 'Submission form', body: 'Basic info, location, details, amenities, media, documents, and final review before submission.' }]
  },
  profile: {
    title: 'Profile',
    description: 'Manage profile photo, contact information, customer preferences, and seller details when applicable in the AMICA portal.',
    blocks: [{ title: 'Profile editor', body: 'Buyer and seller fields, contact preferences, budget range, and account verification fields.' }]
  },
  settings: {
    title: 'Account Settings',
    description: 'Edit your account details, security, notifications, privacy, sessions, and data requests for your AMICA account.',
    blocks: [{ title: 'Settings tabs', body: 'Account, security, notifications, privacy, and account management controls.' }]
  },
  help: {
    title: 'Help and Support',
    description: 'Support articles, FAQs, contact form, and support ticket history for AMICA clients.',
    blocks: [{ title: 'Support center', body: 'Searchable help articles, ticket statuses, and customer support entry points.' }]
  }
};

export async function generateStaticParams() {
  return Object.keys(modules).map((section) => ({ section }));
}

export default async function CustomerSectionPage({ params }: SectionPageProps) {
  const { section } = await params;
  const module = modules[section];
  if (!module) notFound();

  return (
    <CustomerShell title={module.title} description={module.description}>
      <div className="grid gap-6 lg:grid-cols-2">
        {module.blocks.map((block, index) => (
          <div key={block.title} className="rounded-[1.75rem] border border-[color:var(--border)] bg-white/90 p-6 shadow-[0_16px_50px_rgba(7,20,38,0.08)] sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div className="section-label">{block.title}</div>
              <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--cream)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--warm-gray)]">0{index + 1}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-[color:var(--warm-gray)]">{block.body}</p>
            <div className="mt-5 h-52 rounded-[1.5rem] border border-dashed border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(13,35,66,0.04),rgba(247,243,234,0.96))]" />
          </div>
        ))}
      </div>
    </CustomerShell>
  );
}
