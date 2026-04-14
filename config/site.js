/**
 * ORBIS ERP - Configuration globale du site
 */

export const SITE = {
  name: 'Orbis ERP',
  legalName: 'GRH-Services',
  tagline: {
    fr: 'Une vision complète, un contrôle total.',
    en: 'A complete vision, total control.',
  },
  description: {
    fr: 'Orbis ERP est la plateforme SaaS de gestion d\'entreprise tout-en-un développée par GRH-Services à Conakry. RH, Finance, Flotte, CRM, Projets, QHSSE, Achats : 8 modules, une seule plateforme.',
    en: 'Orbis ERP is the all-in-one SaaS business management platform built by GRH-Services in Conakry. HR, Finance, Fleet, CRM, Projects, HSEQ, Purchasing: 8 modules, one platform.',
  },
  url: 'https://orbis-erp.com',
  email: 'contact@grh-services.com',
  phone: '+224 622 00 00 00',
  whatsapp: '224622000000',
  address: {
    fr: 'GRH-Services, Quartier Kipé, Conakry, République de Guinée',
    en: 'GRH-Services, Kipé District, Conakry, Republic of Guinea',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/grh-services',
    facebook: 'https://www.facebook.com/grhservices',
    twitter: 'https://twitter.com/orbis_erp',
    youtube: 'https://www.youtube.com/@orbiserp',
  },
  trial: {
    days: 14,
  },
};

export const NAV_LINKS = [
  { href: '/', label: { fr: 'Accueil', en: 'Home' } },
  { href: '/modules', label: { fr: 'Modules', en: 'Modules' } },
  { href: '/secteurs', label: { fr: 'Secteurs', en: 'Industries' } },
  { href: '/tarifs', label: { fr: 'Tarifs', en: 'Pricing' } },
  { href: '/a-propos', label: { fr: 'À propos', en: 'About' } },
  { href: '/contact', label: { fr: 'Contact', en: 'Contact' } },
];
