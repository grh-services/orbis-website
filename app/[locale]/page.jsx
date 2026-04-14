import { getDictionary } from '@/lib/i18n';
import { SITE } from '@/config/site';
import Hero from '@/components/Hero';
import ModulesGrid from '@/components/ModulesGrid';
import ValueProps from '@/components/ValueProps';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: `${SITE.name} — ${SITE.tagline[locale]}`,
    description: SITE.description[locale],
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: '/fr', en: '/en' },
    },
  };
}

export default function HomePage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <ModulesGrid locale={locale} dict={dict} />
      <ValueProps dict={dict} />
      <Testimonials locale={locale} dict={dict} />
      <CTASection locale={locale} dict={dict} />
    </>
  );
}
