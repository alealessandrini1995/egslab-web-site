import realizzazioneSitiWeb from '../assets/images/servizi/realizzazione-siti-web.webp';
import contenutiSocial from '../assets/images/servizi/contenuti-social.webp';
import type { ImageMetadata } from 'astro';

export interface Gruppo {
  slug: string;
  nome: string;
}

export const gruppi: Gruppo[] = [
  { slug: 'web', nome: 'Web Design' },
  { slug: 'social', nome: 'Social' },
  { slug: 'seo', nome: 'SEO e Visibilità Online' },
  { slug: 'soluzioni', nome: 'Soluzioni Digitali e Automazioni' },
  { slug: 'brand', nome: 'Brand Identity e Grafica' },
];

export interface Servizio {
  slug: string;
  nome: string;
  gruppo: string;
  categoria: string;
  frase: string;
  img?: ImageMetadata;
  alt?: string;
}

export const servizi: Servizio[] = [
  {
    slug: 'realizzazione-siti-web',
    nome: 'Realizzazione Siti Web',
    gruppo: 'web',
    categoria: 'Web Design',
    frase: 'Il tuo spazio online: pensato per portarti contatti, non solo per esistere.',
    img: realizzazioneSitiWeb,
    alt: 'Il sito di Moov Restaurant aperto su un portatile, appoggiato su un tavolo di legno',
  },
  {
    slug: 'landing-page',
    nome: 'Realizzazione Landing Page',
    gruppo: 'web',
    categoria: 'Web Design',
    frase: 'Una pagina, un obiettivo: trasformare chi arriva in un contatto reale.',
  },
  {
    slug: 'contenuti-social',
    nome: 'Creazione Contenuti Social',
    gruppo: 'social',
    categoria: 'Social',
    frase: 'Contenuti che si fanno guardare, non che riempiono un calendario.',
    img: contenutiSocial,
    alt: 'Uno smartphone che mostra il profilo social di una gelateria',
  },
  {
    slug: 'gestione-social',
    nome: 'Gestione Pagine Social',
    gruppo: 'social',
    categoria: 'Social',
    frase: 'I tuoi canali seguiti da chi lo fa di mestiere, mentre tu lavori.',
  },
  {
    slug: 'profilo-linktree',
    nome: 'Creazione e Gestione Profilo Linktree',
    gruppo: 'social',
    categoria: 'Social',
    frase: 'Un link solo che porta a tutto, vestito con l’immagine del tuo brand.',
  },
  {
    slug: 'seo-posizionamento',
    nome: 'SEO e Posizionamento',
    gruppo: 'seo',
    categoria: 'SEO e Visibilità Online',
    frase: 'Le basi sono già nel sito: qui si scalano le ricerche che contano, con dati e report chiari.',
  },
  {
    slug: 'profilo-google-business',
    nome: 'Realizzazione e Gestione Profilo Google Business',
    gruppo: 'seo',
    categoria: 'SEO e Visibilità Online',
    frase: 'Ti facciamo trovare su Google e su Maps, con la scheda sempre aggiornata.',
  },
  {
    slug: 'automazione-processi-aziendali',
    nome: 'Automazione dei Processi Aziendali',
    gruppo: 'soluzioni',
    categoria: 'Soluzioni Digitali e Automazioni',
    frase: 'Le operazioni ripetitive le fa il computer: tu ti riprendi le ore che ci perdevi.',
  },
  {
    slug: 'software-web-app',
    nome: 'Software e Web App',
    gruppo: 'soluzioni',
    categoria: 'Soluzioni Digitali e Automazioni',
    frase: 'Quando quello che ti serve non esiste ancora: lo progettiamo e lo costruiamo su misura.',
  },
  {
    slug: 'consulenza-it-integrazioni',
    nome: 'Consulenza IT e Integrazioni per Siti Web',
    gruppo: 'soluzioni',
    categoria: 'Soluzioni Digitali e Automazioni',
    frase: 'Mettiamo ordine negli strumenti che già usi e li facciamo parlare fra loro.',
  },
  {
    slug: 'creazione-logo',
    nome: 'Creazione Logo',
    gruppo: 'brand',
    categoria: 'Brand Identity e Grafica',
    frase: 'Il primo segno riconoscibile del tuo brand, costruito su misura.',
  },
  {
    slug: 'grafica-pubblicitaria',
    nome: 'Grafica Pubblicitaria',
    gruppo: 'brand',
    categoria: 'Brand Identity e Grafica',
    frase: 'Materiali visivi coerenti su ogni canale, senza doverci ripensare ogni volta.',
  },
  {
    slug: 'biglietti-da-visita',
    nome: 'Biglietti da Visita',
    gruppo: 'brand',
    categoria: 'Brand Identity e Grafica',
    frase: 'Il tuo primo contatto fisico, curato come tutto il resto.',
  },
  {
    slug: 'volantini',
    nome: 'Volantini',
    gruppo: 'brand',
    categoria: 'Brand Identity e Grafica',
    frase: 'Un volantino che non finisce nel cestino, perché dice la cosa giusta.',
  },
  {
    slug: 'menu-ristoranti',
    nome: 'Menu per Ristoranti e Locali',
    gruppo: 'brand',
    categoria: 'Brand Identity e Grafica',
    frase: 'Un menu che si legge bene, racconta il locale e ti aiuta a vendere i piatti giusti.',
  },
];
