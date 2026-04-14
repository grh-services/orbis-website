import { Check } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import PageHeader from '@/components/PageHeader';
import DemoForm from '@/components/DemoForm';

export async function generateMetadata({ params }) {
  const dict = getDictionary(params.locale);
  return {
    title: dict.demo.title,
    description: dict.demo.subtitle,
  };
}

export default function DemoPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const t = dict.demo;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <section className="pb-24">
        <div className="container-orbis grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl bg-gradient-to-br from-orbis-50/60 to-white border border-orbis-100 p-8">
              <h3 className="text-xl font-bold text-ink-900">{t.what}</h3>
              <ul className="mt-5 space-y-4">
                {t.whatItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orbis-600 text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-ink-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7">
            <DemoForm locale={locale} dict={dict} />
          </div>
        </div>
      </section>
    </>
  );
}
