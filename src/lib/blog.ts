import type { CollectionEntry } from 'astro:content';

const MESI = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];

export function dataItaliana(d: Date) {
  return `${d.getUTCDate()} ${MESI[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export function perData(articoli: CollectionEntry<'blog'>[]) {
  return [...articoli].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Correlati: stessa categoria, meno sé stesso, per data discendente, massimo 3. */
export function correlati(tutti: CollectionEntry<'blog'>[], articolo: CollectionEntry<'blog'>) {
  return perData(tutti.filter((a) => a.id !== articolo.id && a.data.category === articolo.data.category)).slice(0, 3);
}
