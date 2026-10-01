'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MODULES } from '@/config/modules';
import { SECTOR_EXPERIENCES } from '@/config/sectorExperience';
import { localizedHref } from '@/lib/locales';
import styles from './SectorsExperience.module.css';

const COPY = {
  fr: {
    eyebrow: 'La réalité de votre métier',
    title: 'Chaque métier.',
    titleAccent: 'Ses réalités.',
    description: 'Du terrain au bureau, partez de votre activité pour découvrir comment organiser vos équipes, vos moyens et vos opérations.',
    explore: 'Explorer mon secteur',
    heroAlt: 'Illustration d’un professionnel du transport devant un parc de véhicules.',
    heroCaption: 'Visuel d’illustration.',
    meta: ['Du métier aux modules', 'Des parcours à construire selon votre contexte'],
    sectionEyebrow: 'Votre activité, notre point de départ',
    sectionTitle: 'Une plateforme.',
    sectionAccent: 'Plusieurs façons d’avancer.',
    sectionDescription: 'Explorez des cas d’usage possibles. Le périmètre précis sera confirmé lors d’une démonstration.',
    sectorsLabel: 'Choisir un secteur',
    selectedSector: 'Secteur sélectionné :',
    caption: 'Visuel d’illustration · aucun client ni déploiement réel représenté.',
    moduleLabel: 'Modules à explorer pour ce besoin',
    modulesLink: 'Découvrir les modules',
    flowLabel: 'Préparer votre démonstration',
    flow: [
      ['Le contexte', 'Partir de votre terrain', 'Les équipes, les sites et les contraintes propres à votre activité.'],
      ['Le périmètre', 'Choisir les bons espaces', 'Les modules à examiner, en fonction des informations à réunir.'],
      ['La projection', 'Voir un parcours concret', 'Une présentation ciblée, puis un périmètre fonctionnel à confirmer.'],
    ],
    closingTitle: 'Votre activité ne rentre',
    closingAccent: 'pas dans une case ?',
    closingDescription: 'Commençons par ce qui compte pour votre organisation.',
    closingCta: 'Parler de mon projet',
  },
  en: {
    eyebrow: 'The reality of your work',
    title: 'Every industry.',
    titleAccent: 'Its own realities.',
    description: 'From the field to the office, start with your activity to explore ways to organize your teams, resources and operations.',
    explore: 'Explore my industry',
    heroAlt: 'Illustration of a transport professional in front of a vehicle fleet.',
    heroCaption: 'Illustrative image.',
    meta: ['From your industry to your modules', 'Explore a path shaped by your context'],
    sectionEyebrow: 'Your activity is our starting point',
    sectionTitle: 'One platform.',
    sectionAccent: 'Many ways forward.',
    sectionDescription: 'Explore possible use cases. The exact scope will be confirmed during a demonstration.',
    sectorsLabel: 'Choose an industry',
    selectedSector: 'Selected industry:',
    caption: 'Illustrative image · no actual client or deployment is depicted.',
    moduleLabel: 'Modules to explore for this need',
    modulesLink: 'Discover the modules',
    flowLabel: 'Prepare your demonstration',
    flow: [
      ['The context', 'Start with your day-to-day work', 'Your teams, sites and the constraints specific to your activity.'],
      ['The scope', 'Choose the right tools', 'Modules to explore, based on the information you need to bring together.'],
      ['The next step', 'See a practical workflow', 'A focused presentation, followed by a functional scope to confirm.'],
    ],
    closingTitle: 'Your business doesn’t',
    closingAccent: 'fit a category?',
    closingDescription: 'Let’s start with what matters to your organization.',
    closingCta: 'Discuss my project',
  },
};

export default function SectorsExperience({ locale }) {
  const language = locale === 'en' ? 'en' : 'fr';
  const t = COPY[language];
  const [activeSlug, setActiveSlug] = useState('transport');
  const sectorIndex = SECTOR_EXPERIENCES.findIndex((sector) => sector.slug === activeSlug);
  const sector = SECTOR_EXPERIENCES[sectorIndex];
  const sectorModules = sector.modules.map((slug) => MODULES.find((module) => module.slug === slug)).filter(Boolean);

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="sectors-heading">
        <div className={`${styles.wrap} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{t.eyebrow}</p>
            <h1 id="sectors-heading">{t.title}<br /><em>{t.titleAccent}</em></h1>
            <p className={styles.description}>{t.description}</p>
            <a className={`${styles.button} ${styles.buttonLight}`} href="#sectors-explorer">{t.explore}<span aria-hidden="true">↓</span></a>
          </div>
          <figure className={styles.heroFigure}>
            <div className={styles.heroPhoto}>
              <Image src="/images/orbis/hero-flotte-1200.webp" alt={t.heroAlt} fill priority sizes="(max-width: 700px) 74vw, (max-width: 1100px) 40vw, 540px" />
              <span className={styles.photoMark} aria-hidden="true" />
            </div>
            <figcaption>{t.heroCaption}</figcaption>
          </figure>
        </div>
        <div className={`${styles.wrap} ${styles.meta}`}><span>{t.meta[0]}</span><span>{t.meta[1]}</span></div>
      </section>

      <section id="sectors-explorer" className={`${styles.wrap} ${styles.explorer}`} aria-labelledby="sectors-explorer-heading">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>{t.sectionEyebrow}</p>
            <h2 id="sectors-explorer-heading" className={styles.sectionTitle}>{t.sectionTitle}<br /><em>{t.sectionAccent}</em></h2>
          </div>
          <p>{t.sectionDescription}</p>
        </div>
        <nav className={styles.sectorIndex} aria-label={t.sectorsLabel}>
          {SECTOR_EXPERIENCES.map((item) => (
            <button key={item.slug} type="button" aria-pressed={activeSlug === item.slug} aria-controls="sector-detail" onClick={() => setActiveSlug(item.slug)}>{item.name[language]}</button>
          ))}
        </nav>
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {t.selectedSector} {sector.name[language]}. {sector.title[language]}
        </p>
        <div className={styles.sectorLayout}>
          <figure>
            <div className={styles.sectorImage}>
              <Image key={sector.image} src={sector.image} alt={sector.imageAlt[language]} fill sizes="(max-width: 700px) 86vw, (max-width: 1100px) 39vw, 560px" />
            </div>
            <figcaption className={styles.caption}>{t.caption}</figcaption>
          </figure>
          <article id="sector-detail" className={styles.detail} aria-labelledby="sector-title">
            <p className={styles.sectorLabel}>{String(sectorIndex + 1).padStart(2, '0')} / {sector.name[language]}</p>
            <h3 id="sector-title">{sector.title[language]}</h3>
            <p className={styles.sectorDescription}>{sector.description[language]}</p>
            <ul className={styles.needs}>{sector.needs.map((need) => <li key={need[language]}>{need[language]}</li>)}</ul>
            <p className={styles.moduleLabel}>{t.moduleLabel}</p>
            <ul className={styles.moduleChips}>{sectorModules.map((module) => <li key={module.slug}>{module.name[language]}</li>)}</ul>
            <div className={styles.detailActions}>
              <Link className={styles.button} href={`${localizedHref(language, '/contact')}?intent=demo&sector=${sector.slug}`}>{sector.cta[language]}<span aria-hidden="true">↗</span></Link>
              <Link className={styles.textLink} href={localizedHref(language, '/modules')}>{t.modulesLink}<span aria-hidden="true">→</span></Link>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.workflow} aria-label={t.flowLabel}>
        <div className={`${styles.wrap} ${styles.workflowInner}`}>
          {t.flow.map(([eyebrow, title, description], index) => (
            <div key={title}><p className={styles.stepLabel}>0{index + 1} — {eyebrow}</p><h2>{title}</h2><p>{description}</p></div>
          ))}
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.closing}`} aria-labelledby="sectors-closing-heading">
        <div><h2 id="sectors-closing-heading" className={styles.sectionTitle}>{t.closingTitle}<br /><em>{t.closingAccent}</em></h2><p>{t.closingDescription}</p></div>
        <Link className={styles.button} href={`${localizedHref(language, '/contact')}?intent=devis&plan=custom`}>{t.closingCta}<span aria-hidden="true">↗</span></Link>
      </section>
    </div>
  );
}
