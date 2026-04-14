'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { localizedHref } from '@/lib/locales';

export default function CTASection({ locale, dict }) {
  const t = dict.home.cta;

  return (
    <section className="section">
      <div className="container-orbis">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-orbis-gradient p-10 sm:p-16 text-center text-white shadow-2xl shadow-orbis-900/30"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              {t.title}
            </h2>
            <p className="mt-5 text-lg text-white/85 max-w-xl mx-auto text-balance">
              {t.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={localizedHref(locale, '/contact')}
                className="btn bg-white text-orbis-700 hover:bg-orbis-50 px-7 py-3.5 text-base"
              >
                {t.primary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={localizedHref(locale, '/demo')}
                className="btn border border-white/30 text-white hover:bg-white/10 px-7 py-3.5 text-base"
              >
                <Calendar className="h-4 w-4" />
                {t.secondary}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
