'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { EXPLORER_MODULES } from '@/config/moduleExperience';
import { localizedHref } from '@/lib/locales';
import styles from './ModulesExperience.module.css';

const COPY = {
  fr: {
    eyebrow: 'Une plateforme. Vos métiers.',
    title: 'Vos métiers.',
    titleAccent: 'Enfin connectés.',
    intro: 'Des équipes aux opérations, découvrez les modules Orbis et construisez votre propre point de vue sur l’entreprise.',
    explore: 'Explorer les modules',
    photoAlt: 'Une équipe réunie autour de documents financiers dans un bureau',
    photoTitle: 'Au plus près de votre activité.',
    photoSubtitle: 'Du terrain à la décision.',
    metaLabel: '01 / Explorer la plateforme',
    metaCount: '8 modules présentés · une vision d’ensemble',
    sectionEyebrow: 'Choisissez votre point d’entrée',
    sectionTitle: 'L’essentiel en vue.',
    sectionAccent: 'Chaque métier à sa place.',
    sectionIntro: 'Sélectionnez un module pour découvrir son rôle et les informations qu’il organise.',
    chooseModule: 'Choisir un module',
    selectedModule: 'Module sélectionné :',
    illustrationLabel: 'Illustration de principe du module avec des données de démonstration',
    illustrationType: 'Vue de principe',
    illustrationCaption: 'Aperçu illustratif · données de démonstration, et non capture de l’application.',
    record: 'Dossier',
    status: 'État',
    moduleDemo: 'Voir ce module en démo',
    plans: 'Voir les formules',
    journeyEyebrow: 'Votre parcours de découverte',
    journeyTitle: 'Partir du métier.',
    journeyAccent: 'Voir plus loin.',
    steps: [
      ['01 — COMPRENDRE', 'Votre quotidien', 'Identifier les équipes, les processus et les informations à réunir.'],
      ['02 — EXPLORER', 'Les bons modules', 'Parcourir les espaces qui correspondent à votre organisation.'],
      ['03 — SE PROJETER', 'Une démo ciblée', 'Préparer une présentation centrée sur vos besoins réels.'],
    ],
    closingTitle: 'Voyons Orbis',
    closingAccent: 'dans votre contexte.',
    closingIntro: 'Une discussion concrète, à partir de votre activité.',
    closingCta: 'Préparer ma démonstration',
  },
  en: {
    eyebrow: 'One platform. Your business.',
    title: 'Your teams.',
    titleAccent: 'Finally connected.',
    intro: 'From people to operations, explore the Orbis modules and build your own view of the business.',
    explore: 'Explore the modules',
    photoAlt: 'A team reviewing financial documents together in an office',
    photoTitle: 'Closer to the way you work.',
    photoSubtitle: 'From the field to your next decision.',
    metaLabel: '01 / Explore the platform',
    metaCount: '8 modules to explore · one shared perspective',
    sectionEyebrow: 'Choose your starting point',
    sectionTitle: 'The essentials in view.',
    sectionAccent: 'A place for every team.',
    sectionIntro: 'Select a module to explore its role and the information it brings together.',
    chooseModule: 'Choose a module',
    selectedModule: 'Selected module:',
    illustrationLabel: 'Conceptual module illustration with demonstration data',
    illustrationType: 'Conceptual view',
    illustrationCaption: 'Illustrative preview · demonstration data, not an application screenshot.',
    record: 'Record',
    status: 'Status',
    moduleDemo: 'See this module in a demo',
    plans: 'Explore the plans',
    journeyEyebrow: 'Your discovery journey',
    journeyTitle: 'Start with your work.',
    journeyAccent: 'See what comes next.',
    steps: [
      ['01 — UNDERSTAND', 'Your day-to-day work', 'Identify the teams, processes and information to bring together.'],
      ['02 — EXPLORE', 'The right modules', 'Explore the workspaces that fit your organisation.'],
      ['03 — LOOK AHEAD', 'A focused demo', 'Prepare a presentation built around your actual needs.'],
    ],
    closingTitle: 'See Orbis',
    closingAccent: 'in your context.',
    closingIntro: 'A practical conversation, starting with your business.',
    closingCta: 'Prepare my demonstration',
  },
};

export default function ModulesExperience({ locale }) {
  const language = locale === 'en' ? 'en' : 'fr';
  const copy = COPY[language];
  const [activeSlug, setActiveSlug] = useState('commercial');
  const activeIndex = EXPLORER_MODULES.findIndex((module) => module.slug === activeSlug);
  const activeModule = EXPLORER_MODULES[activeIndex];
  const presentation = activeModule[language];
  const demoHref = localizedHref(language, `/contact?intent=demo&module=${activeModule.slug}`);

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="modules-title">
        <div className={`${styles.wrap} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1 id="modules-title" className={styles.title}>
              {copy.title}<br /><em>{copy.titleAccent}</em>
            </h1>
            <p className={styles.heroDescription}>{copy.intro}</p>
            <a className={`${styles.button} ${styles.lightButton}`} href="#module-explorer">
              {copy.explore}<ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
          <figure className={styles.heroPhoto}>
            <div className={styles.photoWindow}>
              <Image
                src="/images/orbis/hero-finance-1200.webp"
                alt={copy.photoAlt}
                fill
                priority
                sizes="(max-width: 700px) 85vw, (max-width: 1100px) 43vw, 530px"
              />
            </div>
            <span className={styles.photoNode} aria-hidden="true" />
            <figcaption className={styles.photoTag}>
              <strong>{copy.photoTitle}</strong>
              {copy.photoSubtitle}
            </figcaption>
          </figure>
        </div>
        <div className={`${styles.wrap} ${styles.heroMeta}`}>
          <span>{copy.metaLabel}</span><span>{copy.metaCount}</span>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.explorer}`} id="module-explorer" aria-labelledby="explorer-title">
        <div className={styles.sectionTop}>
          <div>
            <p className={styles.eyebrow}>{copy.sectionEyebrow}</p>
            <h2 id="explorer-title" className={styles.sectionTitle}>
              {copy.sectionTitle}<br /><em>{copy.sectionAccent}</em>
            </h2>
          </div>
          <p className={styles.sectionIntro}>{copy.sectionIntro}</p>
        </div>
        <div className={styles.moduleGrid}>
          <nav className={styles.moduleList} aria-label={copy.chooseModule}>
            {EXPLORER_MODULES.map((module, index) => (
              <button
                key={module.slug}
                type="button"
                className={styles.moduleButton}
                aria-pressed={activeSlug === module.slug}
                aria-controls="module-detail"
                onClick={() => setActiveSlug(module.slug)}
              >
                <span className={styles.moduleNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span>{module.name[language]}</span>
                <ArrowUpRight size={15} className={styles.moduleArrow} aria-hidden="true" />
              </button>
            ))}
          </nav>
          <p className={styles.visuallyHidden} role="status" aria-live="polite" aria-atomic="true">
            {copy.selectedModule} {activeModule.name[language]}. {presentation.title}
          </p>
          <article className={styles.modulePanel} id="module-detail" aria-labelledby="module-heading">
            <p className={styles.moduleLabel}>{String(activeIndex + 1).padStart(2, '0')} / {activeModule.name[language]}</p>
            <h3 id="module-heading" className={styles.moduleTitle}>{presentation.title}</h3>
            <p className={styles.moduleDescription}>{presentation.description}</p>
            <figure className={styles.illustration}>
              <div className={styles.preview} aria-label={copy.illustrationLabel}>
                <div className={styles.previewHead}>
                  <span>{presentation.space}</span><span>{copy.illustrationType}</span>
                </div>
                <div className={styles.previewCategories} aria-hidden="true">
                  {presentation.features.map((feature) => <span key={feature}>{feature}</span>)}
                </div>
                <table className={styles.previewTable}>
                  <caption className={styles.visuallyHidden}>{copy.illustrationLabel}</caption>
                  <thead className={styles.visuallyHidden}>
                    <tr><th scope="col">{copy.record}</th><th scope="col">{copy.status}</th></tr>
                  </thead>
                  <tbody>
                    {presentation.rows.map(([title, detail, status]) => (
                      <tr key={title}>
                        <td><strong>{title}</strong><small>{detail}</small></td>
                        <td><span className={styles.status}>{status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <figcaption className={styles.illustrationCaption}>{copy.illustrationCaption}</figcaption>
            </figure>
            <ul className={styles.features}>
              {presentation.features.map((feature) => (
                <li key={feature}><Check size={15} aria-hidden="true" />{feature}</li>
              ))}
            </ul>
            <div className={styles.panelBottom}>
              <Link className={styles.button} href={demoHref}>
                {copy.moduleDemo}<ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <Link className={styles.textLink} href={localizedHref(language, '/tarifs')}>
                {copy.plans}<ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.workflow} aria-labelledby="discovery-title">
        <div className={`${styles.wrap} ${styles.workflowInner}`}>
          <div>
            <p className={styles.eyebrow}>{copy.journeyEyebrow}</p>
            <h2 id="discovery-title" className={styles.sectionTitle}>
              {copy.journeyTitle}<br /><em>{copy.journeyAccent}</em>
            </h2>
          </div>
          <ol className={styles.steps}>
            {copy.steps.map(([label, title, description]) => (
              <li className={styles.step} key={label}>
                <span>{label}</span><h3>{title}</h3><p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.closing}`} aria-labelledby="modules-closing-title">
        <div>
          <h2 id="modules-closing-title" className={styles.sectionTitle}>
            {copy.closingTitle}<br /><em>{copy.closingAccent}</em>
          </h2>
          <p>{copy.closingIntro}</p>
        </div>
        <Link className={styles.button} href={demoHref}>
          {copy.closingCta}<ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
