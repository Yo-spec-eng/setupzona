import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Política de privacidad',
  description: 'Cómo tratamos tus datos personales en SetupZona.',
  path: '/politica-privacidad',
});

export default function Page() {
  return (
    <div className="prose prose-lg mx-auto max-w-3xl px-4 py-10 dark:prose-invert">
      <h1>Política de privacidad</h1>
      <p>
        Esta web respeta el Reglamento (UE) 2016/679 (RGPD) y la LOPDGDD.
        Recopilamos únicamente los datos necesarios (por ejemplo, los que nos
        envías por email o los datos analíticos anónimos).
      </p>
      <h2>Terceros</h2>
      <p>
        Usamos Google Analytics y Google AdSense, que pueden instalar cookies y
        tratar datos según sus propias políticas. Amazon trata los datos de las
        compras realizadas a través de nuestros enlaces de afiliado.
      </p>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación y supresión
        escribiendo a{' '}
        <a href="mailto:hola@setupzona.com">hola@setupzona.com</a>. Sustituye
        este texto por una política redactada para tu caso concreto.
      </p>
    </div>
  );
}
