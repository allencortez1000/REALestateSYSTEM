'use client';

import { useMemo, useState } from 'react';
import { brand } from '@/data/brand';
import { useLocalStorageState } from './useLocalStorageState';

export const LOCAL_PROFILE_KEY = 'amicaLocalProfile';

export type LocalProfile = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  currentPassword: string;
  newPassword: string;
};

export const initialProfile: LocalProfile = {
  firstName: 'Amica Residences',
  lastName: 'Admin',
  email: 'admin@rabinohomebuilders.com',
  phone: brand.phone,
  address: brand.location,
  currentPassword: '',
  newPassword: ''
};

function parseLocalProfile(raw: string | null) {
  try {
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === 'object'
      ? { ...initialProfile, ...parsed, currentPassword: '', newPassword: '' }
      : initialProfile;
  } catch {
    return initialProfile;
  }
}

export function useProfileState() {
  const { value: profile, setValue: setProfile, hydrated } = useLocalStorageState<LocalProfile>({
    storageKey: LOCAL_PROFILE_KEY,
    initialValue: initialProfile,
    read: parseLocalProfile
  });
  const [savedAt, setSavedAt] = useState<string | null>(null);

  const initials = useMemo(() => {
    const first = profile.firstName.trim().charAt(0);
    const last = profile.lastName.trim().charAt(0);
    return `${first}${last}`.trim() || 'A';
  }, [profile.firstName, profile.lastName]);

  const fullName = `${profile.firstName} ${profile.lastName}`.trim() || 'Amica Residences Admin';

  function updateProfile(field: keyof LocalProfile, value: string) {
    setProfile((current) => ({ ...current, [field]: value }));
    setSavedAt(null);
  }

  function saveProfile() {
    const sanitizedProfile = { ...profile, currentPassword: '', newPassword: '' };
    setProfile(sanitizedProfile);
    setSavedAt(new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' }));
  }

  return {
    profile,
    hydrated,
    savedAt,
    initials,
    fullName,
    updateProfile,
    saveProfile
  };
}
