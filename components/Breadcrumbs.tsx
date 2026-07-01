import Link from 'next/link';
import { JsonLd } from './JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

export type Crumb = { name: string; url: string };

// Migas de pan visibles + schema BreadcrumbList.
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Migas de pan" className="mb-6 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={item.url} className="flex items-center gap-1">
            {i < items.length - 1 ? (
              <Link href={item.url} className="hover:text-brand">
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
            )}
            {i < items.length - 1 && <span aria-hidden>›</span>}
          </li>
        ))}
      </ol>
      <JsonLd data={breadcrumbJsonLd(items)} />
    </nav>
  );
}
