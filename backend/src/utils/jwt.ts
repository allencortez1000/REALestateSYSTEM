import type { JWTPayload } from '@/types';

const encode = (value: unknown) => JSON.stringify(value);
const decode = (value: string) => JSON.parse(value) as JWTPayload;

export const generateAccessToken = (payload: JWTPayload) => encode({ type: 'access', payload });
export const generateRefreshToken = (payload: JWTPayload) => encode({ type: 'refresh', payload });
export const verifyAccessToken = (token: string) => decode(token);
export const verifyRefreshToken = (token: string) => decode(token);
export const generateEmailVerificationToken = () => `email-${Date.now()}-${Math.random().toString(36).slice(2)}`;
export const generatePasswordResetToken = () => `reset-${Date.now()}-${Math.random().toString(36).slice(2)}`;
