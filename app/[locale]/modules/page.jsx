import Link from 'next/link';
import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { getDictionary, localizedHref } from '@/lib/i18n';
import { MODULES } from '@/config/modules';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.modulesPage.title,
    description: dict.modulesPage.subtitle,
  };
}

export default async function ModulesPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.modulesPage.eyebrow}
        title={dict.modulesPage.title}
        subtitle={dict.modulesPage.subtitle}
      />
      <section className="pb-20">
        <div className="container-orbis">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MODULES.map((mod) => {
              const Icon = Icons[mod.icon] ?? Icons.Box;
              return (
                <Link
                  key={mod.slug}
                  href={localizedHref(locale, `/modules/${mod.slug}`)}
                  className="group rounded-3xl border border-ink-100 bg-white p-8 hover:border-orbis-200 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className={`inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${mod.color} text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-ink-900 flex items-center gap-2">
                        {mod.name[locale]}
                        <ArrowUpRight className="h-4 w-4 text-orbis-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="mt-2 text-ink-600">{mod.long[locale]}</p>
                    </div>
                  </div>
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
