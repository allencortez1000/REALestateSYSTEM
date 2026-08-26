'use client';

import { useMemo, useState } from 'react';
import { brand } from '@/data/brand';
import { inquiryTopics } from '@/data/contact';
import { modelHouseOptions } from '@/data/modelHouses';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedModel, setSelectedModel] = useState('');
  const [inquiryType, setInquiryType] = useState('');

  const summary = useMemo(() => {
    if (!submitted) return null;

    return selectedModel && inquiryType
      ? `Your ${inquiryType.toLowerCase()} inquiry for ${selectedModel} has been prepared for the ${brand.name} team.`
      : `Your inquiry has been prepared for the ${brand.name} team.`;
  }, [inquiryType, selectedModel, submitted]);

  return (
    <form
      className="card p-8 shadow-[0_14px_34px_rgba(9,21,64,0.06)] md:p-10"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="section-label">Send inquiry</div>
      <h2 className="mt-3 text-[clamp(1.95rem,4vw,2.7rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-[#071426]">Tell us what you need</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">This frontend-only form validates the key information a real inquiry workflow should collect later.</p>

      {submitted ? (
        <div className="mt-6 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5 text-sm leading-7 text-emerald-800" role="status">
          <div className="font-semibold">Inquiry ready</div>
          <p className="mt-1">{summary}</p>
          <button type="button" onClick={() => setSubmitted(false)} className="mt-4 rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-800">
            Edit inquiry
          </button>
        </div>
      ) : null}

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">First name</span>
            <input className="input" name="firstName" autoComplete="given-name" placeholder="Juan" required />
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Last name</span>
            <input className="input" name="lastName" autoComplete="family-name" placeholder="Dela Cruz" required />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Email address</span>
            <input className="input" name="email" type="email" autoComplete="email" placeholder="juan@example.com" required />
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Phone number</span>
            <input className="input" name="phone" type="tel" autoComplete="tel" placeholder={brand.phone} />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Interested model</span>
            <select className="input" name="interestedModel" value={selectedModel} onChange={(event) => setSelectedModel(event.target.value)} required>
              <option value="" disabled>Interested model</option>
              {modelHouseOptions.map((title) => <option key={title}>{title}</option>)}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Inquiry type</span>
            <select className="input" name="inquiryType" value={inquiryType} onChange={(event) => setInquiryType(event.target.value)} required>
              <option value="" disabled>Inquiry type</option>
              {inquiryTopics.map((topic) => <option key={topic}>{topic}</option>)}
            </select>
          </label>
        </div>
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Preferred viewing date or timeframe</span>
          <input className="input" name="preferredSchedule" placeholder="Example: Saturday afternoon or August 30" />
        </label>
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Message</span>
          <textarea className="input resize-none" name="message" rows={6} placeholder="Tell us your budget, preferred model, questions, or document concerns…" required />
        </label>
        <button className="btn-primary w-full text-center">Send inquiry</button>
      </div>
    </form>
  );
}
