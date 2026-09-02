'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthSplitLayout from '@/components/marketing/AuthSplitLayout';
import { customerLoginContent } from '@/data/content/secondaryPages';
import { signInMockUser } from '@/lib/mockAuth';

export default function LoginPage() {
  const router = useRouter();

  function handleSignIn() {
    signInMockUser('customer');
    router.push('/dashboard/customer');
  }

  return (
    <AuthSplitLayout
      eyebrow={customerLoginContent.eyebrow}
      title={customerLoginContent.title}
      description={customerLoginContent.description}
      features={customerLoginContent.features}
      badge={customerLoginContent.badge}
      formTitle={customerLoginContent.formTitle}
      formDescription={customerLoginContent.formDescription}
      form={
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSignIn();
          }}
        >
          <div className="rounded-[1.5rem] border border-[#dbe5f2] bg-[#f8fbff] p-4 text-sm leading-7 text-slate-600">
            <div className="font-semibold text-[#08122c]">Demo customer account</div>
            <div className="mt-2 grid gap-1">
              <div><span className="font-medium text-slate-500">Email:</span> customer@rabinohomebuilders.com</div>
              <div><span className="font-medium text-slate-500">Password:</span> customer123</div>
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Email address</span>
              <input className="input" name="email" type="email" autoComplete="email" placeholder="Email address" defaultValue="customer@rabinohomebuilders.com" />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Password</span>
              <input className="input" name="password" type="password" autoComplete="current-password" placeholder="Password" defaultValue="customer123" />
            </label>
            <button type="submit" className="btn-primary mt-2 w-full text-center">Sign in</button>
          </div>
        </form>
      }
      footer={
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p>Don't have an account? <Link href="/auth/register" className="font-semibold text-[#0b2d66] underline underline-offset-4">Register</Link></p>
          <Link href="/auth/login/admin" className="font-semibold text-[#8a6428] underline underline-offset-4">Admin login</Link>
        </div>
      }
    />
  );
}
