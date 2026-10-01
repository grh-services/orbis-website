import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { localizedHref } from '@/lib/locales';
import styles from './AboutExperience.module.css';

const COPY = {
  fr: {
    eyebrow: 'À propos d’Orbis ERP',
    title: 'Pensé pour le réel.',
    titleAccent: 'Conçu pour relier.',
    intro: 'Une plateforme développée par GRH-Services en Guinée, pour réunir les informations des métiers et donner une lecture plus claire de l’activité.',
    imageAlt: 'Illustration de trois professionnels collaborant autour d’un ordinateur dans un bureau',
    imageCaption: 'Visuel d’illustration généré pour Orbis — ne représente pas l’équipe réelle d’Orbis.',
    storyEyebrow: 'Notre conviction',
    storyTitle: 'Le logiciel doit rapprocher',
    storyAccent: 'les métiers, pas les éloigner.',
    story: [
      'Une entreprise se vit sur le terrain autant que dans ses bureaux. Les collaborateurs, les véhicules, les achats et les projets appartiennent à la même organisation.',
      'La proposition d’Orbis est de réunir ces informations dans un environnement commun, pour que chacun retrouve son espace de travail sans perdre la vue d’ensemble.',
    ],
    principlesLabel: 'Les principes d’Orbis',
    principles: [
      ['01 / L’USAGE', 'Partir du quotidien.', 'Présenter les fonctionnalités à travers des besoins métier, des documents et des opérations concrètes.'],
      ['02 / LE LIEN', 'Voir les connexions.', 'Mettre en relation les informations utiles au suivi des équipes et des activités.'],
      ['03 / LA LISIBILITÉ', 'Garder une vue claire.', 'Aller du détail d’une opération à une lecture plus large du fonctionnement de l’entreprise.'],
    ],
    originEyebrow: 'Un ancrage guinéen',
    originTitle: 'Depuis la Guinée.',
    originAccent: 'Au service des métiers.',
    originText: 'Les réalités de l’entreprise guinéenne donnent son contexte à Orbis. Le point de départ reste votre organisation : ses équipes, ses sites, ses moyens et ses priorités.',
    globeAlt: 'Globe d’illustration mettant la Guinée en lumière et évoquant les liens entre les métiers',
    explore: 'Explorer les usages',
    publisherEyebrow: 'L’éditeur',
    publisherText: 'Pour découvrir la plateforme ou échanger sur votre projet, contactez l’équipe à Conakry.',
    publisherCta: 'Échanger avec nous',
    closingTitle: 'La meilleure façon',
    closingAccent: 'de comprendre Orbis ?',
    closingText: 'Le découvrir à travers votre activité.',
    closingCta: 'Préparer une démonstration',
  },
  en: {
    eyebrow: 'About Orbis ERP',
    title: 'Built for real work.',
    titleAccent: 'Designed to connect.',
    intro: 'A platform developed by GRH-Services in Guinea, bringing business information together for a clearer view of daily operations.',
    imageAlt: 'Illustration of three professionals collaborating around a computer in an office',
    imageCaption: 'Illustrative visual generated for Orbis — it does not depict the actual Orbis team.',
    storyEyebrow: 'Our conviction',
    storyTitle: 'Software should bring',
    storyAccent: 'teams closer together.',
    story: [
      'A business comes to life in the field as much as in the office. Its people, vehicles, purchases and projects all belong to the same organisation.',
      'Orbis aims to bring this information into a shared environment, giving everyone a workspace of their own without losing sight of the whole business.',
    ],
    principlesLabel: 'The Orbis principles',
    principles: [
      ['01 / EVERYDAY USE', 'Start with daily work.', 'Present features through business needs, documents and practical operations.'],
      ['02 / CONNECTION', 'See the connections.', 'Connect the information needed to follow teams and business activities.'],
      ['03 / CLARITY', 'Keep a clear view.', 'Move from the detail of a single operation to a broader view of how the business works.'],
    ],
    originEyebrow: 'Rooted in Guinea',
    originTitle: 'From Guinea.',
    originAccent: 'For the work you do.',
    originText: 'The realities of Guinean businesses give Orbis its context. Your organisation remains the starting point: its teams, locations, resources and priorities.',
    globeAlt: 'Illustrative globe highlighting Guinea and evoking connections between business activities',
    explore: 'Explore the use cases',
    publisherEyebrow: 'The publisher',
    publisherText: 'To explore the platform or discuss your project, contact the team in Conakry.',
    publisherCta: 'Talk with us',
    closingTitle: 'The best way',
    closingAccent: 'to understand Orbis?',
    closingText: 'Explore it through the work you do.',
    closingCta: 'Prepare a demonstration',
  },
};

export default function AboutExperience({ locale }) {
  const language = locale === 'en' ? 'en' : 'fr';
  const copy = COPY[language];
  const demoHref = localizedHref(language, '/contact?intent=demo');

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={`${styles.wrap} ${styles.heroInner}`}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <div className={styles.heroHead}>
            <h1 id="about-title" className={styles.title}>
              {copy.title}<br /><em>{copy.titleAccent}</em>
            </h1>
            <p className={styles.intro}>{copy.intro}</p>
          </div>
          <figure className={styles.teamFigure}>
            <div className={styles.teamImage}>
              <Image
                src="/images/orbis/hero-rh-1200.webp"
                alt={copy.imageAlt}
                fill
                priority
                sizes="(max-width: 700px) 90vw, (max-width: 1480px) 88vw, 1300px"
              />
            </div>
            <figcaption className={styles.imageCaption}>{copy.imageCaption}</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.story}`} aria-labelledby="about-conviction">
        <p className={styles.eyebrow}>{copy.storyEyebrow}</p>
        <div>
          <h2 className={styles.sectionTitle} id="about-conviction">
            {copy.storyTitle}<br /><em>{copy.storyAccent}</em>
          </h2>
          <div className={styles.storyText}>
            {copy.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.principles}`} aria-label={copy.principlesLabel}>
        {copy.principles.map(([label, title, description]) => (
          <article className={styles.principle} key={label}>
            <p>{label}</p><h2>{title}</h2><p>{description}</p>
          </article>
        ))}
      </section>

      <section className={styles.origin} aria-labelledby="about-origin">
        <div className={`${styles.wrap} ${styles.originInner}`}>
          <div className={styles.globe}>
            <Image
              src="/images/orbis/globe-guinee-1000.webp"
              alt={copy.globeAlt}
              width={1000}
              height={667}
              sizes="(max-width: 700px) 95vw, (max-width: 1480px) 48vw, 650px"
            />
          </div>
          <div className={styles.originCopy}>
            <p className={styles.eyebrow}>{copy.originEyebrow}</p>
            <h2 className={styles.sectionTitle} id="about-origin">
              {copy.originTitle}<br /><em>{copy.originAccent}</em>
            </h2>
            <p className={styles.originText}>{copy.originText}</p>
            <Link className={`${styles.button} ${styles.lightButton}`} href={localizedHref(language, '/secteurs')}>
              {copy.explore}<ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.publisher}`} aria-labelledby="about-publisher">
        <div>
          <p className={styles.eyebrow}>{copy.publisherEyebrow}</p>
          <h2 id="about-publisher">Orbis ERP · GRH-Services</h2>
        </div>
        <p className={styles.publisherText}>{copy.publisherText}</p>
        <Link className={styles.textLink} href={demoHref}>
          {copy.publisherCta}<ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </section>

      <section className={`${styles.wrap} ${styles.closing}`} aria-labelledby="about-closing">
        <div>
          <h2 className={styles.sectionTitle} id="about-closing">
            {copy.closingTitle}<br /><em>{copy.closingAccent}</em>
          </h2>
          <p>{copy.closingText}</p>
        </div>
        <Link className={styles.button} href={demoHref}>
          {copy.closingCta}<ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
