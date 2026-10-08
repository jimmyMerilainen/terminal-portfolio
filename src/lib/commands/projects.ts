import type { Command } from '$lib/types/command';

export const projectsCommand: Command = {
	name: 'projects',
	description: 'View my projects',
	execute: () => ({
		type: 'text',
		content: [
			{ text: '\nTerminal-portfolio\n', style: 'command' },
			{
				text: 'A terminal-inspired portfolio built with SvelteKit and TypeScript.\n',
				style: 'description'
			},
			{
				text: 'Stack: ',
				style: 'description'
			},
			{
				text: 'SvelteKit · TypeScript · Tailwind CSS · GitHub Actions · GitHub Pages\n',
				style: 'technology'
			},
			{
				text: 'GitHub/terminal-portfolio\n\n',
				style: 'link',
				url: 'https://github.com/jimmyMerilainen/terminal-portfolio'
			},

			{ text: 'Grinch\n', style: 'command' },
			{
				text: 'Secret Santa mobile application built with Expo and Firebase.\n',
				style: 'description'
			},
			{
				text: 'Stack: ',
				style: 'description'
			},
			{
				text: 'React Native · Expo · TypeScript · Firebase · Firestore · Cloud Functions · Git\n',
				style: 'technology'
			},
			{
				text: 'GitHub/grinch',
				style: 'link',
				url: 'https://github.com/jimmyMerilainen/grinch'
			}
		]
	})
};
