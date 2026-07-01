import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

// Imagen OG por defecto para todo el sitio (compartir en redes/WhatsApp).
// Se genera dinámicamente; no necesitas subir ningún JPG.
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = SITE.name;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: '#2563EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
            }}
          >
            🖥️
          </div>
          <div style={{ display: 'flex', fontSize: 40, fontWeight: 800 }}>
            <span>Setup</span>
            <span style={{ color: '#3B82F6' }}>Zona</span>
          </div>
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          Crea el setup de trabajo y gaming perfecto
        </div>
        <div style={{ fontSize: 30, color: '#94a3b8', marginTop: 28 }}>
          Escritorios · Sillas · Accesorios · Guías
        </div>
      </div>
    ),
    { ...size }
  );
}
