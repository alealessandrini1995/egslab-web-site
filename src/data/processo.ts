export interface Fase {
  numero: string;
  etichetta: string;
  titolo: string;
  testo: string;
  esempio?: string;
  serve: string;
}

export const fasi: Fase[] = [
  {
    numero: '01',
    etichetta: 'Ci conosciamo',
    titolo: 'Ci conosciamo',
    testo: 'Un primo incontro per capire dove sei adesso e dove vuoi arrivare. Nessun preventivo al buio: prima capiamo, poi proponiamo.',
    serve: 'raccontarci il progetto.',
  },
  {
    numero: '02',
    etichetta: 'Ti presentiamo la proposta',
    titolo: 'Ti presentiamo la proposta',
    testo: 'Non una riga con un prezzo in fondo. Una proposta dettagliata fase per fase: cosa faremo, in che ordine, e per ogni servizio cosa comprende esattamente.',
    esempio: 'Vale per tutto: se è un sito sai quali pagine faremo, se sono i social sai quanti contenuti realizzeremo in un mese.',
    serve: 'leggere con calma e chiedere tutto quello che non è chiaro.',
  },
  {
    numero: '03',
    etichetta: "L'intervista",
    titolo: "L'intervista",
    testo: 'Qui la maggior parte dei progetti si blocca: il cliente deve scrivere testi, raccogliere materiali, e passano i mesi. Con noi no. Ti facciamo noi le domande, tu rispondi a voce. Non devi scrivere niente.',
    serve: "un'ora del tuo tempo e la voglia di raccontare quello che fai.",
  },
  {
    numero: '04',
    etichetta: 'Realizziamo',
    titolo: 'Realizziamo',
    testo: 'Costruiamo tutto quello che abbiamo definito insieme. Tu non devi seguire niente: ti scriviamo noi quando c’è qualcosa da vedere.',
    esempio: 'Se hai un’attività locale ci occupiamo anche della tua scheda Google: spesso è la prima cosa che le persone vedono quando ti cercano.',
    serve: 'niente. Lavoriamo noi.',
  },
  {
    numero: '05',
    etichetta: 'Vedi la bozza',
    titolo: 'Vedi la bozza',
    testo: "Niente va online né in stampa senza che tu l'abbia visto. Guardi, ci dici cosa cambiare, si corregge: finché non è come lo vuoi.",
    esempio: 'Se ci sono funzioni da usare — un form, una prenotazione — le provi tu in prima persona.',
    serve: 'il tuo via libera.',
  },
  {
    numero: '06',
    etichetta: 'Consegniamo',
    titolo: 'Consegniamo',
    testo: 'Pubblichiamo quello che va online e ti consegniamo i file di tutto il resto, nei formati che ti servono.',
    esempio: "Se servono dominio e hosting li registriamo noi: è l'unico costo fisso che resta a tuo carico.",
    serve: 'niente. Da qui in poi il progetto è tuo.',
  },
];
