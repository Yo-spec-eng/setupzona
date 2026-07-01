import Link from 'next/link';
import type { Article } from '@/lib/articles';
import { getCategory } from '@/lib/site';

// Tarjeta de artículo para listados (home y categorías).
export function ArticleCard({ article }: { article: Article }) {
  const category = getCategory(article.category);
  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition hover:border-brand hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand">
        {category?.name ?? article.category}
      </span>
      <h3 className="mb-2 text-lg font-bold leading-snug group-hover:text-brand">
        {article.title}
      </h3>
      <p className="line-clamp-2 flex-1 text-sm text-gray-600 dark:text-gray-400">
        {article.description}
      </p>
      <span className="mt-4 text-xs text-gray-400">
        {article.readingMinutes} min de lectura
      </span>
    </Link>
  );
}
