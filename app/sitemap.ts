import type { MetadataRoute } from 'next';
import { SITE, CATEGORIES } from '@/lib/site';
import { getAllArticles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = ['', '/sobre-nosotros', '/contacto'].map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : 0.5,
  }));

  const categoryPages = CATEGORIES.map((c) => ({
    url: `${SITE.url}/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const articlePages = getAllArticles().map((a) => ({
    url: `${SITE.url}/${a.category}/${a.slug}`,
    lastModified: new Date(a.updated ?? a.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
