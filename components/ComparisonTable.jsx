'use client';

import { Check, Minus } from 'lucide-react';
import { MODULES } from '@/config/modules';

const PLAN_MATRIX = {
  starter: ['rh', 'finance', 'commercial'],
  business: ['rh', 'finance', 'commercial', 'crm', 'achats-stock', 'projets'],
  enterprise: MODULES.map((m) => m.slug),
};

export default function ComparisonTable({ locale, dict }) {
  const t = dict.pricing;

  return (
    <div className="mt-24">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="heading-3">{t.comparisonTitle}</h3>
      </div>

      <div className="mt-10 overflow-x-auto rounded-3xl border border-ink-100 bg-white">
        <table className="w-full text-left">
          <thead className="bg-ink-50/70">
            <tr>
              <th className="p-5 text-sm font-semibold text-ink-700">{t.module}</th>
              <th className="p-5 text-sm font-semibold text-ink-700 text-center">Starter</th>
              <th className="p-5 text-sm font-semibold text-orbis-700 text-center">Business</th>
              <th className="p-5 text-sm font-semibold text-ink-700 text-center">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {MODULES.map((mod) => (
              <tr key={mod.slug} className="border-t border-ink-100">
                <td className="p-5">
                  <div className="font-semibold text-ink-900">{mod.name[locale]}</div>
                  <div className="text-xs text-ink-500 mt-1">{mod.short[locale]}</div>
                </td>
                {['starter', 'business', 'enterprise'].map((plan) => (
                  <td key={plan} className="p-5 text-center">
                    {PLAN_MATRIX[plan].includes(mod.slug) ? (
                      <Check className="h-5 w-5 text-orbis-600 inline-block" />
                    ) : (
                      <Minus className="h-5 w-5 text-ink-300 inline-block" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
