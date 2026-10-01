import ContactExperience from '@/components/ContactExperience';
import { parseContactContext } from '@/lib/contactContext';
import { createPageMetadata } from '@/lib/pageMetadata';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const {locale}=await params;
  return createPageMetadata({
    locale,
    path:'/contact',
    title:locale==='fr'?'Contact — Parlons de votre organisation':'Contact — Let’s talk about your organization',
    description:locale==='fr'?'Préparez une demande de démonstration, de devis ou d’assistance Orbis ERP. Contactez GRH-Services à Conakry.':'Prepare an Orbis ERP demo, quote or support request. Contact GRH-Services in Conakry.',
  });
}

export default async function ContactPage({params,searchParams}) {
  const {locale}=await params;
  const context=parseContactContext(await searchParams);
  return <ContactExperience key={`${locale}:${JSON.stringify(context)}`} locale={locale} initialContext={context}/>;
}
