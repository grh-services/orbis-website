import { getDictionary } from '@/lib/i18n';
import PageHeader from '@/components/PageHeader';
import PricingCards from '@/components/PricingCards';
import ComparisonTable from '@/components/ComparisonTable';
import CTASection from '@/components/CTASection';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.pricing.title,
    description: dict.pricing.subtitle,
  };
}

export default async function PricingPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.pricing.eyebrow}
        title={dict.pricing.title}
        subtitle={dict.pricing.subtitle}
      />
      <section className="pb-20">
        <div className="container-orbis">
          <PricingCards locale={locale} dict={dict} />
          <ComparisonTable locale={locale} dict={dict} />
        </div>
      </section>
      <CTASection locale={locale} dict={dict} />
    </>
  );
}
