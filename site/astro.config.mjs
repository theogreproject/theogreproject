// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://theogreproject.github.io',
  base: '/theogreproject',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    starlight({
      title: 'The Ogre Project',
      description:
        'An open, free curriculum to teach TTRPG Game Mastering, Worldbuilding, and related skills.',
      logo: {
        src: './src/assets/brand/icon-256.png',
        alt: 'The Ogre Project',
      },
      favicon: '/favicon.ico',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/theogreproject/theogreproject',
        },
      ],
      customCss: ['./src/styles/ogre.css'],
      editLink: {
        baseUrl: 'https://github.com/theogreproject/theogreproject/edit/main/site/',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        'pt-br': {
          label: 'Português (Brasil)',
          lang: 'pt-BR',
        },
      },
      sidebar: [
        {
          label: 'Getting Started',
          translations: { 'pt-BR': 'Primeiros Passos' },
          items: [
            { slug: 'start-here' },
            { slug: 'getting-started/quest-loop' },
            { slug: 'getting-started/quest-loop-learning-log' },
            { slug: 'how-it-works' },
            { slug: 'curriculum-overview' },
          ],
        },
        {
          label: 'Tracks',
          translations: { 'pt-BR': 'Trilhas' },
          items: [
            { slug: 'tracks/player-foundations' },
            { slug: 'tracks/gm-101' },
            { slug: 'tracks/worldbuilding' },
            { slug: 'tracks/campaign-ops' },
          ],
        },
      ],
    }),
  ],
});
