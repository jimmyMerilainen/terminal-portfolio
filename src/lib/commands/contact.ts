import type { Command } from '$lib/types/command';

export const contactCommand: Command = {
	name: 'contact',
	description: 'Get in touch',
	execute: () => ({
		type: 'text',
		content: [
			{ text: 'Email\n', style: 'command' },
			{
				text: 'merilainen@live.se\n\n',
				style: 'link',
				url: 'mailto:merilainen@live.se'
			},

			{ text: 'GitHub\n', style: 'command' },
			{
				text: 'github.com/jimmyMerilainen\n\n',
				style: 'link',
				url: 'https://github.com/jimmyMerilainen'
			},
			{ text: 'LinkedIn\n', style: 'command' },
			{
				text: 'linkedin.com/in/jimmy-meriläinen\n\n',
				style: 'link',
				url: 'https://www.linkedin.com/in/jimmy-meril%C3%A4inen-120078206/'
			}
		]
	})
};
