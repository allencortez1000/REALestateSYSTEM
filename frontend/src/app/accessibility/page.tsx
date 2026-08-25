import type { Metadata } from 'next';
import PolicyPage from '@/components/legal/PolicyPage';
import { brand } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: `Read the ${brand.name} accessibility goals and recommended improvements for the website.`
};

const sections = [
  ['Accessibility goal', `The ${brand.name} interface should remain readable, keyboard-friendly, responsive, and clear for buyers browsing model-house information.`],
  ['Current support', 'The interface uses semantic sections, reduced-motion CSS support, responsive layouts, and descriptive image alt text in key brand and property areas.'],
  ['Next improvements', 'Recommended next steps include stronger form labels, visible focus states across all custom controls, and continued contrast checks before production.']
] as const;

export default function AccessibilityPage() {
  return (
    <PolicyPage
      label="Accessibility"
      title="Accessibility statement"
      intro="A brief accessibility commitment for the model-house browsing and inquiry experience."
      sections={[...sections]}
    />
  );
}
