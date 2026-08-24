import type { Metadata } from 'next';
import PolicyPage from '@/components/legal/PolicyPage';

export const metadata: Metadata = {
  title: 'Cookie Settings',
  description: 'Review browser storage and future consent preferences for the RHBC/AMICA website.'
};

const sections = [
  ['Current cookie usage', 'The current frontend experience may use browser storage for demo sign-in and future saved-listing preferences.'],
  ['Future preferences', 'Cookie and storage settings can later support favorites, theme preferences, analytics consent, and inquiry form convenience.'],
  ['Production note', 'This page is placeholder guidance and should be updated when analytics, tracking, or production authentication is finalized.']
] as const;

export default function CookiesPage() {
  return (
    <PolicyPage
      label="Preferences"
      title="Cookie settings"
      intro="A placeholder page for explaining browser storage and future consent preferences."
      sections={[...sections]}
    />
  );
}
