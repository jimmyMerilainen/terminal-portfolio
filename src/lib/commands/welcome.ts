import type { Command } from '$lib/types/command';

export const welcomeCommand: Command = {
	name: 'welcome',
	description: 'Welcome message',
	execute: () => ({
		type: 'text',
		content: [
			{
				text: '\nJimmy Meriläinen\n',
				style: 'command'
			},
			{
				text: '\nWelcome to my portfolio!\n\n',
				style: 'description'
			},
			{
				text: 'Type ',
				style: 'description'
			},
			{
				text: 'help',
				style: 'command'
			},
			{
				text: ' to see available commands.',
				style: 'description'
			}
		]
	})
};
