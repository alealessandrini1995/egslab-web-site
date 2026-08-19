export interface Tessera {
  icona: string;
  titolo: string;
  frase: string;
  dettaglio: string;
}

export const tessere: Tessera[] = [
  {
    icona: 'ico-germoglio',
    titolo: 'Startup e nuove attività',
    frase: 'Parti da zero: niente logo, niente sito, niente presenza online.',
    dettaglio: "Serve costruire tutto, nell'ordine giusto, senza sprecare tempo e budget su cose che possono aspettare.",
  },
  {
    icona: 'ico-negozio',
    titolo: 'Attività commerciali e negozi',
    frase: 'Hai già i clienti, ma online non ti trovano.',
    dettaglio: 'O ti trovano e vedono un’immagine che non ti rappresenta più.',
  },
  {
    icona: 'ico-persona',
    titolo: 'Liberi professionisti',
    frase: 'Il tuo lavoro parla per te, ma i materiali con cui ti presenti no.',
    dettaglio: 'Serve un’immagine coerente: dal biglietto da visita al sito.',
  },
  {
    icona: 'ico-posate',
    titolo: 'Ristoranti, bar e locali',
    frase: 'Menu, insegne, social, prenotazioni.',
    dettaglio: "Tanti pezzi che devono parlare la stessa lingua e funzionare tutti i giorni, non solo il giorno dell'apertura.",
  },
];
