import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '@/lib/site';
import { getFeaturedArticles } from '@/lib/articles';
import { ArticleCard } from '@/components/ArticleCard';

export default function HomePage() {
  const articles = getFeaturedArticles(6);

  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* Hero */}
      <section className="py-14 text-center sm:py-20">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Crea el setup de trabajo y gaming{' '}
          <span className="text-brand">perfecto</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Análisis honestos, comparativas y guías de escritorios, sillas y
          accesorios. Te ayudamos a elegir bien sin gastar de más.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/escritorios"
            className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
          >
            Ver escritorios
          </Link>
          <Link
            href="/guias"
            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Guías para empezar
          </Link>
        </div>

        {/* Imagen destacada */}
        <div className="relative mx-auto mt-12 aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/covers/mejores-escritorios-elevables.png"
            alt="Setup de escritorio moderno y ordenado"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
          />
        </div>
      </section>

      {/* Categorías */}
      <section className="py-8">
        <h2 className="mb-6 text-2xl font-bold">Explora por categoría</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="rounded-xl border border-gray-200 p-5 transition hover:border-brand hover:shadow-md dark:border-gray-800"
            >
              <h3 className="text-lg font-bold">{c.name}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Artículos destacados */}
      {articles.length > 0 && (
        <section className="py-8">
          <h2 className="mb-6 text-2xl font-bold">Últimos análisis</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard key={`${a.category}/${a.slug}`} article={a} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
