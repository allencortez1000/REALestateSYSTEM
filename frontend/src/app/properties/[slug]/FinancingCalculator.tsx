'use client';

import { useMemo, useState } from 'react';

type FinancingCalculatorProps = {
  price: string;
};

function parsePrice(price: string) {
  const firstAmount = price.match(/[\d,]+(?:\.\d+)?/);
  return firstAmount ? Number(firstAmount[0].replace(/,/g, '')) : 0;
}

function formatPeso(amount: number) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 2
  }).format(Number.isFinite(amount) ? amount : 0);
}

export default function FinancingCalculator({ price }: FinancingCalculatorProps) {
  const defaultPrice = parsePrice(price) || 3000000;
  const [totalPrice, setTotalPrice] = useState(defaultPrice);
  const [reservation, setReservation] = useState(defaultPrice <= 1400000 ? 20000 : 50000);
  const [downPaymentRate, setDownPaymentRate] = useState(20);
  const [termYears, setTermYears] = useState(10);
  const [annualRate, setAnnualRate] = useState(7.1);

  const estimate = useMemo(() => {
    const downPayment = totalPrice * (downPaymentRate / 100);
    const balance = Math.max(totalPrice - reservation - downPayment, 0);
    const monthlyRate = annualRate / 100 / 12;
    const months = termYears * 12;
    const monthly = monthlyRate > 0
      ? (balance * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
      : balance / months;

    return { downPayment, balance, monthly };
  }, [annualRate, downPaymentRate, reservation, termYears, totalPrice]);

  return (
    <section className="card overflow-hidden p-0">
      <div className="border-b border-[#e7dcc8] bg-[linear-gradient(135deg,#fbf8f0_0%,#ffffff_100%)] p-6">
        <div className="section-label text-[#b98a3d]">Financing calculator</div>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#071426]">Estimate your monthly payment</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Adjust the sample values below to understand possible payment ranges. This is a UI estimate only and is subject to approval, final computation, and prevailing interest rates.
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-4 border-b border-[#e7dcc8] p-6 lg:border-b-0 lg:border-r">
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Total price</span>
            <input
              className="input"
              type="number"
              min="0"
              value={totalPrice}
              onChange={(event) => setTotalPrice(Number(event.target.value))}
            />
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Reservation fee</span>
            <input
              className="input"
              type="number"
              min="0"
              value={reservation}
              onChange={(event) => setReservation(Number(event.target.value))}
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-3">
            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Down payment</span>
              <select className="input" value={downPaymentRate} onChange={(event) => setDownPaymentRate(Number(event.target.value))}>
                <option value={10}>10%</option>
                <option value={20}>20%</option>
                <option value={30}>30%</option>
                <option value={40}>40%</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Term</span>
              <select className="input" value={termYears} onChange={(event) => setTermYears(Number(event.target.value))}>
                <option value={5}>5 years</option>
                <option value={10}>10 years</option>
                <option value={15}>15 years</option>
                <option value={20}>20 years</option>
                <option value={25}>25 years</option>
                <option value={30}>30 years</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Interest</span>
              <select className="input" value={annualRate} onChange={(event) => setAnnualRate(Number(event.target.value))}>
                <option value={0}>0%</option>
                <option value={7.1}>7.1%</option>
                <option value={7.7}>7.7%</option>
              </select>
            </label>
          </div>
        </div>

        <div className="bg-[linear-gradient(180deg,#071426_0%,#0d2342_100%)] p-6 text-white">
          <div className="section-label text-[#d7be8a]">Estimated result</div>
          <div className="mt-5 rounded-[1.5rem] border border-white/12 bg-white/8 p-5">
            <div className="text-sm text-white/65">Monthly payment</div>
            <div className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">{formatPeso(estimate.monthly)}</div>
          </div>
          <div className="mt-4 grid gap-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><span className="text-white/62">Down payment</span><strong>{formatPeso(estimate.downPayment)}</strong></div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3"><span className="text-white/62">Reservation</span><strong>{formatPeso(reservation)}</strong></div>
            <div className="flex justify-between gap-4"><span className="text-white/62">Estimated balance</span><strong>{formatPeso(estimate.balance)}</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
