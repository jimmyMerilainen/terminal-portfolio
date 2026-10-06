<script lang="ts">
	import { onMount } from 'svelte';

	let inputValue: string = $state('');
	let inputElement: HTMLInputElement;

	let {
		onSubmit
	}: {
		onSubmit: (command: string) => void;
	} = $props();

	onMount(() => {
		inputElement.focus();
	});

	function handleInput() {
		onSubmit(inputValue);
		inputValue = '';
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
		}}
		bind:value={inputValue}
		class="ml-2 flex-1 outline-none"
	/>
</label>
