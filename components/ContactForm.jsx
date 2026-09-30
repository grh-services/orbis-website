'use client';

import { useId, useState } from 'react';
import { Mail } from 'lucide-react';
import { SITE } from '@/config/site';

export default function ContactForm({ locale = 'fr', dict }) {
  const t = dict.contact;
  const id = useId();
  const [draft, setDraft] = useState('');
  const copy = locale === 'fr' ? {
    intro: 'Ce formulaire prépare un e-mail dans votre messagerie. Vérifiez son contenu, puis envoyez-le depuis votre messagerie. Aucun message n’est envoyé automatiquement.',
    submit: 'Préparer mon e-mail',
    ready: 'Votre e-mail est prêt à être ouvert. Il n’a pas été envoyé par ce site.',
    retry: 'Ouvrir l’e-mail dans ma messagerie',
    fallback: 'Si aucune messagerie ne s’ouvre, reprenez les informations ci-dessus et écrivez à',
    required: 'Veuillez renseigner ce champ.',
  } : {
    intro: 'This form prepares an email in your mail app. Review it, then send it from your mail app. No message is sent automatically.',
    submit: 'Prepare my email',
    ready: 'Your email is ready to open. It has not been sent by this website.',
    retry: 'Open the email in my mail app',
    fallback: 'If no mail app opens, use the details above to write to',
    required: 'Please fill in this field.',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const values = new FormData(form);
    const value = (name) => String(values.get(name) ?? '').trim();
    for (const name of ['name', 'email', 'subject', 'message']) {
      form.elements.namedItem(name).setCustomValidity(value(name) ? '' : copy.required);
    }
    if (!form.reportValidity()) return;
    const body = [
      `${t.name}: ${value('name')}`,
      `${t.email}: ${value('email')}`,
      value('company') ? `${t.company}: ${value('company')}` : null,
      value('phone') ? `${t.phone}: ${value('phone')}` : null,
      '',
      value('message'),
    ].filter((line) => line !== null).join('\r\n');
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(value('subject'))}&body=${encodeURIComponent(body)}`;
    setDraft(href);
    // Opening a mail client does not confirm that an email was sent.
    try { window.location.href = href; } catch { /* Keep the fallback link visible. */ }
  };
  const handleInput = (event) => {
    event.target.setCustomValidity?.('');
    setDraft('');
  };

  return (
    <form onSubmit={handleSubmit} onInput={handleInput} aria-describedby={`${id}-help`} className="rounded-3xl border border-ink-100 bg-white p-8 sm:p-10 space-y-5">
      <h3 className="text-xl font-bold text-ink-900">{t.formTitle}</h3>
      <p id={`${id}-help`} className="text-sm text-ink-600 leading-relaxed">{copy.intro}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id={`${id}-name`} label={t.name} name="name" autoComplete="name" maxLength={160} required />
        <Field id={`${id}-email`} label={t.email} name="email" type="email" autoComplete="email" maxLength={254} required />
        <Field id={`${id}-company`} label={t.company} name="company" autoComplete="organization" maxLength={200} />
        <Field id={`${id}-phone`} label={t.phone} name="phone" type="tel" autoComplete="tel" maxLength={50} />
      </div>

      <Field id={`${id}-subject`} label={t.subject} name="subject" maxLength={160} required />

      <div>
        <label htmlFor={`${id}-message`} className="block text-sm font-semibold text-ink-700 mb-2">{t.message}<span className="text-orbis-600 ml-1" aria-hidden="true">*</span></label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          maxLength={2000}
          required
          className="w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-orbis-500 focus:ring-2 focus:ring-orbis-100 outline-none transition"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        {copy.submit}<Mail className="h-4 w-4" aria-hidden="true" />
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
        className="w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm focus:border-orbis-500 focus:ring-2 focus:ring-orbis-100 outline-none transition"
      />
    </div>
  );
}
