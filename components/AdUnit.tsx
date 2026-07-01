'use client';

import { useEffect } from 'react';
import { SITE } from '@/lib/site';

// Bloque de anuncio AdSense. Reserva altura mínima para no romper el CLS
// (Core Web Vitals). Pasa el slot de cada bloque desde tu panel de AdSense.
export function AdUnit({
  slot,
  format = 'auto',
  className = '',
}: {
  slot: string;
  format?: string;
  className?: string;
}) {
  useEffect(() => {
    try {
      // @ts-expect-error - adsbygoogle lo inyecta el script global
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // En desarrollo no hay script: lo ignoramos.
    }
  }, []);

  return (
    <div
      className={`my-8 min-h-[120px] w-full overflow-hidden text-center ${className}`}
      aria-label="Publicidad"
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={SITE.adsenseClient}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
