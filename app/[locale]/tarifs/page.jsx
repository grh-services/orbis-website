import PricingExperience from '@/components/PricingExperience';
import { createPageMetadata } from '@/lib/pageMetadata';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/tarifs',
    title: locale === 'en' ? 'Pricing — a plan for your business' : 'Tarifs — une formule pour votre activité',
    description: locale === 'en'
      ? 'Explore the Starter, Business and Enterprise plans, then select your Orbis ERP modules to prepare a tailored quote.'
      : 'Découvrez les formules Starter, Business et Enterprise, puis choisissez vos modules Orbis ERP pour préparer un devis adapté.',
  });
}

export default async function PricingPage({ params }) {
  const { locale } = await params;
  return <PricingExperience locale={locale} />;
}
