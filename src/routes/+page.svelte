<script lang="ts">
	import TerminalInput from '$lib/components/TerminalInput.svelte';
	import { handleCommand as executeCommand } from '$lib/commands/handler';
	import type { TerminalOutput } from '$lib/types/command';

	let historyArray = $state<
		{
			command: string;
			output: TerminalOutput;
		}[]
	>([]);

	function handleCommand(command: string) {
		const output = executeCommand(command);
		historyArray = [...historyArray, { command, output }];
	}
</script>

<svelte:head>
	<title>Jimmy - Portfolio</title>
	<meta name="description" content="Jimmy's portfolio" />
</svelte:head>

<main class="min-h-screen bg-black p-4 text-green-400">
	<div class="mx-auto">
		<p>Welcome to my portfolio!</p>

		<p class="mt-4">Type <span class="text-white">help</span> to see available commands.</p>

		{#each historyArray as history (history.command)}
			<p class="mt-4"><span class="text-white">jimmy@portfolio:~$</span> {history.command}</p>

			{#if history.output.type === 'text'}
				<p>{history.output.content}</p>
			{:else if history.output.type === 'error'}
				<p class="text-red-500">{history.output.message}</p>
			{/if}
		{/each}

		<TerminalInput onSubmit={handleCommand} />
	</div>
</main>
