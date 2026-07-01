import { SITE } from '@/lib/site';

// Botón CTA hacia Amazon. Añade el tag de afiliado automáticamente
// y aplica rel="nofollow sponsored" (obligatorio por políticas).
export function AffiliateButton({
  href,
  label = 'Ver precio en Amazon',
  asin,
}: {
  href?: string;
  label?: string;
  asin?: string; // alternativa: pasa solo el ASIN del producto
}) {
  const url = asin
    ? `https://www.amazon.es/dp/${asin}/?tag=${SITE.amazonTag}`
    : appendTag(href ?? '#');

  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF9900] px-5 py-3 font-semibold text-black shadow-sm transition hover:brightness-95"
    >
      {label}
      <span aria-hidden>↗</span>
    </a>
  );
}

function appendTag(href: string): string {
  if (href === '#' || !href.includes('amazon.')) return href;
  const sep = href.includes('?') ? '&' : '?';
  return `${href}${sep}tag=${SITE.amazonTag}`;
}
