import Image from 'next/image';
import { getCategory } from '@/lib/site';

// Estilo de placeholder por categoría (degradado + emoji) cuando no hay foto real.
const STYLES: Record<string, { from: string; to: string; emoji: string }> = {
  escritorios: { from: '#1e3a8a', to: '#2563EB', emoji: '🖥️' },
  sillas: { from: '#065f46', to: '#10B981', emoji: '🪑' },
  accesorios: { from: '#5b21b6', to: '#8b5cf6', emoji: '🔌' },
  guias: { from: '#92400e', to: '#f59e0b', emoji: '📘' },
  comparativas: { from: '#9f1239', to: '#f43f5e', emoji: '⚖️' },
  setups: { from: '#0f172a', to: '#334155', emoji: '✨' },
};

// Portada de artículo. Usa la foto real (cover) si existe; si no, un
// placeholder de marca con degradado y emoji según la categoría.
export function Cover({
  category,
  title,
  cover,
  priority = false,
  className = '',
  rounded = 'rounded-xl',
}: {
  category: string;
  title: string;
  cover?: string;
  priority?: boolean;
  className?: string;
  rounded?: string;
}) {
  const style = STYLES[category] ?? STYLES.setups;
  const label = getCategory(category)?.name ?? category;

  if (cover) {
    return (
      <div className={`relative aspect-[16/9] overflow-hidden ${rounded} ${className}`}>
        <Image
          src={cover}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden ${rounded} ${className}`}
      style={{ background: `linear-gradient(135deg, ${style.from}, ${style.to})` }}
      aria-hidden
    >
      <span className="text-5xl drop-shadow-sm sm:text-6xl">{style.emoji}</span>
      <span className="absolute bottom-2 left-3 text-xs font-semibold uppercase tracking-wide text-white/80">
        {label}
      </span>
    </div>
  );
}
