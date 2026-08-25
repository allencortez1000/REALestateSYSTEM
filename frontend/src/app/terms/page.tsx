import type { Metadata } from 'next';
import PolicyPage from '@/components/legal/PolicyPage';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Review basic terms for using the Amica Residences by Rabino Home Builders Corporation model-house browsing and inquiry website.'
};

const sections = [
  ['Use of the website', 'The website presents model-house information, sample computations, inquiry forms, and dashboard previews for buyer guidance.'],
  ['Sample computations', 'Prices, monthly payments, and financing examples are UI references only and remain subject to confirmation, approval, and prevailing rates.'],
  ['Production note', 'These terms are placeholder content and should be reviewed with final business and legal requirements before launch.']
] as const;

export default function TermsPage() {
  return (
    <PolicyPage
      label="Legal"
      title="Terms and conditions"
      intro="Basic terms for using the Amica Residences by Rabino Home Builders Corporation model-house browsing and inquiry experience."
      sections={[...sections]}
    />
  );
}
