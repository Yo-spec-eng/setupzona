import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Aviso legal',
  description: 'Aviso legal y condiciones de uso de SetupZona.',
  path: '/aviso-legal',
});

export default function Page() {
  return (
    <div className="prose prose-lg mx-auto max-w-3xl px-4 py-10 dark:prose-invert">
      <h1>Aviso legal</h1>
      <p>
        En cumplimiento de la Ley 34/2002 (LSSI-CE), se informa de que este
        sitio web, {SITE.url}, es titularidad de [TU NOMBRE / EMPRESA], con NIF
        [TU NIF] y domicilio en [TU DIRECCIÓN]. Contacto:{' '}
        <a href="mailto:hola@setupzona.com">hola@setupzona.com</a>.
      </p>
      <h2>Condiciones de uso</h2>
      <p>
        El acceso y uso de este sitio implica la aceptación de las presentes
        condiciones. Los contenidos tienen carácter informativo; no constituyen
        asesoramiento profesional. Completa este texto con tus datos reales antes
        de publicar.
      </p>
    </div>
  );
}
