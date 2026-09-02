'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthSplitLayout from '@/components/marketing/AuthSplitLayout';
import { adminLoginContent } from '@/data/content/secondaryPages';
import { signInMockUser } from '@/lib/mockAuth';

export default function AdminLoginPage() {
  const router = useRouter();

  return (
    <AuthSplitLayout
      eyebrow={adminLoginContent.eyebrow}
      title={adminLoginContent.title}
      description={adminLoginContent.description}
      features={adminLoginContent.features}
      badge={adminLoginContent.badge}
      formTitle={adminLoginContent.formTitle}
      formDescription={adminLoginContent.formDescription}
      form={
        <form
          onSubmit={(event) => {
            event.preventDefault();
            signInMockUser('admin');
            router.push('/dashboard/admin');
          }}
        >
          <div className="rounded-[1.5rem] border border-[#dbe5f2] bg-[#f8fbff] p-4 text-sm leading-7 text-slate-600">
            <div className="font-semibold text-[#08122c]">Demo admin account</div>
            <div className="mt-2 grid gap-1">
              <div><span className="font-medium text-slate-500">Email:</span> admin@rabinohomebuilders.com</div>
              <div><span className="font-medium text-slate-500">Password:</span> admin123</div>
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Admin email</span>
              <input className="input" name="email" type="email" autoComplete="email" placeholder="Admin email" defaultValue="admin@rabinohomebuilders.com" />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Password</span>
              <input className="input" name="password" type="password" autoComplete="current-password" placeholder="Password" defaultValue="admin123" />
            </label>
            <button type="submit" className="btn-primary mt-2 w-full text-center">Login to admin</button>
          </div>
        </form>
      }
      footer={
        <p>Back to customer login? <Link href="/auth/login" className="font-semibold text-[#0b2d66] underline underline-offset-4">Sign in here</Link></p>
      }
    />
  );
}
