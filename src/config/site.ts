export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const site = {
  name: 'egslab',
  url: 'https://www.egslab.it',
  lang: 'it',
  description:
    "Laboratorio digitale multidisciplinare: siti web, landing page, automazione dei processi aziendali, logo, grafica pubblicitaria, stampa e social. Con sede a Chiavari (GE), lavoriamo in tutta Italia.",
  nav: [
    { label: 'Servizi', href: '/servizi/' },
    { label: 'Portfolio', href: '/portfolio/' },
    { label: 'Chi siamo', href: '/chi-siamo/' },
    { label: 'Testimonianze', href: '/testimonianze/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contatti', href: '/contatti/' },
  ] satisfies NavItem[],
  contact: {
    email: 'info@egslab.it',
    whatsapp: 'https://wa.me/393441543497',
  },
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/egslab' },
    { label: 'Facebook', href: 'https://www.facebook.com/egslab' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/egslab' },
  ] satisfies SocialLink[],
  address: {
    locality: 'Chiavari',
    region: 'GE',
    country: 'IT',
  },
};
