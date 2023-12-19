import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '500'] });

export const metadata: Metadata = {
  title: 'Wupperfeld Ventures',
  description:
    'Building a portfolio of startups ✓ join our mission ✓ get in touch now',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
