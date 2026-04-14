import { notFound } from 'next/navigation';
import { LOCALES, getDictionary } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  if (!LOCALES.includes(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="min-h-screen pt-20">{children}</main>
      <Footer locale={locale} dict={dict} />
      <WhatsAppButton locale={locale} dict={dict} />
    </>
  );
}
