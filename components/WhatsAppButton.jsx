'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { SITE } from '@/config/site';

export default function WhatsAppButton({ locale, dict }) {
  const number = String(SITE.whatsapp ?? '').replace(/\D/g, '');
  if (!number) return null;
  const message = encodeURIComponent(dict.whatsapp.message);
  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.whatsapp.label}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40 group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-2xl shadow-emerald-500/40 hover:bg-[#1ebe5a] transition-colors"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="h-5 w-5 relative" />
      <span className="hidden sm:inline text-sm font-semibold relative">
        {dict.whatsapp.label}
      </span>
    </motion.a>
  );
}
