const immagini = import.meta.glob<{ default: import('astro').ImageMetadata }>(
  '../assets/images/clienti/*.webp',
  { eager: true }
);

function img(slug: string) {
  return immagini[`../assets/images/clienti/${slug}.webp`].default;
}

export interface Cliente {
  slug: string;
  nome: string;
  categoria: string;
}

const elenco: Cliente[] = [
  { slug: 'ali-gaadoudi', nome: 'Ali Gaadoudi', categoria: 'Chinesiologo' },
  { slug: 'cafe-touche', nome: 'Cafè Touchè', categoria: 'Bar e Ristorante' },
  { slug: 'carrozzeria-cocciolo', nome: 'Carrozzeria Cocciolo', categoria: 'Carrozzeria' },
  { slug: 'creazione', nome: 'Creazione', categoria: 'Ristorante' },
  { slug: 'd-l-impianti', nome: 'D & L Impianti', categoria: 'Impianti Navali, Civili e Industriali' },
  { slug: 'el-marrakchi', nome: 'El Marrakchi', categoria: 'Macelleria e Rosticceria' },
  { slug: 'glasy-service', nome: 'Glasy Service', categoria: 'Consuleza e Gestione Strutture Sportive e Centri Fitness' },
  { slug: 'hotel-alba', nome: 'Hotel Alba', categoria: 'Boutique Hotel' },
  { slug: 'il-datterino', nome: 'Il Datterino', categoria: 'Pizzeria e Ristorante' },
  { slug: 'jimenez', nome: 'Jimenez', categoria: 'Impresa Edile' },
  { slug: 'linea-vetro', nome: 'Linea Vetro', categoria: 'Serramenti, Infissi e Pergole' },
  { slug: 'luca-bolzoni', nome: 'Luca Bolzoni', categoria: 'Personal Trainer' },
  { slug: 'marilena-ancona', nome: 'Marilena Ancona', categoria: 'Property Manager' },
  { slug: 'moov', nome: 'Moov', categoria: 'Ristorante' },
  { slug: 'nilo', nome: 'Nilo', categoria: 'Negozio di Abbigliamento' },
  { slug: 'pachamama', nome: 'Pachamama', categoria: 'Gelateria' },
  { slug: 'palazzo-ghio', nome: 'Palazzo Ghio', categoria: 'Palazzo Storico' },
  { slug: 'papillon', nome: 'Papillon', categoria: 'Barber Shop' },
  { slug: 'portofino-boat', nome: 'Portofino Boat', categoria: 'Noleggio Barche' },
  { slug: 'portofino-keys', nome: 'Portofino Keys', categoria: 'Case Vacanze' },
  { slug: 'portofino-vip', nome: 'Portofino Vip', categoria: 'Property Management' },
  { slug: 'pulicenter', nome: 'Pulicenter', categoria: 'Impresa di Pulizie e Servizi' },
  { slug: 'quercus', nome: 'Quercus', categoria: 'Palestra e Fitness' },
  { slug: 'sara-podesta', nome: 'Sara Podestà', categoria: 'Property Manager' },
  { slug: 'stefania-revello', nome: 'Stefania Revello', categoria: 'Property Manager' },
  { slug: 'tendenza', nome: 'Tendenza', categoria: 'Negozio di Abbigliamento' },
  { slug: 'the-best', nome: 'The Best', categoria: 'Bottega Enogastronomica' },
  { slug: 'the-best-drink', nome: 'The Best Drink', categoria: 'Ristobottega' },
];

export const clienti = elenco.map((c) => ({ ...c, img: img(c.slug) }));
