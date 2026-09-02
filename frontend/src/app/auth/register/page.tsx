'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthSplitLayout from '@/components/marketing/AuthSplitLayout';
import { customerRegisterContent } from '@/data/content/secondaryPages';
import { signInMockUser } from '@/lib/mockAuth';

export default function RegisterPage() {
  const router = useRouter();
  return (
    <AuthSplitLayout
      eyebrow={customerRegisterContent.eyebrow}
      title={customerRegisterContent.title}
      description={customerRegisterContent.description}
      features={customerRegisterContent.features}
      badge={customerRegisterContent.badge}
      formTitle={customerRegisterContent.formTitle}
      formDescription={customerRegisterContent.formDescription}
      form={
        <form
          onSubmit={(event) => {
            event.preventDefault();
            signInMockUser('customer');
            router.push('/dashboard/customer');
          }}
        >
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Full name</span>
              <input className="input" name="fullName" autoComplete="name" placeholder="Full name" />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Email address</span>
              <input className="input" name="email" type="email" autoComplete="email" placeholder="Email address" />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Password</span>
              <input className="input" name="password" type="password" autoComplete="new-password" placeholder="Password" />
            </label>
            <button type="submit" className="btn-primary mt-2 w-full text-center">Create account</button>
          </div>
        </form>
      }
      footer={
        <p>Already have an account? <Link href="/auth/login" className="font-semibold text-[#0b2d66] underline underline-offset-4">Sign in</Link></p>
      }
    />
  );
}
