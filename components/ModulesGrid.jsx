'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { MODULES } from '@/config/modules';
import { localizedHref } from '@/lib/locales';

export default function ModulesGrid({ locale, dict }) {
  const t = dict.home.modules;

  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="container-orbis">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="mt-4 heading-2 text-balance">{t.title}</h2>
          <p className="mt-5 lead">{t.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULES.map((mod, idx) => {
            const Icon = Icons[mod.icon] ?? Icons.Box;
            return (
              <motion.div
                key={mod.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Link
                  href={localizedHref(locale, `/modules/${mod.slug}`)}
                  className="group relative block h-full rounded-3xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:border-orbis-200 hover:shadow-soft hover:-translate-y-1 overflow-hidden"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${mod.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${mod.color} text-white shadow-sm`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink-900">
                    {mod.name[locale]}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                    {mod.short[locale]}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-orbis-600 group-hover:gap-2 transition-all">
                    {t.exploreCta}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
