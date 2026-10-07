import type { Command } from '$lib/types/command';

export const projectsCommand: Command = {
	name: 'projects',
	description: 'View my projects',
	execute: () => ({
		type: 'text',
		content: [
			{ text: 'Grinch\n', style: 'command' },
			{
				text: 'Secret Santa mobile application built with Expo and Firebase.\n',
				style: 'description'
			},
			{
				text: 'GitHub',
				style: 'link',
				url: 'https://github.com/username/grinch'
			}
		]
	})
};
