export const cn = (...inputs: Array<string | false | null | undefined>) => inputs.filter(Boolean).join(' ');
export const formatCurrency = (value: number, currency = 'PHP') => `${currency} ${new Intl.NumberFormat('en-PH').format(value)}`;
export const formatDate = (value: string | Date) => new Date(value).toLocaleDateString('en-PH', { dateStyle: 'medium' });
export const formatNumber = (value: number) => new Intl.NumberFormat('en-PH').format(value);
export const formatArea = (value: number, unit = 'sqm') => `${formatNumber(value)} ${unit}`;
