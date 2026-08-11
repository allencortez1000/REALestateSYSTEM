import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-8 w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(215,190,138,0.14),_transparent_20%),radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),_transparent_24%),linear-gradient(160deg,_#071426_0%,_#0D2342_58%,_#13273f_100%)] text-white">
      <div className="mx-auto max-w-[1500px] px-6 py-12 md:px-10 lg:px-14 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <Image src="/amicarealestate.jpg" alt="AMICA Condominium Realty Corporation" width={260} height={86} className="h-16 w-auto object-contain" />
            <p className="mt-4 max-w-md text-sm leading-7 text-white/72">A premium Philippine real estate platform presenting model houses, residences, and luxury developments with clarity, trust, and editorial restraint.</p>
            <div className="mt-6 flex max-w-md gap-2 rounded-full border border-white/12 bg-white/8 p-1.5 backdrop-blur">
              <input className="w-full bg-transparent px-3 text-sm text-white placeholder:text-white/45 outline-none" placeholder="Your email for updates" />
              <button className="shrink-0 rounded-full bg-[#d7be8a] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#071426] transition hover:bg-[#e4cf9f]">Subscribe</button>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d7be8a]">Explore</div>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <a href="/properties" className="transition hover:text-white">Model Houses</a>
              <a href="/search" className="transition hover:text-white">Search</a>
              <a href="/blog" className="transition hover:text-white">Journal</a>
              <a href="/dashboard/customer" className="transition hover:text-white">Customer Portal</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d7be8a]">Contact</div>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <span>hello@amica.com</span>
              <span>+63 912 345 6789</span>
              <span>Metro Manila, Philippines</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d7be8a]">Legal</div>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <a href="#" className="transition hover:text-white">Privacy policy</a>
              <a href="#" className="transition hover:text-white">Terms and conditions</a>
              <a href="#" className="transition hover:text-white">Cookie settings</a>
              <a href="#" className="transition hover:text-white">Accessibility</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/48 md:flex-row md:items-center md:justify-between">
          <span>© 2026 AMICA Condominium Realty Corporation</span>
          <div className="flex flex-wrap gap-4">
            <a href="/properties" className="transition hover:text-white">Model Houses</a>
            <a href="/search" className="transition hover:text-white">Search</a>
            <a href="/blog" className="transition hover:text-white">Journal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
