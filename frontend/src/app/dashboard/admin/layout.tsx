import type { ReactNode } from 'react';
import AdminAuthGuard from './_components/AdminAuthGuard';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminAuthGuard>{children}</AdminAuthGuard>;
}
