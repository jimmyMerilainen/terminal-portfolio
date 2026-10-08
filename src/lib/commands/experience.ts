import type { Command } from '$lib/types/command';

export const experienceCommand: Command = {
	name: 'experience',
	description: 'My work experience',
	execute: () => ({
		type: 'text',
		content: [
			{ text: '\nPlayPilot\n', style: 'command' },
			{ text: 'Frontend Developer · Stockholm · 2024 – 2026\n', style: 'description' },
			{
				text: 'Developed and maintained iOS, Android and web applications for a streaming guide used by over 1 million users across 26 countries.\n',
				style: 'description'
			},
			{
				text: 'Stack: ',
				style: 'description'
			},
			{
				text: 'SvelteKit · TypeScript · JavaScript · Tailwind CSS · GitHub Actions · Vite · Vitest\n\n',
				style: 'technology'
			},

			{ text: 'Naudio\n', style: 'command' },
			{ text: 'Mobile Frontend Developer · Stockholm · 2022 – 2024\n', style: 'description' },
			{
				text: 'Developed and maintained iOS and Android applications for a podcast service with a large documentary library.\n',
				style: 'description'
			},
			{
				text: 'Stack: ',
				style: 'description'
			},
			{
				text: 'React Native · JavaScript · Cloudflare · GitHub Actions\n\n',
				style: 'technology'
			},

			{ text: 'Technogarden\n', style: 'command' },
			{
				text: 'LIA 2 (Work placement) · Gothenburg · Spring 2022 · 16 weeks\n',
				style: 'description'
			},
			{
				text: 'Developed mobile applications for iOS and Android, including an app built from scratch using React Native.\n',
				style: 'description'
			},
			{
				text: 'Stack: ',
				style: 'description'
			},
			{
				text: 'React Native · JavaScript · Firebase\n\n',
				style: 'technology'
			},

			{ text: 'Inserve\n', style: 'command' },
			{
				text: 'LIA 1 (Work placement) · Gothenburg · Autumn 2021 · 8 weeks\n',
				style: 'description'
			},
			{
				text: 'Developed and maintained mobile and web applications using React Native and React.\n',
				style: 'description'
			},
			{
				text: 'Stack: ',
				style: 'description'
			},
			{
				text: 'React Native · React · JavaScript',
				style: 'technology'
			}
		]
	})
};
