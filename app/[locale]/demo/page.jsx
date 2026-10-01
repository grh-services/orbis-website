import { redirect } from 'next/navigation';
import { parseContactContext, contactContextQuery } from '@/lib/contactContext';

export const dynamic = 'force-dynamic';

// Preserve existing demo links while using the same contextual contact journey.
export default async function DemoPage({params,searchParams}) {
  const {locale}=await params;
  const context=parseContactContext({...await searchParams,intent:'demo'});
  redirect(`/${locale}/contact?${contactContextQuery(context)}`);
}
