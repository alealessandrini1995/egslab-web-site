# CLAUDE.md

Questo file fornisce indicazioni a Claude Code (claude.ai/code) per lavorare sul codice di questo repository.

## Contesto del progetto

Template Astro per siti statici professionali, con output 100% statico (`output: 'static'`). Nessun backend, nessun endpoint server-side: eventuali form vanno collegati a servizi esterni (es. Formspree, Netlify Forms), mai a un adapter server.

## Comandi

```bash
npm install       # installa le dipendenze
npm run dev        # dev server con hot reload su http://localhost:4321
npm run build       # build statico in dist/, deve completare senza errori (TypeScript strict)
npm run preview      # anteprima locale della build di produzione
```

Non esiste una suite di test: la verifica di consegna è `npm run build`.

## Architettura

`BaseLayout.astro` è l'unico punto che assembla una pagina: importa `src/styles/global.css`, monta `SEO`, `Header` e `Footer`, e riceve `title` (obbligatorio) più `description`/`image` opzionali come props. `SEO.astro` legge i default (`description`, `name`, `lang`) da `site.ts` quando le props non sono passate, e costruisce `canonicalURL` da `Astro.site` (definito in `astro.config.mjs`) + `Astro.url.pathname` — per questo ogni pagina in `src/pages/` deve passare solo `title` (e opzionalmente `description`/`image`) a `BaseLayout`, senza ripetere logica SEO. `Header` e `Footer` leggono `nav` e `contact` da `site.ts`, quindi non vanno mai hardcodati nei singoli componenti.

## Regole tecniche

- Non introdurre framework UI (React, Vue, Svelte...) salvo esplicita richiesta: i componenti `.astro` bastano per markup, stile e script.
- Mai valori hardcoded per colori, spaziature o breakpoint: usare sempre i token definiti in `src/styles/base/tokens.css`.
- Nome del sito, voci di navigazione e contatti si modificano solo in `src/config/site.ts`, mai duplicati nelle pagine o nei componenti.
- Ogni pagina deve passare `title` a `BaseLayout`; TypeScript strict lo impone al build.
- Le immagini vanno in `src/assets/images/` (ottimizzate da Astro), non in `public/`. I font self-hosted vanno in `src/assets/fonts/`, per lo stesso motivo: referenziati via `url()` nel CSS, devono passare dalla pipeline di Vite per ricevere hash e base path corretti. `public/` è riservata a file da servire as-is (favicon, robots.txt).

## Convenzioni di codice

- Componenti in PascalCase (`Header.astro`, `SEO.astro`).
- Stili scoped di default nel `<style>` del componente; il file `src/styles/` è riservato al design system globale (reset, token, tipografia, container) e va importato una sola volta in `BaseLayout.astro`.
- Nomi di classe in kebab-case, con prefisso del componente per evitare ambiguità (es. `.site-header__nav`).

## Struttura dei file

Vedi l'albero completo in [README.md](README.md). In sintesi: `src/pages/` per le route, `src/components/` per gli elementi riutilizzabili, `src/layouts/` per gli scheletri di pagina, `src/config/site.ts` per i dati centralizzati, `src/styles/` per il design system globale.

Gli elenchi che alimentano le sezioni della Home (servizi, clienti, FAQ, recensioni…) vivono in `src/data/`, un file per elenco: non vanno duplicati come array inline nei componenti. Il blog è una content collection (`src/content.config.ts` + `src/content/blog/*.md`), schema con Content Layer API (`glob` da `astro/loaders`).

## Workflow

1. Compilare le specifiche in `design/` (design-system, sitemap) e `content/` (copy, seo) prima di scrivere codice.
2. Riportare i token del design system in `src/styles/base/tokens.css`.
3. Aggiornare `src/config/site.ts` con i dati reali del progetto (nome, URL, navigazione, contatti).
4. Sostituire i contenuti segnaposto nelle pagine di `src/pages/` con i testi approvati in `content/copy.md`.
5. Verificare `npm run build` prima di ogni consegna: deve completare senza errori e generare tutte le pagine attese in `dist/`.
