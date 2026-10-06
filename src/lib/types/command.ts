export type Command = {
	name: string;
	description: string;
	execute: () => CommandOutput;
};

export type CommandOutput =
	| {
			type: 'text';
			content: string;
	  }
	| {
			type: 'link';
			label: string;
			url: string;
	  };

export type TerminalOutput =
	| CommandOutput
	| {
			type: 'error';
			message: string;
	  };
