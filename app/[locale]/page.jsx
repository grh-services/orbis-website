import { getDictionary } from '@/lib/i18n';
import { SITE } from '@/config/site';
import Hero from '@/components/Hero';
import PlatformShowcase from '@/components/PlatformShowcase';
import OrbisOrigin from '@/components/OrbisOrigin';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: { absolute: `${SITE.name} — ${SITE.tagline[locale]}` },
    description: SITE.description[locale],
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: '/fr', en: '/en' },
    },
  };
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <PlatformShowcase locale={locale} />
      <OrbisOrigin locale={locale} />
    </>
  );
}
