import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Fase dev: pubblicato su GitHub Pages come project site, non ancora sul dominio definitivo.
  site: 'https://alealessandrini1995.github.io',
  base: '/egslab-web-site',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    build: {
      // Il minifier CSS di default (Lightning CSS) elimina in build la
      // dichiarazione standard `backdrop-filter` quando coesiste con
      // `-webkit-backdrop-filter` sullo stesso valore, lasciando solo il
      // prefisso: l'effetto vetro (Footer, container.css) spariva quindi
      // solo in produzione, mai in dev. Il minifier esbuild non applica
      // questa fusione e lascia entrambe le dichiarazioni intatte.
      cssMinify: 'esbuild',
    },
  },
});
