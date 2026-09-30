'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { NAV_LINKS } from '@/config/site';
import { localizedHref } from '@/lib/locales';
import styles from './SiteChrome.module.css';

export default function Header({ locale, dict }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef(null);
  const homeHref = localizedHref(locale, '/');
  const isHome = pathname === homeHref || pathname === `${homeHref}/` || pathname === '/';
  const isEnglish = locale === 'en';
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1180px)');
    const onViewportChange = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onViewportChange);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onViewportChange);
    };
  }, [open]);

  const navigation = (mobile = false) => NAV_LINKS.map((link) => {
    const href = localizedHref(locale, link.href);
    const active = link.href === '/' ? isHome : pathname === href || pathname?.startsWith(`${href}/`);
    return (
      <Link key={link.href} href={href} onClick={mobile ? closeMenu : undefined}
        className={styles.navLink} aria-current={active ? 'page' : undefined}>
        {link.label[locale]}
      </Link>
    );
  });

  return (
    <header className={`${styles.header} ${isHome ? styles.headerDark : styles.headerLight} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.headerInner}>
        <Logo locale={locale} tone={isHome ? 'light' : 'dark'} />
        <nav className={styles.desktopNav} aria-label={isEnglish ? 'Main navigation' : 'Navigation principale'}>
          {navigation()}
        </nav>
        <div className={styles.desktopActions}>
          <LanguageSwitcher locale={locale} tone={isHome ? 'light' : 'dark'} />
          <a href="https://app.orbisloura.com" className={styles.loginLink}>
            {isEnglish ? 'Log in' : 'Se connecter'}
          </a>
          <Link href={localizedHref(locale, '/demo')} className={styles.headerCta}>
            {dict.common.bookDemo}<ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <button ref={menuButton} type="button" className={styles.menuButton}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
          aria-expanded={open} aria-controls="orbis-mobile-navigation">
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
      <div id="orbis-mobile-navigation" className={styles.mobilePanel} hidden={!open}>
        <nav className={styles.mobileNav} aria-label={isEnglish ? 'Mobile navigation' : 'Navigation mobile'}>
          {navigation(true)}
        </nav>
        <div className={styles.mobileActions}>
          <LanguageSwitcher locale={locale} tone={isHome ? 'light' : 'dark'} />
          <a href="https://app.orbisloura.com" className={styles.loginLink} onClick={closeMenu}>
            {isEnglish ? 'Log in' : 'Se connecter'}<ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <Link href={localizedHref(locale, '/demo')} className={styles.headerCta} onClick={closeMenu}>
            {dict.common.bookDemo}<ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
