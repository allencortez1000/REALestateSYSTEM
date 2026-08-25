'use client';

import Link from 'next/link';
import { useEffect } from 'react';

type GlobalErrorPageProps = {
  error: globalThis.Error & { digest?: string };
  reset: () => void;
};

export default function GlobalErrorPage({ error, reset }: GlobalErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full max-w-2xl rounded-[2rem] border border-[#e7dcc8] bg-white/90 p-8 text-center shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm sm:p-10">
        <div className="section-label text-[#b98a3d]">Something went wrong</div>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#071426] sm:text-5xl">We couldn’t load this page</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
          Please try again. If the issue continues, return to the model-house listings or contact the sales team.
        </p>
        {error.digest ? <p className="mt-4 text-xs text-slate-400">Error reference: {error.digest}</p> : null}
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="btn-primary">Try again</button>
          <Link href="/properties" className="btn-outline">Browse model houses</Link>
        </div>
      </section>
    </main>
  );
}
