export type ID = string;
export type UserRole = 'guest' | 'buyer' | 'seller' | 'agent' | 'admin';
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'rescheduled' | 'completed';
export interface BaseEntity { id: ID; created_at: string; updated_at: string; }
export interface User extends BaseEntity { email: string; full_name: string; avatar_url?: string | null; phone?: string | null; roles?: UserRole[]; }
export interface Property extends BaseEntity { title: string; slug: string; price: number; currency: string; bedrooms: number; bathrooms: number; featured: boolean; }
export interface ApiResponse<T> { success: boolean; message?: string; data: T; }
export interface PaginatedResponse<T> extends ApiResponse<T[]> { meta: { page: number; limit: number; total: number; totalPages: number }; }
export interface PropertyFilters { query?: string; city?: string; minPrice?: number; maxPrice?: number; bedrooms?: number; bathrooms?: number; }
