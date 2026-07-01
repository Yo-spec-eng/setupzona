import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sobre nosotros',
  description: `Quiénes somos y cómo analizamos los productos en ${SITE.name}.`,
  path: '/sobre-nosotros',
});

export default function Page() {
  return (
    <div className="prose prose-lg mx-auto max-w-3xl px-4 py-10 dark:prose-invert">
      <h1>Sobre {SITE.name}</h1>
      <p>
        En {SITE.name} ayudamos a montar el mejor espacio de trabajo, gaming y
        productividad. Analizamos escritorios, sillas y accesorios combinando
        especificaciones técnicas, opiniones reales de usuarios y nuestra propia
        experiencia montando setups.
      </p>
      <h2>Cómo recomendamos</h2>
      <p>
        Comparamos cada producto por calidad de construcción, ergonomía,
        relación calidad-precio y durabilidad. No recomendamos nada que no
        compraríamos nosotros mismos. Cuando un producto tiene puntos débiles,
        los señalamos.
      </p>
      <h2>Independencia editorial</h2>
      <p>
        Usamos enlaces de afiliado de Amazon para mantener el proyecto, pero eso
        nunca condiciona nuestras valoraciones. Puedes leer más en nuestro{' '}
        <a href="/aviso-afiliados">aviso de afiliados</a>.
      </p>
    </div>
  );
}
