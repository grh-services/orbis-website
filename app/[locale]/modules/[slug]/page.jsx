import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as Icons from 'lucide-react';
import { ArrowLeft, Check, ArrowUpRight } from 'lucide-react';
import { getDictionary, localizedHref, LOCALES } from '@/lib/i18n';
import { MODULES, getModuleBySlug } from '@/config/modules';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    MODULES.map((m) => ({ locale, slug: m.slug }))
  );
}

export async function generateMetadata({ params }) {
  const mod = getModuleBySlug(params.slug);
  if (!mod) return {};
  return {
    title: mod.name[params.locale],
    description: mod.long[params.locale],
  };
}

export default function ModuleDetailPage({ params }) {
  const { locale, slug } = params;
  const dict = getDictionary(locale);
  const mod = getModuleBySlug(slug);
  if (!mod) notFound();

  const Icon = Icons[mod.icon] ?? Icons.Box;
  const others = MODULES.filter((m) => m.slug !== slug).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-orbis-50/60 via-white to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 -z-10" />
        <div className="container-orbis pt-16 pb-20">
          <Link
            href={localizedHref(locale, '/modules')}
            className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-orbis-600 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {dict.modulesPage.backToModules}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className={`inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${mod.color} text-white shadow-lg`}>
                <Icon className="h-7 w-7" />
              </div>
              <h1 className="mt-6 heading-1">{mod.name[locale]}</h1>
              <p className="mt-5 lead">{mod.long[locale]}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href={localizedHref(locale, '/contact')} className="btn-primary">
                  {dict.common.freeTrial}
                </Link>
                <Link href={localizedHref(locale, '/demo')} className="btn-secondary">
                  {dict.common.bookDemo}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-soft">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-orbis-700">
                  {dict.modulesPage.keyFeatures}
                </h2>
                <ul className="mt-5 space-y-3">
                  {mod.features.map((f) => (
                    <li key={f[locale]} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-orbis-100">
                        <Check className="h-3 w-3 text-orbis-700" />
                      </span>
                      <span className="text-ink-700">{f[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-orbis">
          <h2 className="heading-3 text-center">{dict.modulesPage.discoverOthers}</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {others.map((m) => {
              const Mi = Icons[m.icon] ?? Icons.Box;
              return (
                <Link
                  key={m.slug}
                  href={localizedHref(locale, `/modules/${m.slug}`)}
                  className="group rounded-3xl border border-ink-100 bg-white p-6 hover:border-orbis-200 hover:shadow-soft transition-all"
                >
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${m.color} text-white`}>
                    <Mi className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-ink-900 flex items-center gap-1.5">
                    {m.name[locale]}
                    <ArrowUpRight className="h-3.5 w-3.5 text-orbis-500 opacity-0 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-1 text-sm text-ink-600">{m.short[locale]}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection locale={locale} dict={dict} />
    </>
  );
}
