import type { Command } from '$lib/types/command';

export const helpCommand: Command = {
	name: 'help',
	description: 'Show available commands',
	execute: (commands) => ({
		type: 'text',
		content: commands.flatMap((command) => [
			{
				text: command.name,
				style: 'command'
			},
			{
				text: ` - ${command.description}\n`,
				style: 'description'
			}
		])
	})
};
