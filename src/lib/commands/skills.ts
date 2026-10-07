import type { Command } from '$lib/types/command';

export const skillsCommand: Command = {
	name: 'skills',
	description: 'View my skills',
	execute: () => ({
		type: 'text',
		content: [
			{ text: 'Frontend\n', style: 'command' },
			{ text: '  React\n', style: 'technology' },
			{ text: '  React Native\n', style: 'technology' },
			{ text: '  SvelteKit\n', style: 'technology' },
			{ text: '  TypeScript\n', style: 'technology' },
			{ text: '  JavaScript\n\n', style: 'technology' },

			{ text: 'Tools & Backend\n', style: 'command' },
			{ text: '  Firebase\n', style: 'technology' },
			{ text: '  Git\n', style: 'technology' },
			{ text: '  Vitest\n', style: 'technology' },
			{ text: '  Vite\n', style: 'technology' },
			{ text: '  Cloudflare\n', style: 'technology' },
			{ text: '  GitHub Actions', style: 'technology' }
		]
	})
};
