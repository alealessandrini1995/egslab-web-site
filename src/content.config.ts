import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      seoTitle: z.string(),
      description: z.string(),
      title: z.string(),
      shortTitle: z.string(),
      category: z.enum(['Web Design', 'Social', 'SEO e Visibilità Online', 'Soluzioni Digitali e Automazioni', 'Brand Identity e Grafica']),
      date: z.coerce.date(),
      readingTime: z.string(),
      lead: z.string(),
      excerpt: z.string(),
      cover: image().optional(),
      coverCard: image().optional(),
      servizio: z.enum([
        'realizzazione-siti-web',
        'landing-page',
        'contenuti-social',
        'gestione-social',
        'profilo-linktree',
        'seo-posizionamento',
        'profilo-google-business',
        'automazione-processi-aziendali',
        'software-web-app',
        'consulenza-it-integrazioni',
        'creazione-logo',
        'grafica-pubblicitaria',
        'biglietti-da-visita',
        'volantini',
        'menu-ristoranti',
      ]),
    }),
});

export const collections = { blog };
