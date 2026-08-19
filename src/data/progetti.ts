import quercus from '../assets/images/clienti/quercus.webp';
import carrozzeriaCocciolo from '../assets/images/clienti/carrozzeria-cocciolo.webp';
import portofinoBoat from '../assets/images/clienti/portofino-boat.webp';
import jimenez from '../assets/images/clienti/jimenez.webp';
import ilDatterino from '../assets/images/clienti/il-datterino.webp';
import type { ImageMetadata } from 'astro';

export interface Progetto {
  titolo: string;
  cliente: string;
  categoria: string;
  frase: string;
  img: ImageMetadata;
  fondo: string;
  copertinaFoto?: boolean;
}

export const progetti: Progetto[] = [
  {
    titolo: 'Puoi fare sempre di meglio',
    cliente: 'Quercus',
    categoria: 'Palestra e Fitness',
    frase: 'Una palestra conosciuta in zona ma invisibile online. Sito, scheda Google e contenuti social: adesso la trovano anche quelli che non la conoscevano.',
    img: quercus,
    fondo: '#01723E',
  },
  {
    titolo: 'Soluzioni su misura',
    cliente: 'Carrozzeria Cocciolo',
    categoria: 'Carrozzeria',
    frase: 'Preventivi al telefono e appuntamenti su un quaderno. Abbiamo portato tutto online, in un posto solo.',
    img: carrozzeriaCocciolo,
    fondo: '#FFFFFF',
  },
  {
    titolo: "L'importanza di esserci",
    cliente: 'Portofino Boat',
    categoria: 'Noleggio Barche',
    frase: 'Nessuna presenza online in un mercato dove si prenota dal telefono. Sito, immagini e canali social partiti da zero.',
    img: portofinoBoat,
    fondo: '#003E5B',
  },
  {
    titolo: 'Dare valore al proprio lavoro',
    cliente: 'Jimenez',
    categoria: 'Impresa Edile',
    frase: "Un'impresa solida con una comunicazione che non la rappresentava. Nuova identità e materiali coordinati.",
    img: jimenez,
    fondo: '#F2EEEB',
    copertinaFoto: true,
  },
  {
    titolo: 'Insieme dal giorno zero',
    cliente: 'Il Datterino',
    categoria: 'Pizzeria e Ristorante',
    frase: "Aperti da poco, tutto da costruire: logo, menu, sito e social. Il primo cliente è arrivato prima dell'insegna.",
    img: ilDatterino,
    fondo: '#000000',
  },
];
