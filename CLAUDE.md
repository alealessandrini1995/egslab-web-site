# CLAUDE.md

## Contesto del progetto

Template Astro per siti statici professionali, con output 100% statico (`output: 'static'`). Nessun backend, nessun endpoint server-side: eventuali form vanno collegati a servizi esterni (es. Formspree, Netlify Forms), mai a un adapter server.

## Regole tecniche

- Non introdurre framework UI (React, Vue, Svelte...) salvo esplicita richiesta: i componenti `.astro` bastano per markup, stile e script.
- Mai valori hardcoded per colori, spaziature o breakpoint: usare sempre i token definiti in `src/styles/base/tokens.css`.
- Nome del sito, voci di navigazione e contatti si modificano solo in `src/config/site.ts`, mai duplicati nelle pagine o nei componenti.
- Ogni pagina deve passare `title` a `BaseLayout`; TypeScript strict lo impone al build.
- Le immagini vanno in `src/assets/images/` (ottimizzate da Astro), non in `public/`. `public/` è riservata a file da servire as-is (favicon, robots.txt, font).

## Convenzioni di codice

- Componenti in PascalCase (`Header.astro`, `SEO.astro`).
- Stili scoped di default nel `<style>` del componente; il file `src/styles/` è riservato al design system globale (reset, token, tipografia, container) e va importato una sola volta in `BaseLayout.astro`.
- Nomi di classe in kebab-case, con prefisso del componente per evitare ambiguità (es. `.site-header__nav`).

## Struttura dei file

Vedi l'albero completo in [README.md](README.md). In sintesi: `src/pages/` per le route, `src/components/` per gli elementi riutilizzabili, `src/layouts/` per gli scheletri di pagina, `src/config/site.ts` per i dati centralizzati, `src/styles/` per il design system globale.

## Workflow

1. Compilare le specifiche in `design/` (design-system, sitemap) e `content/` (copy, seo) prima di scrivere codice.
2. Riportare i token del design system in `src/styles/base/tokens.css`.
3. Aggiornare `src/config/site.ts` con i dati reali del progetto (nome, URL, navigazione, contatti).
4. Sostituire i contenuti segnaposto nelle pagine di `src/pages/` con i testi approvati in `content/copy.md`.
5. Verificare `npm run build` prima di ogni consegna: deve completare senza errori e generare tutte le pagine attese in `dist/`.
