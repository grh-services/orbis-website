'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm({ dict }) {
  const t = dict.contact;
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Hook to API route in production
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
        <h3 className="mt-4 text-xl font-bold text-ink-900">{t.successTitle}</h3>
        <p className="mt-2 text-ink-600">{t.successBody}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-ink-100 bg-white p-8 sm:p-10 space-y-5">
      <h3 className="text-xl font-bold text-ink-900">{t.formTitle}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label={t.name} name="name" required />
        <Field label={t.email} name="email" type="email" required />
        <Field label={t.company} name="company" />
        <Field label={t.phone} name="phone" type="tel" />
      </div>

      <Field label={t.subject} name="subject" required />

      <div>
        <label className="block text-sm font-semibold text-ink-700 mb-2">{t.message}</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-orbis-500 focus:ring-2 focus:ring-orbis-100 outline-none transition"
        />
      </div>

      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
        {status === 'loading' ? (
          t.submitting
        ) : (
          <>
            {t.submit}
            <Send className="h-4 w-4" />
          </>
        )}
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
        className="w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-orbis-500 focus:ring-2 focus:ring-orbis-100 outline-none transition"
      />
    </div>
  );
}
