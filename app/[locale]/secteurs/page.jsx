import * as Icons from 'lucide-react';
import { Check } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { SECTORS } from '@/config/sectors';
import { getModuleBySlug } from '@/config/modules';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export async function generateMetadata({ params }) {
  const dict = getDictionary(params.locale);
  return {
    title: dict.sectorsPage.title,
    description: dict.sectorsPage.subtitle,
  };
}

export default function SectorsPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const t = dict.sectorsPage;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <section className="pb-20 space-y-10">
        <div className="container-orbis space-y-10">
          {SECTORS.map((sector, idx) => {
            const Icon = Icons[sector.icon] ?? Icons.Briefcase;
            const reverse = idx % 2 === 1;
            return (
              <div
                key={sector.slug}
                className="rounded-[2rem] border border-ink-100 bg-white p-8 sm:p-12 shadow-sm"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}>
                  <div className="lg:col-span-7">
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${sector.color} text-white shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-3xl font-bold text-ink-900">{sector.name[locale]}</h2>
                    <p className="mt-2 text-lg text-orbis-700 font-semibold">{sector.tagline[locale]}</p>
                    <p className="mt-4 text-ink-600">{sector.description[locale]}</p>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                        {t.keyModules}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {sector.keyModules.map((slug) => {
                          const m = getModuleBySlug(slug);
                          if (!m) return null;
                          return (
                            <span
                              key={slug}
                              className="rounded-full bg-orbis-50 px-3 py-1.5 text-xs font-semibold text-orbis-700 ring-1 ring-orbis-100"
                            >
                              {m.name[locale]}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-3xl bg-gradient-to-br from-ink-50 to-orbis-50/40 p-7">
                      <p className="text-xs font-semibold uppercase tracking-wider text-orbis-700">
                        {t.benefits}
                      </p>
                      <ul className="mt-4 space-y-3">
                        {sector.benefits.map((b) => (
                          <li key={b[locale]} className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-orbis-200">
                              <Check className="h-3 w-3 text-orbis-800" />
                            </span>
                            <span className="text-sm text-ink-800">{b[locale]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CTASection locale={locale} dict={dict} />
    </>
  );
}
