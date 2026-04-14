'use client';

import { motion } from 'framer-motion';
import { Globe2, Server, Smartphone, Headphones } from 'lucide-react';

const ICONS = [Globe2, Server, Smartphone, Headphones];

export default function ValueProps({ dict }) {
  const t = dict.home.valueProps;

  return (
    <section className="section bg-ink-50/50 relative">
      <div className="container-orbis">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-2 text-balance">{t.title}</h2>
          <p className="mt-5 lead">{t.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, i) => {
            const Icon = ICONS[i] ?? Globe2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl bg-white p-7 border border-ink-100"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orbis-50 text-orbis-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
