<script lang="ts">
	import TerminalInput from '$lib/components/TerminalInput.svelte';
	import { handleCommand as executeCommand } from '$lib/commands/handler';
	import type { CommandHistoryItem } from '$lib/types/command';
	import { onMount } from 'svelte';

	let historyArray = $state<CommandHistoryItem[]>([]);
	let terminalInput: TerminalInput;
	let jokeCountdown = $state<Record<number, number>>({});
	let jokeTimers: ReturnType<typeof setTimeout>[] = [];

	onMount(() => {
		handleCommand('welcome');

		const handleWindowClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			if (target.closest('a, input, button')) return;

			terminalInput?.focusInput();
		};

		window.addEventListener('click', handleWindowClick);

		return () => {
			window.removeEventListener('click', handleWindowClick);
			clearJokeTimers();
		};
	});

	function handleCommand(command: string) {
		const output = executeCommand(command);

		if (output.type === 'clear') {
			clearJokeTimers();
			historyArray = [];
			return;
		}

		historyArray = [...historyArray, { command, output }];

		if (output.type === 'joke') {
			startJokeCountdown(historyArray.length - 1);
		}
	}

	function startJokeCountdown(index: number) {
		jokeCountdown[index] = 3;

		const countdown = (value: number) => {
			if (value === 0) {
				jokeCountdown[index] = 0;
				return;
			}

			const timer = setTimeout(() => {
				jokeCountdown[index] = value - 1;
				countdown(value - 1);
			}, 1000);

			jokeTimers.push(timer);
		};

		countdown(3);
	}

	function clearJokeTimers() {
		jokeTimers.forEach((timer) => clearTimeout(timer));
		jokeTimers = [];
		jokeCountdown = {};
	}
</script>

<svelte:head>
	<title>Jimmy - Portfolio</title>
	<meta name="description" content="Jimmy's portfolio" />
</svelte:head>

<main class="min-h-screen bg-black p-4 text-green-400">
	<div class="mx-auto">
		{#each historyArray as history, index (index)}
			<p class="mt-4"><span class="text-white">jimmy@portfolio:~$</span> {history.command}</p>

			{#if history.output.type === 'text'}
				<div class="whitespace-pre-line">
					{#each history.output.content as segment, index (index)}
						{#if segment.style === 'ascii-desktop'}
							<pre class="hidden overflow-x-auto sm:block">{segment.text}</pre>
						{:else if segment.style === 'ascii-mobile'}
							<pre class="block overflow-x-auto sm:hidden">{segment.text}</pre>
						{:else if segment.style === 'link' && segment.url}
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
										: segment.style === 'status'
											? 'text-amber-400'
											: 'text-green-400'}
							>
								{segment.text}
							</span>
						{/if}
					{/each}
				</div>
			{:else if history.output.type === 'joke'}
				<div class="whitespace-pre-line">
					<p>{history.output.question}</p>
					{#if jokeCountdown[index] > 0}
						<p class="mt-2 text-amber-400">Revealing answer in {jokeCountdown[index]}...</p>
					{:else if jokeCountdown[index] === 0}
						<p class="mt-2">{history.output.answer}</p>
					{/if}
				</div>
			{:else if history.output.type === 'error'}
				<p class="text-red-500">{history.output.message}</p>
			{/if}
		{/each}

		<TerminalInput onSubmit={handleCommand} history={historyArray} bind:this={terminalInput} />
	</div>
</main>
