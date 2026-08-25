export default function Loading() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full max-w-xl rounded-[2rem] border border-[#e7dcc8] bg-white/88 p-8 text-center shadow-[0_24px_80px_rgba(9,21,64,0.10)] backdrop-blur-sm sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d7be8a]/45 bg-[#fbf8f0]">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#d7be8a] border-t-[#071426]" />
        </div>
        <div className="section-label mt-6 text-[#b98a3d]">Loading</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#071426] sm:text-4xl">Preparing your experience</h1>
        <p className="mt-3 text-sm leading-7 text-slate-600">Please wait while the model-house information is being loaded.</p>
      </section>
    </main>
  );
}
