'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MODULES } from '@/config/modules';
import { PRICING_PLANS } from '@/config/pricing';
import { localizedHref } from '@/lib/locales';
import styles from './PricingExperience.module.css';

const MODULE_ORDER = ['commercial', 'crm', 'rh', 'flotte', 'finance', 'achats-stock', 'projets', 'qhsse'];
const PRICING_MODULES = MODULE_ORDER.map((slug) => MODULES.find((module) => module.slug === slug)).filter(Boolean);

const COPY = {
  fr: {
    eyebrow: 'Des formules. Votre périmètre.',
    title: 'À la mesure',
    titleAccent: 'de votre activité.',
    introduction: 'Commencez par les métiers qui comptent pour vous. Définissons ensemble la formule et les conditions adaptées à votre organisation.',
    photoAlt: 'Deux professionnels consultent une tablette dans un entrepôt.',
    plansLabel: 'Les formules Orbis ERP',
    noticeTitle: 'Tarifs indicatifs.',
    notice: 'Montants mensuels en francs guinéens, hors taxes. Le périmètre et les conditions de votre offre sont confirmés par devis.',
    planKickers: ['Un premier périmètre', 'Plusieurs métiers réunis', 'Une vision d’ensemble'],
    planIntros: [
      'Pour organiser les premiers métiers de votre entreprise.',
      'Pour élargir le périmètre de votre gestion.',
      'Pour construire un projet à l’échelle de votre organisation.',
    ],
    period: 'GNF / mois HT',
    users: (count) => count < 0 ? 'Utilisateurs illimités*' : `Jusqu’à ${count} utilisateurs`,
    modules: (count) => count < 0 ? 'Ensemble des modules*' : `${count} modules au choix*`,
    planCta: 'Étudier cette formule',
    planNote: '* La sélection des modules, les capacités et les inclusions sont confirmées dans la proposition commerciale.',
    customTitle: 'Votre besoin sort du cadre ?',
    customDescription: 'Modules, utilisateurs, déploiement : partons de votre situation.',
    customCta: 'Parler de mon projet',
    costsEyebrow: 'La clarté, dès le départ',
    costsTitle: 'Un projet ERP.',
    costsAccent: 'Des postes bien distincts.',
    costsDescription: 'La proposition finale précise ce qui est inclus dans l’abonnement et ce qui fait l’objet d’un chiffrage séparé.',
    costs: [
      ['Abonnement', 'Formule, utilisateurs et périmètre des modules.'],
      ['Mise en place', 'Configuration et besoins de reprise des données à évaluer.'],
      ['Accompagnement', 'Prise en main et besoins de formation à définir.'],
      ['Besoins spécifiques', 'Interfaces, adaptations ou demandes particulières à étudier.'],
    ],
    configEyebrow: 'Construisons votre périmètre',
    configTitle: 'Quels métiers',
    configAccent: 'voulez-vous réunir ?',
    configDescription: 'Sélectionnez les modules qui vous intéressent pour préparer l’échange. Aucun prix n’est calculé automatiquement.',
    configLegend: 'Les modules qui vous intéressent',
    selection: (count) => count === 0 ? 'Aucun module sélectionné — définissons votre périmètre ensemble.' : `${count} module${count > 1 ? 's' : ''} sélectionné${count > 1 ? 's' : ''}`,
    configCta: 'Préparer ma demande',
    faqEyebrow: 'Avant de commencer',
    faqTitle: 'Les bonnes',
    faqAccent: 'questions.',
    faq: [
      ['Comment choisir mes modules ?', 'Identifiez les métiers concernés et les processus prioritaires. La combinaison retenue et son inclusion dans la formule sont confirmées dans la proposition commerciale.'],
      ['La mise en place et la formation sont-elles incluses ?', 'Votre devis distingue l’abonnement, la mise en place et l’accompagnement. Il précise les éléments inclus et ceux qui font l’objet d’un chiffrage séparé.'],
      ['Puis-je faire évoluer mon périmètre ?', 'Les possibilités d’ajout de modules ou d’utilisateurs et leur incidence tarifaire sont à étudier avec votre interlocuteur, puis à préciser dans votre proposition.'],
      ['Quels sont l’engagement et les niveaux de support ?', 'La durée, le renouvellement, la résiliation ainsi que les horaires et modalités de support sont précisés dans les conditions commerciales de votre offre.'],
    ],
  },
  en: {
    eyebrow: 'Your plans. Your scope.',
    title: 'The right fit',
    titleAccent: 'for your business.',
    introduction: 'Start with the work that matters to you. Together, we can define the plan and terms that suit your organization.',
    photoAlt: 'Two professionals review a tablet in a warehouse.',
    plansLabel: 'Orbis ERP plans',
    noticeTitle: 'Indicative pricing.',
    notice: 'Monthly prices in Guinean francs, excluding tax. The scope and terms of your offer are confirmed in your quote.',
    planKickers: ['A focused starting point', 'Bring your teams together', 'An organization-wide view'],
    planIntros: [
      'Organize the first core functions of your business.',
      'Extend the scope of your business management.',
      'Build a project across your organization.',
    ],
    period: 'GNF / month, excl. tax',
    users: (count) => count < 0 ? 'Unlimited users*' : `Up to ${count} users`,
    modules: (count) => count < 0 ? 'All modules*' : `${count} modules of your choice*`,
    planCta: 'Discuss this plan',
    planNote: '* Module selection, capacity and inclusions are confirmed in your commercial proposal.',
    customTitle: 'Need something different?',
    customDescription: 'Modules, users, deployment: let’s start with your situation.',
    customCta: 'Discuss my project',
    costsEyebrow: 'Clarity from the start',
    costsTitle: 'One ERP project.',
    costsAccent: 'Clearly defined costs.',
    costsDescription: 'Your final proposal specifies what is included in the subscription and what is quoted separately.',
    costs: [
      ['Subscription', 'Your plan, users and module scope.'],
      ['Setup', 'Configuration and data migration needs to assess.'],
      ['Onboarding', 'Getting started and defining your training needs.'],
      ['Specific needs', 'Integrations, adaptations or other requirements to discuss.'],
    ],
    configEyebrow: 'Let’s define your scope',
    configTitle: 'Which teams',
    configAccent: 'will you connect?',
    configDescription: 'Select the modules you are interested in to prepare our conversation. No price is calculated automatically.',
    configLegend: 'The modules you are interested in',
    selection: (count) => count === 0 ? 'No modules selected — let’s define your scope together.' : `${count} module${count > 1 ? 's' : ''} selected`,
    configCta: 'Prepare my request',
    faqEyebrow: 'Before you start',
    faqTitle: 'The right',
    faqAccent: 'questions.',
    faq: [
      ['How do I choose my modules?', 'Identify the teams involved and your priority processes. The selected combination and its inclusion in a plan are confirmed in your commercial proposal.'],
      ['Are setup and training included?', 'Your quote separates subscription, setup and onboarding. It specifies which items are included and which are quoted separately.'],
      ['Can I change my scope over time?', 'Discuss options for adding modules or users, and their pricing implications, with your contact. These are then specified in your proposal.'],
      ['What are the contract and support terms?', 'Contract duration, renewal, cancellation, support hours and support arrangements are specified in the commercial terms of your offer.'],
    ],
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function PricingExperience({ locale }) {
  const language = locale === 'en' ? 'en' : 'fr';
  const t = COPY[language];
  const [selectedModules, setSelectedModules] = useState(['commercial', 'rh', 'finance']);
  const selectedInOrder = PRICING_MODULES.filter((module) => selectedModules.includes(module.slug));
  const contactHref = (query) => `${localizedHref(language, '/contact')}?intent=devis&${query}`;
  const configurationHref = selectedInOrder.length
    ? contactHref(`modules=${selectedInOrder.map((module) => module.slug).join(',')}`)
    : contactHref('plan=custom');

  function toggleModule(slug) {
    setSelectedModules((selection) => selection.includes(slug)
      ? selection.filter((item) => item !== slug)
      : [...selection, slug]);
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="pricing-heading">
        <div className={`${styles.wrap} ${styles.heroInner}`}>
          <div>
            <p className={styles.eyebrow}>{t.eyebrow}</p>
            <h1 id="pricing-heading">{t.title}<br /><em>{t.titleAccent}</em></h1>
            <p className={styles.introduction}>{t.introduction}</p>
          </div>
          <div className={styles.photo}>
            <Image
              src="/images/orbis/hero-terrain-1200.webp"
              alt={t.photoAlt}
              fill
              priority
              sizes="(max-width: 700px) 1px, (max-width: 1100px) 30vw, 340px"
            />
          </div>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.pricing}`} aria-label={t.plansLabel}>
        <p className={styles.notice}><span aria-hidden="true">◌</span><span><strong>{t.noticeTitle}</strong> {t.notice}</span></p>
        <div className={styles.planGrid}>
          {PRICING_PLANS.map((plan, index) => (
            <article className={styles.plan} key={plan.id} aria-labelledby={`pricing-${plan.id}`}>
              <p className={styles.planKicker}>{t.planKickers[index]}</p>
              <h2 id={`pricing-${plan.id}`}>{plan.name}</h2>
              <p className={styles.planIntro}>{t.planIntros[index]}</p>
              <p className={styles.amount}>{new Intl.NumberFormat(language === 'fr' ? 'fr-FR' : 'en-GB').format(plan.basePriceGNF)}</p>
              <p className={styles.period}>{t.period}</p>
              <ul className={styles.planFacts}>
                <li>{t.users(plan.limits.users)}</li>
                <li>{t.modules(plan.limits.modules)}</li>
              </ul>
              <Link
                href={contactHref(`plan=${plan.id}`)}
                className={`${styles.button} ${plan.id === 'business' ? '' : styles.buttonOutline}`}
                aria-label={`${t.planCta} — ${plan.name}`}
              >
                {t.planCta}<Arrow />
              </Link>
            </article>
          ))}
        </div>
        <p className={styles.planNote}>{t.planNote}</p>
        <div className={styles.custom}>
          <div><h2>{t.customTitle}</h2><p>{t.customDescription}</p></div>
          <Link className={styles.textLink} href={contactHref('plan=custom')}>{t.customCta}<Arrow /></Link>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.costs}`} aria-labelledby="pricing-costs-heading">
        <div className={styles.costsHead}>
          <p className={styles.eyebrow}>{t.costsEyebrow}</p>
          <h2 id="pricing-costs-heading" className={styles.sectionTitle}>{t.costsTitle}<br /><em>{t.costsAccent}</em></h2>
          <p>{t.costsDescription}</p>
        </div>
        <div className={styles.costGrid}>
          {t.costs.map(([title, description], index) => (
            <div className={styles.costItem} key={title}>
              <span aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.configuration} aria-labelledby="pricing-configuration-heading">
        <div className={`${styles.wrap} ${styles.configurationInner}`}>
          <div className={styles.configurationCopy}>
            <p className={styles.eyebrow}>{t.configEyebrow}</p>
            <h2 id="pricing-configuration-heading" className={styles.sectionTitle}>{t.configTitle}<br /><em>{t.configAccent}</em></h2>
            <p id="pricing-configuration-description">{t.configDescription}</p>
          </div>
          <div>
            <fieldset className={styles.options} aria-describedby="pricing-configuration-description">
              <legend className={styles.visuallyHidden}>{t.configLegend}</legend>
              {PRICING_MODULES.map((module) => (
                <label key={module.slug}>
                  <input type="checkbox" value={module.slug} checked={selectedModules.includes(module.slug)} onChange={() => toggleModule(module.slug)} />
                  <span>{module.name[language]}</span>
                </label>
              ))}
            </fieldset>
            <p className={styles.selection} aria-live="polite" aria-atomic="true">{t.selection(selectedInOrder.length)}</p>
            <Link className={`${styles.button} ${styles.buttonLight} ${styles.configurationAction}`} href={configurationHref}>{t.configCta}<Arrow /></Link>
          </div>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.faq}`} aria-labelledby="pricing-faq-heading">
        <div>
          <p className={styles.eyebrow}>{t.faqEyebrow}</p>
          <h2 id="pricing-faq-heading" className={styles.sectionTitle}>{t.faqTitle}<br /><em>{t.faqAccent}</em></h2>
        </div>
        <div>
          {t.faq.map(([question, answer]) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}
        </div>
      </section>
    </div>
  );
}
