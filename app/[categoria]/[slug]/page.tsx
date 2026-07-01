import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCategory } from '@/lib/site';
import { getAllArticles, getArticle } from '@/lib/articles';
import { buildMetadata, articleJsonLd } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { Mdx } from '@/components/mdx';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles().map((a) => ({
    categoria: a.category,
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string; slug: string }>;
}): Promise<Metadata> {
  const { categoria, slug } = await params;
  const article = getArticle(categoria, slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/${categoria}/${slug}`,
    image: article.image,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ categoria: string; slug: string }>;
}) {
  const { categoria, slug } = await params;
  const article = getArticle(categoria, slug);
  const category = getCategory(categoria);
  if (!article || !category) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: 'Inicio', url: '/' },
          { name: category.name, url: `/${category.slug}` },
          { name: article.title, url: `/${categoria}/${slug}` },
        ]}
      />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          {article.description}
        </p>
        <div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>·</span>
          <span>{article.readingMinutes} min de lectura</span>
        </div>
      </header>

      {/* Disclosure de afiliados visible (requisito legal). */}
      <p className="mb-8 rounded-lg bg-gray-50 px-4 py-3 text-xs text-gray-500 dark:bg-gray-900">
        Esta página contiene enlaces de afiliados. Si compras a través de
        ellos podemos recibir una comisión sin coste adicional para ti.
      </p>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <Mdx source={article.content} />
      </div>

      <JsonLd data={articleJsonLd(article)} />
    </article>
  );
}
