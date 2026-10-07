<script lang="ts">
	import TerminalInput from '$lib/components/TerminalInput.svelte';
	import { handleCommand as executeCommand } from '$lib/commands/handler';
	import type { CommandHistoryItem } from '$lib/types/command';

	let historyArray = $state<CommandHistoryItem[]>([]);

	function handleCommand(command: string) {
		const output = executeCommand(command);

		if (output.type === 'clear') {
			historyArray = [];
			return;
		}

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

		{#each historyArray as history, index (index)}
			<p class="mt-4"><span class="text-white">jimmy@portfolio:~$</span> {history.command}</p>

			{#if history.output.type === 'text'}
				<p class="whitespace-pre-line">
					{#each history.output.content as segment, index (index)}
						{#if segment.style === 'link' && segment.url}
							<a
								href={segment.url}
								target="_blank"
								rel="external noopener noreferrer"
								class="text-blue-400 underline"
							>
								{segment.text}
							</a>
						{:else}
							<span
								class={segment.style === 'command'
									? 'text-white'
									: segment.style === 'technology'
										? 'text-orange-400'
										: 'text-green-400'}
							>
								{segment.text}
							</span>
						{/if}
					{/each}
				</p>
			{:else if history.output.type === 'error'}
				<p class="text-red-500">{history.output.message}</p>
			{/if}
		{/each}

		<TerminalInput onSubmit={handleCommand} history={historyArray} />
	</div>
</main>
