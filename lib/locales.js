export const LOCALES = ['fr', 'en'];
export const DEFAULT_LOCALE = 'fr';

export function isValidLocale(locale) {
  return LOCALES.includes(locale);
}

export function localizedHref(locale, path = '/') {
  if (typeof path === 'string' && path.startsWith('http')) return path;
  const cleaned = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${cleaned === '/' ? '' : cleaned}`;
}
