import './globals.css';
import { Inter } from 'next/font/google';
import { SITE } from '@/config/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline.fr}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description.fr,
  keywords: [
    'ERP Guinée',
    'logiciel gestion entreprise',
    'SaaS Afrique',
    'Orbis ERP',
    'GRH-Services',
    'OHADA',
    'Conakry',
    'gestion RH',
    'comptabilité OHADA',
    'gestion de flotte',
  ],
  authors: [{ name: 'GRH-Services', url: SITE.url }],
  creator: 'GRH-Services',
  publisher: 'GRH-Services',
  openGraph: {
    type: 'website',
    locale: 'fr_GN',
    alternateLocale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline.fr}`,
    description: SITE.description.fr,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline.fr}`,
    description: SITE.description.fr,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport = {
  themeColor: '#0d9488',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
