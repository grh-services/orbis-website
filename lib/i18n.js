import 'server-only';
import fr from '@/dictionaries/fr.json';
import en from '@/dictionaries/en.json';
import { DEFAULT_LOCALE } from '@/lib/locales';

export { LOCALES, DEFAULT_LOCALE, isValidLocale, localizedHref } from '@/lib/locales';

const dictionaries = { fr, en };

export function getDictionary(locale) {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
