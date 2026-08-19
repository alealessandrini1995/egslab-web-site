# Sitemap

## Pagine

| Pagina | Route | File |
|---|---|---|
| Home | `/` | `src/pages/index.astro` |
| Servizi | `/servizi/` | `src/pages/servizi.astro` |
| Servizio (singolo) | `/servizi/{slug}/` | `src/pages/servizi/[slug].astro` (15 pagine, una per voce di `src/data/servizi.ts`) |
| Portfolio | `/portfolio/` | `src/pages/portfolio.astro` |
| Chi siamo | `/chi-siamo/` | `src/pages/chi-siamo.astro` |
| Testimonianze | `/testimonianze/` | `src/pages/testimonianze.astro` |
| Blog | `/blog/` | `src/pages/blog/index.astro` |
| Articolo (singolo) | `/blog/{slug}/` | `src/pages/blog/[slug].astro` (una per file in `src/content/blog/`) |
| Contatti | `/contatti/` | `src/pages/contatti.astro` |
| Privacy | `/privacy/` | `src/pages/privacy.astro` |
| Cookie | `/cookie/` | `src/pages/cookie.astro` |
| 404 | — | `src/pages/404.astro` |

Le pagine Servizio, Portfolio, Chi siamo, Testimonianze, Contatti, Privacy e Cookie contengono ancora testo segnaposto: i contenuti reali arriveranno da `content/copy.md` in una fase successiva.

## Struttura di navigazione

Header e Footer condividono le stesse voci, definite in `src/config/site.ts` (`site.nav`):

```
Home → Servizi → Portfolio → Chi siamo → Testimonianze → Blog → Contatti
```

Navigazione piatta a un solo livello (nessun sottomenu), a eccezione delle pagine di dettaglio servizio/articolo, raggiungibili solo da card e link interni (non dalla nav principale). La voce corrispondente alla pagina corrente è marcata con `aria-current="page"` nell'Header.

## Base path

Il sito è attualmente pubblicato come GitHub Pages project site sotto `/egslab-web-site/` (vedi `astro.config.mjs`, `base`). Tutti i link interni passano dall'helper `withBase()` (`src/lib/url.ts`) per restare corretti sotto quel prefisso; i link esterni (mailto, WhatsApp, social) non ne hanno bisogno.
