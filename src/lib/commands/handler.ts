import { commands } from './index';
import type { TerminalOutput } from '$lib/types/command';

export function handleCommand(command: string): TerminalOutput {
	const normalizedCommand = command.toLowerCase();
	const matchedCommand = commands[normalizedCommand];

	if (!matchedCommand) {
		return {
			type: 'error',
			message: `Command not found: ${command}`
		};
	}

	return matchedCommand.execute(Object.values(commands));
}
