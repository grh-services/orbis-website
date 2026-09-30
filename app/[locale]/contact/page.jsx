import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { SITE } from '@/config/site';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.contact.title,
    description: dict.contact.subtitle,
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.contact;
  const whatsappNumber = String(SITE.whatsapp ?? '').replace(/\D/g, '');
  const waLink = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(dict.whatsapp.message)}` : null;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <section className="pb-24">
        <div className="container-orbis grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <ContactForm locale={locale} dict={dict} />
          </div>

          <aside className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl border border-ink-100 bg-white p-7">
              <h3 className="text-lg font-bold text-ink-900">{t.alt}</h3>
              <ul className="mt-5 space-y-4">
                {SITE.phone && <ContactRow
                  icon={Phone}
                  label={t.callUs}
                  value={SITE.phone}
                  href={`tel:${SITE.phone}`}
                />}
                <ContactRow
                  icon={Mail}
                  label={t.emailUs}
                  value={SITE.email}
                  href={`mailto:${SITE.email}`}
                />
                <ContactRow
                  icon={MapPin}
                  label={t.office}
                  value={SITE.address[locale]}
                />
              </ul>
            </div>

            {waLink && <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl bg-[#25D366] p-7 text-white hover:bg-[#1ebe5a] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-white/85">{t.whatsapp}</p>
                  <p className="text-lg font-bold">{t.whatsappCta}</p>
                </div>
              </div>
            </a>}
          </aside>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-orbis-50 text-orbis-600">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">{label}</p>
        <p className="text-sm font-medium text-ink-900 mt-0.5 break-words">{value}</p>
      </div>
    </>
  );
  return <li>{href
    ? <a href={href} className="flex items-start gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orbis-600">{content}</a>
    : <div className="flex items-start gap-3">{content}</div>}
  </li>;
}
