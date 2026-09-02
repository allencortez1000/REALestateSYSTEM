export const workspaceDashboardContent = {
  agent: {
    badge: 'Agent workspace',
    title: 'Agent Dashboard.',
    description: 'Clients, appointments, and commissions in a polished Amica Residences workspace for active property markets.',
    asideEyebrow: 'Amica Residences agents',
    asideTitle: 'Everything you need to move clients forward with confidence.',
    asideDescription: 'A more refined command center for daily agent operations.',
    items: [
      { title: 'Clients', desc: 'Active relationships', count: 24 },
      { title: 'Properties', desc: 'Assigned listings', count: 11 },
      { title: 'Appointments', desc: 'Upcoming viewings', count: 5 },
      { title: 'CRM Leads', desc: 'Prospective buyers', count: 18 },
      { title: 'Commission', desc: 'Earnings tracker', count: null }
    ]
  },
  buyer: {
    badge: 'Buyer workspace',
    title: 'Buyer Dashboard.',
    description: 'Saved homes, searches, appointments, and conversations in one premium workspace built for Filipino buyers.',
    asideEyebrow: 'Amica Residences buyers',
    asideTitle: 'Your search journey, simplified and beautifully organized.',
    asideDescription: 'Keep favorites and viewings organized in one place.',
    items: [
      { title: 'Favorite Properties', desc: 'Your saved listings', count: 12 },
      { title: 'Saved Searches', desc: 'Custom filter presets', count: 4 },
      { title: 'Appointments', desc: 'Upcoming viewings', count: 2 },
      { title: 'Messages', desc: 'Unread conversations', count: 5 },
      { title: 'Notifications', desc: 'Recent alerts', count: 8 }
    ]
  },
  seller: {
    badge: 'Seller workspace',
    title: 'Seller Dashboard.',
    description: 'Listings, leads, and performance tracking in a clean, premium layout for property owners and sellers.',
    asideEyebrow: 'Amica Residences sellers',
    asideTitle: 'Present your listings with confidence and clarity.',
    asideDescription: 'A polished workspace for every stage of the sales journey.',
    items: [
      { title: 'Add Properties', desc: 'Publish new listings', count: null },
      { title: 'Edit Listings', desc: 'Update pricing & media', count: 6 },
      { title: 'Offers', desc: 'Pending buyer offers', count: 3 },
      { title: 'Analytics', desc: 'Views & lead tracking', count: null },
      { title: 'Inquiries', desc: 'Buyer messages', count: 7 }
    ]
  }
} as const;

export const analyticsPageContent = {
  hero: {
    badge: 'Insights',
    title: 'Analytics.',
    description: 'Premium metrics and performance views tailored for a refined Philippine real estate business.',
    asideEyebrow: 'Amica Residences insights',
    asideTitle: 'Measure growth with clarity and discretion.',
    asideDescription: 'Beautiful reporting with a calmer, more polished visual language for local property operations.'
  },
  summaryStats: [
    { label: 'Sales growth', value: '18%', note: '+4.2%' },
    { label: 'Lead conversion', value: '12%', note: '+1.8%' },
    { label: 'Bookings', value: '84', note: '+12' },
    { label: 'Active listings', value: '1,284', note: '+38' }
  ],
  sideMetricsTitle: 'Key metrics'
} as const;
