'use client';

import { usePathname, useRouter } from 'next/navigation';
import { LOCALES } from '@/lib/locales';
import styles from './SiteChrome.module.css';

export default function LanguageSwitcher({ locale, tone = 'dark' }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (target) => {
    if (target === locale) return;
    const segments = pathname.split('/');
    if (LOCALES.includes(segments[1])) segments[1] = target;
    else segments.splice(1, 0, target);
    document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000; SameSite=Lax`;
    router.push(segments.join('/') || `/${target}`);
  };

  return (
    <div className={`${styles.languageSwitcher} ${tone === 'light' ? styles.languageLight : ''}`}
      role="group" aria-label={locale === 'en' ? 'Language' : 'Langue'}>
      {LOCALES.map((language) => (
        <button key={language} type="button" onClick={() => switchTo(language)}
          aria-label={language === 'fr' ? 'Français' : 'English'}
          aria-pressed={language === locale} lang={language}>
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
