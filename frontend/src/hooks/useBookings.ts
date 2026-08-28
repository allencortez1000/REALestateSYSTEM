'use client';

import { useMemo, useState } from 'react';
import { mockBookings } from '@/data/mockData';
import { useLocalStorageState } from './useLocalStorageState';

export type Booking = {
  id: string;
  propertyTitle: string;
  date: string;
  time: string;
  status: string;
};

export const LOCAL_BOOKINGS_KEY = 'amicaLocalBookings';

function parseBookings(raw: string | null) {
  try {
    const parsed = raw ? JSON.parse(raw) : null;
    return Array.isArray(parsed) ? parsed as Booking[] : mockBookings;
  } catch {
    return mockBookings;
  }
}

export function useBookings() {
  const { value: bookings, setValue: setBookings, hydrated } = useLocalStorageState<Booking[]>({
    storageKey: LOCAL_BOOKINGS_KEY,
    initialValue: mockBookings,
    read: parseBookings
  });
  const [lastCreatedId, setLastCreatedId] = useState<string | null>(null);

  const upcomingCount = useMemo(() => bookings.filter((booking) => booking.status !== 'cancelled').length, [bookings]);

  function createBooking(propertyTitle: string, viewingDate: string, viewingTime: string) {
    const id = `local-booking-${Date.now()}`;
    const newBooking = { id, propertyTitle, date: viewingDate, time: viewingTime, status: 'requested' };
    setBookings((current) => [newBooking, ...current]);
    setLastCreatedId(id);
  }

  function cancelBooking(id: string) {
    setBookings((current) => current.filter((booking) => booking.id !== id));
  }

  function markRescheduled(id: string) {
    setBookings((current) => current.map((booking) => booking.id === id ? { ...booking, status: 'rescheduled' } : booking));
  }

  return { bookings, hydrated, upcomingCount, lastCreatedId, createBooking, cancelBooking, markRescheduled };
}
