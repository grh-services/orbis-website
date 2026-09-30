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
    fr: 'Orbis ERP réunit vos équipes, vos opérations et vos décisions dans un même environnement. Découvrez la plateforme de gestion développée par GRH-Services en Guinée.',
    en: 'Orbis ERP connects your people, operations and decisions in one environment. Explore the business platform developed by GRH-Services in Guinea.',
  },
  url: 'https://www.orbisloura.com',
  email: 'contact@orbisloura.com',
  phone: '',
  whatsapp: '',
  address: {
    fr: 'GRH-Services, Quartier Kipé, Conakry, République de Guinée',
    en: 'GRH-Services, Kipé District, Conakry, Republic of Guinea',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/146665993/',
    facebook: '',
    twitter: '',
    youtube: '',
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
