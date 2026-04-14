'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Mariama Diallo',
    role: { fr: 'Directrice Financière', en: 'CFO' },
    company: 'Société Minière du Konkouré',
    quote: {
      fr: 'Avec Orbis, nous avons unifié 5 logiciels en une seule plateforme. Notre clôture mensuelle est passée de 12 à 3 jours.',
      en: 'With Orbis, we replaced 5 systems with one platform. Our monthly close went from 12 to 3 days.',
    },
    rating: 5,
    initials: 'MD',
  },
  {
    name: 'Ibrahima Sow',
    role: { fr: 'Directeur Général', en: 'CEO' },
    company: 'TransAfrica Logistics',
    quote: {
      fr: 'Le module Flotte d\'Orbis nous a permis d\'économiser 18% sur notre carburant en 6 mois. ROI immédiat.',
      en: 'Orbis Fleet helped us save 18% on fuel in 6 months. Immediate ROI.',
    },
    rating: 5,
    initials: 'IS',
  },
  {
    name: 'Fatoumata Camara',
    role: { fr: 'Responsable RH', en: 'HR Manager' },
    company: 'Cabinet Conseil Guinée',
    quote: {
      fr: 'L\'équipe Orbis parle français, comprend nos contraintes locales et répond en moins d\'une heure sur WhatsApp.',
      en: 'The Orbis team speaks French, understands our local realities and replies within an hour on WhatsApp.',
    },
    rating: 5,
    initials: 'FC',
  },
];

export default function Testimonials({ locale, dict }) {
  const t = dict.home.testimonials;

  return (
    <section className="section bg-white">
      <div className="container-orbis">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="mt-4 heading-2">{t.title}</h2>
          <p className="mt-5 lead">{t.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl border border-ink-100 bg-gradient-to-br from-white to-orbis-50/30 p-8"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-orbis-200" />
              <div className="flex gap-0.5">
                {[...Array(item.rating)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-base text-ink-800 leading-relaxed">
                « {item.quote[locale]} »
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orbis-gradient text-white text-sm font-bold">
                  {item.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink-900">{item.name}</div>
                  <div className="text-xs text-ink-500">
                    {item.role[locale]} · {item.company}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
