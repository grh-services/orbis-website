'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import {
  PRICING_PLANS,
  ALACARTE_PLAN,
  SUPPORTED_CURRENCIES,
  formatPrice,
  DEFAULT_CURRENCY,
} from '@/config/pricing';
import { localizedHref } from '@/lib/locales';

export default function PricingCards({ locale, dict }) {
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const t = dict.pricing;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <p className="text-sm text-ink-600">{t.vatNotice}</p>
        <div className="inline-flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">
            {t.currencyHint}
          </span>
          <div className="inline-flex rounded-full border border-ink-200 bg-white p-1">
            {SUPPORTED_CURRENCIES.map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  c === currency
                    ? 'bg-orbis-600 text-white'
                    : 'text-ink-600 hover:text-orbis-600'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PRICING_PLANS.map((plan, idx) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`relative rounded-3xl border p-8 flex flex-col ${
              plan.highlighted
                ? 'border-orbis-500 bg-orbis-gradient text-white shadow-2xl shadow-orbis-900/30 lg:scale-105'
                : 'border-ink-100 bg-white text-ink-900'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-950 shadow">
                  <Sparkles className="h-3 w-3" />
                  {plan.badge[locale]}
                </span>
              </div>
            )}

            <h3 className={`text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-ink-900'}`}>
              {plan.name}
            </h3>
            <p className={`mt-1 text-sm ${plan.highlighted ? 'text-white/80' : 'text-ink-600'}`}>
              {plan.tagline[locale]}
            </p>

            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <span className={`text-4xl font-bold tracking-tight ${plan.highlighted ? 'text-white' : 'text-ink-900'}`}>
                  {formatPrice(plan.basePriceGNF, currency)}
                </span>
                <span className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-ink-500'}`}>
                  / {t.month}
                </span>
              </div>
              <p className={`mt-2 text-sm ${plan.highlighted ? 'text-white/80' : 'text-ink-600'}`}>
                {plan.description[locale]}
              </p>
            </div>

            <Link
              href={localizedHref(locale, '/contact')}
              className={`mt-7 btn w-full ${
                plan.highlighted
                  ? 'bg-white text-orbis-700 hover:bg-orbis-50'
                  : 'btn-primary'
              }`}
            >
              {plan.cta[locale]}
            </Link>

            <ul className="mt-7 space-y-3 flex-1">
              {plan.features.map((feature) => (
                <li key={feature[locale]} className="flex items-start gap-3 text-sm">
                  <span
                    className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                      plan.highlighted ? 'bg-white/20' : 'bg-orbis-100'
                    }`}
                  >
                    <Check className={`h-3 w-3 ${plan.highlighted ? 'text-white' : 'text-orbis-700'}`} />
                  </span>
                  <span className={plan.highlighted ? 'text-white/90' : 'text-ink-700'}>
                    {feature[locale]}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* À la carte */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 rounded-3xl border border-dashed border-orbis-300 bg-orbis-50/40 p-8 sm:p-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-ink-900">{ALACARTE_PLAN.name[locale]}</h3>
            <p className="mt-2 text-base text-orbis-700 font-semibold">
              {ALACARTE_PLAN.tagline[locale]}
            </p>
            <p className="mt-4 text-ink-600">{ALACARTE_PLAN.description[locale]}</p>
            <Link
              href={localizedHref(locale, '/contact')}
              className="mt-6 btn-primary inline-flex"
            >
              {ALACARTE_PLAN.cta[locale]}
            </Link>
          </div>
          <ul className="space-y-3">
            {ALACARTE_PLAN.benefits.map((b) => (
              <li key={b[locale]} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-orbis-200">
                  <Check className="h-3 w-3 text-orbis-800" />
                </span>
                <span className="text-ink-700">{b[locale]}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
