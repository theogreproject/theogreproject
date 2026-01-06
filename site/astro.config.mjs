// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://theogreproject.github.io',
	base: '/theogreproject',
	integrations: [
		starlight({
			title: 'The Ogre Project',
			description: 'An open, free curriculum to teach TTRPG Game Mastering, Worldbuilding, and related skills.',
			logo: {
				src: './src/assets/brand/icon-256.png',
				alt: 'The Ogre Project',
			},
			favicon: '/favicon.ico',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/theogreproject/theogreproject' }],
			editLink: {
				baseUrl: 'https://github.com/theogreproject/theogreproject/edit/main/site/'
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Start Here', slug: 'start-here' },
						{ label: 'How This Curriculum Works', slug: 'how-it-works' },
					],
				},
			],
		}),
	],
});
