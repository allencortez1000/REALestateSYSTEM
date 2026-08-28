'use client';

import { useState } from 'react';
import { modelHouseOptions } from '@/data/modelHouses';
import { useBookings } from '@/hooks/useBookings';

const statusColor: Record<string, string> = {
  confirmed: 'bg-emerald-100 text-emerald-700',
  pending: 'bg-amber-100 text-amber-700',
  rescheduled: 'bg-blue-100 text-blue-700',
  requested: 'bg-[#fbf8f0] text-[#8a6428]'
};

export default function BookingsExperience() {
  const [propertyTitle, setPropertyTitle] = useState('');
  const [viewingDate, setViewingDate] = useState('');
  const [viewingTime, setViewingTime] = useState('');
  const { bookings, upcomingCount, lastCreatedId, createBooking, cancelBooking, markRescheduled } = useBookings();

  function handleCreateBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    createBooking(propertyTitle, viewingDate, viewingTime);
    setPropertyTitle('');
    setViewingDate('');
    setViewingTime('');
  }

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <form className="card p-7 shadow-[0_14px_34px_rgba(9,21,64,0.06)] md:col-span-2" onSubmit={handleCreateBooking}>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-label">Schedule a new viewing</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">Create a local booking request for demo purposes. No database or API request is made.</p>
          </div>
          <div className="rounded-full border border-[#e7dcc8] bg-[#fbf8f0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6428]">
            {upcomingCount} active bookings
          </div>
        </div>

        {lastCreatedId ? (
          <div className="mt-5 rounded-[1.35rem] border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800" role="status">
            Viewing request added locally. The team can wire this to a backend later.
          </div>
        ) : null}

        <div className="mt-5 grid gap-4 md:grid-cols-4">
          <label className="grid gap-2">
            <span className="sr-only">Property name</span>
            <select className="input" name="propertyName" value={propertyTitle} onChange={(event) => setPropertyTitle(event.target.value)} required>
              <option value="" disabled>Property name</option>
              {modelHouseOptions.map((title) => <option key={title}>{title}</option>)}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="sr-only">Viewing date</span>
            <input className="input" name="viewingDate" type="date" value={viewingDate} onChange={(event) => setViewingDate(event.target.value)} required />
          </label>
          <label className="grid gap-2">
            <span className="sr-only">Viewing time</span>
            <input className="input" name="viewingTime" type="time" value={viewingTime} onChange={(event) => setViewingTime(event.target.value)} required />
          </label>
          <button className="btn-primary w-full text-center">Confirm</button>
        </div>
      </form>

      {bookings.map((booking) => (
        <div key={booking.id} className={`card card-hover p-6 shadow-[0_12px_28px_rgba(9,21,64,0.05)] ${booking.id === lastCreatedId ? 'border-emerald-200' : ''}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-bold text-[#071426]">{booking.propertyTitle}</div>
              <div className="mt-1 text-sm text-slate-500">{booking.date} at {booking.time}</div>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor[booking.status] ?? 'bg-[#f8f3e8] text-[#8a6428]'}`}>
              {booking.status}
            </span>
          </div>
          <div className="mt-5 flex gap-2">
            <button type="button" onClick={() => markRescheduled(booking.id)} className="btn-outline px-4 py-2 text-xs">Reschedule</button>
            <button type="button" onClick={() => cancelBooking(booking.id)} className="btn-outline px-4 py-2 text-xs text-[#8a6428] hover:text-[#8a6428]">Cancel</button>
          </div>
        </div>
      ))}
    </div>
  );
}
