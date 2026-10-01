import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, ArrowUpRight } from 'lucide-react';
import { localizedHref, LOCALES } from '@/lib/locales';
import { createPageMetadata } from '@/lib/pageMetadata';
import { EXPLORER_MODULES } from '@/config/moduleExperience';
import styles from './ModuleDetail.module.css';

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    EXPLORER_MODULES.map((module) => ({ locale, slug: module.slug }))
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const selectedModule = EXPLORER_MODULES.find((item) => item.slug === slug);
  if (!selectedModule || !LOCALES.includes(locale)) notFound();
  return createPageMetadata({
    locale,
    path: `/modules/${selectedModule.slug}`,
    title: selectedModule.name[locale],
    description: selectedModule[locale].description,
  });
}

export default async function ModuleDetailPage({ params }) {
  const { locale, slug } = await params;
  const selectedModule = EXPLORER_MODULES.find((item) => item.slug === slug);
  if (!selectedModule || !LOCALES.includes(locale)) notFound();
  const presentation = selectedModule[locale];
  const isEnglish = locale === 'en';
  const others = EXPLORER_MODULES.filter((item) => item.slug !== slug).slice(0, 4);
  const demoHref = localizedHref(locale, `/contact?intent=demo&module=${selectedModule.slug}`);

  return (
    <div className={styles.page}>
      <section className={`${styles.wrap} ${styles.introduction}`} aria-labelledby="module-detail-title">
          <Link
            href={localizedHref(locale, '/modules')}
            className={styles.backLink}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {isEnglish ? 'All modules' : 'Tous les modules'}
          </Link>
          <div className={styles.introGrid}>
            <div>
              <p className={styles.eyebrow}>{isEnglish ? 'A workspace for your business' : 'Un espace pour votre métier'}</p>
              <h1 id="module-detail-title">{selectedModule.name[locale]}</h1>
              <p className={styles.tagline}>{presentation.title}</p>
              <p className={styles.description}>{presentation.description}</p>
              <div className={styles.actions}>
                <Link href={demoHref} className={styles.button}>
                  {isEnglish ? 'See this module in a demo' : 'Voir ce module en démo'}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
                <Link href={localizedHref(locale, '/tarifs')} className={styles.textLink}>
                  {isEnglish ? 'Explore the plans' : 'Voir les formules'}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <aside className={styles.scope} aria-labelledby="module-scope-title">
              <p className={styles.eyebrow}>{isEnglish ? 'Topics to explore' : 'Les sujets à explorer'}</p>
              <h2 id="module-scope-title">{presentation.space}</h2>
              <ul>
                {presentation.features.map((feature) => (
                  <li key={feature}><Check size={16} aria-hidden="true" />{feature}</li>
                ))}
              </ul>
              <p className={styles.scopeNote}>
                {isEnglish
                  ? 'Explore these topics during a focused demonstration. The exact scope is defined around your organisation and confirmed in your proposal.'
                  : 'Explorez ces sujets lors d’une démonstration ciblée. Le périmètre précis se définit selon votre organisation et se confirme dans votre proposition.'}
              </p>
            </aside>
          </div>
      </section>
      <section className={styles.related} aria-labelledby="related-modules-title">
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>{isEnglish ? 'A broader perspective' : 'Une vision d’ensemble'}</p>
          <h2 id="related-modules-title">{isEnglish ? 'Other teams to connect.' : 'D’autres métiers à relier.'}</h2>
          <div className={styles.relatedGrid}>
            {others.map((item) => (
              <Link className={styles.relatedLink} key={item.slug} href={localizedHref(locale, `/modules/${item.slug}`)}>
                <h3>{item.name[locale]}<ArrowUpRight size={17} aria-hidden="true" /></h3>
                <p>{item[locale].description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
