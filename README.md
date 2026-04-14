# Orbis ERP — Site vitrine officiel

Site vitrine professionnel et haut de gamme pour **Orbis ERP**, plateforme SaaS de gestion d'entreprise développée par **GRH-Services** à Conakry, Guinée.

> **Une vision complète, un contrôle total.**

## Stack technique

- **Next.js 14** (App Router, React 18)
- **Tailwind CSS** 3 + design system Orbis
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- Internationalisation **FR / EN** maison (zero dépendance)
- SEO-friendly (sitemap, robots, OpenGraph, hreflang)
- Mobile-first & responsive
- Préparation paiements **Orange Money** et **Wave**

## Structure des pages

| Route | Description |
|---|---|
| `/` | Accueil — hero animé, modules, témoignages, CTA |
| `/modules` | Liste des 8 modules métiers |
| `/modules/[slug]` | Sous-page par module |
| `/secteurs` | Mines & BTP, Transport, Services, Administration |
| `/tarifs` | 3 plans + À la carte + comparatif |
| `/a-propos` | Mission, vision, valeurs |
| `/contact` | Formulaire + WhatsApp flottant |
| `/demo` | Réservation de démo personnalisée |

Toutes les pages sont préfixées par la locale (`/fr/...` ou `/en/...`).

## Démarrage

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) — vous serez automatiquement redirigé vers `/fr` ou `/en` selon votre navigateur.

## Configuration centralisée

| Fichier | Rôle |
|---|---|
| `config/pricing.js` | Tarifs (GNF, EUR, USD, XOF), plans, méthodes de paiement |
| `config/modules.js` | Catalogue des 8 modules |
| `config/sectors.js` | Secteurs cibles |
| `config/site.js` | Métadonnées site, navigation, contact |
| `dictionaries/fr.json` | Traductions françaises |
| `dictionaries/en.json` | Traductions anglaises |

### Modifier les tarifs

Tous les prix sont stockés en GNF dans `config/pricing.js` et convertis dynamiquement via `formatPrice()`. Pour la production, brancher `EXCHANGE_RATES` sur une API de taux de change.

### Préparer Orange Money / Wave

Les méthodes de paiement sont déclarées dans `config/pricing.js` (`PAYMENT_METHODS`). Les variables d'environnement à renseigner :

```
ORANGE_MONEY_MERCHANT_KEY=
ORANGE_MONEY_API_URL=
WAVE_API_KEY=
WAVE_API_URL=
```

## Couleurs du brand

- **Teal Orbis** : `#0d9488` (orbis-600)
- **Encre** : `#0f172a` (ink-900)
- Inspiration : Stripe, Monday.com, Paystack

## Scripts

```bash
npm run dev      # serveur de dev
npm run build    # build production
npm run start    # serveur production
npm run lint     # lint
```

## Licence

© GRH-Services — Tous droits réservés.
