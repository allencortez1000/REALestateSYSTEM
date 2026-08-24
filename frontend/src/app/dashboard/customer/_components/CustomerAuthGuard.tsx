'use client';

import { useRouter } from 'next/navigation';
import { type ReactNode, useEffect, useState } from 'react';
import { isMockUserSignedIn } from '@/lib/mockAuth';

export default function CustomerAuthGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const isSignedIn = isMockUserSignedIn('customer');

    if (!isSignedIn) {
      router.replace('/auth/login');
      return;
    }

    setIsCheckingAuth(false);
  }, [router]);

  if (isCheckingAuth) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="rounded-[2rem] border border-[#e7dcc8] bg-white p-10 text-center shadow-[0_20px_60px_rgba(9,21,64,0.08)]">
          <div className="section-label">Customer access</div>
          <h1 className="mt-3 text-2xl font-semibold text-[#08122c]">Checking your sign-in status...</h1>
        </div>
      </main>
    );
  }

  return children;
}
