import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '500'] });

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
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Wupperfeld Ventures',
    description:
      'Building and investing in technology-driven ventures. Turning innovative ideas into impactful solutions.',
    robots: { index: true, follow: true },
    openGraph: {
      title: 'Wupperfeld Ventures',
      description:
        'Building and investing in technology-driven ventures. Turning innovative ideas into impactful solutions.',
      type: 'website',
      images: [
        {
          url: '/wv_logo.webp',
          width: 1730,
          height: 744,
          alt: 'Wupperfeld Ventures Logo',
        },
      ],
      url: 'https://www.wupperfeld.org',
      siteName: 'Wupperfeld Ventures',
    },
  };
}
