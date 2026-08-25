import Image from 'next/image';
import Link from 'next/link';
import { brand } from '@/data/brand';

export default function Footer() {
  return (
    <footer className="mt-8 w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(215,190,138,0.14),_transparent_20%),radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),_transparent_24%),linear-gradient(160deg,_#071426_0%,_#0D2342_58%,_#13273f_100%)] text-white">
      <div className="mx-auto max-w-[1500px] px-6 py-12 md:px-10 lg:px-14 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <Image src={brand.logo} alt={brand.name} width={260} height={112} className="h-16 w-auto object-contain" />
            <p className="mt-4 max-w-md text-sm leading-7 text-white/72">{brand.name} presents model houses and housing options with clarity, trust, and editorial restraint.</p>
            <form className="mt-6 flex max-w-md flex-col gap-2 rounded-[1.25rem] border border-white/12 bg-white/8 p-1.5 backdrop-blur sm:flex-row sm:rounded-full">
              <label className="sr-only" htmlFor="footer-email">Your email for updates</label>
              <input id="footer-email" name="email" type="email" autoComplete="email" className="min-h-11 w-full rounded-full bg-transparent px-3 text-sm text-white placeholder:text-white/45 outline-none" placeholder="Your email for updates" />
              <button type="submit" className="min-h-11 shrink-0 rounded-full bg-[#d7be8a] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#071426] transition hover:bg-[#e4cf9f]">Subscribe</button>
            </form>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d7be8a]">Explore</div>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <Link href="/properties" className="transition hover:text-white">Model Houses</Link>
              <Link href="/search" className="transition hover:text-white">Search</Link>
              <Link href="/blog" className="transition hover:text-white">Journal</Link>
              <Link href="/dashboard/customer" className="transition hover:text-white">Customer Portal</Link>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d7be8a]">Contact</div>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <a href={brand.emailHref} className="transition hover:text-white">{brand.email}</a>
              <a href={brand.phoneHref} className="transition hover:text-white">{brand.phone}</a>
              <span>{brand.location}</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d7be8a]">Legal</div>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <Link href="/privacy" className="transition hover:text-white">Privacy policy</Link>
              <Link href="/terms" className="transition hover:text-white">Terms and conditions</Link>
              <Link href="/cookies" className="transition hover:text-white">Cookie settings</Link>
              <Link href="/accessibility" className="transition hover:text-white">Accessibility</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/48 md:flex-row md:items-center md:justify-between">
          <span>© 2026 {brand.name}</span>
          <div className="flex flex-wrap gap-4">
            <Link href="/properties" className="transition hover:text-white">Model Houses</Link>
            <Link href="/search" className="transition hover:text-white">Search</Link>
            <Link href="/blog" className="transition hover:text-white">Journal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
