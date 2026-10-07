export type Command = {
	name: string;
	description: string;
	execute: (commands: Command[]) => CommandOutput;
};

export type CommandOutput =
	| {
			type: 'text';
			content: textSegment[];
	  }
	| {
			type: 'link';
			label: string;
			url: string;
	  }
	| {
			type: 'clear';
	  };

export type TerminalOutput =
	| CommandOutput
	| {
			type: 'error';
			message: string;
	  };

export type CommandHistoryItem = {
	command: string;
	output: TerminalOutput;
};

export type textSegment = {
	text: string;
	style?: 'command' | 'description' | 'link';
	url?: string;
};
