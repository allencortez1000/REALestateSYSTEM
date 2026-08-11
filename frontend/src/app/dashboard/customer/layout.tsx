import type { ReactNode } from 'react';
import CustomerAuthGuard from './_components/CustomerAuthGuard';

export default function CustomerLayout({ children }: { children: ReactNode }) {
  return <CustomerAuthGuard>{children}</CustomerAuthGuard>;
}
