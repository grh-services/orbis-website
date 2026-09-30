import { Compass, Eye, Heart, Sparkles, Building2 } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { SITE } from '@/config/site';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

const VALUE_ICONS = [Building2, Heart, Compass, Sparkles];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.about.title,
    description: dict.about.subtitle,
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.about;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <section className="section">
        <div className="container-orbis grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-ink-100 bg-white p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orbis-50 text-orbis-600">
              <Compass className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-ink-900">{t.missionTitle}</h2>
            <p className="mt-3 text-ink-600 leading-relaxed">{t.missionBody}</p>
          </div>
          <div className="rounded-3xl bg-orbis-gradient text-white p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Eye className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-2xl font-bold">{t.visionTitle}</h2>
              <p className="mt-3 text-white/85 leading-relaxed">{t.visionBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ink-50/50">
        <div className="container-orbis">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-2">{t.valuesTitle}</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((v, i) => {
              const Icon = VALUE_ICONS[i] ?? Sparkles;
              return (
                <div key={v.title} className="rounded-3xl border border-ink-100 bg-white p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orbis-50 text-orbis-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-orbis">
          <div className="rounded-[2rem] border border-ink-100 bg-gradient-to-br from-white to-orbis-50/40 p-10 sm:p-14 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orbis-gradient text-white shadow-lg">
              <Building2 className="h-6 w-6" />
            </span>
            <h2 className="mt-5 heading-3">{SITE.legalName}</h2>
            <p className="mt-3 text-ink-600 max-w-2xl mx-auto">
              {locale === 'fr'
                ? 'Éditeur d\'Orbis ERP, GRH-Services accompagne depuis Conakry les entreprises africaines dans leur transformation digitale.'
                : 'Publisher of Orbis ERP, GRH-Services supports African businesses in their digital transformation from Conakry.'}
            </p>
            <p className="mt-4 text-sm text-ink-500">{SITE.address[locale]}</p>
          </div>
        </div>
      </section>

      <CTASection locale={locale} dict={dict} />
    </>
  );
}
