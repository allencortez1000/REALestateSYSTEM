export const propertyDetailContent = {
  sectionNav: [
    ['Overview', '#overview'],
    ['Features', '#features'],
    ['Gallery', '#gallery'],
    ['Floor Plan', '#floor-plan'],
    ['Design', '#design'],
    ['Layout', '#layout'],
    ['Location', '#location'],
    ['Payment', '#payment'],
    ['Inquiry', '#inquiry']
  ] as const,
  gallery: {
    eyebrow: 'Gallery',
    title: 'View the model references',
    description: 'A simple gallery guide to help buyers identify the main image and supporting design references.',
    labels: ['Main exterior', 'Design reference', 'Supporting image'] as const,
    fallbackLabel: 'Reference'
  },
  overview: {
    eyebrow: 'Model overview',
    stats: ['Design type', 'Best for', 'Developer'] as const,
    readingGuideEyebrow: 'How to read this page',
    readingGuideText:
      'Review the model overview first, then check the design inclusions, house features, size details, and payment computation. If a value says "Not shown," it means the supplied marketing reference did not include that specific detail.'
  },
  buyerResources: {
    eyebrow: 'Buyer resources',
    title: 'Downloadable guide preview',
    description: 'Quick actions for reviewing the model, computation, and sales details.',
    actions: ['View brochure', 'Computation sheet', 'Request details'] as const
  },
  floorPlan: {
    eyebrow: 'Floor plan preview',
    title: 'Understand the layout at a glance',
    description:
      'This visual guide is a UI preview based on the available model details. It helps buyers quickly understand the major spaces before reviewing the full feature list.',
    badge: 'UI preview',
    rooms: [
      { label: 'Living Area', className: 'col-span-2 row-span-2 flex items-center justify-center rounded-[1.25rem] bg-[#071426] p-3 text-center text-white sm:p-4' },
      { label: 'Dining Area', className: 'col-span-2 flex items-center justify-center rounded-[1.25rem] bg-[#f4ead8] p-3 text-center sm:p-4' },
      { label: 'Kitchen', className: 'flex items-center justify-center rounded-[1.25rem] bg-[#fbf8f0] p-2 text-center sm:p-4' },
      { label: 'T&B', className: 'flex items-center justify-center rounded-[1.25rem] bg-[#fbf8f0] p-2 text-center sm:p-4' },
      { label: 'Bedroom', className: 'flex items-center justify-center rounded-[1.25rem] bg-[#efe5d0] p-2 text-center sm:p-4' },
      { label: 'Bedroom', className: 'flex items-center justify-center rounded-[1.25rem] bg-[#efe5d0] p-2 text-center sm:p-4' },
      { label: 'Carport / Open Space', className: 'col-span-2 flex items-center justify-center rounded-[1.25rem] bg-[#f8f3ea] p-3 text-center sm:p-4' },
      { label: 'Bedroom', className: 'flex items-center justify-center rounded-[1.25rem] bg-[#efe5d0] p-2 text-center sm:p-4' },
      { label: 'Bedroom', className: 'flex items-center justify-center rounded-[1.25rem] bg-[#efe5d0] p-2 text-center sm:p-4' },
      { label: 'Frontage / Entry', className: 'col-span-2 flex items-center justify-center rounded-[1.25rem] bg-[#d7be8a] p-3 text-center text-[#071426] sm:p-4' }
    ] as const,
    specs: ['Lot area', 'Floor area', 'Package type', 'Primary use'] as const,
    primaryUse: 'Family residential living'
  },
  design: {
    eyebrow: 'Design and package details',
    title: 'What is included',
    description: 'These items explain the design previews, package type, and notable selling points from the reference materials.'
  },
  layout: {
    eyebrow: 'House features',
    title: 'Rooms and layout notes',
    description: 'Use this section to understand the spaces, floor-plan notes, and functional areas included in the model.'
  },
  location: {
    eyebrow: 'Location access',
    title: 'Nearby conveniences',
    description: 'A simple guide to the community access points and nearby essentials mentioned for this listing.'
  },
  faq: {
    eyebrow: 'Buyer FAQ',
    title: 'Common questions before you inquire',
    description: 'Quick answers to help buyers understand the next steps. These are UI-only guide notes and can be connected to real policies later.',
    items: [
      ['Can I schedule a viewing?', 'Yes. Use the inquiry form or floating button to request a preferred viewing date.'],
      ['Are the computations final?', 'No. Computations shown are sample references and may change based on approval, terms, and prevailing rates.'],
      ['What documents should I prepare?', 'Start with a valid government ID, proof of income, reservation form, payment slip, and signed computation sheet.'],
      ['What does Not shown mean?', 'It means the supplied marketing reference did not include that specific size, financing, or feature detail.']
    ] as const
  },
  paymentGuide: {
    eyebrow: 'Payment guide',
    title: 'Sample computation',
    description: 'Use this as a quick reference for reservation, down payment, balance, and monthly terms shown in the supplied material.'
  },
  inquiry: {
    eyebrow: 'Inquiry',
    title: 'Speak with our team',
    description: 'Book a private viewing or request more details about this residence. Our sales team can help verify availability, computation, and next steps.',
    journeyEyebrow: 'Buyer journey',
    journey: [
      ['01', 'Choose model', 'Review the design, features, and size details.'],
      ['02', 'Submit inquiry', 'Send your contact details and preferred schedule.'],
      ['03', 'Schedule viewing', 'Coordinate a model-house visit with the sales team.'],
      ['04', 'Review computation', 'Check reservation, down payment, and monthly terms.'],
      ['05', 'Reserve unit', 'Proceed once final terms and availability are confirmed.']
    ] as const,
    assignedAgentLabel: 'Assigned agent',
    fields: {
      name: 'Your name',
      email: 'Email address',
      phone: 'Phone number',
      preferredViewingDate: 'Preferred viewing date'
    },
    actions: {
      scheduleViewing: 'Schedule viewing',
      callNow: 'Call now',
      sendInquiry: 'Send inquiry'
    }
  }
} as const;

export const blogDetailContent = {
  notFound: {
    title: 'Post not found',
    backLabel: '← Back to Journal'
  },
  hero: {
    editionLabel: 'Editorial feature',
    description: 'A polished journal article formatted like a premium real-estate magazine feature.'
  },
  meta: {
    readTimeLabel: 'Read time',
    readTimeValue: '5 min read',
    publishedLabel: 'Published',
    publishedValue: 'Premium edition'
  }
} as const;
