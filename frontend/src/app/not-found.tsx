import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full max-w-2xl rounded-[2rem] border border-[#e7dcc8] bg-white/90 p-8 text-center shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm sm:p-10">
        <div className="section-label text-[#b98a3d]">404</div>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#071426] sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
          The page you’re looking for may have moved. You can return home or browse the current Amica Residences model houses.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">Back home</Link>
          <Link href="/properties" className="btn-outline">Browse model houses</Link>
        </div>
      </section>
    </main>
  );
}
