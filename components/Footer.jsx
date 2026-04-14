import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Youtube } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '@/config/site';
import { localizedHref } from '@/lib/locales';

export default function Footer({ locale, dict }) {
  const t = dict.footer;
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t.product,
      links: [
        { label: t.modules, href: '/modules' },
        { label: t.pricing, href: '/tarifs' },
        { label: t.demo, href: '/demo' },
        { label: t.industries, href: '/secteurs' },
      ],
    },
    {
      title: t.company,
      links: [
        { label: t.about, href: '/a-propos' },
        { label: t.contact, href: '/contact' },
        { label: t.blog, href: '/blog' },
      ],
    },
    {
      title: t.resources,
      links: [
        { label: t.documentation, href: '/docs' },
        { label: t.status, href: '/statut' },
      ],
    },
    {
      title: t.legal,
      links: [
        { label: t.privacy, href: '/confidentialite' },
        { label: t.terms, href: '/cgu' },
        { label: t.cookies, href: '/cookies' },
      ],
    },
  ];

  return (
    <footer className="relative bg-ink-950 text-ink-300 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="relative container-orbis py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="[&_span]:text-white">
              <Logo locale={locale} />
            </div>
            <p className="mt-5 text-base text-ink-400 max-w-sm">{t.tagline}</p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-orbis-400 mt-0.5 flex-shrink-0" />
                <span>{SITE.address[locale]}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orbis-400 flex-shrink-0" />
                <a href={`tel:${SITE.phone}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orbis-400 flex-shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href={SITE.social.linkedin}
                aria-label="LinkedIn"
                className="rounded-full bg-white/5 p-2 hover:bg-orbis-600 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.facebook}
                aria-label="Facebook"
                className="rounded-full bg-white/5 p-2 hover:bg-orbis-600 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.twitter}
                aria-label="Twitter"
                className="rounded-full bg-white/5 p-2 hover:bg-orbis-600 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.youtube}
                aria-label="YouTube"
                className="rounded-full bg-white/5 p-2 hover:bg-orbis-600 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={localizedHref(locale, link.href)}
                        className="text-sm text-ink-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ink-500">
            © {year} {SITE.legalName}. {t.rights}
          </p>
          <p className="text-sm text-ink-500 inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-orbis-500 animate-pulse" />
            {t.madeIn}
          </p>
        </div>
      </div>
    </footer>
  );
}
