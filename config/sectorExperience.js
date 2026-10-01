/** Sector discovery content. These examples describe possible needs, not deployments. */
export const SECTOR_EXPERIENCES = [
  {
    slug: 'transport',
    name: { fr: 'Transport & logistique', en: 'Transport & logistics' },
    title: { fr: 'Le parc, les équipes, les opérations.', en: 'Your fleet, your teams, your operations.' },
    description: {
      fr: 'Vos véhicules et vos équipes travaillent sur plusieurs fronts. Une démonstration ciblée permet d’examiner les informations à réunir pour suivre l’activité.',
      en: 'Your vehicles and teams work across several locations. A focused demonstration can help you explore the information to bring together to follow your operations.',
    },
    needs: [
      { fr: 'Organiser le parc et ses affectations.', en: 'Organize your fleet and vehicle assignments.' },
      { fr: 'Suivre les besoins d’entretien.', en: 'Keep track of maintenance needs.' },
      { fr: 'Rapprocher moyens mobilisés et suivi financier.', en: 'Connect operational resources with financial information.' },
    ],
    modules: ['flotte', 'rh', 'finance', 'qhsse'],
    image: '/images/orbis/hero-flotte-1200.webp',
    imageAlt: {
      fr: 'Illustration d’un professionnel consultant une tablette devant des camions.',
      en: 'Illustration of a professional using a tablet in front of trucks.',
    },
    cta: { fr: 'Préparer une démo transport', en: 'Plan a transport demo' },
  },
  {
    slug: 'mines',
    name: { fr: 'Mines', en: 'Mining' },
    title: { fr: 'Une lecture commune des activités de terrain.', en: 'A shared view of field operations.' },
    description: {
      fr: 'Les activités minières mobilisent des équipes, des moyens et des approvisionnements. Explorez les espaces de gestion utiles à votre organisation, selon le périmètre de votre projet.',
      en: 'Mining operations bring together people, equipment and supplies. Explore the management tools relevant to your organization and the scope of your project.',
    },
    needs: [
      { fr: 'Réunir les informations des équipes.', en: 'Bring team information together.' },
      { fr: 'Organiser les besoins d’achat et le stock.', en: 'Organize purchasing needs and inventory.' },
      { fr: 'Examiner le suivi des moyens et des actions QHSSE.', en: 'Explore how to track resources and HSEQ actions.' },
    ],
    modules: ['rh', 'achats-stock', 'flotte', 'qhsse'],
    image: '/images/orbis/hero-terrain-1200.webp',
    imageAlt: {
      fr: 'Illustration de deux professionnels consultant une tablette dans un entrepôt.',
      en: 'Illustration of two professionals using a tablet in a warehouse.',
    },
    cta: { fr: 'Préparer une démo mines', en: 'Plan a mining demo' },
  },
  {
    slug: 'btp',
    name: { fr: 'BTP', en: 'Construction' },
    title: { fr: 'Relier les projets à leurs moyens.', en: 'Connect projects with their resources.' },
    description: {
      fr: 'Projets, équipes, achats et budgets se répondent au quotidien. Construisons un parcours de démonstration autour de la coordination de vos activités.',
      en: 'Projects, teams, purchasing and budgets are connected every day. Let’s build a demonstration around the way you coordinate your work.',
    },
    needs: [
      { fr: 'Structurer les projets et leurs jalons.', en: 'Structure projects and their milestones.' },
      { fr: 'Suivre les équipes et les besoins d’approvisionnement.', en: 'Follow teams and procurement needs.' },
      { fr: 'Mettre les budgets en regard des opérations.', en: 'Review budgets alongside operations.' },
    ],
    modules: ['projets', 'rh', 'achats-stock', 'finance'],
    image: '/images/orbis/hero-terrain-1200.webp',
    imageAlt: {
      fr: 'Illustration de deux professionnels consultant une tablette dans un entrepôt.',
      en: 'Illustration of two professionals using a tablet in a warehouse.',
    },
    cta: { fr: 'Préparer une démo BTP', en: 'Plan a construction demo' },
  },
  {
    slug: 'commerce',
    name: { fr: 'Commerce & distribution', en: 'Commerce & distribution' },
    title: { fr: 'Du besoin client au suivi commercial.', en: 'From customer needs to sales follow-up.' },
    description: {
      fr: 'Découvrez les espaces qui organisent la relation client, les documents commerciaux et les informations de stock pour votre activité.',
      en: 'Explore the tools that organize customer relationships, sales documents and inventory information for your business.',
    },
    needs: [
      { fr: 'Retrouver les prospects et leurs opportunités.', en: 'Bring prospects and their opportunities into view.' },
      { fr: 'Organiser devis, commandes et factures.', en: 'Organize quotes, orders and invoices.' },
      { fr: 'Examiner les achats et les informations de stock.', en: 'Review purchasing and inventory information.' },
    ],
    modules: ['crm', 'commercial', 'achats-stock', 'finance'],
    image: '/images/orbis/hero-terrain-1200.webp',
    imageAlt: {
      fr: 'Illustration de deux professionnels consultant une tablette dans un entrepôt.',
      en: 'Illustration of two professionals using a tablet in a warehouse.',
    },
    cta: { fr: 'Préparer une démo commerce', en: 'Plan a commerce demo' },
  },
  {
    slug: 'services',
    name: { fr: 'Services', en: 'Services' },
    title: { fr: 'Réunir les clients, les équipes et les missions.', en: 'Connect clients, teams and assignments.' },
    description: {
      fr: 'Une activité de services repose sur les échanges, les collaborateurs et le suivi des projets. Partons de votre fonctionnement pour examiner les modules pertinents.',
      en: 'Service businesses rely on communication, people and project follow-up. Let’s start with how you work to explore the relevant modules.',
    },
    needs: [
      { fr: 'Conserver le fil de la relation client.', en: 'Keep track of customer relationships.' },
      { fr: 'Organiser les équipes et les projets.', en: 'Organize teams and projects.' },
      { fr: 'Suivre les documents commerciaux et financiers.', en: 'Follow sales and financial documents.' },
    ],
    modules: ['crm', 'rh', 'projets', 'commercial'],
    image: '/images/orbis/hero-rh-1200.webp',
    imageAlt: {
      fr: 'Illustration de trois professionnels collaborant autour d’un ordinateur.',
      en: 'Illustration of three professionals collaborating around a laptop.',
    },
    cta: { fr: 'Préparer une démo services', en: 'Plan a services demo' },
  },
];
