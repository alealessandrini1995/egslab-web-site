export interface Recensione {
  id: string;
  testo: string;
  iniziali: string;
  nome: string;
  ruolo: string;
}

export const recensioni: Recensione[] = [
  {
    id: 'rec-1',
    testo:
      "Ci siamo affidati a EGSLAB per il nuovo sito dell'Hotel Alba e siamo estremamente soddisfatti! Il sito è venuto benissimo e la collaborazione con la loro agenzia è stata impeccabile. Abbiamo trovato persone precise, puntuali e sempre disponibili: un customer service davvero eccellente. Ma l'aspetto più importante, che per chi gestisce un'azienda non è cosa da poco, è che il nuovo sito ci ha portato un incremento del fatturato veramente elevato. Soddisfazione su tutta la linea. Consigliatissimi!",
    iniziali: 'HA',
    nome: 'Hotel Alba',
    ruolo: 'Boutique Hotel',
  },
  {
    id: 'rec-2',
    testo:
      "Cercavo un'immagine che rappresentasse al meglio il mio nuovo progetto a Chiavari e non potevo fare scelta migliore. Il team EGSLAB ha centrato in pieno l'obiettivo, creando un logo moderno e che dà un'identità forte alla mia attività oltre a rispecchiare perfettamente lo stile del mio salone. Creatività, disponibilità, attenzione ai dettagli e tempi rapidi. Consigliatissimi!",
    iniziali: 'KF',
    nome: 'Karim Papillon Fahmi',
    ruolo: 'Papillon · Barber Shop',
  },
  {
    id: 'rec-3',
    testo:
      "Ci siamo rivolti a Egslab per la creazione ex novo del nostro sito nel 2025. I risultati parlano da soli: hanno creato un sito moderno, accessibile e dal design pulito e fruibile. I ragazzi del team sono stati disponibili fin da subito ad accogliere tutte le nostre domande prima, durante e dopo il lavoro, che è stato svolto in maniera precisa, rapida ed efficiente. Durante tutto il processo c'è sempre stata un'ottima comunicazione da parte dello staff e la creazione del sito è filata liscia come l'olio. La mancanza di materiale foto/video da parte nostra non è stata un problema in quanto sono riusciti in tempi rapidissimi a creare loro stessi quello che serviva. Consiglio Egslab a chiunque abbia bisogno di creare o aggiornare il proprio sito o i propri profili social! Bravi, complimenti!",
    iniziali: 'NQ',
    nome: 'New Quercus',
    ruolo: 'Palestra e Fitness',
  },
];
