import { modelHouses } from '@/data/modelHouses';

export const adminSections = [
  { href: '/dashboard/admin', label: 'Dashboard' },
  { href: '/dashboard/admin/properties', label: 'Model Houses' },
  { href: '/dashboard/admin/categories', label: 'Model House Categories' },
  { href: '/dashboard/admin/locations', label: 'Locations' },
  { href: '/dashboard/admin/leads', label: 'Leads and Inquiries' },
  { href: '/dashboard/admin/appointments', label: 'Viewing Appointments' },
  { href: '/dashboard/admin/buyers', label: 'Buyers' },
  { href: '/dashboard/admin/sellers', label: 'Sellers' },
  { href: '/dashboard/admin/agents', label: 'Agents' },
  { href: '/dashboard/admin/users', label: 'Users' },
  { href: '/dashboard/admin/articles', label: 'Journal and Articles' },
  { href: '/dashboard/admin/testimonials', label: 'Testimonials' },
  { href: '/dashboard/admin/homepage', label: 'Homepage Content' },
  { href: '/dashboard/admin/media', label: 'Media Library' },
  { href: '/dashboard/admin/marketing', label: 'Marketing' },
  { href: '/dashboard/admin/reports', label: 'Reports and Analytics' },
  { href: '/dashboard/admin/notifications', label: 'Notifications' },
  { href: '/dashboard/admin/settings', label: 'Website Settings' },
  { href: '/dashboard/admin/accounts', label: 'Admin Accounts' },
  { href: '/dashboard/admin/audit-logs', label: 'Audit Logs' }
] as const;

export const adminShellContent = {
  portalEyebrow: 'Admin portal',
  portalTitle: 'Management system',
  portalDescription: 'Role-based operations for model houses, users, content, and reporting across the Amica Residences platform.',
  navigationLabel: 'Navigation',
  accountLabel: 'Account',
  accountRole: 'Super Admin',
  accountEmail: 'admin@rabinohomebuilders.com',
  actions: ['Search', 'Notifications', 'Save changes'] as const
} as const;

export const adminDashboardContent = {
  metrics: [
    ['Total model houses', '1,248'],
    ['Active listings', '932'],
    ['Sold residences', '216'],
    ['Pending listings', '100'],
    ['Total buyers', '1,482'],
    ['Total sellers', '614'],
    ['Total agents', '38'],
    ['Total inquiries', '2,109']
  ],
  analytics: {
    eyebrow: 'Analytics',
    title: 'Lead conversion summary',
    ranges: ['Today', 'This week', 'This month'] as const,
    metrics: [
      ['Monthly leads', '284'],
      ['Scheduled viewings', '68'],
      ['Total property value', '₱1.42B']
    ] as const,
    charts: ['Property status chart', 'Listings by location chart', 'Monthly inquiry chart'] as const
  },
  recentActivity: {
    eyebrow: 'Recent activity',
    items: [
      'New inquiry from an Amica Residences model-house listing',
      'Listing status changed to sold',
      'Agent Maria assigned to 12 listings',
      'Homepage hero updated successfully',
      '3 new leads imported from Facebook'
    ],
    topAgent: {
      eyebrow: 'Top-performing agent',
      name: 'Maria Santos',
      summary: '₱24.8M monthly sales • 18 qualified leads • 9 completed viewings'
    }
  },
  priorityQueue: {
    eyebrow: 'Priority queue',
    title: 'Listings needing attention',
    actionLabel: 'Manage listings',
    items: [
      { title: 'Hera model house', meta: 'Merged house-only and model-house references • PHP 8,000,000.00' },
      { title: 'Kasandra model house', meta: 'House-only package • PHP 4,000,000.00' },
      { title: 'Low cost housing project', meta: 'Bungalow and duplex options • 4 follow-ups' }
    ]
  },
  salesPerformance: {
    eyebrow: 'Sales performance',
    title: 'Top model-house activity',
    description: 'Static UI preview for views, inquiries, and conversion indicators across key RHBC models.',
    badge: 'Monthly preview',
    items: [
      { model: 'LOW COST HOUSING PROJECT', views: '3,420', inquiries: '24', conversion: '18%', width: 'w-[92%]' },
      { model: 'HERA MODEL HOUSE', views: '2,860', inquiries: '18', conversion: '15%', width: 'w-[78%]' },
      { model: 'KASANDRA MODEL HOUSE', views: '1,940', inquiries: '9', conversion: '11%', width: 'w-[58%]' },
      { model: 'MELVIN MODEL HOUSE', views: '1,520', inquiries: '7', conversion: '9%', width: 'w-[45%]' }
    ],
    insight: {
      eyebrow: 'Admin insight',
      title: 'Low-cost housing is generating the strongest buyer interest.',
      description: 'Use this panel to quickly identify which models may need more sales focus, updated photos, or clearer computation details.',
      items: [
        'Most viewed: Low Cost Housing',
        'Most premium: HERA Model House',
        'Needs follow-up: Kasandra inquiries'
      ]
    }
  },
  modelManagement: {
    eyebrow: 'Model house management',
    title: 'Listing control preview',
    description: 'A UI-only table showing how admins could review model status, inquiry volume, pricing, and quick actions.',
    actionLabel: 'Open listings',
    columns: ['Model', 'Type', 'Price', 'Status', 'Inquiries', 'Actions'] as const,
    actions: ['View', 'Edit', 'Feature'] as const,
    rows: [
      { slug: 'hera-model-house', status: 'Featured', inquiries: '18', updated: 'Today' },
      { slug: 'kasandra-model-house', status: 'Active', inquiries: '9', updated: 'Yesterday' },
      { slug: 'melvin-model-house', status: 'Active', inquiries: '7', updated: 'Aug 24' },
      { slug: 'joyce-model-house', status: 'Active', inquiries: '6', updated: 'Aug 23' },
      { slug: 'low-cost-housing', status: 'Priority', inquiries: '24', updated: 'Today' }
    ]
  },
  leadPipeline: {
    eyebrow: 'Lead pipeline',
    title: 'Track inquiries by sales stage',
    description: 'A UI-only board showing how customer inquiries could move from first contact to reservation. Cards are static placeholders for presentation.',
    badges: ['Kanban preview', 'Admin UI'] as const,
    nextActionLabel: 'Next action',
    actions: ['View', 'Move'] as const,
    columns: [
      {
        stage: 'New leads',
        count: '12',
        leads: [
          { name: 'Miguel Santos', model: 'HERA MODEL HOUSE', next: 'Call within today' },
          { name: 'Allen Cortez', model: 'LOW COST HOUSING PROJECT', next: 'Send computation' }
        ]
      },
      {
        stage: 'Contacted',
        count: '8',
        leads: [
          { name: 'Maria Santos', model: 'KASANDRA MODEL HOUSE', next: 'Waiting for documents' },
          { name: 'John Dela Cruz', model: 'JOYCE MODEL HOUSE', next: 'Follow up tomorrow' }
        ]
      },
      {
        stage: 'Viewing scheduled',
        count: '6',
        leads: [
          { name: 'Lea Ramirez', model: 'MELVIN MODEL HOUSE', next: 'Saturday, 11:00 AM' },
          { name: 'Jasper Cruz', model: 'HERA MODEL HOUSE', next: 'Friday, 2:30 PM' }
        ]
      },
      {
        stage: 'Reservation pending',
        count: '3',
        leads: [
          { name: 'Paolo Reyes', model: 'LOW COST HOUSING PROJECT', next: 'Verify payment slip' },
          { name: 'Ana Cruz', model: 'HERA MODEL HOUSE', next: 'Prepare reservation form' }
        ]
      }
    ]
  }
} as const;

export const adminSectionModules: Record<string, { title: string; description: string; blocks: { title: string; body: string }[] }> = {
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
    blocks: [{ title: 'Category management', body: 'Add, edit, delete, activate, deactivate, and track listing counts per category.' }]
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

export const adminModelManagementRows = adminDashboardContent.modelManagement.rows.map((item) => {
  const listing = modelHouses.find((model) => model.slug === item.slug)!;

  return {
    model: listing.title,
    type: listing.type,
    price: listing.price,
    status: item.status,
    inquiries: item.inquiries,
    updated: item.updated
  };
});
