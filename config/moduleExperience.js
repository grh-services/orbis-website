import { MODULES } from './modules';

// Names and route slugs remain owned by the main catalog. All records are illustrative.
const MODULE_PRESENTATIONS = [
  {
    slug: 'commercial',
    fr: {
      title: 'Gardez le fil de vos ventes.',
      description: 'Retrouvez vos devis, commandes et factures dans un parcours commercial lisible.',
      space: 'Espace commercial',
      features: ['Devis', 'Commandes', 'Factures'],
      rows: [
        ['Devis — dossier 001', 'Client exemple · proposition commerciale', 'En préparation'],
        ['Commande — dossier 002', 'Client exemple · suivi commercial', 'À suivre'],
        ['Facture — dossier 003', 'Client exemple · règlement', 'À vérifier'],
      ],
    },
    en: {
      title: 'Keep your sales on track.',
      description: 'Bring quotes, orders and invoices into a clear view of your sales activity.',
      space: 'Sales workspace',
      features: ['Quotes', 'Orders', 'Invoices'],
      rows: [
        ['Quote — record 001', 'Sample customer · sales proposal', 'In preparation'],
        ['Order — record 002', 'Sample customer · sales follow-up', 'To follow up'],
        ['Invoice — record 003', 'Sample customer · payment', 'To review'],
      ],
    },
  },
  {
    slug: 'crm',
    fr: {
      title: 'Chaque relation a son histoire.',
      description: 'Rassemblez vos prospects, vos opportunités et les échanges qui nourrissent la relation client.',
      space: 'Relation client',
      features: ['Prospects', 'Opportunités', 'Suivi client'],
      rows: [
        ['Prospect — dossier 001', 'Entreprise exemple · prise de contact', 'À contacter'],
        ['Opportunité — dossier 002', 'Entreprise exemple · besoin identifié', 'En cours'],
        ['Échange — dossier 003', 'Entreprise exemple · prochain rendez-vous', 'À préparer'],
      ],
    },
    en: {
      title: 'Every relationship has a story.',
      description: 'Bring together prospects, opportunities and the conversations that shape your customer relationships.',
      space: 'Customer relationships',
      features: ['Prospects', 'Opportunities', 'Customer follow-up'],
      rows: [
        ['Prospect — record 001', 'Sample company · first contact', 'To contact'],
        ['Opportunity — record 002', 'Sample company · identified need', 'In progress'],
        ['Conversation — record 003', 'Sample company · next meeting', 'To prepare'],
      ],
    },
  },
  {
    slug: 'rh',
    fr: {
      title: 'Vos équipes, au même endroit.',
      description: 'Organisez les informations des collaborateurs, les contrats et le suivi des congés.',
      space: 'Ressources humaines',
      features: ['Collaborateurs', 'Contrats', 'Congés'],
      rows: [
        ['Collaborateur — dossier 001', 'Données fictives · dossier administratif', 'À compléter'],
        ['Contrat — dossier 002', 'Données fictives · documents', 'À vérifier'],
        ['Congé — dossier 003', 'Données fictives · demande', 'À examiner'],
      ],
    },
    en: {
      title: 'Your people, in one place.',
      description: 'Organise employee information, contracts and leave requests.',
      space: 'Human resources',
      features: ['Employees', 'Contracts', 'Leave'],
      rows: [
        ['Employee — record 001', 'Fictional data · employee file', 'To complete'],
        ['Contract — record 002', 'Fictional data · documents', 'To review'],
        ['Leave — record 003', 'Fictional data · request', 'To assess'],
      ],
    },
  },
  {
    slug: 'flotte',
    fr: {
      title: 'Gardez votre parc en vue.',
      description: 'Retrouvez les véhicules, leurs affectations et les besoins d’entretien dans un même espace.',
      space: 'Gestion de flotte',
      features: ['Véhicules', 'Affectations', 'Entretien'],
      rows: [
        ['Véhicule — parc 001', 'Données fictives · fiche véhicule', 'En activité'],
        ['Affectation — parc 002', 'Données fictives · suivi du parc', 'À suivre'],
        ['Entretien — parc 003', 'Données fictives · intervention', 'À planifier'],
      ],
    },
    en: {
      title: 'Keep your fleet in view.',
      description: 'Bring vehicles, assignments and maintenance needs together in one workspace.',
      space: 'Fleet management',
      features: ['Vehicles', 'Assignments', 'Maintenance'],
      rows: [
        ['Vehicle — fleet 001', 'Fictional data · vehicle record', 'Active'],
        ['Assignment — fleet 002', 'Fictional data · fleet follow-up', 'To follow up'],
        ['Maintenance — fleet 003', 'Fictional data · service visit', 'To schedule'],
      ],
    },
  },
  {
    slug: 'finance',
    fr: {
      title: 'Une lecture claire de vos finances.',
      description: 'Suivez vos budgets, votre trésorerie et vos informations financières pour préparer vos décisions.',
      space: 'Finance & comptabilité',
      features: ['Budgets', 'Trésorerie', 'Reporting'],
      rows: [
        ['Budget — périmètre 001', 'Données fictives · exercice de démonstration', 'En préparation'],
        ['Trésorerie — périmètre 002', 'Données fictives · suivi des mouvements', 'À vérifier'],
        ['Reporting — périmètre 003', 'Données fictives · synthèse', 'À consulter'],
      ],
    },
    en: {
      title: 'A clearer view of your finances.',
      description: 'Follow budgets, cash flow and financial information to inform your decisions.',
      space: 'Finance & accounting',
      features: ['Budgets', 'Cash flow', 'Reporting'],
      rows: [
        ['Budget — scope 001', 'Fictional data · sample financial year', 'In preparation'],
        ['Cash flow — scope 002', 'Fictional data · transaction tracking', 'To review'],
        ['Report — scope 003', 'Fictional data · summary', 'To read'],
      ],
    },
  },
  {
    slug: 'achats-stock',
    fr: {
      title: 'Du besoin au stock, gardez le lien.',
      description: 'Organisez vos demandes d’achat, les informations fournisseurs et le suivi de votre inventaire.',
      space: 'Achats & stock',
      features: ['Demandes', 'Fournisseurs', 'Inventaire'],
      rows: [
        ['Demande — achat 001', 'Données fictives · besoin opérationnel', 'À examiner'],
        ['Fournisseur — dossier 002', 'Données fictives · fiche fournisseur', 'À compléter'],
        ['Inventaire — article 003', 'Données fictives · suivi du stock', 'À vérifier'],
      ],
    },
    en: {
      title: 'Connect purchasing and inventory.',
      description: 'Organise purchase requests, supplier information and inventory tracking.',
      space: 'Purchasing & inventory',
      features: ['Requests', 'Suppliers', 'Inventory'],
      rows: [
        ['Request — purchase 001', 'Fictional data · operational need', 'To assess'],
        ['Supplier — record 002', 'Fictional data · supplier profile', 'To complete'],
        ['Inventory — item 003', 'Fictional data · stock tracking', 'To review'],
      ],
    },
  },
  {
    slug: 'projets',
    fr: {
      title: 'Donnez un cap à chaque projet.',
      description: 'Structurez les projets, répartissez les tâches et gardez les jalons de votre activité en vue.',
      space: 'Gestion de projets',
      features: ['Projets', 'Tâches', 'Jalons'],
      rows: [
        ['Projet — dossier 001', 'Données fictives · périmètre du projet', 'En préparation'],
        ['Tâche — dossier 002', 'Données fictives · coordination', 'En cours'],
        ['Jalon — dossier 003', 'Données fictives · prochaine étape', 'À suivre'],
      ],
    },
    en: {
      title: 'Give every project direction.',
      description: 'Structure projects, organise tasks and keep upcoming milestones in view.',
      space: 'Project management',
      features: ['Projects', 'Tasks', 'Milestones'],
      rows: [
        ['Project — record 001', 'Fictional data · project scope', 'In preparation'],
        ['Task — record 002', 'Fictional data · coordination', 'In progress'],
        ['Milestone — record 003', 'Fictional data · next step', 'To follow up'],
      ],
    },
  },
  {
    slug: 'qhsse',
    fr: {
      title: 'Le suivi qui accompagne le terrain.',
      description: 'Rassemblez les incidents, les actions de suivi et les informations relatives aux équipements.',
      space: 'QHSSE',
      features: ['Incidents', 'Actions', 'Équipements'],
      rows: [
        ['Incident — dossier 001', 'Données fictives · déclaration', 'À examiner'],
        ['Action — dossier 002', 'Données fictives · suivi opérationnel', 'En cours'],
        ['Équipement — dossier 003', 'Données fictives · fiche de suivi', 'À vérifier'],
      ],
    },
    en: {
      title: 'Support your work in the field.',
      description: 'Bring incident records, follow-up actions and equipment information together.',
      space: 'HSEQ',
      features: ['Incidents', 'Actions', 'Equipment'],
      rows: [
        ['Incident — record 001', 'Fictional data · report', 'To assess'],
        ['Action — record 002', 'Fictional data · operational follow-up', 'In progress'],
        ['Equipment — record 003', 'Fictional data · tracking record', 'To review'],
      ],
    },
  },
];

export const EXPLORER_MODULES = MODULE_PRESENTATIONS.map((presentation) => ({
  ...presentation,
  name: MODULES.find((module) => module.slug === presentation.slug).name,
}));
