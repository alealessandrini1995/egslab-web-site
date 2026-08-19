# Sitemap

## Pagine

| Pagina | Route | File |
|---|---|---|
| Home | `/` | `src/pages/index.astro` |
| Servizi | `/servizi` | `src/pages/servizi.astro` |
| Chi siamo | `/chi-siamo` | `src/pages/chi-siamo.astro` |
| Contatti | `/contatti` | `src/pages/contatti.astro` |
| 404 | — | `src/pages/404.astro` |

## Struttura di navigazione

Header e Footer condividono le stesse voci, definite in `src/config/site.ts` (`site.nav`):

```
Home → Servizi → Chi siamo → Contatti
```

Navigazione piatta a un solo livello, senza sottomenu. La voce corrispondente alla pagina corrente è marcata con `aria-current="page"` nell'Header.
