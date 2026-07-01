import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Política de cookies',
  description: 'Información sobre el uso de cookies en SetupZona.',
  path: '/politica-cookies',
});

export default function Page() {
  return (
    <div className="prose prose-lg mx-auto max-w-3xl px-4 py-10 dark:prose-invert">
      <h1>Política de cookies</h1>
      <p>
        Utilizamos cookies propias y de terceros para analizar el tráfico
        (Google Analytics) y mostrar publicidad relevante (Google AdSense).
        Puedes configurar o rechazar las cookies desde tu navegador.
      </p>
      <h2>Tipos de cookies</h2>
      <ul>
        <li><strong>Técnicas:</strong> necesarias para el funcionamiento del sitio.</li>
        <li><strong>Analíticas:</strong> miden el uso de la web de forma agregada.</li>
        <li><strong>Publicitarias:</strong> personalizan los anuncios mostrados.</li>
      </ul>
      <p>
        Recuerda instalar un banner de consentimiento de cookies (CMP) antes de
        activar AdSense y Analytics, tal como exige la normativa europea.
      </p>
    </div>
  );
}
