import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export type ArticleMeta = {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  keywords: string[];
  image?: string;
  cover?: string; // imagen de portada (foto real); si falta, se usa un placeholder de marca
  featured?: boolean;
  readingMinutes: number;
};

export type Article = ArticleMeta & {
  content: string;
};

// Lee un .mdx y devuelve frontmatter + cuerpo.
function parseFile(category: string, fileName: string): Article {
  const slug = fileName.replace(/\.mdx$/, '');
  const fullPath = path.join(CONTENT_DIR, category, fileName);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);

  return {
    slug,
    category,
    title: data.title ?? slug,
    description: data.description ?? '',
    date: data.date ?? new Date().toISOString().slice(0, 10),
    updated: data.updated ?? undefined,
    keywords: data.keywords ?? [],
    image: data.image ?? undefined,
    cover: data.cover ?? undefined,
    featured: data.featured ?? false,
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    content,
  };
}

// Devuelve todos los artículos de una categoría (vacío si no existe la carpeta).
export function getArticlesByCategory(category: string): Article[] {
  const dir = path.join(CONTENT_DIR, category);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => parseFile(category, f))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Devuelve TODOS los artículos del sitio (para sitemap y home).
export function getAllArticles(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const categories = fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  return categories
    .flatMap((cat) => getArticlesByCategory(cat))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(category: string, slug: string): Article | null {
  const fullPath = path.join(CONTENT_DIR, category, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  return parseFile(category, `${slug}.mdx`);
}

export function getFeaturedArticles(limit = 6): Article[] {
  const all = getAllArticles();
  const featured = all.filter((a) => a.featured);
  return (featured.length ? featured : all).slice(0, limit);
}
