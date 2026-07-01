import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CATEGORIES, getCategory } from '@/lib/site';
import { getArticlesByCategory } from '@/lib/articles';
import { buildMetadata } from '@/lib/seo';
import { ArticleCard } from '@/components/ArticleCard';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const category = getCategory(categoria);
  if (!category) return {};
  return buildMetadata({
    title: category.title,
    description: category.description,
    path: `/${category.slug}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = getCategory(categoria);
  if (!category) notFound();

  const articles = getArticlesByCategory(categoria);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: 'Inicio', url: '/' },
          { name: category.name, url: `/${category.slug}` },
        ]}
      />
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {category.title}
      </h1>
      <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
        {category.description}
      </p>

      {articles.length > 0 ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-gray-500">
          Pronto publicaremos análisis en esta categoría.
        </p>
      )}
    </div>
  );
}
