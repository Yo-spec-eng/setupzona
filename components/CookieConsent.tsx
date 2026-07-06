'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Banner de consentimiento de cookies (RGPD). Guarda la elección en
// localStorage. Cuando actives AdSense/Analytics, condiciona su carga a
// que getCookieConsent() === 'accepted'.
export function getCookieConsent(): 'accepted' | 'rejected' | null {
  if (typeof window === 'undefined') return null;
  return (localStorage.getItem('cookie-consent') as
    | 'accepted'
    | 'rejected'
    | null) ?? null;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookieConsent()) setVisible(true);
  }, []);

  function choose(value: 'accepted' | 'rejected') {
    localStorage.setItem('cookie-consent', value);
    setVisible(false);
    // Notifica a otros scripts (p. ej. para cargar AdSense tras aceptar).
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: value }));
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 p-4 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Usamos cookies propias y de terceros para analizar el tráfico y mostrar
          publicidad. Consulta nuestra{' '}
          <Link href="/politica-cookies" className="font-medium text-brand hover:underline">
            política de cookies
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => choose('rejected')}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Rechazar
          </button>
          <button
            onClick={() => choose('accepted')}
            className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
