import Image from 'next/image';
import Link from 'next/link';
import { getModelHouseHref, modelHouses } from '@/data/modelHouses';
import CustomerShell from './_components/CustomerShell';

const quickActions = [
  'Browse model houses',
  'Search model houses',
  'View saved homes',
  'Schedule a viewing',
  'Contact an agent',
  'Submit a property'
];

const cards = [
  ['Saved model houses', '18'],
  ['Active inquiries', '6'],
  ['Upcoming viewings', '3'],
  ['Unread messages', '4'],
  ['Recommended homes', '12'],
  ['Recently viewed', '9'],
  ['Progress stage', 'Viewing scheduled'],
  ['Notifications', '5']
];

const sellerCards = [
  ['Active listings', '4'],
  ['Pending approvals', '2'],
  ['Property views', '1,248'],
  ['Inquiries received', '23'],
  ['Scheduled viewings', '8'],
  ['Listing performance', '92%']
];

const appointmentDays = [
  { day: 'Thu', date: '24', model: 'HERA MODEL HOUSE', time: '10:00 AM', status: 'Confirmed' },
  { day: 'Fri', date: '25', model: 'KASANDRA MODEL HOUSE', time: '2:30 PM', status: 'Pending' },
  { day: 'Sat', date: '26', model: 'LOW COST HOUSING PROJECT', time: '11:00 AM', status: 'Scheduled' }
];

const documentChecklist = [
  { name: 'Valid government ID', status: 'Approved', note: 'Primary identity requirement' },
  { name: 'Proof of income', status: 'Pending', note: 'Payslip, COE, or business income document' },
  { name: 'Reservation form', status: 'Required', note: 'Needed before unit reservation' },
  { name: 'Payment slip', status: 'To upload', note: 'Upload after reservation payment' },
  { name: 'Signed computation sheet', status: 'For review', note: 'Review final terms before signing' }
];

const notifications = [
  { category: 'Viewing', title: 'Viewing confirmed for Hera model house', time: 'Today', priority: 'High' },
  { category: 'Match', title: 'New RHBC low-cost housing match', time: '2 hours ago', priority: 'Medium' },
  { category: 'Message', title: 'Agent replied to your inquiry', time: 'Yesterday', priority: 'High' },
  { category: 'Document', title: 'Valid ID upload approved', time: 'Aug 24', priority: 'Low' }
];

const inquiryProgress = [
  { step: 'Inquiry Sent', status: 'Done', description: 'Your interest in HERA MODEL HOUSE was recorded.' },
  { step: 'Agent Assigned', status: 'Done', description: 'Amica Residences Sales Team is assigned to assist you.' },
  { step: 'Viewing Scheduled', status: 'Active', description: 'Viewing confirmed for Thursday at 10:00 AM.' },
  { step: 'Computation Review', status: 'Next', description: 'Review payment terms after the viewing.' },
  { step: 'Reservation Pending', status: 'Next', description: 'Reserve once final terms are confirmed.' }
];

const savedHomeMeta = [
  { slug: 'hera-model-house', status: 'Saved' },
  { slug: 'kasandra-model-house', status: 'Shortlisted' },
  { slug: 'low-cost-housing', status: 'Viewed' }
];

const savedHomes = savedHomeMeta.map((item) => {
  const listing = modelHouses.find((model) => model.slug === item.slug)!;

  return {
    title: listing.title,
    note: listing.type,
    price: listing.price,
    status: item.status,
    href: getModelHouseHref(listing.slug),
    image: listing.image,
    bestFor: listing.bestFor.replace(/^Best for\s+/i, '')
  };
});

export default function CustomerDashboardPage() {
  return (
    <CustomerShell title="Dashboard" description="Your personal portal for browsing Amica Residences model houses, managing saved listings, inquiries, appointments, documents, messages, and seller tools.">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.75rem] border border-[#e7dcc8] bg-white p-6 shadow-[0_16px_50px_rgba(9,21,64,0.08)] sm:p-8">
          <div className="section-label">Welcome</div>
          <div className="mt-3 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.05em] text-[#071426]">Good afternoon, Rabin.</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">Here’s a polished overview of your Amica Residences activity, recommendations, and progress across your customer account.</p>
            </div>
            <div className="hidden rounded-[1.4rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.86)] px-4 py-3 text-right md:block">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Profile tier</div>
              <div className="mt-1 text-lg font-semibold text-[#071426]">Priority client</div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {cards.map(([label, value]) => (
              <div key={label} className="rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.86)] p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</div>
                <div className="mt-2 text-2xl font-semibold text-[#071426]">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 xl:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,243,234,0.88))] p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="section-label">Saved model houses</div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">Your shortlist</h3>
                </div>
                <Link href="/favorites" className="text-sm font-semibold text-[#8a6428] underline-offset-4 hover:underline">View all saved</Link>
              </div>

              <div className="mt-5 grid gap-4">
                {savedHomes.map((item) => (
                  <article key={item.title} className="overflow-hidden rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-white shadow-[0_12px_34px_rgba(9,21,64,0.06)]">
                    <div className="grid gap-0 sm:grid-cols-[150px_1fr]">
                      <div className="relative min-h-40 bg-[#071426] sm:min-h-full">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.05),rgba(7,20,38,0.45))]" />
                        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#071426]">{item.status}</span>
                      </div>

                      <div className="p-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6428]">Best for {item.bestFor}</span>
                          <span className="rounded-full bg-[#071426] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">{item.note}</span>
                        </div>
                        <h4 className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#071426]">{item.title}</h4>
                        <div className="mt-1 text-base font-semibold text-[#b98a3d]">{item.price}</div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Link href={item.href} className="rounded-full bg-[#071426] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0d2342]">View details</Link>
                          <Link href="/compare" className="rounded-full border border-[#e7dcc8] px-4 py-2 text-xs font-semibold text-[#071426] transition hover:border-[#b98a3d] hover:bg-[#fbf8f0]">Compare</Link>
                          <button className="rounded-full border border-[#e7dcc8] px-4 py-2 text-xs font-semibold text-slate-500 transition hover:bg-[#fbf8f0]">Remove</button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(135deg,#071426_0%,#0d2342_100%)] p-5 text-white">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="section-label text-[#d7be8a]">Appointment calendar</div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Upcoming viewings</h3>
                </div>
                <span className="rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/72">Demo schedule</span>
              </div>

              <div className="mt-5 grid gap-3">
                {appointmentDays.map((appointment) => (
                  <article key={`${appointment.day}-${appointment.model}`} className="grid grid-cols-[72px_1fr] gap-3 rounded-[1.35rem] border border-white/10 bg-white/[0.08] p-3 backdrop-blur-sm">
                    <div className="rounded-[1.1rem] bg-white text-center text-[#071426]">
                      <div className="rounded-t-[1.1rem] bg-[#d7be8a] py-1 text-[10px] font-bold uppercase tracking-[0.2em]">{appointment.day}</div>
                      <div className="py-3 text-2xl font-semibold tracking-[-0.05em]">{appointment.date}</div>
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d7be8a]">{appointment.status}</span>
                        <span className="text-xs text-white/58">{appointment.time}</span>
                      </div>
                      <h4 className="mt-2 text-sm font-semibold text-white">{appointment.model}</h4>
                      <p className="mt-1 text-xs leading-5 text-white/62">Prepare valid ID and preferred questions before the viewing.</p>
                    </div>
                  </article>
                ))}
              </div>

              <button className="mt-5 w-full rounded-full border border-white/14 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/14">Request another schedule</button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {quickActions.map((item) => (
              <div key={item} className="rounded-full border border-[#e6dcc7] bg-[#fbf8f0] px-4 py-2 text-sm text-slate-600">{item}</div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#e7dcc8] bg-white p-6 shadow-[0_16px_50px_rgba(9,21,64,0.08)] sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="section-label">Notification center</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">Recent updates</h3>
            </div>
            <span className="rounded-full bg-[#071426] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">4 unread</span>
          </div>

          <div className="mt-5 grid gap-3">
            {notifications.map((item) => {
              const priorityTone = item.priority === 'High'
                ? 'bg-rose-50 text-rose-700 border-rose-100'
                : item.priority === 'Medium'
                  ? 'bg-[#fbf8f0] text-[#8a6428] border-[#e7dcc8]'
                  : 'bg-emerald-50 text-emerald-700 border-emerald-100';

              return (
                <article key={item.title} className="rounded-[1.35rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f0_100%)] p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#071426] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">{item.category}</span>
                    <span className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${priorityTone}`}>{item.priority}</span>
                    <span className="text-xs text-slate-400">{item.time}</span>
                  </div>
                  <div className="mt-3 text-sm font-semibold text-[#071426]">{item.title}</div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 rounded-[1.5rem] bg-[linear-gradient(135deg,#071426_0%,#0d2342_100%)] p-5 text-white">
            <div className="text-xs uppercase tracking-[0.3em] text-[#d7be8a]/80">Latest journal articles</div>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <div>Luxury market trends for 2026</div>
              <div>What to look for in a premium model house</div>
              <div>Buyer guide: preparing your reservation requirements</div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-6 rounded-[1.75rem] border border-[rgba(231,220,200,0.95)] bg-white p-6 shadow-[0_16px_50px_rgba(9,21,64,0.08)] sm:p-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="section-label">Inquiry tracker</div>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">HERA model house progress</h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">A UI-only progress tracker showing how a buyer inquiry can move from first contact to reservation.</p>
          </div>
          <span className="rounded-full bg-[#071426] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">Viewing scheduled</span>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-5">
          {inquiryProgress.map((item, index) => {
            const isDone = item.status === 'Done';
            const isActive = item.status === 'Active';
            const circleTone = isDone ? 'bg-emerald-600 text-white' : isActive ? 'bg-[#d7be8a] text-[#071426]' : 'bg-[#fbf8f0] text-slate-400 border border-[#e7dcc8]';
            const cardTone = isActive ? 'border-[#b98a3d] bg-[#fbf8f0]' : 'border-[#e7dcc8] bg-white';

            return (
              <article key={item.step} className={`relative rounded-[1.35rem] border p-4 ${cardTone}`}>
                {index < inquiryProgress.length - 1 ? <div className="absolute left-8 top-9 hidden h-px w-[calc(100%+1rem)] bg-[#e7dcc8] lg:block" /> : null}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${circleTone}">{isDone ? '✓' : String(index + 1).padStart(2, '0')}</div>
                <h4 className="mt-4 text-sm font-semibold text-[#071426]">{item.step}</h4>
                <p className="mt-2 text-xs leading-5 text-slate-500">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[1.75rem] border border-[rgba(231,220,200,0.95)] bg-white p-6 shadow-[0_16px_50px_rgba(9,21,64,0.08)] sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="section-label">Document checklist</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">Buyer requirements</h3>
            </div>
            <span className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6428]">UI preview</span>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600">Use this checklist as a guide for common documents needed during inquiry, reservation, and review. Statuses are sample UI states only.</p>

          <div className="mt-5 grid gap-3">
            {documentChecklist.map((document) => {
              const statusTone = document.status === 'Approved'
                ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                : document.status === 'Required'
                  ? 'bg-rose-50 text-rose-700 border-rose-100'
                  : 'bg-[#fbf8f0] text-[#8a6428] border-[#e7dcc8]';

              return (
                <article key={document.name} className="rounded-[1.35rem] border border-[#e7dcc8] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f0_100%)] p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-[#071426]">{document.name}</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-500">{document.note}</p>
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${statusTone}`}>{document.status}</span>
                  </div>
                </article>
              );
            })}
          </div>

          <button className="mt-5 w-full rounded-full border border-[#e7dcc8] bg-[#071426] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2342]">Upload document</button>
        </section>

        <section className="rounded-[1.75rem] border border-[rgba(231,220,200,0.95)] bg-white p-6 shadow-[0_16px_50px_rgba(9,21,64,0.08)] sm:p-8">
          <div className="section-label">Seller overview</div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {sellerCards.map(([label, value]) => (
            <div key={label} className="rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.86)] p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</div>
              <div className="mt-2 text-2xl font-semibold text-[#071426]">{value}</div>
            </div>
          ))}
        </div>
        </section>
      </div>
    </CustomerShell>
  );
}
