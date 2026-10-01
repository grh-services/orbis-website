'use client';

import { useId, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Copy, Mail } from 'lucide-react';
import { SITE } from '@/config/site';
import { MODULES } from '@/config/modules';
import { SECTOR_EXPERIENCES } from '@/config/sectorExperience';
import { parseContactContext } from '@/lib/contactContext';
import styles from './ContactExperience.module.css';

const COPY = {
  fr: {
    eyebrow: 'Un premier échange, concret', title: 'Parlons de', accent: 'votre organisation.',
    sideTitle: 'Votre contexte.', sideAccent: 'Le bon interlocuteur.',
    sideIntro: 'Une démonstration, un projet à chiffrer ou une question d’utilisation : précisez votre besoin pour orienter l’échange.',
    emailTitle: 'Écrivez-nous', locationTitle: 'Notre ancrage', location: 'Kipé, Conakry · Guinée',
    photoAlt: 'Illustration de professionnels échangeant autour d’un ordinateur',
    photoCaption: 'Visuel d’illustration · pas une photographie de nos locaux.', linkedin: 'Retrouver Orbis sur LinkedIn',
    intentLabel: 'Objet de la demande', name: 'Votre nom', email: 'E-mail professionnel', company: 'Organisation',
    sector: 'Votre secteur', module: 'Module concerné', modules: 'Modules à découvrir', selected: 'sélectionné(s)',
    users: 'Utilisateurs envisagés', plan: 'Formule envisagée', custom: 'Sur mesure', unspecified: 'À préciser', other: 'Autre activité', remove: 'Retirer',
    userOptions: ['1 à 15', '16 à 75', 'Plus de 75'], required: 'Veuillez renseigner ce champ.',
    note: 'Ce formulaire prépare un e-mail, sans l’envoyer. Vous pourrez le vérifier puis l’envoyer depuis votre messagerie. Aucun message n’est transmis automatiquement par ce site.',
    prepare: 'Préparer mon e-mail', ready: 'Votre e-mail est prêt. Il n’a pas été envoyé.',
    open: 'Ouvrir dans ma messagerie', copy: 'Copier le message', copied: 'Message copié.',
    copyFailed: 'La copie automatique est indisponible. Sélectionnez le texte ci-dessous et copiez-le.',
    fallback: 'Si votre messagerie ne s’ouvre pas ou si le texte y est tronqué, copiez le message complet ci-dessous et envoyez-le à',
    draftLabel: 'Message complet à copier', to: 'Destinataire', subject: 'Objet',
    processTitle: 'Et ensuite ?', steps: [
      ['Vous précisez le besoin.', 'Votre contexte et vos priorités donnent un point de départ à l’échange.'],
      ['Vous envoyez votre e-mail.', 'Vérifiez le message préparé et envoyez-le depuis votre messagerie.'],
      ['Nous définissons la suite.', 'Une démonstration, un périmètre de projet ou une réponse à votre question.'],
    ],
    intents: {
      demo: { label: 'Démonstration', title: 'Découvrir Orbis dans votre contexte.', intro: 'Indiquez votre activité et les métiers qui vous intéressent.', message: 'Votre besoin', placeholder: 'Les équipes concernées, les processus à réunir, ce que vous souhaitez découvrir…' },
      devis: { label: 'Devis', title: 'Donner un périmètre à votre projet.', intro: 'Précisez votre organisation, vos utilisateurs et vos priorités.', message: 'Votre projet', placeholder: 'Les modules envisagés, les utilisateurs concernés et vos priorités…' },
      support: { label: 'Assistance', title: 'Expliquer votre question d’utilisation.', intro: 'Indiquez le module concerné et les étapes qui posent problème. Ne transmettez aucun mot de passe ni donnée confidentielle.', message: 'Votre question', placeholder: 'Décrivez le problème sans mot de passe ni information confidentielle…' },
    },
  },
  en: {
    eyebrow: 'A practical first conversation', title: 'Let’s talk about', accent: 'your organization.',
    sideTitle: 'Your context.', sideAccent: 'The right conversation.',
    sideIntro: 'A demonstration, a project to scope or a question about using Orbis: tell us what you need to help focus the conversation.',
    emailTitle: 'Write to us', locationTitle: 'Our location', location: 'Kipé, Conakry · Guinea',
    photoAlt: 'Illustration of professionals talking around a laptop',
    photoCaption: 'Illustrative visual · not a photograph of our offices.', linkedin: 'Find Orbis on LinkedIn',
    intentLabel: 'Purpose of your request', name: 'Your name', email: 'Work email', company: 'Organization',
    sector: 'Your industry', module: 'Relevant module', modules: 'Modules to explore', selected: 'selected',
    users: 'Expected users', plan: 'Plan of interest', custom: 'Custom', unspecified: 'To be specified', other: 'Other industry', remove: 'Remove',
    userOptions: ['1 to 15', '16 to 75', 'More than 75'], required: 'Please fill in this field.',
    note: 'This form prepares an email without sending it. You can review it, then send it from your mail app. This website does not transmit any message automatically.',
    prepare: 'Prepare my email', ready: 'Your email is ready. It has not been sent.',
    open: 'Open in my mail app', copy: 'Copy message', copied: 'Message copied.',
    copyFailed: 'Automatic copying is unavailable. Select the text below and copy it.',
    fallback: 'If your mail app does not open or the text is cut short, copy the complete message below and send it to',
    draftLabel: 'Complete message to copy', to: 'To', subject: 'Subject',
    processTitle: 'What comes next?', steps: [
      ['You describe your needs.', 'Your context and priorities give the conversation a starting point.'],
      ['You send your email.', 'Review the prepared message and send it from your mail app.'],
      ['We define the next step.', 'A demonstration, a project scope or an answer to your question.'],
    ],
    intents: {
      demo: { label: 'Demonstration', title: 'Discover Orbis in your context.', intro: 'Tell us about your activity and the areas you want to explore.', message: 'Your needs', placeholder: 'The teams involved, processes to connect and what you would like to explore…' },
      devis: { label: 'Quote', title: 'Define the scope of your project.', intro: 'Tell us about your organization, users and priorities.', message: 'Your project', placeholder: 'Modules of interest, expected users and your priorities…' },
      support: { label: 'Support', title: 'Describe your question about Orbis.', intro: 'Identify the relevant module and the steps causing a problem. Do not include passwords or confidential information.', message: 'Your question', placeholder: 'Describe the issue without passwords or confidential information…' },
    },
  },
};

export default function ContactExperience({ locale = 'fr', initialContext = {} }) {
  const language = locale === 'en' ? 'en' : 'fr';
  const t = COPY[language];
  const id = useId();
  const draftField = useRef(null);
  const initial = parseContactContext({ ...initialContext, modules: Array.isArray(initialContext.modules) ? initialContext.modules.join(',') : initialContext.modules });
  const [intent, setIntent] = useState(initial.intent);
  const [plan, setPlan] = useState(initial.plan);
  const [sector, setSector] = useState(initial.sector);
  const [module, setModule] = useState(initial.modules[0] || '');
  const [modules, setModules] = useState(initial.modules);
  const [draft, setDraft] = useState(null);
  const [copyStatus, setCopyStatus] = useState('');
  const active = t.intents[intent];
  const moduleName = (slug) => MODULES.find((item) => item.slug === slug)?.name[language];
  const sectorName = SECTOR_EXPERIENCES.find((item) => item.slug === sector)?.name[language] || (sector === 'autre' ? t.other : '');
  const plans = { starter: 'Starter', business: 'Business', enterprise: 'Enterprise', custom: t.custom };

  function clearDraft(event) {
    event?.target?.setCustomValidity?.('');
    setDraft(null);
    setCopyStatus('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const value = (name) => String(values.get(name) || '').trim();
    for (const field of ['name', 'email', 'company', 'message']) {
      form.elements.namedItem(field).setCustomValidity(value(field) ? '' : t.required);
    }
    if (!form.reportValidity()) return;
    const subject = `Orbis ERP — ${active.label}`;
    const body = [
      `${t.name}: ${value('name')}`, `${t.email}: ${value('email')}`, `${t.company}: ${value('company')}`,
      intent !== 'support' && sectorName ? `${t.sector}: ${sectorName}` : null,
      intent === 'devis' && plan ? `${t.plan}: ${plans[plan]}` : null,
      intent === 'devis' && value('users') ? `${t.users}: ${value('users')}` : null,
      intent === 'support' && module ? `${t.module}: ${moduleName(module)}` : null,
      intent !== 'support' && modules.length ? `${t.modules}: ${modules.map(moduleName).join(', ')}` : null,
      '', `${active.message}:`, value('message'),
    ].filter((line) => line !== null).join('\r\n');
    setDraft({ href: `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, text: `${t.to}: ${SITE.email}\r\n${t.subject}: ${subject}\r\n\r\n${body}` });
    setCopyStatus('');
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft.text);
      setCopyStatus(t.copied);
    } catch {
      draftField.current?.focus();
      draftField.current?.select();
      setCopyStatus(t.copyFailed);
    }
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h1>{t.title}<br /><em>{t.accent}</em></h1>
        </div>
      </section>
      <div className={`${styles.wrap} ${styles.layout}`}>
        <aside className={styles.sidebar}>
          <p className={styles.eyebrow}>Orbis ERP · Conakry</p>
          <h2>{t.sideTitle}<br /><em>{t.sideAccent}</em></h2>
          <p className={styles.intro}>{t.sideIntro}</p>
          <dl className={styles.coordinates}>
            <div><dt>{t.emailTitle}</dt><dd><a href={`mailto:${SITE.email}`}>{SITE.email}<ArrowUpRight size={15} aria-hidden="true" /></a></dd></div>
            <div><dt>{t.locationTitle}</dt><dd>{t.location}</dd></div>
          </dl>
          <figure>
            <div className={styles.photo}><Image src="/images/orbis/hero-rh-1200.webp" alt={t.photoAlt} fill sizes="(max-width: 820px) 90vw, 36vw" /></div>
            <figcaption>{t.photoCaption}</figcaption>
          </figure>
          <a className={styles.textLink} href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer">{t.linkedin}<ArrowUpRight size={15} aria-hidden="true" /></a>
        </aside>
        <form className={styles.form} onSubmit={handleSubmit} onInput={clearDraft} noValidate aria-labelledby={`${id}-form-title`} aria-describedby={`${id}-note`}>
          <div className={styles.intents} role="group" aria-label={t.intentLabel}>
            {Object.entries(t.intents).map(([key, item]) => <button key={key} type="button" aria-pressed={intent === key} onClick={() => { setIntent(key); clearDraft(); }}>{item.label}</button>)}
          </div>
          <div className={styles.formHead}><h2 id={`${id}-form-title`}>{active.title}</h2><p>{active.intro}</p></div>
          <div className={styles.fields}>
            <label className={styles.field} htmlFor={`${id}-name`}>{t.name} *<input id={`${id}-name`} name="name" required maxLength={120} autoComplete="name" /></label>
            <label className={styles.field} htmlFor={`${id}-email`}>{t.email} *<input id={`${id}-email`} name="email" type="email" required maxLength={180} autoComplete="email" /></label>
          </div>
          <label className={styles.field} htmlFor={`${id}-company`}>{t.company} *<input id={`${id}-company`} name="company" required maxLength={160} autoComplete="organization" /></label>
          {intent !== 'support' ? <>
            <div className={styles.fields}>
              <label className={styles.field} htmlFor={`${id}-sector`}>{t.sector}<select id={`${id}-sector`} value={sector} onChange={(event) => { setSector(event.target.value); clearDraft(); }}><option value="">{t.unspecified}</option>{SECTOR_EXPERIENCES.map((item) => <option key={item.slug} value={item.slug}>{item.name[language]}</option>)}<option value="autre">{t.other}</option></select></label>
              {intent === 'devis' && <label className={styles.field} htmlFor={`${id}-users`}>{t.users}<select id={`${id}-users`} name="users" defaultValue=""><option value="">{t.unspecified}</option>{t.userOptions.map((item) => <option key={item}>{item}</option>)}</select></label>}
            </div>
            {intent === 'devis' && <label className={styles.field} htmlFor={`${id}-plan`}>{t.plan}<select id={`${id}-plan`} value={plan} onChange={(event) => { setPlan(event.target.value); clearDraft(); }}><option value="">{t.unspecified}</option>{Object.entries(plans).map(([key, name]) => <option key={key} value={key}>{name}</option>)}</select></label>}
            {(modules.length > 0 || (intent === 'devis' && plan)) && <div className={styles.chips}>
              {intent === 'devis' && plan && <button type="button" aria-label={`${t.remove} ${plans[plan]}`} onClick={() => { setPlan(''); clearDraft(); }}>{plans[plan]}<span aria-hidden="true">×</span></button>}
              {modules.map((slug) => <button key={slug} type="button" aria-label={`${t.remove} ${moduleName(slug)}`} onClick={() => { setModules((current) => current.filter((item) => item !== slug)); clearDraft(); }}>{moduleName(slug)}<span aria-hidden="true">×</span></button>)}
            </div>}
            <details className={styles.modulePicker} open={modules.length > 0 ? true : undefined}>
              <summary>{t.modules}<span>{modules.length} {t.selected}</span></summary>
              <fieldset><legend className={styles.srOnly}>{t.modules}</legend>{MODULES.map((item) => <label key={item.slug}><input type="checkbox" checked={modules.includes(item.slug)} onChange={(event) => { setModules((current) => event.target.checked ? [...current, item.slug] : current.filter((slug) => slug !== item.slug)); clearDraft(); }} />{item.name[language]}</label>)}</fieldset>
            </details>
          </> : <label className={styles.field} htmlFor={`${id}-module`}>{t.module}<select id={`${id}-module`} value={module} onChange={(event) => { setModule(event.target.value); clearDraft(); }}><option value="">{t.unspecified}</option>{MODULES.map((item) => <option key={item.slug} value={item.slug}>{item.name[language]}</option>)}</select></label>}
          <label className={styles.field} htmlFor={`${id}-message`}>{active.message} *<textarea id={`${id}-message`} name="message" required maxLength={2000} rows={5} placeholder={active.placeholder} /></label>
          <div className={styles.formEnd}>
            <p id={`${id}-note`}>{t.note}</p>
            <button type="submit" className={styles.button}>{t.prepare}<Mail size={17} aria-hidden="true" /></button>
          </div>
          <div role="status" aria-live="polite" aria-atomic="true" className={styles.status}>{draft && t.ready}</div>
          {draft && <section className={styles.response} aria-label={t.draftLabel}>
            <a className={styles.button} href={draft.href}>{t.open}<ArrowUpRight size={17} aria-hidden="true" /></a>
            <p>{t.fallback} <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
            <label className={styles.field} htmlFor={`${id}-draft`}>{t.draftLabel}<textarea id={`${id}-draft`} ref={draftField} readOnly value={draft.text} rows={10} /></label>
            <button type="button" className={styles.textLink} onClick={copyDraft}>{t.copy}<Copy size={16} aria-hidden="true" /></button>
            <p role="status" aria-live="polite">{copyStatus}</p>
          </section>}
        </form>
      </div>
      <section className={styles.process}>
        <div className={`${styles.wrap} ${styles.processInner}`}>
          <h2>{t.processTitle}</h2>
          <ol>{t.steps.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
        </div>
      </section>
    </div>
  );
}
