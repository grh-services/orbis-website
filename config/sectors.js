/**
 * ORBIS ERP - Secteurs cibles
 */

export const SECTORS = [
  {
    slug: 'mines-btp',
    icon: 'HardHat',
    color: 'from-amber-600 to-orange-700',
    name: { fr: 'Mines & BTP', en: 'Mining & Construction' },
    tagline: {
      fr: 'Le pilier de l\'économie guinéenne mérite un ERP à sa hauteur.',
      en: 'The pillar of Guinea\'s economy deserves a world-class ERP.',
    },
    description: {
      fr: 'Conçu pour les opérateurs miniers, sous-traitants et entreprises de BTP. Pilotage flotte, QHSSE, projets et conformité réglementaire.',
      en: 'Built for mining operators, subcontractors and construction firms. Fleet, HSEQ, projects and regulatory compliance.',
    },
    keyModules: ['flotte', 'qhsse', 'projets', 'achats-stock', 'rh'],
    benefits: [
      { fr: 'Conformité minière intégrée', en: 'Built-in mining compliance' },
      { fr: 'Suivi journalier de production', en: 'Daily production tracking' },
      { fr: 'Gestion des sous-traitants', en: 'Subcontractor management' },
      { fr: 'Reporting environnemental', en: 'Environmental reporting' },
    ],
  },
  {
    slug: 'transport',
    icon: 'Bus',
    color: 'from-sky-500 to-blue-700',
    name: { fr: 'Transport & Logistique', en: 'Transport & Logistics' },
    tagline: {
      fr: 'Chaque kilomètre compte. Chaque litre aussi.',
      en: 'Every kilometer counts. Every liter too.',
    },
    description: {
      fr: 'Pour les transporteurs routiers, sociétés de location, transitaires et logisticiens. Optimisation des tournées, carburant et facturation client.',
      en: 'For road transporters, rental companies, freight forwarders and logistics. Route optimization, fuel and customer billing.',
    },
    keyModules: ['flotte', 'commercial', 'finance', 'crm'],
    benefits: [
      { fr: 'Optimisation des tournées', en: 'Route optimization' },
      { fr: 'Facturation au km / au volume', en: 'Per-km / per-volume billing' },
      { fr: 'Suivi conducteurs', en: 'Driver monitoring' },
      { fr: 'Gestion documentaire douanière', en: 'Customs document management' },
    ],
  },
  {
    slug: 'services',
    icon: 'Briefcase',
    color: 'from-violet-500 to-fuchsia-700',
    name: { fr: 'Services & Professions Libérales', en: 'Services & Professional Firms' },
    tagline: {
      fr: 'Votre temps est précieux. Nous le valorisons.',
      en: 'Your time is precious. We value it.',
    },
    description: {
      fr: 'Cabinets de conseil, agences, structures d\'audit et professions libérales. Suivi du temps, facturation à la mission, CRM.',
      en: 'Consulting firms, agencies, audit and professional services. Time tracking, project billing, CRM.',
    },
    keyModules: ['projets', 'crm', 'commercial', 'finance', 'rh'],
    benefits: [
      { fr: 'Facturation à la mission', en: 'Project-based billing' },
      { fr: 'Suivi de la rentabilité', en: 'Profitability tracking' },
      { fr: 'Portail client dédié', en: 'Dedicated client portal' },
      { fr: 'Gestion documentaire', en: 'Document management' },
    ],
  },
  {
    slug: 'administration',
    icon: 'Building2',
    color: 'from-emerald-600 to-teal-700',
    name: { fr: 'Administration & Secteur Public', en: 'Administration & Public Sector' },
    tagline: {
      fr: 'La rigueur de l\'administration, la modernité du SaaS.',
      en: 'Administrative rigor, SaaS-grade modernity.',
    },
    description: {
      fr: 'Collectivités, agences publiques, ONG et institutions. Hébergement souverain, traçabilité et conformité aux marchés publics.',
      en: 'Local authorities, public agencies, NGOs and institutions. Sovereign hosting, traceability and public procurement compliance.',
    },
    keyModules: ['rh', 'finance', 'achats-stock', 'projets'],
    benefits: [
      { fr: 'Hébergement souverain Guinée', en: 'Sovereign hosting in Guinea' },
      { fr: 'Traçabilité totale des actes', en: 'Full action traceability' },
      { fr: 'Conformité marchés publics', en: 'Public procurement compliance' },
      { fr: 'Reporting bailleurs', en: 'Donor reporting' },
    ],
  },
];

export function getSectorBySlug(slug) {
  return SECTORS.find((s) => s.slug === slug);
}
