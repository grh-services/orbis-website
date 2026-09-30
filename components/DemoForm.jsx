'use client';

import { useId, useState } from 'react';
import { Calendar } from 'lucide-react';
import { MODULES } from '@/config/modules';
import { SITE } from '@/config/site';

export default function DemoForm({ locale = 'fr', dict }) {
  const t = dict.demo.form;
  const tc = dict.contact;
  const id = useId();
  const [draft, setDraft] = useState('');
  const [selected, setSelected] = useState([]);
  const copy = locale === 'fr' ? {
    intro: 'Préparez une demande de démonstration à envoyer depuis votre messagerie. Aucun e-mail n’est envoyé automatiquement et le créneau reste à confirmer avec notre équipe.',
    submit: 'Préparer ma demande par e-mail',
    subject: 'Demande de démonstration — Orbis ERP',
    ready: 'Votre demande est prête à être ouverte dans votre messagerie. Elle n’a pas été envoyée et aucun créneau n’est réservé.',
    retry: 'Ouvrir la demande dans ma messagerie',
    fallback: 'Si aucune messagerie ne s’ouvre, reprenez les informations ci-dessus et écrivez à',
    unspecified: 'À convenir',
    required: 'Veuillez renseigner ce champ.',
    pastDate: 'Choisissez une date à partir d’aujourd’hui.',
  } : {
    intro: 'Prepare a demo request to send from your mail app. No email is sent automatically, and your preferred time must still be confirmed by our team.',
    submit: 'Prepare my email request',
    subject: 'Demo request — Orbis ERP',
    ready: 'Your request is ready to open in your mail app. It has not been sent, and no time slot has been booked.',
    retry: 'Open the request in my mail app',
    fallback: 'If no mail app opens, use the details above to write to',
    unspecified: 'To be agreed',
    required: 'Please fill in this field.',
    pastDate: 'Choose today or a future date.',
  };

  const toggle = (slug) => {
    setSelected((cur) =>
      cur.includes(slug) ? cur.filter((s) => s !== slug) : [...cur, slug]
    );
    setDraft('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const values = new FormData(form);
    const value = (name) => String(values.get(name) ?? '').trim();
    for (const name of ['name', 'email', 'company', 'phone']) {
      form.elements.namedItem(name).setCustomValidity(value(name) ? '' : copy.required);
    }
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    form.elements.namedItem('date').setCustomValidity(value('date') && value('date') < today ? copy.pastDate : '');
    if (!form.reportValidity()) return;
    const moduleNames = MODULES.filter((module) => selected.includes(module.slug)).map((module) => module.name[locale]);
    const body = [
      `${tc.name}: ${value('name')}`,
      `${tc.email}: ${value('email')}`,
      `${tc.company}: ${value('company')}`,
      `${tc.phone}: ${value('phone')}`,
      `${t.preferredDate}: ${value('date') || copy.unspecified}`,
      `${t.modules}: ${moduleNames.join(', ') || copy.unspecified}`,
    ].join('\r\n');
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(body)}`;
    setDraft(href);
    // A mailto link only opens a draft; it does not book or send anything.
    try { window.location.href = href; } catch { /* Keep the fallback link visible. */ }
  };
  const handleInput = (event) => {
    event.target.setCustomValidity?.('');
    setDraft('');
  };

  return (
    <form onSubmit={handleSubmit} onInput={handleInput} aria-describedby={`${id}-help`} className="rounded-3xl border border-ink-100 bg-white p-8 sm:p-10 space-y-5">
      <p id={`${id}-help`} className="text-sm text-ink-600 leading-relaxed">{copy.intro}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id={`${id}-name`} label={tc.name} name="name" autoComplete="name" maxLength={160} required />
        <Field id={`${id}-email`} label={tc.email} name="email" type="email" autoComplete="email" maxLength={254} required />
        <Field id={`${id}-company`} label={tc.company} name="company" autoComplete="organization" maxLength={200} required />
        <Field id={`${id}-phone`} label={tc.phone} name="phone" type="tel" autoComplete="tel" maxLength={50} required />
      </div>

      <div>
        <label htmlFor={`${id}-date`} className="block text-sm font-semibold text-ink-700 mb-2">
          {t.preferredDate}
        </label>
        <input
          id={`${id}-date`}
          type="date"
          name="date"
          className="w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-orbis-500 focus:ring-2 focus:ring-orbis-100 outline-none"
        />
      </div>

      <fieldset>
        <legend className="block text-sm font-semibold text-ink-700 mb-3">{t.modules}</legend>
        <div className="flex flex-wrap gap-2">
          {MODULES.map((m) => {
            const active = selected.includes(m.slug);
            return (
              <button
                key={m.slug}
                type="button"
                aria-pressed={active}
                onClick={() => toggle(m.slug)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orbis-600 ${
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
      </fieldset>

      <button type="submit" className="btn-primary w-full">
        <Calendar className="h-4 w-4" aria-hidden="true" />
        {copy.submit}
      </button>
      <div role="status" aria-live="polite" aria-atomic="true">
        {draft && <div className="rounded-2xl border border-orbis-200 bg-orbis-50 p-5 text-sm text-ink-700 space-y-3">
          <p>{copy.ready}</p>
          <a href={draft} className="inline-block font-semibold text-orbis-700 underline underline-offset-4">{copy.retry}</a>
          <p>{copy.fallback}{' '}<a href={`mailto:${SITE.email}`} className="font-semibold text-orbis-700 underline break-all">{SITE.email}</a>.</p>
        </div>}
      </div>
    </form>
  );
}

function Field({ id, label, name, type = 'text', required = false, autoComplete, maxLength }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink-700 mb-2">
        {label}
        {required && <span className="text-orbis-600 ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        autoComplete={autoComplete}
        maxLength={maxLength}
        required={required}
        className="w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-orbis-500 focus:ring-2 focus:ring-orbis-100 outline-none"
      />
    </div>
  );
}
