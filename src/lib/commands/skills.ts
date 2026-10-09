import type { Command } from '$lib/types/command';

export const skillsCommand: Command = {
	name: 'skills',
	description: 'View my skills',
	execute: () => ({
		type: 'text',
		content: [
			{ text: '\nFrontend\n', style: 'command' },
			{ text: 'HTML5 · CSS3 · JavaScript · TypeScript\n', style: 'technology' },
			{ text: 'React · React Native · Expo · SvelteKit\n', style: 'technology' },
			{ text: 'Vite · REST APIs\n', style: 'technology' },

			{ text: '\nTesting\n', style: 'command' },
			{ text: 'Vitest\n', style: 'technology' },

			{ text: '\nTools & Workflow\n', style: 'command' },
			{ text: 'Git · GitHub · GitHub Actions · VS Code\n', style: 'technology' },
			{ text: 'npm · Claude Code · Copilot\n', style: 'technology' },

			{ text: '\nBackend & Infrastructure\n', style: 'command' },
			{ text: 'Firebase · Cloudflare\n', style: 'technology' }
		]
	})
};
