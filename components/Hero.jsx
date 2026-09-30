'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { localizedHref } from '@/lib/locales';
import styles from './Hero.module.css';

const SLIDES = [
  { key: 'terrain', fr: 'Terrain & opérations', en: 'Field & operations', altFr: 'Une équipe de logistique examine une tablette dans un entrepôt.', altEn: 'A logistics team reviews a tablet in a warehouse.' },
  { key: 'rh', fr: 'Ressources humaines', en: 'Human resources', altFr: 'Des professionnels travaillent ensemble à la planification de leurs activités.', altEn: 'Professionals work together to plan their activities.' },
  { key: 'finance', fr: 'Finance & pilotage', en: 'Finance & management', altFr: 'Une équipe financière analyse ses documents de travail.', altEn: 'A finance team reviews its working documents.' },
  { key: 'flotte', fr: 'Flotte & transport', en: 'Fleet & transport', altFr: 'Un responsable de flotte consulte une tablette dans un dépôt de transport.', altEn: 'A fleet manager uses a tablet at a transport depot.' },
];

export default function Hero({ locale }) {
  const english = locale === 'en';
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [explicitPlay, setExplicitPlay] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotion = () => setReducedMotion(media.matches);
    const onVisibility = () => setHidden(document.hidden);
    onMotion(); onVisibility();
    media.addEventListener('change', onMotion);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      media.removeEventListener('change', onMotion);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  const running = !paused && !reducedMotion && !hidden && (explicitPlay || (!hovered && !focused));
  useEffect(() => {
    if (!running) return undefined;
    const timer = window.setTimeout(() => setCurrent((value) => (value + 1) % SLIDES.length), 6000);
    return () => window.clearTimeout(timer);
  }, [current, running]);

  const select = (index) => {
    const next = (index + SLIDES.length) % SLIDES.length;
    setCurrent(next); setPaused(true); setExplicitPlay(false);
    setAnnouncement(`${next + 1} / ${SLIDES.length} — ${SLIDES[next][locale]}`);
  };
  const toggle = () => {
    setPaused((value) => !value);
    setExplicitPlay(paused);
  };

  return (
    <section className={styles.hero} aria-labelledby="orbis-hero-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{english ? 'LEAD. CONNECT. MOVE FORWARD.' : 'PILOTER. RELIER. AVANCER.'}</p>
          <h1 id="orbis-hero-title" className={styles.title}>
            <span>{english ? <>A complete <br />vision.</> : <>Une vision <br />complète.</>}</span>
            <em>{english ? <>Total <br />control.</> : <>Un contrôle <br />total.</>}</em>
          </h1>
          <p className={styles.description}>{english ? 'Your people, your operations and your decisions. In one connected environment.' : 'Vos équipes, vos opérations et vos décisions. Dans un même environnement.'}</p>
          <Link href="#plateforme" className={styles.cta}>{english ? 'Discover Orbis' : 'Découvrir Orbis'}<ArrowRight size={21} aria-hidden="true" /></Link>
          <Link href={localizedHref(locale, '/demo')} className={styles.secondary}>{english ? 'Request a personal demo' : 'Demander une démonstration'}</Link>
        </div>
        <div className={styles.carousel} role="region" aria-roledescription={english ? 'carousel' : 'diaporama'} aria-label={english ? 'People and operations connected by Orbis' : 'Les métiers connectés par Orbis'}
          onPointerEnter={(event) => { if (event.pointerType !== 'touch') { setHovered(true); setExplicitPlay(false); } }}
          onPointerLeave={() => setHovered(false)}
          onFocusCapture={() => { setFocused(true); setExplicitPlay(false); }}
          onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
          <div className={styles.orbit}>
            <div className={styles.photoWindow}>
              {SLIDES.map((slide, index) => (
                <div key={slide.key} className={`${styles.slide} ${index === current ? styles.active : ''}`} aria-hidden={index !== current} role="group" aria-roledescription={english ? 'slide' : 'diapositive'} aria-label={`${index + 1} / 4 — ${slide[locale]}`}>
                  <Image src={`/images/orbis/hero-${slide.key}-1200.webp`} alt={english ? slide.altEn : slide.altFr} fill sizes="(max-width: 700px) 95vw, (max-width: 1440px) 56vw, 750px" priority={index === 0} quality={85} />
                </div>
              ))}
            </div>
            <div className={styles.orbitCyan} aria-hidden="true" /><div className={styles.orbitGreen} aria-hidden="true" />
            <span className={styles.nodeOne} aria-hidden="true" /><span className={styles.nodeTwo} aria-hidden="true" />
          </div>
          <div className={styles.caption}><span>{SLIDES[current][locale]}</span><span>{String(current + 1).padStart(2, '0')} / 04</span></div>
          <div className={styles.controls}>
            <div className={styles.dots} aria-label={english ? 'Select a photo' : 'Choisir une photo'}>
              {SLIDES.map((slide, index) => <button key={slide.key} type="button" aria-label={`Photo ${index + 1} : ${slide[locale]}`} aria-pressed={index === current} onClick={() => select(index)}><span /></button>)}
            </div>
            <div className={styles.transport}>
              <button type="button" onClick={() => select(current - 1)} aria-label={english ? 'Previous photo' : 'Photo précédente'}><ChevronLeft size={19} /></button>
              <button className={styles.pause} type="button" onClick={toggle} disabled={reducedMotion} aria-label={reducedMotion ? (english ? 'Automatic motion disabled' : 'Mouvement automatique désactivé') : paused ? (english ? 'Play slideshow' : 'Reprendre le défilement') : (english ? 'Pause slideshow' : 'Mettre en pause')}>
                {paused || reducedMotion ? <Play size={13} /> : <Pause size={13} />}<span>{reducedMotion ? (english ? 'Off' : 'Arrêt') : paused ? (english ? 'Play' : 'Lecture') : 'Pause'}</span>
              </button>
              <button type="button" onClick={() => select(current + 1)} aria-label={english ? 'Next photo' : 'Photo suivante'}><ChevronRight size={19} /></button>
            </div>
          </div>
          <span className={styles.visuallyHidden} role="status" aria-live="polite">{announcement}</span>
        </div>
      </div>
      <div className={styles.footline}><span>{english ? 'FROM GUINEA. CLOSE TO YOUR OPERATIONS.' : 'DEPUIS LA GUINÉE, AU PLUS PRÈS DE VOS OPÉRATIONS.'}</span><span>01 / {english ? 'ORBIS IN ACTION' : 'ORBIS EN ACTION'}</span></div>
    </section>
  );
}
