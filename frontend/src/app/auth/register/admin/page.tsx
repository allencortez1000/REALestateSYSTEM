'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthSplitLayout from '@/components/marketing/AuthSplitLayout';
import { adminRegisterContent } from '@/data/content/secondaryPages';
import { signInMockUser } from '@/lib/mockAuth';

export default function AdminRegisterPage() {
  const router = useRouter();

  return (
    <AuthSplitLayout
      eyebrow={adminRegisterContent.eyebrow}
      title={adminRegisterContent.title}
      description={adminRegisterContent.description}
      features={adminRegisterContent.features}
      badge={adminRegisterContent.badge}
      formTitle={adminRegisterContent.formTitle}
      formDescription={adminRegisterContent.formDescription}
      form={
        <form
          onSubmit={(event) => {
            event.preventDefault();
            signInMockUser('admin');
            router.push('/dashboard/admin');
          }}
        >
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Full name</span>
              <input className="input" name="fullName" autoComplete="name" placeholder="Full name" defaultValue="Amica Residences Admin" />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Admin email</span>
              <input className="input" name="email" type="email" autoComplete="email" placeholder="Admin email" defaultValue="admin@rabinohomebuilders.com" />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Password</span>
              <input className="input" name="password" type="password" autoComplete="new-password" placeholder="Password" defaultValue="admin123" />
            </label>
            <button type="submit" className="btn-primary mt-2 w-full text-center">Create admin account</button>
          </div>
        </form>
      }
      footer={
        <p>Already have an admin account? <Link href="/auth/login/admin" className="font-semibold text-[#0b2d66] underline underline-offset-4">Sign in here</Link></p>
      }
    />
  );
}
