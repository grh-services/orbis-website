import ModulesExperience from '@/components/ModulesExperience';
import { createPageMetadata } from '@/lib/pageMetadata';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEnglish = locale === 'en';
  return createPageMetadata({
    locale,
    path: '/modules',
    title: isEnglish ? 'Our modules' : 'Nos modules',
    description: isEnglish
      ? 'Explore the eight Orbis modules, from sales and human resources to finance and operations, and prepare a demo around your needs.'
      : 'Explorez les huit modules Orbis, des ventes aux ressources humaines, de la finance aux opérations, et préparez une démonstration adaptée à vos besoins.',
  });
}

export default async function ModulesPage({ params }) {
  const { locale } = await params;
  return <ModulesExperience locale={locale} />;
}
