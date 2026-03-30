import { client } from '@/sanity/lib/client';
import { pageBySlugQuery, allPagesQuery } from '@/sanity/lib/queries';
import BlockRenderer from '@/components/BlockRenderer';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const pages = await client.fetch(allPagesQuery);
  return pages
    .filter((p) => p.slug?.current)
    .map((p) => ({ slug: p.slug.current }));
}

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
  const page = await client.fetch(pageBySlugQuery, { slug });
  if (!page) notFound();
  return <BlockRenderer blocks={page.pageBuilder} />;
}
