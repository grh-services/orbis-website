import SectorsExperience from '@/components/SectorsExperience';
import { createPageMetadata } from '@/lib/pageMetadata';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/secteurs',
    title: locale === 'en' ? 'Industries — explore Orbis for your activity' : 'Secteurs — Orbis dans votre activité',
    description: locale === 'en'
      ? 'Explore possible Orbis ERP use cases in transport, mining, construction, commerce and services, then prepare a focused demonstration.'
      : 'Explorez des usages possibles d’Orbis ERP dans le transport, les mines, le BTP, le commerce et les services, puis préparez une démonstration ciblée.',
  });
}

export default async function SectorsPage({ params }) {
  const { locale } = await params;
  return <SectorsExperience locale={locale} />;
}
