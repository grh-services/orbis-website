import { SITE } from '@/config/site';
import { LOCALES } from '@/lib/i18n';
import { MODULES } from '@/config/modules';

const STATIC_PATHS = [
  '',
  '/modules',
  '/secteurs',
  '/tarifs',
  '/a-propos',
  '/contact',
  '/demo',
];

export default function sitemap() {
  const now = new Date();
  const entries = [];

  for (const locale of LOCALES) {
    for (const path of STATIC_PATHS) {
      entries.push({
        url: `${SITE.url}/${locale}${path}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: path === '' ? 1.0 : 0.7,
      });
    }
    for (const mod of MODULES) {
      entries.push({
        url: `${SITE.url}/${locale}/modules/${mod.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return entries;
}
