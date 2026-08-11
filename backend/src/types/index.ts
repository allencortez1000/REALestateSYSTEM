export type ID = string;

export type UserRole = 'guest' | 'buyer' | 'seller' | 'agent' | 'admin';
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'rescheduled' | 'completed';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded' | 'partially_refunded';
export type PropertyStatus = 'active' | 'pending' | 'sold' | 'rented' | 'inactive' | 'featured';
export type ConversationType = 'buyer_seller' | 'buyer_agent' | 'agent_admin' | 'support';

export interface BaseEntity { id: ID; created_at: string; updated_at: string; }
export interface User extends BaseEntity { email: string; full_name: string; phone?: string | null; avatar_url?: string | null; is_active: boolean; email_verified: boolean; last_login_at?: string | null; roles?: UserRole[]; }
export interface AuthTokens { accessToken: string; refreshToken: string; expiresIn?: number; }
export interface JWTPayload { sub: ID; email: string; role: UserRole; }
export interface PropertyType extends BaseEntity { name: string; slug: string; }
export interface PropertyStatusEntity extends BaseEntity { name: string; slug: string; }
export interface Amenity extends BaseEntity { name: string; icon?: string | null; }
export interface Location extends BaseEntity { province_id?: ID | null; city_id?: ID | null; barangay_id?: ID | null; address_line1: string; address_line2?: string | null; latitude?: number | null; longitude?: number | null; place_id?: string | null; }
export interface Property extends BaseEntity { owner_id: ID; agent_id?: ID | null; property_type_id: ID; property_status_id: ID; location_id?: ID | null; title: string; slug: string; description: string; price: number; currency: string; bedrooms: number; bathrooms: number; parking_spaces: number; floor_area?: number | null; lot_area?: number | null; furnished: boolean; featured: boolean; video_url?: string | null; virtual_tour_url?: string | null; tour_360_url?: string | null; year_built?: number | null; condition?: string | null; is_active: boolean; }
export interface PropertyImage extends BaseEntity { property_id: ID; image_url: string; alt_text?: string | null; sort_order: number; }
export interface PropertyVideo extends BaseEntity { property_id: ID; video_url: string; title?: string | null; }
export interface PropertyDocument extends BaseEntity { property_id: ID; document_url: string; document_name: string; }
export interface Favorite extends BaseEntity { user_id: ID; property_id: ID; collection_id?: ID | null; }
export interface FavoriteCollection extends BaseEntity { user_id: ID; name: string; }
export interface Booking extends BaseEntity { property_id: ID; user_id: ID; agent_id?: ID | null; scheduled_date: string; scheduled_time: string; status: BookingStatus; notes?: string | null; }
export interface Message extends BaseEntity { conversation_id: ID; sender_id: ID; body: string; is_read: boolean; }
export interface Conversation extends BaseEntity { type: ConversationType; property_id?: ID | null; }
export interface Notification extends BaseEntity { user_id: ID; title: string; body: string; type: string; read_at?: string | null; }
export interface Payment extends BaseEntity { user_id: ID; booking_id?: ID | null; invoice_id?: ID | null; amount: number; currency: string; status: PaymentStatus; stripe_payment_intent_id?: string | null; }
export interface Invoice extends BaseEntity { user_id: ID; invoice_number: string; amount: number; currency: string; status: string; due_date?: string | null; }
export interface SubscriptionPlan extends BaseEntity { name: string; slug: string; price: number; features: unknown[]; }
export interface Subscription extends BaseEntity { user_id: ID; plan_id: ID; status: string; start_date: string; end_date?: string | null; }
export interface BlogCategory extends BaseEntity { name: string; slug: string; }
export interface BlogPost extends BaseEntity { author_id?: ID | null; category_id?: ID | null; title: string; slug: string; excerpt?: string | null; content: string; featured_image?: string | null; seo_title?: string | null; seo_description?: string | null; published_at?: string | null; }
export interface BlogComment extends BaseEntity { post_id: ID; user_id?: ID | null; parent_id?: ID | null; content: string; is_approved: boolean; }
export interface WebsiteSettings extends BaseEntity { site_name: string; site_tagline?: string | null; contact_email?: string | null; contact_phone?: string | null; logo_url?: string | null; favicon_url?: string | null; maintenance_mode: boolean; }
export interface SEOSettings extends BaseEntity { meta_title?: string | null; meta_description?: string | null; canonical_url?: string | null; og_image?: string | null; }
export interface AuditLog extends BaseEntity { user_id?: ID | null; action: string; details: Record<string, unknown>; ip_address?: string | null; user_agent?: string | null; }
export interface ActivityLog extends BaseEntity { user_id?: ID | null; action: string; entity_type: string; entity_id?: ID | null; metadata: Record<string, unknown>; }
export interface Review extends BaseEntity { property_id: ID; user_id: ID; rating: number; comment?: string | null; }
export interface PropertySearchParams { query?: string; city?: string; province?: string; minPrice?: number; maxPrice?: number; bedrooms?: number; bathrooms?: number; page?: number; limit?: number; }
export interface ApiResponse<T> { success: boolean; message?: string; data: T; }
export interface PaginatedResponse<T> extends ApiResponse<T[]> { meta: { page: number; limit: number; total: number; totalPages: number; }; }
