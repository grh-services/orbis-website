import { SITE } from '@/config/site';
import { DEFAULT_LOCALE, LOCALES, localizedHref } from '@/lib/locales';

export function createPageMetadata({ locale, path, title, description }) {
  const language = LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  const canonical = new URL(localizedHref(language, path), SITE.url).toString();
  const socialTitle = `${title} — ${SITE.name}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries([
        ...LOCALES.map((translation) => [translation, new URL(localizedHref(translation, path), SITE.url).toString()]),
        ['x-default', new URL(localizedHref(DEFAULT_LOCALE, path), SITE.url).toString()],
      ]),
    },
    openGraph: {
      type: 'website',
      locale: language === 'fr' ? 'fr_GN' : 'en_US',
      alternateLocale: [language === 'fr' ? 'en_US' : 'fr_GN'],
      url: canonical,
      siteName: SITE.name,
      title: socialTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
    },
  };
}
