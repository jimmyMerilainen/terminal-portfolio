import type { Command } from '$lib/types/command';

export const commands: Record<string, Command> = {
	help: {
		name: 'help',
		description: 'List all available commands',
		execute: () => ({
			type: 'text',
			content: 'Available commands: help'
		})
	},
	clear: {
		name: 'clear',
		description: 'Clear the terminal',
		execute: () => ({
			type: 'clear'
		})
	}
};
