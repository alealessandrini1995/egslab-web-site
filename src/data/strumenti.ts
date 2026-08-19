const immagini = import.meta.glob<string>('../assets/images/strumenti/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

export interface Strumento {
  slug: string;
  nome: string;
  src: string;
}

const nomi: [string, string][] = [
  ['wordpress', 'WordPress'],
  ['wix-studio', 'Wix Studio'],
  ['canva', 'Canva'],
  ['adobe-illustrator', 'Adobe Illustrator'],
  ['adobe-photoshop', 'Adobe Photoshop'],
  ['meta-business', 'Meta Business'],
  ['google-business', 'Google Business'],
  ['google-ads', 'Google Ads'],
  ['linktree', 'Linktree'],
  ['visual-studio-code', 'Visual Studio Code'],
  ['gimp', 'GIMP'],
  ['inkscape', 'Inkscape'],
  ['handbrake', 'HandBrake'],
  ['bitwarden', 'Bitwarden'],
  ['google-cloud', 'Google Cloud'],
  ['chatgpt', 'ChatGPT'],
  ['claude', 'Claude'],
  ['gemini', 'Gemini'],
];

export const strumenti: Strumento[] = nomi.map(([slug, nome]) => ({
  slug,
  nome,
  src: immagini[`../assets/images/strumenti/${slug}.svg`],
}));
