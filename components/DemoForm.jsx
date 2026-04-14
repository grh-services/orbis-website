'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { MODULES } from '@/config/modules';

export default function DemoForm({ locale, dict }) {
  const t = dict.demo.form;
  const tc = dict.contact;
  const [status, setStatus] = useState('idle');
  const [selected, setSelected] = useState([]);

  const toggle = (slug) => {
    setSelected((cur) =>
      cur.includes(slug) ? cur.filter((s) => s !== slug) : [...cur, slug]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 800);
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-orbis-200 bg-orbis-50 p-10 text-center"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-orbis-600" />
        <h3 className="mt-4 text-xl font-bold text-ink-900">{tc.successTitle}</h3>
        <p className="mt-2 text-ink-600">{tc.successBody}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-ink-100 bg-white p-8 sm:p-10 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label={tc.name} name="name" required />
        <Field label={tc.email} name="email" type="email" required />
        <Field label={tc.company} name="company" required />
        <Field label={tc.phone} name="phone" type="tel" required />
      </div>

      <div>
        <label className="block text-sm font-semibold text-ink-700 mb-2">
          {t.preferredDate}
        </label>
        <input
          type="date"
          name="date"
          className="w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-orbis-500 focus:ring-2 focus:ring-orbis-100 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-ink-700 mb-3">{t.modules}</label>
        <div className="flex flex-wrap gap-2">
          {MODULES.map((m) => {
            const active = selected.includes(m.slug);
            return (
              <button
                key={m.slug}
                type="button"
                onClick={() => toggle(m.slug)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  active
                    ? 'border-orbis-500 bg-orbis-600 text-white'
                    : 'border-ink-200 text-ink-700 hover:border-orbis-300'
                }`}
              >
                {m.name[locale]}
              </button>
            );
          })}
        </div>
      </div>

      <button type="submit" className="btn-primary w-full">
        <Calendar className="h-4 w-4" />
        {t.submit}
      </button>
    </form>
  );
}

function Field({ label, name, type = 'text', required = false }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-ink-700 mb-2">
        {label}
        {required && <span className="text-orbis-600 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-orbis-500 focus:ring-2 focus:ring-orbis-100 outline-none"
      />
    </div>
  );
}
