<script lang="ts">
	import { onMount } from 'svelte';
	import type { CommandHistoryItem } from '$lib/types/command';

	let inputValue: string = $state('');
	let inputElement: HTMLInputElement;
	let historyIndex: number = $state(-1);

	let {
		onSubmit,
		history
	}: {
		onSubmit: (command: string) => void;
		history: CommandHistoryItem[];
	} = $props();

	onMount(() => {
		inputElement.focus();
	});

	function handleInput() {
		onSubmit(inputValue);
		inputValue = '';
		historyIndex = -1;
	}
</script>

<label class="mt-4 flex">
	<span class="text-white">jimmy@portfolio:~$</span>

	<input
		bind:this={inputElement}
		type="text"
		onkeydown={(event) => {
			if (event.key === 'Enter') {
				handleInput();
			}
			if (event.key === 'ArrowUp') {
				event.preventDefault();

				if (history.length === 0) return;

				historyIndex = Math.min(historyIndex + 1, history.length - 1);
				inputValue = history[history.length - 1 - historyIndex].command;
			}

			if (event.key === 'ArrowDown') {
				event.preventDefault();

				if (historyIndex === -1) return;

				historyIndex -= 1;

				if (historyIndex === -1) {
					inputValue = '';
				} else {
					inputValue = history[history.length - 1 - historyIndex].command;
				}
			}
		}}
		bind:value={inputValue}
		class="ml-2 flex-1 outline-none"
	/>
</label>
