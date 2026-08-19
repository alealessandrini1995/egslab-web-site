import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Fase dev: pubblicato su GitHub Pages come project site, non ancora sul dominio definitivo.
  site: 'https://alessandrini1995.github.io',
  base: '/egslab-web-site',
  output: 'static',
  integrations: [sitemap()],
});
