# Static Site Vibe Coding Template

Template riutilizzabile per la realizzazione di siti web statici professionali con **Astro**, mediante approccio di AI-assisted coding.

Il template fornisce una struttura organizzativa completa per separare requisiti, design, contenuti, asset e codice, ed è pronto per la messa in produzione con cinque pagine canoniche (home, servizi, chi siamo, contatti, 404) e componenti header/footer condivisi.

## Prerequisiti

- Node.js ≥ 22.12.0
- npm ≥ 9.6.5

## Comandi

```bash
npm install      # installa le dipendenze
npm run dev       # dev server con hot reload su http://localhost:4321
npm run build      # build statico in dist/
npm run preview     # anteprima locale della build di produzione
```

## Struttura del progetto

```text
.
├── CLAUDE.md
├── README.md
├── astro.config.mjs
├── package.json
├── tsconfig.json
│
├── design/
│   ├── design-system.md
│   ├── sitemap.md
│   ├── wireframes/
│   └── references/
│
├── content/
│   ├── copy.md
│   └── seo.md
│
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── fonts/
│   └── icons/
│
└── src/
    ├── config/
    │   └── site.ts
    ├── layouts/
    │   └── BaseLayout.astro
    ├── components/
    │   ├── Header.astro
    │   ├── Footer.astro
    │   └── SEO.astro
    ├── pages/
    │   ├── index.astro
    │   ├── servizi.astro
    │   ├── chi-siamo.astro
    │   ├── contatti.astro
    │   └── 404.astro
    ├── styles/
    │   ├── global.css
    │   ├── base/
    │   └── layout/
    └── assets/
        └── images/
```

## Ruolo dei file principali

### `CLAUDE.md`

Contiene le istruzioni operative e le regole tecniche che Claude Code deve seguire durante lo sviluppo del progetto.

### `README.md`

Documentazione generale del progetto e riferimento per lo sviluppatore.

### `astro.config.mjs`, `tsconfig.json`

Configurazione del framework: modalità di output statica, integrazioni (sitemap), URL di produzione, controlli TypeScript strict.

## `design/`

Contiene le specifiche e i riferimenti necessari alla progettazione del sito.

- `design-system.md` — principi e specifiche del design system; corrisponde ai token CSS in `src/styles/base/tokens.css`.
- `sitemap.md` — struttura e organizzazione delle pagine.
- `wireframes/` — wireframe e materiali di progettazione.
- `references/` — riferimenti visivi e materiali forniti durante la progettazione.

## `content/`

Contiene i contenuti approvati del sito.

- `copy.md` — testi e contenuti editoriali, da trasferire nelle pagine `.astro` e in `src/config/site.ts`.
- `seo.md` — informazioni e requisiti SEO delle pagine, da riflettere nel componente `SEO.astro`.

## `public/`

File statici serviti così come sono, senza alcuna elaborazione da parte di Astro.

- `favicon.svg` — icona del sito.
- `robots.txt` — direttive per i crawler, con riferimento alla sitemap generata al build.
- `fonts/`, `icons/` — risorse statiche non processate.

## `src/config/`

- `site.ts` — punto di verità unico per nome del sito, URL, lingua, voci di navigazione e contatti. Header, Footer e SEO leggono da qui.

## `src/layouts/`

- `BaseLayout.astro` — struttura HTML condivisa da tutte le pagine: head, SEO, Header, contenuto, Footer.

## `src/components/`

Componenti riutilizzabili, ciascuno con markup e stile scoped nel proprio file `.astro`.

- `Header.astro`, `Footer.astro` — intestazione e piè di pagina del sito.
- `SEO.astro` — metadati di pagina (title, description, canonical, Open Graph).

## `src/pages/`

Ogni file corrisponde a una route, secondo il routing file-based di Astro.

- `index.astro` — home.
- `servizi.astro` — pagina servizi.
- `chi-siamo.astro` — pagina chi siamo.
- `contatti.astro` — pagina contatti.
- `404.astro` — pagina di errore per risorse non trovate.

Le ulteriori pagine del progetto vengono aggiunte in base alla struttura definita in `design/sitemap.md`.

## `src/styles/`

Design system globale, importato una sola volta in `BaseLayout.astro`.

- `base/` — reset, token del design system (colori, tipografia, spaziature, breakpoint), tipografia globale.
- `layout/` — strutture condivise come il container.

Gli stili specifici di un componente o di una sezione restano invece negli `<style>` scoped dei rispettivi file `.astro`.

## `src/assets/`

Immagini elaborate e ottimizzate da Astro in fase di build. Le immagini specifiche di una singola pagina vengono organizzate in sottodirectory dedicate.

## Scopo del template

Il template fornisce una base organizzativa riutilizzabile per progetti di siti web statici sviluppati con approccio di vibe coding, costruiti su Astro.

La struttura separa in modo chiaro:

- specifiche e riferimenti di design;
- contenuti approvati;
- asset del sito;
- codice dei componenti e delle pagine;
- istruzioni operative per Claude Code.

Il template non include design, contenuti o funzionalità specifiche di un singolo progetto.

## Principi

Il progetto deve mantenere:

- separazione delle responsabilità;
- riutilizzo e centralizzazione dei componenti;
- codice leggibile e manutenibile;
- struttura coerente e prevedibile;
- attenzione a performance, accessibilità e SEO.
