import FavoriteButton from '@/components/properties/FavoriteButton';
import { brand } from '@/data/brand';
import type { ModelHouse } from '@/data/modelHouses';
import FinancingCalculator from '../FinancingCalculator';

type PropertySidebarProps = {
  listing: ModelHouse;
};

export default function PropertySidebar({ listing }: PropertySidebarProps) {
  return (
    <>
      <section id="design" className="card scroll-mt-28 p-5 sm:p-8">
        <div className="section-label">Design and package details</div>
        <h3 className="mt-3 text-[1.9rem] font-semibold leading-[1.03] tracking-[-0.04em] text-[#071426]">What is included</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">These items explain the design previews, package type, and notable selling points from the reference materials.</p>
        <div className="mt-5 grid gap-3">
          {listing.amenities.map((item, index) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-[rgba(231,220,200,0.82)] bg-[rgba(247,243,234,0.72)] px-4 py-3 text-sm text-[#071426]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b98a3d]">{String(index + 1).padStart(2, '0')}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="layout" className="card scroll-mt-28 p-5 sm:p-8">
        <div className="section-label">House features</div>
        <h3 className="mt-3 text-[1.9rem] font-semibold leading-[1.03] tracking-[-0.04em] text-[#071426]">Rooms and layout notes</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">Use this section to understand the spaces, floor-plan notes, and functional areas included in the model.</p>
        <div className="mt-5 grid gap-3">
          {listing.floorFeatures.map((item, index) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-[rgba(231,220,200,0.85)] bg-white/96 px-4 py-3 text-sm text-[#071426]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6428]">{String(index + 1).padStart(2, '0')}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="location" className="card scroll-mt-28 p-5 sm:p-8">
        <div className="section-label">Location access</div>
        <h3 className="mt-3 text-[1.9rem] font-semibold leading-[1.03] tracking-[-0.04em] text-[#071426]">Nearby conveniences</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">A simple guide to the community access points and nearby essentials mentioned for this listing.</p>
        <div className="mt-5 grid gap-3">
          {listing.nearby.map((item, index) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-[rgba(231,220,200,0.82)] bg-[rgba(247,243,234,0.72)] px-4 py-3 text-sm text-[#071426]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6428]">{String(index + 1).padStart(2, '0')}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-5 sm:p-8">
        <div className="section-label">Buyer FAQ</div>
        <h3 className="mt-3 text-[1.9rem] font-semibold leading-[1.03] tracking-[-0.04em] text-[#071426]">Common questions before you inquire</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">Quick answers to help buyers understand the next steps. These are UI-only guide notes and can be connected to real policies later.</p>
        <div className="mt-5 grid gap-3">
          {[
            ['Can I schedule a viewing?', 'Yes. Use the inquiry form or floating button to request a preferred viewing date.'],
            ['Are the computations final?', 'No. Computations shown are sample references and may change based on approval, terms, and prevailing rates.'],
            ['What documents should I prepare?', 'Start with a valid government ID, proof of income, reservation form, payment slip, and signed computation sheet.'],
            ['What does Not shown mean?', 'It means the supplied marketing reference did not include that specific size, financing, or feature detail.']
          ].map(([question, answer]) => (
            <details key={question} className="group rounded-[1.35rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f0_100%)] p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#071426]">
                <span>{question}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#071426] text-xs text-white transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {'computation' in listing ? (
        <div id="payment" className="scroll-mt-28 space-y-6">
          <FinancingCalculator price={listing.price} />
          <section className="card overflow-hidden p-0 shadow-[0_14px_40px_rgba(9,21,64,0.06)]">
            <div className="border-b border-[#e7dcc8] bg-[linear-gradient(135deg,#071426_0%,#0d2342_100%)] p-6 text-white">
              <div className="section-label text-[#d7be8a]">Payment guide</div>
              <h3 className="mt-3 text-[1.7rem] font-semibold tracking-[-0.04em] text-white">Sample computation</h3>
              <p className="mt-2 text-sm leading-7 text-white/72">Use this as a quick reference for reservation, down payment, balance, and monthly terms shown in the supplied material.</p>
            </div>
            <div className="grid divide-y divide-[#e7dcc8]">
              {listing.computation?.map(([label, value]) => (
                <div key={label} className="grid gap-2 bg-white px-5 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:px-6">
                  <div className="text-sm font-medium text-slate-600">{label}</div>
                  <div className="break-words text-base font-semibold text-[#071426] sm:text-right">{value}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : null}

      <aside id="inquiry" className="card mt-8 scroll-mt-28 p-5 sm:p-8">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] xl:items-start">
          <div>
            <div className="section-label">Inquiry</div>
            <h3 className="mt-4 text-[clamp(2rem,4vw,2.85rem)] font-semibold leading-[1.03] tracking-[-0.05em] text-[#071426]">Speak with our team</h3>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">Book a private viewing or request more details about this residence. Our sales team can help verify availability, computation, and next steps.</p>

            <div className="mt-6 rounded-[1.75rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#fbf8f0_0%,#ffffff_100%)] p-5">
              <div className="section-label text-[#b98a3d]">Buyer journey</div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ['01', 'Choose model', 'Review the design, features, and size details.'],
                  ['02', 'Submit inquiry', 'Send your contact details and preferred schedule.'],
                  ['03', 'Schedule viewing', 'Coordinate a model-house visit with the sales team.'],
                  ['04', 'Review computation', 'Check reservation, down payment, and monthly terms.'],
                  ['05', 'Reserve unit', 'Proceed once final terms and availability are confirmed.']
                ].map(([step, title, text]) => (
                  <div key={step} className="grid grid-cols-[auto_1fr] gap-3 rounded-2xl border border-[rgba(231,220,200,0.85)] bg-white p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071426] text-[11px] font-bold text-white">{step}</div>
                    <div>
                      <div className="text-sm font-semibold text-[#071426]">{title}</div>
                      <div className="mt-1 text-xs leading-5 text-slate-500">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#fbf8f0_0%,#ffffff_100%)] p-5 sm:p-6">
            <div className="rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-white p-4">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Assigned agent</div>
              <div className="mt-2 text-lg font-semibold text-[#071426]">{brand.salesTeamName}</div>
              <div className="text-sm text-slate-500">{brand.location}</div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Your name</span>
                <input className="input" name="name" autoComplete="name" placeholder="Juan Dela Cruz" />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Email address</span>
                <input className="input" name="email" type="email" autoComplete="email" placeholder="juan@example.com" />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Phone number</span>
                <input className="input" name="phone" type="tel" autoComplete="tel" placeholder={brand.phone} />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Preferred viewing date</span>
                <input className="input" name="preferredViewingDate" type="date" />
              </label>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button className="btn-primary w-full">Schedule viewing</button>
              <FavoriteButton slug={listing.slug} className="w-full" />
              <a href={brand.phoneHref} className="btn-gold w-full">Call now</a>
              <a href={brand.emailHref} className="btn-outline w-full">Send inquiry</a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
