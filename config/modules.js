/**
 * ORBIS ERP - Catalogue des 8 modules
 * Chaque module dispose d'un slug, d'une icône Lucide, d'une couleur d'accent
 * et d'une fiche descriptive bilingue FR/EN.
 */

export const MODULES = [
  {
    slug: 'rh',
    icon: 'Users',
    color: 'from-emerald-500 to-teal-600',
    name: { fr: 'Ressources Humaines', en: 'Human Resources' },
    short: {
      fr: 'Pilotez le cycle de vie complet de vos collaborateurs.',
      en: 'Manage the full employee lifecycle.',
    },
    long: {
      fr: 'Recrutement, contrats, paie, congés, évaluations, formation continue. Conformité au Code du travail guinéen et CNSS intégrée.',
      en: 'Recruiting, contracts, payroll, leave, reviews, training. Built-in Guinean labor law and CNSS compliance.',
    },
    features: [
      { fr: 'Gestion des contrats et avenants', en: 'Contracts & addendums' },
      { fr: 'Paie multi-conventions', en: 'Multi-agreement payroll' },
      { fr: 'Suivi des congés et absences', en: 'Leave & absence tracking' },
      { fr: 'Évaluations annuelles', en: 'Annual reviews' },
      { fr: 'Onboarding digital', en: 'Digital onboarding' },
      { fr: 'Déclarations CNSS automatisées', en: 'Automated CNSS filings' },
    ],
  },
  {
    slug: 'flotte',
    icon: 'Truck',
    color: 'from-orange-500 to-amber-600',
    name: { fr: 'Gestion de Flotte', en: 'Fleet Management' },
    short: {
      fr: 'Maîtrisez vos véhicules, conducteurs et carburant.',
      en: 'Master your vehicles, drivers and fuel.',
    },
    long: {
      fr: 'Suivi GPS, entretien préventif, gestion du carburant, affectations. Indispensable pour les flottes minières et logistiques.',
      en: 'GPS tracking, preventive maintenance, fuel control, assignments. Essential for mining and logistics fleets.',
    },
    features: [
      { fr: 'Géolocalisation temps réel', en: 'Real-time GPS' },
      { fr: 'Carnet d\'entretien numérique', en: 'Digital maintenance log' },
      { fr: 'Gestion du carburant et bons', en: 'Fuel & voucher management' },
      { fr: 'Alertes assurances et visites', en: 'Insurance & inspection alerts' },
      { fr: 'Coût total par véhicule', en: 'TCO per vehicle' },
      { fr: 'Affectations conducteurs', en: 'Driver assignments' },
    ],
  },
  {
    slug: 'finance',
    icon: 'Wallet',
    color: 'from-blue-500 to-indigo-600',
    name: { fr: 'Finance & Comptabilité', en: 'Finance & Accounting' },
    short: {
      fr: 'Comptabilité OHADA, trésorerie, budgets et reporting.',
      en: 'OHADA accounting, cash, budgets and reporting.',
    },
    long: {
      fr: 'Plan comptable SYSCOHADA Révisé, multi-devises, rapprochements bancaires automatisés et états de synthèse en un clic.',
      en: 'SYSCOHADA revised chart of accounts, multi-currency, automated bank reconciliation and one-click financial statements.',
    },
    features: [
      { fr: 'SYSCOHADA Révisé natif', en: 'Native SYSCOHADA revised' },
      { fr: 'Multi-devises GNF/EUR/USD/XOF', en: 'Multi-currency GNF/EUR/USD/XOF' },
      { fr: 'Rapprochement bancaire', en: 'Bank reconciliation' },
      { fr: 'TVA et déclarations fiscales', en: 'VAT & tax filings' },
      { fr: 'Budgets et prévisions', en: 'Budgets & forecasts' },
      { fr: 'Bilan & compte de résultat', en: 'Balance sheet & P&L' },
    ],
  },
  {
    slug: 'crm',
    icon: 'Heart',
    color: 'from-pink-500 to-rose-600',
    name: { fr: 'CRM & Relation Client', en: 'CRM & Customer Relations' },
    short: {
      fr: 'Centralisez vos prospects, clients et opportunités.',
      en: 'Centralize prospects, customers and opportunities.',
    },
    long: {
      fr: 'Pipeline visuel, segmentation, campagnes WhatsApp et email, scoring intelligent et historique unifié.',
      en: 'Visual pipeline, segmentation, WhatsApp & email campaigns, smart scoring and unified history.',
    },
    features: [
      { fr: 'Pipeline visuel Kanban', en: 'Visual Kanban pipeline' },
      { fr: 'Campagnes WhatsApp Business', en: 'WhatsApp Business campaigns' },
      { fr: 'Scoring de leads', en: 'Lead scoring' },
      { fr: 'Historique 360°', en: '360° history' },
      { fr: 'Devis et factures liés', en: 'Quotes & invoices linked' },
      { fr: 'Tableaux d\'activité commerciale', en: 'Sales activity dashboards' },
    ],
  },
  {
    slug: 'commercial',
    icon: 'TrendingUp',
    color: 'from-violet-500 to-purple-600',
    name: { fr: 'Commercial & Ventes', en: 'Sales & Commercial' },
    short: {
      fr: 'Devis, commandes, factures et encaissements en flux tendu.',
      en: 'Quotes, orders, invoices and payments in real time.',
    },
    long: {
      fr: 'Catalogue produits/services, conditions tarifaires personnalisées, signature électronique et paiements mobile money intégrés.',
      en: 'Product/service catalog, custom pricing, e-signature and embedded mobile money payments.',
    },
    features: [
      { fr: 'Devis et bons de commande', en: 'Quotes & purchase orders' },
      { fr: 'Catalogue multi-tarifs', en: 'Multi-price catalog' },
      { fr: 'Facturation électronique', en: 'E-invoicing' },
      { fr: 'Signature en ligne', en: 'Online signature' },
      { fr: 'Paiement Orange Money / Wave', en: 'Orange Money / Wave payment' },
      { fr: 'Relances automatiques', en: 'Automated reminders' },
    ],
  },
  {
    slug: 'projets',
    icon: 'KanbanSquare',
    color: 'from-cyan-500 to-sky-600',
    name: { fr: 'Gestion de Projets', en: 'Project Management' },
    short: {
      fr: 'Planifiez, exécutez et facturez vos projets.',
      en: 'Plan, execute and invoice your projects.',
    },
    long: {
      fr: 'Gantt interactif, feuilles de temps, suivi budgétaire, jalons et collaboration en temps réel sur le terrain.',
      en: 'Interactive Gantt, timesheets, budget tracking, milestones and on-site real-time collaboration.',
    },
    features: [
      { fr: 'Diagramme de Gantt', en: 'Gantt chart' },
      { fr: 'Feuilles de temps mobiles', en: 'Mobile timesheets' },
      { fr: 'Suivi budgétaire en direct', en: 'Live budget tracking' },
      { fr: 'Documents partagés', en: 'Shared documents' },
      { fr: 'Validation par jalons', en: 'Milestone validation' },
      { fr: 'Reporting client', en: 'Client reporting' },
    ],
  },
  {
    slug: 'qhsse',
    icon: 'ShieldCheck',
    color: 'from-red-500 to-rose-600',
    name: { fr: 'QHSSE', en: 'HSEQ' },
    short: {
      fr: 'Qualité, Hygiène, Sécurité, Santé et Environnement.',
      en: 'Quality, Health, Safety, Security & Environment.',
    },
    long: {
      fr: 'Indispensable aux secteurs miniers, BTP et industriels. Audits, incidents, EPI, formations et conformité ISO.',
      en: 'Essential for mining, construction and industrial sectors. Audits, incidents, PPE, training and ISO compliance.',
    },
    features: [
      { fr: 'Déclaration d\'incidents mobile', en: 'Mobile incident reporting' },
      { fr: 'Suivi des EPI', en: 'PPE tracking' },
      { fr: 'Audits internes planifiés', en: 'Planned internal audits' },
      { fr: 'Formations sécurité', en: 'Safety training' },
      { fr: 'Conformité ISO 9001/14001/45001', en: 'ISO 9001/14001/45001 compliance' },
      { fr: 'KPI HSE temps réel', en: 'Real-time HSE KPIs' },
    ],
  },
  {
    slug: 'achats-stock',
    icon: 'PackageCheck',
    color: 'from-yellow-500 to-orange-600',
    name: { fr: 'Achats & Stock', en: 'Purchasing & Inventory' },
    short: {
      fr: 'Maîtrisez vos approvisionnements et inventaires.',
      en: 'Master procurement and inventories.',
    },
    long: {
      fr: 'Demandes d\'achat, appels d\'offres, fournisseurs, multi-entrepôts, code-barres et inventaires tournants.',
      en: 'Purchase requests, RFQs, suppliers, multi-warehouse, barcodes and cycle counts.',
    },
    features: [
      { fr: 'Workflow de demande d\'achat', en: 'Purchase request workflow' },
      { fr: 'Comparatif fournisseurs', en: 'Supplier comparison' },
      { fr: 'Multi-entrepôts', en: 'Multi-warehouse' },
      { fr: 'Code-barres et QR', en: 'Barcodes & QR' },
      { fr: 'Seuils de réapprovisionnement', en: 'Reorder thresholds' },
      { fr: 'Inventaires tournants', en: 'Cycle counts' },
    ],
  },
];

export function getModuleBySlug(slug) {
  return MODULES.find((m) => m.slug === slug);
}
