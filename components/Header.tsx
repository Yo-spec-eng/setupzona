import Link from 'next/link';
import { SITE, CATEGORIES } from '@/lib/site';
import { ThemeToggle } from './ThemeToggle';

const NAV = CATEGORIES.slice(0, 5); // las principales en la barra

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          Setup<span className="text-brand">Zona</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
          {NAV.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="text-gray-600 transition hover:text-brand dark:text-gray-300"
            >
              {c.name}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
