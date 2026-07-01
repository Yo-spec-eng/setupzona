import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Aviso de afiliados',
  description: 'Información sobre nuestros enlaces de afiliado de Amazon.',
  path: '/aviso-afiliados',
});

export default function Page() {
  return (
    <div className="prose prose-lg mx-auto max-w-3xl px-4 py-10 dark:prose-invert">
      <h1>Aviso de afiliados</h1>
      <p>
        {SITE.name} participa en el Programa de Afiliados de Amazon EU, un
        programa de publicidad para afiliados diseñado para ofrecer a sitios web
        un modo de obtener comisiones por publicidad, publicitando e incluyendo
        enlaces a Amazon.es.
      </p>
      <p>
        Como Afiliado de Amazon, obtenemos ingresos por las compras adscritas
        que cumplen los requisitos aplicables. Esto significa que, si compras un
        producto a través de uno de nuestros enlaces, podemos recibir una
        pequeña comisión <strong>sin ningún coste adicional para ti</strong>.
      </p>
      <p>
        Los precios y la disponibilidad mostrados son los de Amazon en el momento
        de la compra y pueden variar.
      </p>
    </div>
  );
}
