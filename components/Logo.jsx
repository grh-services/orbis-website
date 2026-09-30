import Link from 'next/link';
import Image from 'next/image';
import { localizedHref } from '@/lib/locales';
import styles from './SiteChrome.module.css';

export default function Logo({ locale = 'fr', className = '', tone = 'dark' }) {
  return (
    <Link href={localizedHref(locale, '/')}
      className={`${styles.logo} ${tone === 'light' ? styles.logoLight : ''} ${className}`}
      aria-label={locale === 'en' ? 'Orbis ERP — Home' : 'Orbis ERP — Accueil'}>
      <span className={styles.logoMark} aria-hidden="true">
        <Image src="/brand/logo-orbis.png" alt="" width={256} height={256} sizes="44px" />
      </span>
      <span className={styles.logoType}>
        <span className={styles.logoName}>Orbis</span>
        <span className={styles.logoDescriptor}>ERP</span>
      </span>
    </Link>
  );
}
