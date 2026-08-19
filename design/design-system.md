# Design System

Fonte di verità: `src/styles/base/tokens.css`. Questo file descrive i token già in uso nel codice, non introduce nuovi valori.

## Colori

**Marca**
| Token | Valore | Uso |
|---|---|---|
| `--sage` | `#92b079` | Verde chiaro, badge logo, CTA primaria su fondo scuro |
| `--sage-tint` | `#edf2e7` | Tinta chiara derivata dal sage |
| `--green` | `#416935` | Verde pieno, CTA primaria su fondo chiaro, link, eyebrow |
| `--green-deep` | `#2c4823` | Verde più scuro |

**Gradiente d'accento** (`--grad`, usato su `.grad` per parole evidenziate nei titoli)
| Token | Valore |
|---|---|
| `--g1` | `#7ec8e3` (ciano) |
| `--g2` | `#8a7be0` (viola) |
| `--g3` | `#d96ba5` (magenta) |
| `--g4` | `#e85d8a` (rosa) |

**Neutri**
| Token | Valore | Uso |
|---|---|---|
| `--bg` | `#ffffff` | Fondo pagina |
| `--bg-soft` | `#f4f5f1` | Fondo sezioni/box secondari |
| `--night` | `#0c0e0c` | Palchi scuri (hero, footer) |
| `--ink` | `#131612` | Testo principale — 18,2:1 su bianco |
| `--ink-soft` | `#5b6157` | Testo secondario — 6,4:1 su bianco |
| `--ink-faint` | `#6b7267` | Testo terziario — 5,0:1 su bianco |
| `--on-dark` | `#ffffff` | Testo su fondo scuro |
| `--on-dark-soft` | `rgba(255,255,255,.72)` | Testo secondario su fondo scuro |
| `--hairline` | `rgba(19,22,18,.1)` | Bordi sottili |

**Vetro (glassmorphism)**
| Token | Valore | Uso |
|---|---|---|
| `--glass-light` | `rgba(255,255,255,.72)` | Card vetro su fondo chiaro |
| `--glass-dark` | `rgba(18,20,18,.42)` | Card vetro su fondo scuro |
| `--glass-dark-2` | `rgba(255,255,255,.07)` | Variante più tenue |
| `--glass-brd-l` / `--glass-brd-d` | `rgba(255,255,255,.92)` / `rgba(255,255,255,.16)` | Bordi vetro chiaro/scuro |
| `--blur` / `--blur-lg` | `blur(24px) saturate(160%)` / `blur(40px) saturate(170%)` | `backdrop-filter` |

## Tipografia

| Token | Valore |
|---|---|
| `--font-display` | 'League Spartan', 'Inter', 'Helvetica Neue', Arial, system-ui, sans-serif |
| `--font-body` | 'Inter', 'Helvetica Neue', Arial, system-ui, sans-serif |

Font autoospitati in `src/assets/fonts/` (League Spartan 400–800, Inter 400–600), dichiarati in `src/styles/base/typography.css` con `font-display: swap`.

**Scala (fluida, `clamp()`)**
| Token | Valore | Uso |
|---|---|---|
| `--fs-hero` | `clamp(34px, 5.4vw, 68px)` | Titolo hero (`.h1`) |
| `--fs-h2` | `clamp(30px, 4.4vw, 54px)` | `.h2` |
| `--fs-h3` | `clamp(22px, 2.4vw, 28px)` | `.h3` |
| `--fs-h4` | `19px` | `.h4` |
| `--fs-lead` | `clamp(17px, 1.6vw, 20px)` | Paragrafi lead |
| `--fs-body` | `17px` | Corpo testo |
| `--fs-small` | `15px` | Testo secondario |
| `--fs-micro` | `13px` | Eyebrow, meta |

`--tracking-title: -0.04em` sui titoli; `--link-freccia: 0.92em` riserva lo spazio per la freccia nei `.link`.

## Spaziature

Scala su base 8px, da usare sempre al posto di valori hardcoded:

| Token | Valore |
|---|---|
| `--s-1` | 8px |
| `--s-2` | 16px |
| `--s-3` | 24px |
| `--s-4` | 32px |
| `--s-5` | 48px |
| `--s-6` | 64px |
| `--s-7` | 96px |
| `--s-8` | 128px |
| `--s-9` | 160px |

**Ritmo verticale fluido** (legato all'altezza finestra, non fisso): `--sp-fuori` (aria fra due sezioni) e `--sp-dentro` (aria dentro una sezione), entrambi `clamp(64px, 9vh, 128px)`.

**Contenitori**: `--wrap: 1120px`, `--wrap-wide: 1320px` (vedi `src/styles/layout/container.css`). `--header-h: 74px`, `--header-gap: 14px`.

## Breakpoint

Non esistono token dedicati ai breakpoint: `@media (min-width: var(--x))` non è CSS valido, le custom property non si leggono nelle condizioni di media query. La scala è quindi una convenzione applicata a mano nei componenti, con i valori scritti in px direttamente nei `@media`.

| Livello | Valore | Intento di design |
|---|---|---|
| sm | `700px` | Telefono → tablet: primi split a 2 colonne |
| md | `900px` | Tablet → laptop: griglie a 3 colonne, rail, intestazioni divise |
| lg | `1000px` | Laptop: layout "feature" a 2 colonne asimmetriche |
| xl | `1100px` | Wide: griglia densa del Footer con colonna QR laterale |

Per i `max-width` si usa il complemento con due decimali (`699.98`, `899.98`, `999.98`, `1099.98`), non l'intero: con `899px` un viewport a 899.5px non soddisferebbe né quello né `min-width: 900px`, lasciando un buco.

**Eccezioni fuori scala, deliberate:**
- `Hero.astro` — `max-height: 700px`: è un'altezza, non una larghezza, non ha relazione con la scala nonostante condivida il numero.
- `Socials.astro` — `max-width: 620px`: nasconde le icone social dalla terza in poi invece di riorganizzare il layout. Allinearla a 700px le nasconderebbe su altri 80px di viewport, una scelta di contenuto e non di layout.
- `ComeLavoriamo.astro` — unico componente desktop-first del progetto (il layout a 6 colonne è la base, un `max-width: 899.98px` lo ribalta in verticale). Lasciato così per non riscrivere le trasformazioni `scaleX`/`scaleY` dei connettori con un guadagno solo stilistico.

## Raggi e ombre

| Token | Valore |
|---|---|
| `--r-xs` / `--r-sm` / `--r-md` / `--r-lg` / `--r-xl` | 14 / 20 / 28 / 40 / 56 px |
| `--r-pill` | 999px (pulsanti, badge, header) |
| `--shadow-sm` / `--shadow-md` / `--shadow-dark` | vedi `tokens.css` |

## Movimento

`--ease: cubic-bezier(0.32, 0.72, 0, 1)`; durate `--t-fast: .2s`, `--t-mid: .35s`, `--t-slow: .5s`. Tutte le transizioni rispettano `prefers-reduced-motion: reduce` (disattivate globalmente in `typography.css`).

## Componenti

Elenco in `src/components/` (17 componenti + 2 layout). Ogni componente ha stile scoped nel proprio `<style>`; le uniche classi globali condivise (`.btn`, `.link`, `.h1`–`.h4`, `.grad`, `.eyebrow`, `.lead`, `.plus`, `.reveal`) vivono in `src/styles/base/typography.css` perché attraversano i confini fra più componenti. Comportamenti JS condivisi (pannelli apribili, reveal-on-scroll, sfondo canvas animato) sono centralizzati in uno script globale in `src/layouts/BaseLayout.astro` per lo stesso motivo.

Non esiste ancora una libreria di componenti isolata (es. Storybook): la documentazione visiva dei componenti è il sito stesso.
