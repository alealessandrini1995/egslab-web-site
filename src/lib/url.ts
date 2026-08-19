/** Antepone il base path (astro.config.mjs) a un percorso interno assoluto (es. "/servizi/"). */
export function withBase(path: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}
