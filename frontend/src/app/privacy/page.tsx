import type { Metadata } from 'next';
import PolicyPage from '@/components/legal/PolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Review how Amica Residences by Rabino Home Builders Corporation inquiry and contact information should be handled.'
};

const sections = [
  ['Information we collect', 'Inquiry forms may ask for your name, contact details, preferred model house, viewing schedule, and message so the Amica Residences by Rabino Home Builders Corporation team can respond properly.'],
  ['How information is used', 'Submitted details are intended for buyer assistance, viewing coordination, payment-computation guidance, and customer support.'],
  ['Data handling note', 'This page is a frontend placeholder and should be reviewed before production deployment with final legal and operational policies.']
] as const;

export default function PrivacyPage() {
  return (
    <PolicyPage
      label="Legal"
      title="Privacy policy"
      intro="A simple overview of how inquiry information should be handled across the Amica Residences by Rabino Home Builders Corporation real estate experience."
      sections={[...sections]}
    />
  );
}
