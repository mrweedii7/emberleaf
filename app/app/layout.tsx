import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ember & Leaf | Coffee, Tea & Community',
  description: 'A premium café brand built around specialty coffee, handcrafted tea, and warm hospitality in the Netherlands.',
  metadataBase: new URL('https://emberandleaf.nl'),
  openGraph: { title: 'Ember & Leaf', description: 'Where fire meets flavor.', url: 'https://emberandleaf.nl', siteName: 'Ember & Leaf', locale: 'en_NL', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
