import Link from 'next/link';
import { localizedHref } from '@/lib/locales';

export default function Logo({ locale = 'fr', className = '' }) {
  return (
    <Link
      href={localizedHref(locale, '/')}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Orbis ERP"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-orbis-gradient shadow-soft transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
        >
          <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2.2" />
          <ellipse cx="16" cy="16" rx="11" ry="4.5" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="16" cy="16" r="2.6" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-ink-900">Orbis</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orbis-600">
          ERP
        </span>
      </span>
    </Link>
  );
}
