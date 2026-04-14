'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, ShieldCheck, Globe2, Zap } from 'lucide-react';
import { localizedHref } from '@/lib/locales';

export default function Hero({ locale, dict }) {
  const t = dict.home.hero;
  const stats = dict.home.stats;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orbis-50/60 via-white to-white" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-20 -left-32 h-96 w-96 rounded-full bg-orbis-200/40 blur-3xl" />
        <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <div className="container-orbis pt-16 sm:pt-24 lg:pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {t.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 heading-1 text-balance"
          >
            {t.titleStart}{' '}
            <span className="gradient-text">{t.titleAccent}</span>
            {t.titleMid}{' '}
            <span className="gradient-text">{t.titleAccent2}</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 lead text-balance mx-auto max-w-2xl"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href={localizedHref(locale, '/contact')} className="btn-primary text-base px-7 py-3.5">
              {t.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={localizedHref(locale, '/demo')} className="btn-secondary text-base px-7 py-3.5">
              <Play className="h-4 w-4" />
              {t.secondaryCta}
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-sm text-ink-500"
          >
            {t.trustLine}
          </motion.p>
        </div>

        {/* Mockup / dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 mx-auto max-w-6xl"
        >
          <div className="relative rounded-3xl border border-ink-200/70 bg-white shadow-2xl shadow-orbis-900/10 overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-ink-100 bg-ink-50/50">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="mx-auto text-xs text-ink-500 font-mono">app.orbis-erp.com/dashboard</div>
            </div>
            <div className="p-6 sm:p-10 bg-gradient-to-br from-white via-orbis-50/30 to-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'CA mensuel', value: '847 M GNF', delta: '+12.4%', color: 'text-emerald-600' },
                  { label: 'Trésorerie', value: '1.2 Md GNF', delta: '+5.8%', color: 'text-blue-600' },
                  { label: 'Effectif', value: '156', delta: '+3', color: 'text-violet-600' },
                ].map((kpi, i) => (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="rounded-2xl border border-ink-100 bg-white p-5"
                  >
                    <p className="text-xs text-ink-500 uppercase tracking-wider">{kpi.label}</p>
                    <p className="mt-2 text-2xl font-bold text-ink-900">{kpi.value}</p>
                    <p className={`text-xs font-semibold mt-1 ${kpi.color}`}>{kpi.delta}</p>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 rounded-2xl border border-ink-100 bg-white p-5 h-48 relative overflow-hidden">
                  <p className="text-xs font-semibold text-ink-700">Évolution du chiffre d'affaires</p>
                  <svg className="absolute inset-x-0 bottom-0 w-full h-32" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#0d9488" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,90 L40,80 L80,85 L120,60 L160,65 L200,40 L240,50 L280,30 L320,35 L360,15 L400,20 L400,120 L0,120 Z"
                      fill="url(#chart-gradient)"
                    />
                    <path
                      d="M0,90 L40,80 L80,85 L120,60 L160,65 L200,40 L240,50 L280,30 L320,35 L360,15 L400,20"
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                <div className="rounded-2xl border border-ink-100 bg-white p-5 space-y-3">
                  <p className="text-xs font-semibold text-ink-700">Modules actifs</p>
                  {['RH', 'Finance', 'Flotte', 'CRM'].map((m, i) => (
                    <div key={m} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-orbis-500" />
                      <span className="text-sm text-ink-700 flex-1">{m}</span>
                      <span className="text-xs text-ink-400">{99 - i}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Zap, value: '8', label: stats.modules },
            { icon: ShieldCheck, value: '99.9%', label: stats.uptime },
            { icon: Globe2, value: '4', label: stats.currencies },
            { icon: Sparkles, value: '24/7', label: stats.support },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center sm:text-left flex flex-col sm:flex-row items-center gap-3"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orbis-50 text-orbis-600">
                <stat.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-2xl font-bold text-ink-900">{stat.value}</div>
                <div className="text-xs text-ink-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
