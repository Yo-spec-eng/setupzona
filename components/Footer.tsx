import Link from 'next/link';
import { SITE, CATEGORIES } from '@/lib/site';

const LEGAL = [
  { name: 'Sobre nosotros', href: '/sobre-nosotros' },
  { name: 'Contacto', href: '/contacto' },
  { name: 'Aviso legal', href: '/aviso-legal' },
  { name: 'Política de privacidad', href: '/politica-privacidad' },
  { name: 'Política de cookies', href: '/politica-cookies' },
  { name: 'Aviso de afiliados', href: '/aviso-afiliados' },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-lg font-extrabold">
              Setup<span className="text-brand">Zona</span>
            </p>
            <p className="mt-2 text-sm text-gray-500">{SITE.description}</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
              Categorías
            </p>
            <ul className="space-y-1 text-sm">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="text-gray-600 hover:text-brand dark:text-gray-300">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
              Información
            </p>
            <ul className="space-y-1 text-sm">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-600 hover:text-brand dark:text-gray-300">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-400 dark:border-gray-800">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Como Afiliado de Amazon,
            obtenemos ingresos por las compras adscritas que cumplen los
            requisitos aplicables.
          </p>
        </div>
      </div>
    </footer>
  );
}
