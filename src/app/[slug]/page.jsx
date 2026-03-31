import { client, draftClient } from '@/sanity/lib/client';
import { pageBySlugQuery } from '@/sanity/lib/queries';
import BlockRenderer from '@/components/BlockRenderer';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';

// Render on demand, cache for 60s
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await client.fetch(pageBySlugQuery, { slug });
  if (!page) return {};
  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription || '',
  };
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const sanityClient = isEnabled ? draftClient : client;
  const page = await sanityClient.fetch(pageBySlugQuery, { slug });
  if (!page) notFound();
  return <BlockRenderer blocks={page.pageBuilder} />;
}
