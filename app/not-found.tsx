import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        No hemos encontrado esta página.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
