import AboutExperience from '@/components/AboutExperience';
import { createPageMetadata } from '@/lib/pageMetadata';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEnglish = locale === 'en';
  return createPageMetadata({
    locale,
    path: '/a-propos',
    title: isEnglish ? 'About Orbis' : 'À propos d’Orbis',
    description: isEnglish
      ? 'Discover the vision behind Orbis ERP, developed by GRH-Services in Guinea to connect business information and bring clarity to daily work.'
      : 'Découvrez la vision d’Orbis ERP, une plateforme développée par GRH-Services en Guinée pour relier les informations des métiers et éclairer l’activité.',
  });
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  return <AboutExperience locale={locale} />;
}
