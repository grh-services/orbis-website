'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Eye, LayoutGrid, ListChecks, Network } from 'lucide-react';
import { MODULES } from '@/config/modules';
import { localizedHref } from '@/lib/locales';
import styles from './PlatformShowcase.module.css';

const MODULE_ORDER = ['commercial', 'rh', 'flotte', 'finance', 'projets', 'qhsse', 'achats-stock', 'crm'];
const ORDERED_MODULES = MODULE_ORDER.map((slug) => MODULES.find((module) => module.slug === slug)).filter(Boolean);

const COPY = {
  fr: {
    eyebrow: 'UN ENVIRONNEMENT. VOS MÉTIERS.',
    title: 'L’essentiel en vue.',
    titleAccent: 'Chaque métier à sa place.',
    introduction: 'Passez d’un métier à l’autre, sans perdre le fil. Découvrez les espaces qui réunissent votre activité.',
    select: 'Explorer les modules Orbis ERP',
    illustration: 'Interface illustrative',
    workspace: 'Espace de travail',
    example: 'Exemple de suivi',
    columns: ['Dossier', 'Étape', 'Prochaine action'],
    previewNote: 'Données fictives de démonstration. La présentation peut varier selon la configuration.',
    discover: 'Explorer ce module',
    benefits: [
      ['Voir l’essentiel', 'Retrouvez les informations utiles à votre activité dans un espace lisible.'],
      ['Relier les équipes', 'Gardez un point de repère commun entre les métiers et les sites.'],
      ['Suivre les actions', 'Repérez la prochaine étape et avancez dossier par dossier.'],
    ],
    modules: {
      commercial: {
        description: 'Du devis à la facturation, gardez le fil de votre activité commerciale.',
        chips: ['Devis', 'Commandes', 'Factures'],
        rows: [['Dossier commercial A', 'Devis', 'Préparer la proposition'], ['Dossier commercial B', 'Commande', 'Confirmer les détails'], ['Dossier commercial C', 'Facturation', 'Vérifier les pièces']],
      },
      rh: {
        description: 'Rassemblez les dossiers des collaborateurs et les étapes de leur parcours.',
        chips: ['Collaborateurs', 'Congés', 'Formation'],
        rows: [['Dossier collaborateur A', 'Intégration', 'Compléter le dossier'], ['Dossier collaborateur B', 'Congés', 'Examiner la demande'], ['Dossier collaborateur C', 'Formation', 'Planifier la session']],
      },
      flotte: {
        description: 'Organisez le suivi des véhicules, des affectations et de l’entretien.',
        chips: ['Véhicules', 'Affectations', 'Entretien'],
        rows: [['Véhicule A', 'Affectation', 'Préparer la mission'], ['Véhicule B', 'Entretien', 'Planifier l’intervention'], ['Véhicule C', 'Documents', 'Vérifier le dossier']],
      },
      finance: {
        description: 'Retrouvez vos pièces, vos budgets et vos éléments de suivi financier.',
        chips: ['Comptabilité', 'Trésorerie', 'Budgets'],
        rows: [['Dossier comptable A', 'Pièces', 'Rapprocher les justificatifs'], ['Dossier comptable B', 'Budget', 'Revoir les prévisions'], ['Dossier comptable C', 'Reporting', 'Préparer la synthèse']],
      },
      projets: {
        description: 'Structurez les tâches, les jalons et les documents de vos projets.',
        chips: ['Planning', 'Tâches', 'Documents'],
        rows: [['Projet A', 'Cadrage', 'Définir les étapes'], ['Projet B', 'Réalisation', 'Suivre les tâches'], ['Projet C', 'Revue', 'Rassembler les documents']],
      },
      qhsse: {
        description: 'Centralisez les observations terrain et le suivi des actions QHSSE.',
        chips: ['Observations', 'Audits', 'Actions'],
        rows: [['Observation A', 'Analyse', 'Préciser le contexte'], ['Audit B', 'Planification', 'Préparer la visite'], ['Action C', 'Suivi', 'Vérifier l’avancement']],
      },
      'achats-stock': {
        description: 'Reliez vos demandes d’achat, vos approvisionnements et vos inventaires.',
        chips: ['Demandes', 'Fournisseurs', 'Inventaires'],
        rows: [['Demande A', 'Achats', 'Préciser le besoin'], ['Commande B', 'Réception', 'Vérifier les articles'], ['Inventaire C', 'Contrôle', 'Confirmer les quantités']],
      },
      crm: {
        description: 'Conservez le contexte de vos relations clients et de vos opportunités.',
        chips: ['Contacts', 'Opportunités', 'Échanges'],
        rows: [['Opportunité A', 'Prise de contact', 'Préparer l’échange'], ['Opportunité B', 'Qualification', 'Préciser les besoins'], ['Opportunité C', 'Suivi', 'Planifier le rendez-vous']],
      },
    },
  },
  en: {
    eyebrow: 'ONE WORKSPACE. YOUR BUSINESS.',
    title: 'The essentials in view.',
    titleAccent: 'Every function in its place.',
    introduction: 'Move between business functions without losing context. Explore the workspaces that bring your activity together.',
    select: 'Explore Orbis ERP modules',
    illustration: 'Illustrative interface',
    workspace: 'Workspace',
    example: 'Example workflow',
    columns: ['Record', 'Stage', 'Next action'],
    previewNote: 'Fictional demonstration data. The interface may vary depending on your configuration.',
    discover: 'Explore this module',
    benefits: [
      ['See what matters', 'Find the information you need in a clear, organized workspace.'],
      ['Connect your teams', 'Keep a shared point of reference across functions and locations.'],
      ['Follow each action', 'Identify the next step and move forward, one record at a time.'],
    ],
    modules: {
      commercial: {
        description: 'Keep track of your sales activity, from the initial quote to invoicing.',
        chips: ['Quotes', 'Orders', 'Invoices'],
        rows: [['Sales record A', 'Quote', 'Prepare the proposal'], ['Sales record B', 'Order', 'Confirm the details'], ['Sales record C', 'Invoicing', 'Review the documents']],
      },
      rh: {
        description: 'Bring employee records and each stage of their journey together.',
        chips: ['Employees', 'Leave', 'Training'],
        rows: [['Employee record A', 'Onboarding', 'Complete the record'], ['Employee record B', 'Leave', 'Review the request'], ['Employee record C', 'Training', 'Schedule the session']],
      },
      flotte: {
        description: 'Organize vehicle records, assignments and maintenance follow-up.',
        chips: ['Vehicles', 'Assignments', 'Maintenance'],
        rows: [['Vehicle A', 'Assignment', 'Prepare the journey'], ['Vehicle B', 'Maintenance', 'Schedule the service'], ['Vehicle C', 'Documents', 'Review the record']],
      },
      finance: {
        description: 'Keep supporting documents, budgets and financial follow-up in view.',
        chips: ['Accounting', 'Cash management', 'Budgets'],
        rows: [['Accounting record A', 'Documents', 'Match supporting records'], ['Accounting record B', 'Budget', 'Review the forecast'], ['Accounting record C', 'Reporting', 'Prepare the summary']],
      },
      projets: {
        description: 'Structure your project tasks, milestones and shared documents.',
        chips: ['Planning', 'Tasks', 'Documents'],
        rows: [['Project A', 'Scoping', 'Define the milestones'], ['Project B', 'Delivery', 'Follow the tasks'], ['Project C', 'Review', 'Gather the documents']],
      },
      qhsse: {
        description: 'Keep field observations and HSEQ action follow-up in one place.',
        chips: ['Observations', 'Audits', 'Actions'],
        rows: [['Observation A', 'Analysis', 'Clarify the context'], ['Audit B', 'Planning', 'Prepare the visit'], ['Action C', 'Follow-up', 'Review progress']],
      },
      'achats-stock': {
        description: 'Connect purchase requests, procurement and inventory records.',
        chips: ['Requests', 'Suppliers', 'Inventory'],
        rows: [['Request A', 'Purchasing', 'Specify the requirement'], ['Order B', 'Receipt', 'Check the items'], ['Inventory C', 'Review', 'Confirm quantities']],
      },
      crm: {
        description: 'Keep the context of your customer relationships and opportunities.',
        chips: ['Contacts', 'Opportunities', 'Interactions'],
        rows: [['Opportunity A', 'First contact', 'Prepare the conversation'], ['Opportunity B', 'Qualification', 'Clarify the needs'], ['Opportunity C', 'Follow-up', 'Schedule the meeting']],
      },
    },
  },
};

const BENEFIT_ICONS = [Eye, Network, ListChecks];

export default function PlatformShowcase({ locale = 'fr' }) {
  const language = locale === 'en' ? 'en' : 'fr';
  const copy = COPY[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const [compact, setCompact] = useState(false);
  const tabRefs = useRef([]);
  const id = useId();

  useEffect(() => {
    const media = window.matchMedia('(max-width: 760px)');
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  function handleTabKey(event, index) {
    let nextIndex;
    if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = ORDERED_MODULES.length - 1;
    else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (index + 1) % ORDERED_MODULES.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') nextIndex = (index - 1 + ORDERED_MODULES.length) % ORDERED_MODULES.length;
    else return;
    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus({ preventScroll: true });
    tabRefs.current[nextIndex]?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
  }

  return (
    <section className={styles.section} id="plateforme" aria-labelledby={`${id}-heading`}>
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <div>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h2 className={styles.heading} id={`${id}-heading`}>
              {copy.title}<br /><span>{copy.titleAccent}</span>
            </h2>
          </div>
          <p className={styles.introduction}>{copy.introduction}</p>
        </div>

        <div className={styles.explorer}>
          <div className={styles.tabs} role="tablist" aria-label={copy.select} aria-orientation={compact ? 'horizontal' : 'vertical'}>
            {ORDERED_MODULES.map((module, index) => (
              <button
                key={module.slug}
                type="button"
                role="tab"
                id={`${id}-tab-${module.slug}`}
                aria-controls={`${id}-panel-${module.slug}`}
                aria-selected={activeIndex === index}
                tabIndex={activeIndex === index ? 0 : -1}
                ref={(element) => { tabRefs.current[index] = element; }}
                className={`${styles.tab} ${activeIndex === index ? styles.tabActive : ''}`}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleTabKey(event, index)}
              >
                <span className={styles.tabNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span>{module.name[language]}</span>
                <ArrowRight size={16} strokeWidth={1.6} className={styles.tabArrow} aria-hidden="true" />
              </button>
            ))}
          </div>

          <div className={styles.panels}>
            {ORDERED_MODULES.map((module, index) => {
              const detail = copy.modules[module.slug];
              return (
                <div
                  key={module.slug}
                  role="tabpanel"
                  id={`${id}-panel-${module.slug}`}
                  aria-labelledby={`${id}-tab-${module.slug}`}
                  hidden={activeIndex !== index}
                  tabIndex={0}
                  className={styles.panel}
                >
                  <div className={styles.preview}>
                    <div className={styles.previewBar}>
                      <span className={styles.previewBrand}>Orbis <span>ERP</span></span>
                      <span className={styles.illustration}>{copy.illustration}</span>
                    </div>
                    <div className={styles.previewMain}>
                      <div className={styles.breadcrumb}><LayoutGrid size={13} aria-hidden="true" />{copy.workspace}<span aria-hidden="true">/</span>{module.name[language]}</div>
                      <div className={styles.previewHeading}>
                        <h3>{module.name[language]}</h3>
                        <span className={styles.previewIndex} aria-hidden="true">{String(index + 1).padStart(2, '0')} / 08</span>
                      </div>
                      <p className={styles.description}>{detail.description}</p>
                      <ul className={styles.chips} aria-label={module.name[language]}>
                        {detail.chips.map((chip) => <li key={chip}><Check size={12} aria-hidden="true" />{chip}</li>)}
                      </ul>
                      <div className={styles.tableTitle}>{copy.example}<span aria-hidden="true">•••</span></div>
                      <div className={styles.tableScroll} role="region" aria-label={`${copy.example} — ${module.name[language]}`} tabIndex={0}>
                        <table className={styles.table}>
                          <thead><tr>{copy.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr></thead>
                          <tbody>
                            {detail.rows.map(([record, stage, action]) => (
                              <tr key={record}><th scope="row"><span className={styles.rowDot} aria-hidden="true" />{record}</th><td><span className={styles.stage}>{stage}</span></td><td>{action}</td></tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className={styles.previewBottom}><span className={styles.bottomDot} aria-hidden="true" />{copy.previewNote}</div>
                  </div>
                  <Link className={styles.moduleLink} href={localizedHref(language, `/modules/${module.slug}`)}>
                    {copy.discover}<span className={styles.srOnly}> : {module.name[language]}</span><ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.benefits}>
          {copy.benefits.map(([title, description], index) => {
            const Icon = BENEFIT_ICONS[index];
            return <div className={styles.benefit} key={title}><Icon size={25} strokeWidth={1.45} aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></div>;
          })}
        </div>
      </div>
    </section>
  );
}
