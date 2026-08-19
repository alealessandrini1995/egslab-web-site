export interface FaqItem {
  domanda: string;
  risposta: string;
}

export const faq: FaqItem[] = [
  {
    domanda: 'Quanto costa?',
    risposta:
      'Dipende da cosa ti serve, e non è una risposta evasiva: un logo e un progetto con sito, automazioni e gestione social non sono la stessa cosa. Dopo il primo incontro ricevi una proposta dettagliata con tutto quello che faremo e quanto costa, voce per voce. Nessun costo nascosto.',
  },
  {
    domanda: 'Quanto tempo serve?',
    risposta:
      "Dipende dal progetto, ma i tempi te li diciamo nella proposta, non strada facendo. La variabile più grande di solito è la disponibilità del cliente: per questo abbiamo eliminato il problema dei materiali con l'intervista.",
  },
  {
    domanda: 'Devo scrivere io i testi?',
    risposta:
      "No. È il motivo per cui facciamo l'intervista: tu rispondi alle nostre domande, ai testi pensiamo noi. Vale per le pagine di un sito come per un volantino, un menu o i contenuti dei social.",
  },
  {
    domanda: 'Lavorate solo nella vostra zona?',
    risposta:
      'Siamo a Chiavari e seguiamo volentieri le attività del territorio, ma lavoriamo anche a distanza in tutta Italia. Il primo incontro può essere di persona o in videochiamata, come preferisci.',
  },
  {
    domanda: 'Sto partendo da zero, è un problema?',
    risposta:
      'È il caso che ci capita più spesso. Non serve avere un logo, dei testi o le idee chiare su tutto: serve sapere dove vuoi arrivare.',
  },
  {
    domanda: 'Cosa succede dopo la consegna?',
    risposta:
      'Quello che abbiamo costruito è tuo e resti autonomo. Se è un sito, ci sono pacchetti di gestione e aggiornamento annuali, ma non sono obbligatori. Se sono materiali da stampare, ti consegniamo i file pronti nei formati che ti servono. In ogni caso restiamo raggiungibili.',
  },
];
