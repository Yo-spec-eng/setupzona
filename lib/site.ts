// Configuración central del sitio. Cambia aquí dominio, marca y categorías.

export const SITE = {
  name: 'SetupZona',
  url: 'https://setupzona.com',
  description:
    'Análisis, comparativas y guías de escritorios, sillas y accesorios para crear el mejor setup de trabajo, gaming y productividad.',
  locale: 'es_ES',
  twitter: '@setupzona',
  // Tu tag de afiliado de Amazon (formato: tucodigo-21 en España).
  amazonTag: 'setupzona-21',
  // Tu ID de cliente de AdSense (formato: ca-pub-XXXXXXXXXXXXXXXX).
  adsenseClient: 'ca-pub-0000000000000000',
};

export type Category = {
  slug: string;
  name: string;
  title: string;
  description: string;
};

// Categorías madre (silos SEO). El "slug" mapea a /[categoria]/.
export const CATEGORIES: Category[] = [
  {
    slug: 'escritorios',
    name: 'Escritorios',
    title: 'Escritorios para home office, gaming y oficina',
    description:
      'Los mejores escritorios elevables, gaming, pequeños y baratos analizados para cada tipo de espacio y presupuesto.',
  },
  {
    slug: 'sillas',
    name: 'Sillas',
    title: 'Sillas ergonómicas y gaming',
    description:
      'Comparativas de sillas ergonómicas y gaming para trabajar muchas horas sin dolor de espalda.',
  },
  {
    slug: 'accesorios',
    name: 'Accesorios',
    title: 'Accesorios de escritorio y setup',
    description:
      'Soportes de monitor, iluminación, organización de cables y todo lo que mejora tu setup.',
  },
  {
    slug: 'guias',
    name: 'Guías',
    title: 'Guías de ergonomía y montaje de setups',
    description:
      'Aprende a elegir, medir y montar tu espacio de trabajo con nuestras guías paso a paso.',
  },
  {
    slug: 'comparativas',
    name: 'Comparativas',
    title: 'Comparativas de producto',
    description:
      'Enfrentamos los modelos más populares para que sepas exactamente cuál comprar.',
  },
  {
    slug: 'setups',
    name: 'Setups',
    title: 'Ideas de setups completos',
    description:
      'Inspiración de setups minimalistas, gaming y de productividad con todos los productos.',
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
