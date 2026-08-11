import type { Property, User } from '@/types';

const now = new Date().toISOString();

export const mockUser: User = {
  id: 'user-1',
  email: 'admin@rhbc.com',
  full_name: 'RHBC Admin',
  avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
  phone: '+63 912 345 6789',
  roles: ['admin'],
  created_at: now,
  updated_at: now
};

export const mockProperties: Property[] = [
  { id: 'prop-1', created_at: now, updated_at: now, title: 'The Grand Residence in BGC', slug: 'the-grand-residence-bgc', price: 38500000, currency: 'PHP', bedrooms: 4, bathrooms: 4, featured: true },
  { id: 'prop-2', created_at: now, updated_at: now, title: 'Modern Ocean View Villa', slug: 'modern-ocean-view-villa', price: 28500000, currency: 'PHP', bedrooms: 5, bathrooms: 5, featured: true },
  { id: 'prop-3', created_at: now, updated_at: now, title: 'Luxury Condo in Makati CBD', slug: 'luxury-condo-makati-cbd', price: 14800000, currency: 'PHP', bedrooms: 2, bathrooms: 2, featured: false },
  { id: 'prop-4', created_at: now, updated_at: now, title: 'Exclusive House and Lot in Alabang', slug: 'exclusive-house-lot-alabang', price: 24500000, currency: 'PHP', bedrooms: 4, bathrooms: 3, featured: true },
  { id: 'prop-5', created_at: now, updated_at: now, title: 'Beachfront Resort Estate', slug: 'beachfront-resort-estate', price: 62000000, currency: 'PHP', bedrooms: 7, bathrooms: 8, featured: true },
  { id: 'prop-6', created_at: now, updated_at: now, title: 'Premium Commercial Office Tower Unit', slug: 'premium-commercial-office-tower-unit', price: 33000000, currency: 'PHP', bedrooms: 0, bathrooms: 2, featured: false }
];

export const mockStats = {
  properties: 1284,
  agents: 84,
  cities: 18,
  satisfiedClients: 982,
  bookings: 214,
  leads: 531,
  revenue: 68420000
};

export const mockBlogPosts = [
  { id: 'blog-1', slug: 'how-to-choose-the-right-luxury-property', title: 'How to Choose the Right Luxury Property', excerpt: 'Key factors every serious buyer should consider.', category: 'Buying', publishedAt: now },
  { id: 'blog-2', slug: 'top-interior-trends-for-2026', title: 'Top Interior Trends for 2026', excerpt: 'Design ideas that increase value and comfort.', category: 'Design', publishedAt: now },
  { id: 'blog-3', slug: 'why-location-still-matters-most', title: 'Why Location Still Matters Most', excerpt: 'A practical guide to evaluating premium neighborhoods.', category: 'Market', publishedAt: now }
];

export const mockUsers = [
  { id: 'buyer-1', name: 'Maria Santos', role: 'buyer', email: 'maria@example.com' },
  { id: 'seller-1', name: 'Jasper Cruz', role: 'seller', email: 'jasper@example.com' },
  { id: 'agent-1', name: 'Lea Ramirez', role: 'agent', email: 'lea@example.com' },
  { id: 'admin-1', name: 'RHBC Admin', role: 'admin', email: 'admin@rhbc.com' }
];

export const mockBookings = [
  { id: 'book-1', propertyTitle: 'Luxury Condo in Makati CBD', date: '2026-07-20', time: '10:00 AM', status: 'confirmed' },
  { id: 'book-2', propertyTitle: 'The Grand Residence in BGC', date: '2026-07-22', time: '2:30 PM', status: 'pending' },
  { id: 'book-3', propertyTitle: 'Beachfront Resort Estate', date: '2026-07-24', time: '4:00 PM', status: 'rescheduled' }
];

export const mockMessages = [
  { id: 'msg-1', name: 'Maria Santos', preview: 'Is the property still available?', time: '2m ago' },
  { id: 'msg-2', name: 'John Dela Cruz', preview: 'Can we reschedule the viewing?', time: '1h ago' },
  { id: 'msg-3', name: 'Lea Ramirez', preview: 'I sent the latest offer details.', time: '3h ago' }
];

export const mockNotifications = [
  { id: 'notif-1', title: 'New booking request', body: 'A buyer booked a viewing for Makati CBD.' },
  { id: 'notif-2', title: 'Offer received', body: 'Your listing has a new premium offer.' },
  { id: 'notif-3', title: 'Message received', body: 'You have 2 unread messages.' }
];
