export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: 'Nome Sito',
  url: 'https://example.com',
  lang: 'it',
  description: 'Descrizione sintetica del sito, sostituire con i contenuti approvati.',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Servizi', href: '/servizi' },
    { label: 'Chi siamo', href: '/chi-siamo' },
    { label: 'Contatti', href: '/contatti' },
  ] satisfies NavItem[],
  contact: {
    email: 'info@example.com',
    phone: '+39 000 000 0000',
  },
};
