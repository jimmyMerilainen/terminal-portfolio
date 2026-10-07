import type { Command } from '$lib/types/command';

export const experienceCommand: Command = {
	name: 'experience',
	description: 'My work experience',
	execute: () => ({
		type: 'text',
		content: [
			{ text: 'PlayPilot\n', style: 'command' },
			{ text: 'Frontend Developer · 2024 – 2026\n', style: 'description' },
			{
				text: 'Worked on iOS, Android and web applications.\n',
				style: 'description'
			},
			{
				text: 'Technologies: SvelteKit, JavaScript, TypeScript, Vite, Vitest\n\n',
				style: 'description'
			},

			{ text: 'Naudio\n', style: 'command' },
			{ text: 'Mobile Frontend Developer · 2022 – 2024\n', style: 'description' },
			{
				text: 'Developed and maintained mobile applications for iOS and Android.\n',
				style: 'description'
			},
			{
				text: 'Technologies: React Native, JavaScript, Cloudflare, GitHub Actions',
				style: 'description'
			}
		]
	})
};
