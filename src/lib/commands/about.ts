import type { Command } from '$lib/types/command';

export const aboutCommand: Command = {
	name: 'about',
	description: 'About me',
	execute: () => ({
		type: 'text',
		content: [
			{ text: 'Hi, my name is Jimmy Meriläinen!\n', style: 'description' },
			{ text: 'Frontend & Mobile Developer\n\n', style: 'description' },
			{
				text: 'I build web and mobile applications with a focus\n',
				style: 'description'
			},
			{
				text: 'on user experience, performance and clean solutions.\n\n',
				style: 'description'
			},
			{
				text: 'Currently focused on frontend development with\n',
				style: 'description'
			},
			{
				text: 'React, React Native, SvelteKit and TypeScript.',
				style: 'description'
			}
		]
	})
};
