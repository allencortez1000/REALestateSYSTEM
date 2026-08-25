import AdminShell from '../_components/AdminShell';
import { notFound } from 'next/navigation';

type SectionPageProps = {
  params: Promise<{ section: string }>;
};

const modules: Record<string, { title: string; description: string; blocks: { title: string; body: string }[] }> = {
  properties: {
    title: 'Model Houses',
    description: 'Model-house table, grid view, filters, bulk actions, export tools, and a full add/edit workflow for Amica Residences.',
    blocks: [
      { title: 'Listing table', body: 'Code, name, model type, location, price, lot area, floor area, status, featured flag, and actions.' },
      { title: 'Listing form', body: 'Basic information, location, house details, amenities, media, assignment, SEO, draft/publish, validation, and preview.' }
    ]
  },
  categories: {
    title: 'Property Categories',
    description: 'Manage categories like model house, condominium, townhouse, commercial, warehouse, and more across the Philippine market.',
    blocks: [
      { title: 'Category management', body: 'Add, edit, delete, activate, deactivate, and track listing counts per category.' }
    ]
  },
  locations: {
    title: 'Locations',
    description: 'Manage provinces, cities, municipalities, barangays, and featured locations for Amica Residences model houses across the Philippines.',
    blocks: [{ title: 'Location manager', body: 'Add images, descriptions, featured flags, and property counts per location.' }]
  },
  leads: {
    title: 'Leads and Inquiries',
    description: 'CRM-style lead pipeline for Amica Residences with status changes, priority, notes, follow-ups, and export tools.',
    blocks: [{ title: 'Lead workflow', body: 'New, contacted, qualified, viewing scheduled, negotiating, converted, closed, and lost.' }]
  },
  appointments: {
    title: 'Viewing Appointments',
    description: 'Calendar, table, daily, weekly, and monthly views for all scheduled Amica Residences home visits.',
    blocks: [{ title: 'Appointment management', body: 'Confirm, reschedule, cancel, mark completed, and send reminders.' }]
  },
  buyers: {
    title: 'Buyers',
    description: 'Buyer profiles, saved model houses, viewing history, budgets, notes, and assigned agents.',
    blocks: [{ title: 'Buyer profiles', body: 'Create, edit, match properties, record communication, and schedule viewings.' }]
  },
  sellers: {
    title: 'Sellers',
    description: 'Seller and property owner management with documents, model-house listings, commissions, and history.',
    blocks: [{ title: 'Seller profiles', body: 'Add property, upload documents, review property history, and archive sellers.' }]
  },
  agents: {
    title: 'Agents',
    description: 'Agent performance, assigned model houses, leads, commissions, targets, and activity history.',
    blocks: [{ title: 'Agent management', body: 'Activate, deactivate, reset password, assign leads, and review monthly performance.' }]
  },
  users: {
    title: 'Users',
    description: 'Unified user management for buyers, sellers, agents, and administrators.',
    blocks: [{ title: 'Account actions', body: 'View, edit, verify, suspend, activate, reset password, and delete accounts.' }]
  },
  articles: {
    title: 'Journal and Articles',
    description: 'CMS for editorial content with drafts, scheduling, SEO, media, and preview tools.',
    blocks: [{ title: 'Article CMS', body: 'Rich text editor, category filters, duplicate article, and publish controls.' }]
  },
  testimonials: {
    title: 'Testimonials',
    description: 'Manage client testimonials, approval status, featured placement, and property associations.',
    blocks: [{ title: 'Testimonial workflow', body: 'Add, approve, reject, feature, and delete testimonials.' }]
  },
  homepage: {
    title: 'Homepage Content',
    description: 'Edit hero content, featured model houses, statistics, CTA buttons, footer, and social links.',
    blocks: [{ title: 'Live preview', body: 'Update the homepage copy and save changes with instant preview context.' }]
  },
  media: {
    title: 'Media Library',
    description: 'Centralized media library for model-house photos, articles, documents, floor plans, and videos.',
    blocks: [{ title: 'File management', body: 'Upload, preview, rename, copy URL, download, filter, and delete media assets.' }]
  },
  marketing: {
    title: 'Marketing',
    description: 'Subscribers, campaigns, banners, social links, and lead source tracking.',
    blocks: [{ title: 'Campaign tools', body: 'Schedule email campaigns, manage audiences, and review delivery metrics.' }]
  },
  reports: {
    title: 'Reports and Analytics',
    description: 'Revenue, leads, conversions, appointments, commissions, traffic, and exportable reports for Amica Residence listings.',
    blocks: [{ title: 'Performance reporting', body: 'Date filters, charts, print-ready summaries, and export support.' }]
  },
  notifications: {
    title: 'Notifications',
    description: 'Notification center for inquiries, registrations, appointments, and Amica Residences system alerts.',
    blocks: [{ title: 'Notification center', body: 'Mark as read, unread filters, preferences, and alert management.' }]
  },
  settings: {
    title: 'Website Settings',
    description: 'General, email, SEO, integrations, and security settings with tabbed organization for the Amica Residences platform.',
    blocks: [{ title: 'Settings tabs', body: 'Configure the site, email templates, integrations, and account security rules.' }]
  },
  accounts: {
    title: 'Admin Accounts and Roles',
    description: 'Create roles, assign permissions, and manage administrator access by module.',
    blocks: [{ title: 'Role system', body: 'Super Admin, Administrator, Property Manager, Agent Manager, Content Manager, Marketing Manager, Support Staff, and Viewer.' }]
  },
  'audit-logs': {
    title: 'Audit Logs',
    description: 'Immutable audit trail for admin actions, records, devices, and IP addresses.',
    blocks: [{ title: 'Secure logging', body: 'Admin, action, module, affected record, old value, new value, time, IP, and device details.' }]
  }
};

export async function generateStaticParams() {
  return Object.keys(modules).map((section) => ({ section }));
}

export default async function AdminSectionPage({ params }: SectionPageProps) {
  const { section } = await params;
  const module = modules[section];

  if (!module) notFound();

  return (
    <AdminShell title={module.title} description={module.description}>
      <div className="grid gap-6 lg:grid-cols-2">
        {module.blocks.map((block, index) => (
          <div key={block.title} className="rounded-[1.75rem] border border-[color:var(--border)] bg-white/90 p-6 shadow-[0_16px_50px_rgba(7,20,38,0.08)] sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div className="section-label">{block.title}</div>
              <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--cream)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--warm-gray)]">0{index + 1}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-[color:var(--warm-gray)]">{block.body}</p>
            <div className="mt-5 h-52 rounded-[1.5rem] border border-dashed border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(13,35,66,0.03),rgba(247,243,234,0.96))]" />
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
