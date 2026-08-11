export const generateSlug = (text: string) => text.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
export const generatePaginationMeta = (total: number, page: number, limit: number) => ({ page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) });
export const sanitizeHtml = (html: string) => html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '').trim();
export const generateOTP = (length = 6) => Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
export const formatCurrency = (amount: number, currency = 'PHP') => `${currency} ${new Intl.NumberFormat('en-PH').format(amount)}`;
export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => { const R = 6371; const dLat = (lat2 - lat1) * Math.PI / 180; const dLon = (lon2 - lon1) * Math.PI / 180; const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2; return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))); };
export const buildPropertySearchQuery = (filters: Record<string, unknown>) => filters;
export const formatPhoneNumber = (phone: string) => phone.replace(/\s+/g, ' ').trim();
export const generateInvoiceNumber = () => `INV-${Date.now()}`;
