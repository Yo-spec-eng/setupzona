# SetupZona

Web de nicho SEO sobre escritorios, sillas y setups de trabajo/gaming.
Monetiza con Google AdSense + Amazon Afiliados. Construida con Next.js 15
(App Router), MDX y Tailwind CSS. Lista para desplegar en Vercel.

## Stack

- **Next.js 15** (App Router, SSG) — máxima velocidad y Core Web Vitals
- **MDX** (`next-mdx-remote`) — artículos como archivos en `content/`
- **Tailwind CSS** + typography — diseño minimalista con modo oscuro
- **SEO técnico** — sitemap, robots, metadata por página, JSON-LD (Article,
  Breadcrumb, FAQ)

## Empezar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción (SSG)
```

## Estructura

```
app/                      Rutas (App Router)
  [categoria]/            Listado de categoría
  [categoria]/[slug]/     Artículo individual (renderiza MDX)
  sitemap.ts, robots.ts   SEO técnico
  (páginas legales)       sobre-nosotros, aviso-afiliados, etc.
components/               UI + monetización (AffiliateButton, AdUnit, ...)
content/                  Artículos .mdx organizados por categoría
lib/                      site.ts (config), articles.ts, seo.ts
```

## Cómo publicar un artículo

1. Crea un `.mdx` en `content/{categoria}/{slug}.mdx`.
2. Rellena el frontmatter (`title`, `description`, `date`, `keywords`).
3. Escribe el cuerpo usando los componentes disponibles sin importarlos:
   `<ComparisonTable>`, `<AffiliateButton>`, `<ProsCons>`, `<FAQ>`, `<AdUnit>`.
4. Listo: la ruta `/categoria/slug` se genera automáticamente.

## Antes de lanzar

- [ ] Cambia `SITE` en `lib/site.ts` (dominio, `amazonTag`, `adsenseClient`).
- [ ] Descomenta el script de AdSense en `app/layout.tsx` cuando te aprueben.
- [ ] Completa las páginas legales con tus datos reales.
- [ ] Añade un banner de consentimiento de cookies (CMP) — obligatorio en la UE.
- [ ] Da de alta el sitio en Google Search Console y envía el sitemap.

## Deploy

Sube a GitHub y conecta el repo en [Vercel](https://vercel.com). Deploy
automático en cada push. Configura el dominio en el panel de Vercel.
