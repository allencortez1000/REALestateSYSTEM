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

const savedHomes = [
  { title: 'ATHENA MODEL HOUSE', note: 'For Sale • 80 SQM', status: 'Saved' },
  { title: 'HERA MODEL HOUSE', note: 'New Launching • 206 SQM', status: 'Shortlisted' },
  { title: 'JOYCE MODEL HOUSE', note: 'In-House Financing • 69 SQM', status: 'Viewed' }
];

export default function CustomerDashboardPage() {
  return (
    <CustomerShell title="Dashboard" description="Your personal portal for browsing AMICA model houses, managing saved listings, inquiries, appointments, documents, messages, and seller tools.">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.75rem] border border-[#e7dcc8] bg-white p-6 shadow-[0_16px_50px_rgba(9,21,64,0.08)] sm:p-8">
          <div className="section-label">Welcome</div>
          <div className="mt-3 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.05em] text-[#071426]">Good afternoon, Rabin.</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">Here’s a polished overview of your AMICA activity, recommendations, and progress across your customer account.</p>
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
              <div className="section-label">Saved homes</div>
              <div className="mt-4 grid gap-3">
                {savedHomes.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-[rgba(231,220,200,0.95)] bg-white px-4 py-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold text-[#071426]">{item.title}</div>
                        <div className="text-sm text-slate-500">{item.note}</div>
                      </div>
                      <span className="rounded-full border border-[rgba(231,220,200,0.95)] bg-[#fbf8f0] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6428]">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[linear-gradient(135deg,#071426_0%,#0d2342_100%)] p-5 text-white">
              <div className="section-label text-[#d7be8a]">Upcoming viewings</div>
              <div className="mt-4 grid gap-3">
                {['Athena model house • Thursday, 10:00 AM', 'Hera model house • Friday, 2:30 PM', 'Karla model • Saturday, 11:00 AM'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/78">{item}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {quickActions.map((item) => (
              <div key={item} className="rounded-full border border-[#e6dcc7] bg-[#fbf8f0] px-4 py-2 text-sm text-slate-600">{item}</div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#e7dcc8] bg-white p-6 shadow-[0_16px_50px_rgba(9,21,64,0.08)] sm:p-8">
          <div className="section-label">Recent notifications</div>
          <div className="mt-4 grid gap-3">
            {['Viewing confirmed for Athena model house', 'New AMICA model-house match', 'Agent replied to your inquiry', 'Document upload approved'].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f8fbff] px-4 py-3 text-sm text-slate-600">{item}</div>
            ))}
          </div>
          <div className="mt-6 rounded-[1.5rem] bg-[linear-gradient(135deg,#071426_0%,#0d2342_100%)] p-5 text-white">
            <div className="text-xs uppercase tracking-[0.3em] text-[#d7be8a]/80">Latest journal articles</div>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <div>Luxury market trends for 2026</div>
              <div>What to look for in a premium condo</div>
              <div>Seller guide: preparing your property</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-[1.75rem] border border-[rgba(231,220,200,0.95)] bg-white p-6 shadow-[0_16px_50px_rgba(9,21,64,0.08)] sm:p-8">
        <div className="section-label">Seller overview</div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {sellerCards.map(([label, value]) => (
            <div key={label} className="rounded-[1.5rem] border border-[rgba(231,220,200,0.95)] bg-[rgba(247,243,234,0.86)] p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</div>
              <div className="mt-2 text-2xl font-semibold text-[#071426]">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </CustomerShell>
  );
}
