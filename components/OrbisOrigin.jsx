import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { localizedHref } from '@/lib/locales';
import styles from './OrbisOrigin.module.css';

export default function OrbisOrigin({ locale }) {
  const en = locale === 'en';
  return <section className={styles.section} aria-labelledby="orbis-origin-title">
    <div className={styles.inner}>
      <div className={styles.visual}><Image src="/images/orbis/globe-guinee-1000.webp" alt={en ? 'An illustrative globe connecting Guinea to the world.' : 'Un globe illustratif reliant la Guinée au monde.'} width={1000} height={667} sizes="(max-width: 700px) 100vw, 55vw" /></div>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>03 / {en ? 'THE ORBIS SPIRIT' : 'L’ESPRIT ORBIS'}</p>
        <h2 id="orbis-origin-title">{en ? 'From Guinea,' : 'Depuis la Guinée,'}<em>{en ? 'a broader perspective.' : 'une vision d’ensemble.'}</em></h2>
        <p className={styles.body}>{en ? <>Connect your teams.<br />Bring clarity to your decisions.</> : <>Relier les métiers.<br />Éclairer les décisions.</>}</p>
        <Link href={localizedHref(locale, '/a-propos')} className={styles.link}>{en ? 'Meet Orbis' : 'Découvrir Orbis'}<ArrowUpRight size={20} aria-hidden="true" /></Link>
      </div>
    </div>
    <p className={styles.credit}>{en ? 'Illustrative visuals generated for Orbis. No customer data is displayed.' : 'Visuels d’illustration générés pour Orbis. Aucune donnée client n’est présentée.'}</p>
  </section>;
}
