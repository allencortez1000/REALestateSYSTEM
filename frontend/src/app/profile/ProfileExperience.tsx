'use client';

import { useEffect, useMemo, useState } from 'react';

const LOCAL_PROFILE_KEY = 'amicaLocalProfile';

const initialProfile = {
  firstName: 'AMICA',
  lastName: 'Admin',
  email: 'admin@amica.com',
  phone: '+63 912 345 6789',
  address: 'Metro Manila, Philippines',
  currentPassword: '',
  newPassword: ''
};

function readLocalProfile() {
  if (typeof window === 'undefined') return initialProfile;

  try {
    const raw = window.localStorage.getItem(LOCAL_PROFILE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === 'object' ? { ...initialProfile, ...parsed, currentPassword: '', newPassword: '' } : initialProfile;
  } catch {
    return initialProfile;
  }
}

export default function ProfileExperience() {
  const [profile, setProfile] = useState(initialProfile);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  const initials = useMemo(() => {
    const first = profile.firstName.trim().charAt(0);
    const last = profile.lastName.trim().charAt(0);
    return `${first}${last}`.trim() || 'A';
  }, [profile.firstName, profile.lastName]);

  const fullName = `${profile.firstName} ${profile.lastName}`.trim() || 'AMICA Admin';

  useEffect(() => {
    setProfile(readLocalProfile());
  }, []);

  function updateProfile(field: keyof typeof profile, value: string) {
    setProfile((current) => ({ ...current, [field]: value }));
    setSavedAt(null);
  }

  function saveProfile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const sanitizedProfile = { ...profile, currentPassword: '', newPassword: '' };
    window.localStorage.setItem(LOCAL_PROFILE_KEY, JSON.stringify(sanitizedProfile));
    setSavedAt(new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' }));
    setProfile(sanitizedProfile);
  }

  return (
    <div className="mt-10 grid gap-8 md:grid-cols-[240px_1fr]">
      <div className="card p-6 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#071426] text-3xl font-bold text-[#d7be8a] shadow-luxury">{initials}</div>
        <div className="mt-4 font-bold text-[#071426]">{fullName}</div>
        <div className="text-sm text-slate-500">{profile.email}</div>
        <div className="mt-3 inline-flex rounded-full bg-[#d7be8a]/20 px-3 py-1 text-xs font-semibold text-[#0d2342]">Administrator</div>
        <button type="button" className="btn-outline mt-5 w-full py-2 text-xs">Upload photo</button>
      </div>

      <form className="card p-8 md:p-10" onSubmit={saveProfile}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="section-label">Personal information</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">Update profile details locally for the demo. No API request is made.</p>
          </div>
          {savedAt ? (
            <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700" role="status">
              Saved at {savedAt}
            </div>
          ) : null}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="sr-only">First name</span>
            <input className="input" name="firstName" autoComplete="given-name" placeholder="First name" value={profile.firstName} onChange={(event) => updateProfile('firstName', event.target.value)} required />
          </label>
          <label className="grid gap-2">
            <span className="sr-only">Last name</span>
            <input className="input" name="lastName" autoComplete="family-name" placeholder="Last name" value={profile.lastName} onChange={(event) => updateProfile('lastName', event.target.value)} required />
          </label>
          <label className="grid gap-2">
            <span className="sr-only">Email address</span>
            <input className="input" name="email" type="email" autoComplete="email" placeholder="Email address" value={profile.email} onChange={(event) => updateProfile('email', event.target.value)} required />
          </label>
          <label className="grid gap-2">
            <span className="sr-only">Phone number</span>
            <input className="input" name="phone" type="tel" autoComplete="tel" placeholder="Phone number" value={profile.phone} onChange={(event) => updateProfile('phone', event.target.value)} />
          </label>
          <label className="grid gap-2 md:col-span-2">
            <span className="sr-only">Address</span>
            <input className="input" name="address" autoComplete="street-address" placeholder="Address" value={profile.address} onChange={(event) => updateProfile('address', event.target.value)} />
          </label>
        </div>

        <div className="mt-6 border-t border-[#e8dfc8] pt-6">
          <div className="section-label">Security</div>
          <p className="mt-2 text-sm leading-7 text-slate-600">Password fields are cleared after a local save confirmation.</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="sr-only">Current password</span>
              <input className="input" name="currentPassword" type="password" autoComplete="current-password" placeholder="Current password" value={profile.currentPassword} onChange={(event) => updateProfile('currentPassword', event.target.value)} />
            </label>
            <label className="grid gap-2">
              <span className="sr-only">New password</span>
              <input className="input" name="newPassword" type="password" autoComplete="new-password" placeholder="New password" value={profile.newPassword} onChange={(event) => updateProfile('newPassword', event.target.value)} />
            </label>
          </div>
        </div>
        <button className="btn-primary mt-6">Save all changes</button>
      </form>
    </div>
  );
}
