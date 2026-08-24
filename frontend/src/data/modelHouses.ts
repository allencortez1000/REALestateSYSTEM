export type PaymentComputation = readonly [label: string, value: string];

export type ModelHouse = {
  slug: string;
  title: string;
  tagline: string;
  price: string;
  lotArea: string;
  floorArea: string;
  highlights: string[];
  floorFeatures: string[];
  amenities: string[];
  nearby: string[];
  availability: string;
  bestFor: string;
  location: string;
  description: string;
  image: string;
  gallery: string[];
  accent: 'bronze' | 'gold' | 'olive' | 'espresso' | 'amber';
  type: string;
  tag: string;
  summary: string;
  computation?: PaymentComputation[];
};

export const modelHouses = [
  {
    slug: 'hera-model-house',
    title: 'HERA MODEL HOUSE',
    tagline: 'Rabino Home Builders Corporation • HERA',
    price: 'PHP 8,000,000.00',
    lotArea: '80 SQM / 100–120 SQM',
    floorArea: '162 SQM / 206 SQM',
    highlights: ['Living Area', '4 Bedrooms', 'Dining Area', 'Carport'],
    floorFeatures: ['2 Toilet & Bath / 2 Common T&B', 'Powder Room', 'Kitchen', 'Fence and Gate', 'Roof Deck'],
    amenities: ['House-only package', 'Model-house package', 'Living room preview', 'Bedroom preview', 'Kitchen preview'],
    nearby: ['Philippine residential communities', 'Schools', 'Retail essentials', 'Transport access'],
    availability: 'House Only / Model House',
    bestFor: 'Best for growing families',
    location: 'Rabino Home Builders Corporation',
    description:
      'HERA combines both provided references: the house-only image with 80 sqm lot area and 162 sqm floor area, and the second model-house marketing image with 100–120 sqm lot area and 206 sqm floor area. Both references show the same HERA model but with different specifications, so both are presented together instead of choosing one over the other.',
    image: '/hera-model-house.png',
    gallery: ['/hera-model-house.png', '/hera-model-house.jpg', '/athena-model-house.png'],
    accent: 'bronze',
    type: 'House Only / Model House',
    tag: 'Premium family model',
    summary: 'Combined HERA reference covering the house-only and model-house marketing specifications.',
    computation: [
      ['House-only total contract price', 'PHP 8,000,000.00'],
      ['House-only reservation', 'PHP 50,000.00'],
      ['House-only downpayment', 'PHP 1,950,000.00'],
      ['House-only 6 months', 'PHP 325,000.00/month'],
      ['House-only 12 months', 'PHP 162,500.00/month'],
      ['House-only 24 months', 'PHP 81,250.00/month'],
      ['House-only balance', 'PHP 6,000,000.00'],
      ['House-only 5 years (0%)', 'PHP 100,000.00/month'],
      ['House-only 10 years (7.1%)', 'PHP 71,402.24/month'],
      ['House-only 15 years (7.7%)', 'PHP 57,826.54/month'],
      ['Model-house starting price', 'PHP 8,000,000.00'],
      ['Model-house lot area', '100–120 SQM'],
      ['Model-house floor area', '206 SQM']
    ]
  },
  {
    slug: 'athena-model-house',
    title: 'ATHENA MODEL HOUSE',
    tagline: 'Rabino Home Builders Corporation • ATHENA',
    price: 'Price not shown',
    lotArea: 'Not shown',
    floorArea: 'Not shown',
    highlights: ['Luxury residence', 'Exterior architectural design', 'Refined living', 'Prestige-focused presentation'],
    floorFeatures: ['Financing not shown', 'Lot area not shown', 'Floor area not shown', 'Detailed features not shown'],
    amenities: ['Elegant exterior design', 'Premium architecture', 'Comfort-focused residence', 'Prestige presentation'],
    nearby: ['Philippine residential communities', 'Lifestyle destinations', 'Schools', 'Essential services'],
    availability: 'Reference Image',
    bestFor: 'Best for luxury buyers',
    location: 'Rabino Home Builders Corporation',
    description:
      'Experience refined living in this exceptional luxury residence—where architecture meets elegance and every detail is crafted for comfort and prestige. The available reference mainly presents the exterior architectural design of the Athena model.',
    image: '/athena-model-house.png',
    gallery: ['/athena-model-house.png', '/athena-model-house.jpg', '/hera-model-house.png'],
    accent: 'gold',
    type: 'Luxury Residence',
    tag: 'Architecture reference',
    summary: 'Premium exterior presentation for buyers focused on refined architecture and prestige.'
  },
  {
    slug: 'kasandra-model-house',
    title: 'KASANDRA MODEL HOUSE',
    tagline: 'Rabino Home Builders Corporation • KASANDRA',
    price: 'PHP 4,000,000.00',
    lotArea: 'Not shown',
    floorArea: 'Not shown',
    highlights: ['In-house financing', 'House only', 'Purposeful rooms', 'Practical family living'],
    floorFeatures: ['TCP', 'Reservation', 'Downpayment', 'Balance'],
    amenities: ['Real-living layout', 'Flexible payment terms', 'Family-ready planning', 'Comfortable home character'],
    nearby: ['Community essentials', 'Schools', 'Transportation', 'Commercial services'],
    availability: 'House Only',
    bestFor: 'Best for practical ownership',
    location: 'Rabino Home Builders Corporation',
    description: 'Step into a space designed for real living, where every room holds a purpose and every corner feels like home.',
    image: '/kasandra-model-house.png',
    gallery: ['/kasandra-model-house.png', '/kasandra-model-house.jpg', '/joyce-model-house.png'],
    accent: 'olive',
    type: 'House Only',
    tag: 'House-only option',
    summary: 'A house-only model designed for real living with flexible in-house financing.',
    computation: [
      ['TCP', 'PHP 4,000,000.00'],
      ['Reservation', 'PHP 50,000.00'],
      ['Downpayment', 'PHP 750,000.00'],
      ['6 months', 'PHP 125,000.00/month'],
      ['12 months', 'PHP 62,500.00/month'],
      ['24 months', 'PHP 31,250.00/month'],
      ['Balance', 'PHP 3,200,000.00'],
      ['5 years (0%)', 'PHP 53,333.00/month'],
      ['10 years (7.1%)', 'PHP 38,081.20/month']
    ]
  },
  {
    slug: 'melvin-model-house',
    title: 'MELVIN MODEL HOUSE',
    tagline: 'Rabino Home Builders Corporation • MELVIN',
    price: 'PHP 2,950,000.00',
    lotArea: 'Not shown',
    floorArea: 'Not shown',
    highlights: ['House & Lot', 'Duplex home', 'In-house financing', 'Functional layout'],
    floorFeatures: ['Reservation', 'Downpayment', '6/12/24-month terms', '5-year and 10-year options'],
    amenities: ['Duplex living', 'Space and style', 'Functional home planning', 'Accessible ownership'],
    nearby: ['Local conveniences', 'Community roads', 'Essential services', 'Transport access'],
    availability: 'House & Lot',
    bestFor: 'Best for duplex living',
    location: 'Rabino Home Builders Corporation',
    description: 'Step into elevated living with this beautifully designed duplex home—where space, style, and functionality come together seamlessly.',
    image: '/melvin-model-house.png',
    gallery: ['/melvin-model-house.png', '/melvin-model-house.jpg', '/athena-model-house.png'],
    accent: 'espresso',
    type: 'House & Lot',
    tag: 'Duplex home',
    summary: 'A beautifully designed duplex home where space, style, and function work together.',
    computation: [
      ['TCP', 'PHP 2,950,000.00'],
      ['Reservation', 'PHP 50,000.00'],
      ['Downpayment', 'PHP 540,000.00'],
      ['6 months', 'PHP 90,000.00/month'],
      ['12 months', 'PHP 49,167.00/month'],
      ['24 months', 'PHP 22,500.00/month'],
      ['Balance', 'PHP 2,360,000.00'],
      ['5 years (0%)', 'PHP 39,334.00/month'],
      ['10 years (7.1%)', 'PHP 28,084.88/month']
    ]
  },
  {
    slug: 'joyce-model-house',
    title: 'JOYCE MODEL HOUSE',
    tagline: 'Rabino Home Builders Corporation • JOYCE',
    price: 'PHP 3,000,000.00',
    lotArea: 'Not shown',
    floorArea: 'Not shown',
    highlights: ['House only', 'In-house financing', 'Purposeful rooms', 'Comfortable daily living'],
    floorFeatures: ['TCP', 'Reservation', 'Downpayment', 'Balance'],
    amenities: ['Practical room planning', 'Flexible payment terms', 'Warm home character', 'Family-focused design'],
    nearby: ['Convenient community access', 'Schools', 'Local retail', 'Public transport'],
    availability: 'House Only',
    bestFor: 'Best for compact family living',
    location: 'Rabino Home Builders Corporation',
    description: 'Step into a space designed for real living, where every room holds a purpose and every corner feels like home.',
    image: '/joyce-model-house.png',
    gallery: ['/joyce-model-house.png', '/joyce-model-house.jpg', '/melvin-model-house.png'],
    accent: 'amber',
    type: 'House Only',
    tag: 'Compact home',
    summary: 'A practical house-only model for compact family living and comfortable daily routines.',
    computation: [
      ['TCP', 'PHP 3,000,000.00'],
      ['Reservation', 'PHP 50,000.00'],
      ['Downpayment', 'PHP 550,000.00'],
      ['6 months', 'PHP 91,667.00/month'],
      ['12 months', 'PHP 45,833.00/month'],
      ['24 months', 'PHP 22,917.00/month'],
      ['Balance', 'PHP 2,400,000.00'],
      ['5 years (0%)', 'PHP 40,000.00/month'],
      ['10 years (7.1%)', 'PHP 28,560.90/month']
    ]
  },
  {
    slug: 'low-cost-housing',
    title: 'LOW COST HOUSING PROJECT',
    tagline: 'Bungalow and Duplex Bungalow options',
    price: 'PHP 950,000.00 – PHP 1,400,000.00',
    lotArea: '50 SQM / 80 SQM',
    floorArea: '32.5 SQM',
    highlights: ['Bungalow: 5m × 10m lot', 'Duplex Bungalow: 8m × 10m lot', 'Toilet & Bath', 'Kitchen', 'Bare Type'],
    floorFeatures: ['Bungalow floor dimensions: 5m × 6.5m', 'Duplex floor dimensions: 5m × 6.5m', 'Front/open spaces', 'Kitchen/utility area', 'Duplex includes 2 carport'],
    amenities: ['Low Cost, High Value', 'Affordable Monthly Payment', 'Built for Comfort & Durability', 'Perfect for Starting Families'],
    nearby: ['Community essentials', 'Schools', 'Transport access', 'Local retail'],
    availability: 'Low Cost Housing',
    bestFor: 'Best for starting families',
    location: 'Low Cost Housing Project',
    description:
      'The Low Cost Housing Project combines the Bungalow and Duplex Bungalow references in one listing. The Bungalow option is priced at PHP 950,000.00 with 50 sqm lot area and 32.5 sqm floor area. The Duplex Bungalow option is priced at PHP 1,400,000.00 with 80 sqm lot area, 32.5 sqm floor area, and 2 carport. Monthly amortization is subject to bank approval and prevailing interest rate.',
    image: '/kasandra-model-house.png',
    gallery: ['/kasandra-model-house.png', '/melvin-model-house.png', '/joyce-model-house.png'],
    accent: 'olive',
    type: 'Low-Cost Housing',
    tag: 'Affordable housing',
    summary: 'Merged bungalow and duplex bungalow options for affordable home ownership.',
    computation: [
      ['Bungalow price', 'PHP 950,000.00'],
      ['Bungalow reservation fee', 'PHP 20,000.00'],
      ['Bungalow down payment (20%)', 'PHP 170,000.00'],
      ['Bungalow 6 months', 'PHP 28,333.33'],
      ['Bungalow 12 months', 'PHP 14,166.67'],
      ['Bungalow 24 months', 'PHP 7,083.33'],
      ['Bungalow balance (80%)', 'PHP 760,000.00'],
      ['Bungalow 15 years', 'PHP 10,641.13/month'],
      ['Bungalow 20 years', 'PHP 10,013.05/month'],
      ['Bungalow 25 years', 'PHP 9,739.77/month'],
      ['Bungalow 30 years', 'PHP 9,606.19/month'],
      ['Duplex bungalow price', 'PHP 1,400,000.00'],
      ['Duplex reservation', 'PHP 20,000.00'],
      ['Duplex down payment (20%)', 'PHP 260,000.00'],
      ['Duplex 6 months', 'PHP 43,333.33'],
      ['Duplex 12 months', 'PHP 21,666.67'],
      ['Duplex 24 months', 'PHP 10,833.33'],
      ['Duplex balance (80%)', 'PHP 1,120,000.00'],
      ['Duplex 15 years', 'PHP 15,678.34/month'],
      ['Duplex 20 years', 'PHP 14,738.46/month'],
      ['Duplex 25 years', 'PHP 14,212.20/month'],
      ['Duplex 30 years', 'PHP 13,897.40/month']
    ]
  }
] satisfies ModelHouse[];

export const modelHousesBySlug = Object.fromEntries(modelHouses.map((listing) => [listing.slug, listing])) as Record<string, ModelHouse>;

export const featuredModelHouses = modelHouses;

export const homeFeaturedModelHouses = [modelHouses[0], modelHouses[2], modelHouses[5]];

export const comparisonModelHouses = modelHouses.map((listing) => ({
  title: listing.title,
  bestFor: listing.bestFor.replace(/^Best for\s+/i, ''),
  size: `${listing.lotArea} lot • ${listing.floorArea} floor`,
  price: listing.price,
  features: listing.highlights.concat(listing.floorFeatures).join(', '),
  type: listing.type,
  tag: listing.tag
}));

export const modelHouseOptions = modelHouses.map((listing) => listing.title);

export const heroModelHouseSlides = modelHouses.map((listing) => ({
  title: listing.title,
  location: listing.location,
  price: listing.price,
  area: `${listing.lotArea} lot • ${listing.floorArea} floor`,
  image: listing.image
}));

export const homePaymentPreviews = [
  { model: 'HERA MODEL HOUSE', price: 'PHP 8,000,000.00', monthly: 'PHP 71,402.24/month', term: '10 years at 7.1%' },
  { model: 'KASANDRA MODEL HOUSE', price: 'PHP 4,000,000.00', monthly: 'PHP 38,081.20/month', term: '10 years at 7.1%' },
  { model: 'LOW COST BUNGALOW', price: 'PHP 950,000.00', monthly: 'PHP 10,641.13/month', term: '15 years sample' }
];

export function getModelHouseHref(slug: string) {
  return `/properties/${slug}`;
}
