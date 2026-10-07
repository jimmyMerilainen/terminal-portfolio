import type { Command } from '$lib/types/command';
import { helpCommand } from './help';

export const commands: Record<string, Command> = {
	help: helpCommand,
	clear: {
		name: 'clear',
		description: 'Clear the terminal',
		execute: () => ({
			type: 'clear'
		})
	}
};
