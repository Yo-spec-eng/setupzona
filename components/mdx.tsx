import { MDXRemote } from 'next-mdx-remote/rsc';
import { AffiliateButton } from './AffiliateButton';
import { AdUnit } from './AdUnit';
import { ComparisonTable } from './ComparisonTable';
import { ProsCons } from './ProsCons';
import { FAQ } from './FAQ';

// Componentes disponibles dentro de cualquier .mdx sin importarlos.
const components = {
  AffiliateButton,
  AdUnit,
  ComparisonTable,
  ProsCons,
  FAQ,
};

export function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      // El contenido MDX es nuestro (archivos en /content), así que permitimos
      // expresiones JS (props como rows={[...]}). next-mdx-remote v6 las bloquea
      // por defecto (blockJS), lo que dejaría los componentes sin props.
      options={{ blockJS: false }}
    />
  );
}
