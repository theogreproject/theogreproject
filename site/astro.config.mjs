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
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Start Here', slug: 'start-here' },
            { label: 'Lesson: The Quest Loop', slug: 'getting-started/quest-loop' },
            { label: 'Ecercise: Learning Log', slug: 'getting-started/quest-loop-learning-log' },
            { label: 'How This Curriculum Works', slug: 'how-it-works' },
            { label: 'Curriculum Overview', slug: 'curriculum-overview' },
          ],
        },
        {
          label: 'Tracks',
          items: [
            { label: 'Player Foundations', slug: 'tracks/player-foundations' },
            { label: 'GM 101', slug: 'tracks/gm-101' },
            { label: 'Worldbuilding', slug: 'tracks/worldbuilding' },
            { label: 'Campaign Ops', slug: 'tracks/campaign-ops' },
          ],
        },
      ],
    }),
  ],
});
