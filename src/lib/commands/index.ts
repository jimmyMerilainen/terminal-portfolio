import type { Command } from '$lib/types/command';
import { helpCommand } from './help';
import { aboutCommand } from './about';
import { experienceCommand } from './experience';

export const commands: Record<string, Command> = {
	about: aboutCommand,
	clear: {
		name: 'clear',
		description: 'Clear the terminal',
		execute: () => ({
			type: 'clear'
		})
	},
	experience: experienceCommand,
	help: helpCommand
};
