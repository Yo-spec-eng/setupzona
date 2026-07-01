import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contacto',
  description: 'Ponte en contacto con el equipo de SetupZona.',
  path: '/contacto',
});

export default function Page() {
  return (
    <div className="prose prose-lg mx-auto max-w-3xl px-4 py-10 dark:prose-invert">
      <h1>Contacto</h1>
      <p>
        ¿Tienes una duda, sugerencia o propuesta de colaboración? Escríbenos a{' '}
        <a href="mailto:hola@setupzona.com">hola@setupzona.com</a> y te
        responderemos lo antes posible.
      </p>
    </div>
  );
}
