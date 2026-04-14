'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { LOCALES } from '@/lib/locales';

export default function LanguageSwitcher({ locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (target) => {
    if (target === locale) return;
    const segments = pathname.split('/');
    if (LOCALES.includes(segments[1])) {
      segments[1] = target;
    } else {
      segments.splice(1, 0, target);
    }
    document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000`;
    router.push(segments.join('/') || `/${target}`);
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-ink-200 bg-white/70 p-1 backdrop-blur">
      <Globe className="h-4 w-4 text-ink-500 ml-2" />
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
            l === locale
              ? 'bg-orbis-600 text-white shadow-sm'
              : 'text-ink-600 hover:text-orbis-600'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
