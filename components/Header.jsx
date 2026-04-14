'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { NAV_LINKS } from '@/config/site';
import { localizedHref } from '@/lib/locales';

export default function Header({ locale, dict }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-ink-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-orbis flex h-20 items-center justify-between">
        <Logo locale={locale} />

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={localizedHref(locale, link.href)}
              className="text-sm font-medium text-ink-700 hover:text-orbis-600 transition-colors"
            >
              {link.label[locale]}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Link href={localizedHref(locale, '/demo')} className="btn-ghost">
            {dict.common.bookDemo}
          </Link>
          <Link href={localizedHref(locale, '/contact')} className="btn-primary">
            {dict.common.freeTrial}
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-ink-700 hover:bg-ink-100"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-ink-100 bg-white/95 backdrop-blur-xl"
          >
            <div className="container-orbis py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={localizedHref(locale, link.href)}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-ink-800 hover:text-orbis-600"
                >
                  {link.label[locale]}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <LanguageSwitcher locale={locale} />
              </div>
              <Link
                href={localizedHref(locale, '/demo')}
                onClick={() => setOpen(false)}
                className="btn-secondary w-full"
              >
                {dict.common.bookDemo}
              </Link>
              <Link
                href={localizedHref(locale, '/contact')}
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                {dict.common.freeTrial}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
