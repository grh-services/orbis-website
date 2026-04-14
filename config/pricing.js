/**
 * ORBIS ERP - Configuration centralisée des tarifs
 * Devise par défaut : GNF (Franc Guinéen)
 * Devises supportées : GNF, EUR, USD, XOF
 *
 * Tous les prix sont stockés en GNF dans `basePriceGNF` puis convertis
 * dynamiquement via les taux ci-dessous. Pour la production, ces taux
 * doivent être rafraîchis depuis une API (ex. exchangerate.host).
 */

export const SUPPORTED_CURRENCIES = ['GNF', 'EUR', 'USD', 'XOF'];

export const CURRENCY_LABELS = {
  GNF: { code: 'GNF', symbol: 'FG', name: 'Franc Guinéen', locale: 'fr-GN' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', locale: 'fr-FR' },
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', locale: 'en-US' },
  XOF: { code: 'XOF', symbol: 'CFA', name: 'Franc CFA', locale: 'fr-SN' },
};

// Taux de conversion approximatifs depuis GNF (à actualiser en production)
export const EXCHANGE_RATES = {
  GNF: 1,
  EUR: 1 / 9500,    // 1 EUR ≈ 9 500 GNF
  USD: 1 / 8650,    // 1 USD ≈ 8 650 GNF
  XOF: 1 / 14.5,    // 1 XOF ≈ 14.5 GNF
};

export const DEFAULT_CURRENCY = 'GNF';

/**
 * Plans tarifaires Orbis ERP
 * Tous les prix sont mensuels HT, en GNF.
 */
export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: {
      fr: 'Pour démarrer en confiance',
      en: 'Start with confidence',
    },
    description: {
      fr: 'Idéal pour les TPE et structures jusqu\'à 15 collaborateurs.',
      en: 'Perfect for small businesses up to 15 employees.',
    },
    basePriceGNF: 250000,
    billingPeriod: 'month',
    badge: null,
    highlighted: false,
    cta: { fr: 'Commencer gratuitement', en: 'Start free trial' },
    limits: {
      users: 15,
      storage: '20 Go',
      modules: 3,
      support: { fr: 'Email (48h)', en: 'Email (48h)' },
    },
    features: [
      { fr: 'Jusqu\'à 15 utilisateurs', en: 'Up to 15 users' },
      { fr: '3 modules au choix', en: '3 modules of your choice' },
      { fr: '20 Go de stockage', en: '20 GB storage' },
      { fr: 'Support email sous 48h', en: 'Email support within 48h' },
      { fr: 'Mises à jour incluses', en: 'Free updates included' },
      { fr: 'Tableau de bord standard', en: 'Standard dashboard' },
    ],
  },
  {
    id: 'business',
    name: 'Business',
    tagline: {
      fr: 'Le choix des PME ambitieuses',
      en: 'For ambitious SMEs',
    },
    description: {
      fr: 'Pour les PME et ETI jusqu\'à 75 collaborateurs.',
      en: 'For SMEs and mid-caps up to 75 employees.',
    },
    basePriceGNF: 850000,
    billingPeriod: 'month',
    badge: { fr: 'Le plus populaire', en: 'Most popular' },
    highlighted: true,
    cta: { fr: 'Démarrer mon essai', en: 'Start my trial' },
    limits: {
      users: 75,
      storage: '200 Go',
      modules: 6,
      support: { fr: 'Prioritaire (24h)', en: 'Priority (24h)' },
    },
    features: [
      { fr: 'Jusqu\'à 75 utilisateurs', en: 'Up to 75 users' },
      { fr: '6 modules au choix', en: '6 modules of your choice' },
      { fr: '200 Go de stockage', en: '200 GB storage' },
      { fr: 'Support prioritaire 24h', en: 'Priority support 24h' },
      { fr: 'Tableaux de bord avancés', en: 'Advanced dashboards' },
      { fr: 'API REST complète', en: 'Full REST API' },
      { fr: 'Intégrations Orange Money & Wave', en: 'Orange Money & Wave integrations' },
      { fr: 'Formation en ligne incluse', en: 'Online training included' },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: {
      fr: 'Puissance et sur-mesure',
      en: 'Power and customization',
    },
    description: {
      fr: 'Pour les grandes structures et groupes multi-sites.',
      en: 'For large organizations and multi-site groups.',
    },
    basePriceGNF: 2500000,
    billingPeriod: 'month',
    badge: { fr: 'Premium', en: 'Premium' },
    highlighted: false,
    cta: { fr: 'Parler à un expert', en: 'Talk to an expert' },
    limits: {
      users: -1, // illimité
      storage: '2 To',
      modules: -1, // tous
      support: { fr: 'Dédié 24/7', en: 'Dedicated 24/7' },
    },
    features: [
      { fr: 'Utilisateurs illimités', en: 'Unlimited users' },
      { fr: 'Tous les modules inclus', en: 'All modules included' },
      { fr: '2 To de stockage', en: '2 TB storage' },
      { fr: 'Support dédié 24/7', en: 'Dedicated 24/7 support' },
      { fr: 'Multi-sites & multi-devises', en: 'Multi-site & multi-currency' },
      { fr: 'SSO & SAML', en: 'SSO & SAML' },
      { fr: 'Audit & conformité QHSSE', en: 'QHSSE audit & compliance' },
      { fr: 'SLA 99,9% garanti', en: '99.9% SLA guaranteed' },
      { fr: 'Account manager dédié', en: 'Dedicated account manager' },
      { fr: 'Hébergement souverain Guinée', en: 'Sovereign hosting in Guinea' },
    ],
  },
];

/**
 * Plan À la carte - tarification sur devis
 */
export const ALACARTE_PLAN = {
  id: 'alacarte',
  name: { fr: 'À la carte', en: 'À la carte' },
  tagline: {
    fr: 'Construisez votre Orbis sur-mesure',
    en: 'Build your custom Orbis',
  },
  description: {
    fr: 'Composez votre offre module par module, adaptée à votre métier et votre croissance.',
    en: 'Build your offer module by module, tailored to your business and growth.',
  },
  cta: { fr: 'Demander un devis', en: 'Request a quote' },
  benefits: [
    { fr: 'Sélection libre des modules', en: 'Free module selection' },
    { fr: 'Tarification au nombre d\'utilisateurs', en: 'Per-user pricing' },
    { fr: 'Options d\'intégration sur-mesure', en: 'Custom integration options' },
    { fr: 'Hébergement local ou cloud', en: 'Local or cloud hosting' },
    { fr: 'Engagement flexible (mois ou annuel)', en: 'Flexible commitment (monthly or annual)' },
  ],
};

/**
 * Convertit un prix GNF dans la devise demandée.
 */
export function convertPrice(amountGNF, currency = DEFAULT_CURRENCY) {
  const rate = EXCHANGE_RATES[currency] ?? 1;
  return amountGNF * rate;
}

/**
 * Formate un prix dans la devise voulue avec séparateur local.
 */
export function formatPrice(amountGNF, currency = DEFAULT_CURRENCY, options = {}) {
  const converted = convertPrice(amountGNF, currency);
  const meta = CURRENCY_LABELS[currency];
  const decimals = currency === 'GNF' || currency === 'XOF' ? 0 : 2;

  try {
    return new Intl.NumberFormat(meta.locale, {
      style: 'currency',
      currency: meta.code,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      ...options,
    }).format(converted);
  } catch {
    return `${Math.round(converted).toLocaleString(meta.locale)} ${meta.symbol}`;
  }
}

/**
 * Méthodes de paiement disponibles (préparation Orange Money / Wave).
 */
export const PAYMENT_METHODS = [
  {
    id: 'orange-money',
    name: 'Orange Money',
    type: 'mobile-money',
    countries: ['GN', 'CI', 'SN', 'ML', 'BF'],
    enabled: true,
    icon: 'orange-money',
  },
  {
    id: 'wave',
    name: 'Wave',
    type: 'mobile-money',
    countries: ['SN', 'CI'],
    enabled: true,
    icon: 'wave',
  },
  {
    id: 'card',
    name: { fr: 'Carte bancaire', en: 'Credit card' },
    type: 'card',
    countries: ['*'],
    enabled: true,
    icon: 'card',
  },
  {
    id: 'bank-transfer',
    name: { fr: 'Virement bancaire', en: 'Bank transfer' },
    type: 'bank',
    countries: ['*'],
    enabled: true,
    icon: 'bank',
  },
];
