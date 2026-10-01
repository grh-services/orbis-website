import { MODULES } from '@/config/modules';
import { SECTOR_EXPERIENCES } from '@/config/sectorExperience';

const moduleSlugs = new Set(MODULES.map(({ slug }) => slug));
const sectorSlugs = new Set([...SECTOR_EXPERIENCES.map(({ slug }) => slug), 'autre']);
const intents = new Set(['demo', 'devis', 'support']);
const plans = new Set(['starter', 'business', 'enterprise', 'custom']);

/** Only known public identifiers can prefill the contact form. */
export function parseContactContext(searchParams = {}) {
  const value = (key) => {
    const raw = typeof searchParams?.get === 'function' ? searchParams.get(key) : searchParams?.[key];
    return typeof raw === 'string' ? raw : '';
  };
  return {
    intent: intents.has(value('intent')) ? value('intent') : 'demo',
    plan: plans.has(value('plan')) ? value('plan') : '',
    sector: sectorSlugs.has(value('sector')) ? value('sector') : '',
    modules: [...new Set([value('module'), ...value('modules').slice(0, 500).split(',')].filter((slug) => moduleSlugs.has(slug)))],
  };
}

export function contactContextQuery(context = {}) {
  const normalized = parseContactContext({
    ...context,
    modules: Array.isArray(context.modules) ? context.modules.join(',') : context.modules,
  });
  const query = new URLSearchParams({ intent: normalized.intent });
  for (const key of ['plan', 'sector']) {
    if (normalized[key]) query.set(key, normalized[key]);
  }
  if (normalized.modules.length) query.set('modules', normalized.modules.join(','));
  return query.toString();
}
