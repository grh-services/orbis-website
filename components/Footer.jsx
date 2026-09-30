import Link from 'next/link';
import { ArrowUpRight, Linkedin, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '@/config/site';
import { localizedHref } from '@/lib/locales';
import styles from './SiteChrome.module.css';

export default function Footer({ locale, dict }) {
  const t = dict.footer;
  const isEnglish = locale === 'en';
  const year = new Date().getFullYear();
  const linkedIn = SITE.social?.linkedin;
  const verifiedLinkedIn = linkedIn && /^https:\/\/(www\.)?linkedin\.com\/company\/146665993\/?$/.test(linkedIn);
  const columns = [
    { title: t.product, links: [
      { label: t.modules, href: '/modules' },
      { label: t.industries, href: '/secteurs' },
      { label: t.pricing, href: '/tarifs' },
      { label: t.demo, href: '/demo' },
    ] },
    { title: t.company, links: [
      { label: t.about, href: '/a-propos' },
      { label: t.contact, href: '/contact' },
    ] },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerInvitation}>
          <div>
            <p className={styles.eyebrow}>{isEnglish ? 'YOUR NEXT CHAPTER' : 'VOTRE PROCHAINE ÉTAPE'}</p>
            <h2>{isEnglish ? 'Built for the real world.' : 'Pensé pour le réel.'}</h2>
          </div>
          <Link href={localizedHref(locale, '/contact')} className={styles.footerCta}>
            {isEnglish ? 'Let’s talk about your project' : 'Parlons de votre projet'}
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Logo locale={locale} />
            <p>{SITE.tagline[locale]}</p>
            <span className={styles.footerOrigin}>{isEnglish ? 'From Guinea. Connected to your business.' : 'Depuis la Guinée. Au plus près de vos métiers.'}</span>
          </div>
          {columns.map((column) => (
            <nav key={column.title} className={styles.footerColumn} aria-label={column.title}>
              <h3>{column.title}</h3>
              <ul>{column.links.map((link) => (
                <li key={link.href}><Link href={localizedHref(locale, link.href)}>{link.label}</Link></li>
              ))}</ul>
            </nav>
          ))}
          <div className={styles.footerContact}>
            <h3>{t.contact}</h3>
            <a href={`mailto:${SITE.email}`}><Mail size={16} aria-hidden="true" /><span>{SITE.email}</span></a>
            <p><MapPin size={16} aria-hidden="true" /><span>{SITE.address[locale]}</span></p>
            {verifiedLinkedIn && (
              <a href={linkedIn} className={styles.socialLink} aria-label={isEnglish ? 'Orbis ERP on LinkedIn' : 'Orbis ERP sur LinkedIn'}>
                <Linkedin size={16} aria-hidden="true" /><span>LinkedIn</span><ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {year} {SITE.name} · {SITE.legalName}. {t.rights}</p>
          <p>{t.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
