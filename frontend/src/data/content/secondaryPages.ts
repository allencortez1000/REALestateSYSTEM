import { brand } from '@/data/brand';

export const bookingsPageContent = {
  badge: 'Calendar',
  title: 'Bookings made effortless.',
  description: 'Schedule, reschedule, and manage private viewings through a clean premium workflow across Metro Manila and nearby cities.',
  asideEyebrow: `${brand.shortName} bookings`,
  asideTitle: 'A calmer appointment system for premium viewings.',
  asideDescription: 'Coordinate tours with clarity and confidence.'
};

export const blogPageContent = {
  badge: 'Editorial',
  title: 'Stories from the property world.',
  description: 'Insight, design, and market intelligence presented with a refined editorial tone for discerning buyers in the Philippines.',
  asideEyebrow: `${brand.shortName} Journal`,
  asideTitle: 'A more polished way to read the market in the Philippines.',
  asideDescription: 'Thoughtful content curated to feel premium, calm, and easy to scan.'
};

export const favoritesPageContent = {
  badge: 'Saved',
  title: 'Your favorites.',
  description: `A shortlist of the ${brand.shortName} model houses you’ve saved for review and comparison.`,
  asideEyebrow: `${brand.shortName} favorites`,
  asideTitle: 'Keep track of the listings that matter most.',
  asideDescription: "Save, compare, and return whenever you're ready to move forward.",
  asideClassName: 'bg-[linear-gradient(135deg,#08122c_0%,#0b2d66_55%,#7fd34e_180%)]'
};

export const messagesPageContent = {
  badge: 'Inbox',
  title: 'Messages.',
  description: `A focused messaging workspace for buyers, sellers, and agents across the ${brand.shortName} network and the Philippine property market.`,
  asideEyebrow: `${brand.shortName} inbox`,
  asideTitle: 'Confident, fast conversations with a concierge feel.',
  asideDescription: 'Keep communication clear, organized, and easy to act on.'
};

export const customerLoginContent = {
  eyebrow: 'Customer access',
  title: 'Sign in to your Amica Residences workspace.',
  description: 'Access saved homes, inquiries, viewings, and messages through a clean, premium portal experience.',
  badge: 'Welcome back',
  formTitle: 'Customer sign in',
  formDescription: 'Use your customer account to manage model houses, bookings, and conversations across Metro Manila and beyond.',
  features: [
    ['Secure access', 'Private customer login'],
    ['Saved homes', 'Compare and review later'],
    ['Viewing support', 'Book and manage tours']
  ]
} as const;

export const customerRegisterContent = {
  eyebrow: 'New account',
  title: 'Create your Amica Residences account.',
  description: 'Start browsing premium model houses, saving favorites, and scheduling private viewings in seconds.',
  badge: 'Join Amica Residences',
  formTitle: 'Create account',
  formDescription: 'Set up a customer profile to start saving model houses and booking private viewings.',
  features: [
    ['Fast onboarding', 'Create an account in minutes'],
    ['Curated listings', 'Browse premium model houses'],
    ['Personal workspace', 'Save, compare, and inquire']
  ]
} as const;

export const adminLoginContent = {
  eyebrow: 'Admin access',
  title: 'Secure admin sign in.',
  description: 'Restricted access for management, reporting, and oversight across the Amica Residences model-house platform.',
  badge: 'Admin portal',
  formTitle: 'Sign in as admin',
  formDescription: 'Use your administrator credentials to access the Amica Residences management dashboard.',
  features: [
    ['Reporting', 'Track model houses and performance'],
    ['Content control', 'Manage homepage and articles'],
    ['Role safety', 'Protected admin-only access']
  ]
} as const;

export const adminRegisterContent = {
  eyebrow: 'Admin setup',
  title: 'Create admin access.',
  description: 'Register an internal admin profile for Amica Residences model-house oversight and management.',
  badge: 'Admin registration',
  formTitle: 'Create admin account',
  formDescription: 'Set up an internal admin profile for the Amica Residences portal and management team.',
  features: [
    ['Internal only', 'Restricted to staff use'],
    ['Role-based', 'Assign admin permissions safely'],
    ['Platform control', 'Manage model-house content and reports']
  ]
} as const;
