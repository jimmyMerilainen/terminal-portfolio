import type { Command } from '$lib/types/command';

export const educationCommand: Command = {
	name: 'education',
	description: 'My education background',
	execute: () => ({
		type: 'text',
		content: [
			{ text: '\nUX/UI & Frontend Development\n', style: 'command' },

			{
				text: 'Lexicon IT-Proffs · Stockholm · 2026 – 2027 · ',
				style: 'description'
			},

			{
				text: 'In progress\n',
				style: 'status'
			},

			{
				text: '160-day full-time program covering UX research, UI design, frontend development, accessibility, React, APIs and AI-assisted development.\n\n',
				style: 'description'
			},

			{ text: 'Application Development for iPhone & Android\n', style: 'command' },

			{
				text: 'IT-Högskolan · Gothenburg · 2020 – 2022\n',
				style: 'description'
			},

			{
				text: '2-year full-time program focused on iOS, Android and cross-platform development, including 24 weeks of workplace training.\n',
				style: 'description'
			}
		]
	})
};
