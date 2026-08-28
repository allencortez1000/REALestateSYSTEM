import { brand } from '@/data/brand';

export const propertiesPageContent = {
  heroDescription: 'Browse a premium collection of model houses presented with quieter spacing and a more refined cadence.',
  heroSupport: 'A quieter portfolio view built to help buyers compare homes, pricing, and fit more confidently.',
  heroAsideLabel: 'Featured portfolio',
  heroAsideTitle: 'Designed to present residences with editorial confidence.',
  heroAsideText: 'A gallery-like layout that makes each listing feel considered, aspirational, and easy to compare.',
  buyingGuide: [
    { title: 'Check the package type', text: 'Confirm whether the option is House Only, House & Lot, Model House, or Low-Cost Housing.' },
    { title: 'Review size details', text: 'Compare lot area and floor area when available. If marked Not shown, the reference did not include that detail.' },
    { title: 'Compare computations', text: 'Open the detail page to review reservation, down payment, balance, and monthly terms.' },
    { title: 'Schedule a viewing', text: 'Use the inquiry section once you have shortlisted the model that fits your needs.' }
  ]
};

export const comparePageContent = {
  heroDescription: 'A clearer comparison view for buyers who want to quickly understand price, fit, size, and package type.',
  asideLabel: 'RHBC compare',
  asideTitle: 'Choose based on lifestyle, budget, and home type.',
  asideText: 'Use the selector and comparison table below to find the model that best matches your needs.'
};

export const searchPageContent = {
  heroDescription: `Browse only the current ${brand.shortName} model-house listings featured in the portfolio.`,
  heroSupport: 'Use the filters below to narrow the current portfolio quickly and clearly.',
  asideLabel: 'Interactive search',
  asideText: 'Search by model name, package type, budget range, and buyer fit. Results update instantly.'
};

export const contactPageContent = {
  heroDescription: `Ask about viewing schedules, payment computations, requirements, or which ${brand.companyName} model best fits your needs.`,
  heroSupport: 'We’ll help with viewings, payment questions, buyer requirements, and model recommendations.',
  asideLabel: 'Concierge support',
  asideTitle: 'Clear guidance from inquiry to viewing.',
  asideText: 'We help buyers understand model options, sample computations, and next steps before reservation.'
};
