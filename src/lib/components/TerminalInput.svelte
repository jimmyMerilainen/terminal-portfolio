<script lang="ts">
	let inputValue: string = $state('');

	let {
		onSubmit
	}: {
		onSubmit: (command: string) => void;
	} = $props();

	function handleInput() {
		onSubmit(inputValue);
		inputValue = '';
	}
</script>

<div class="mt-4 flex">
	<span class="text-white">jimmy@portfolio:~$</span>

	<input
		type="text"
		onkeydown={(event) => {
			if (event.key === 'Enter') {
				handleInput();
			}
		}}
		bind:value={inputValue}
		class="ml-2 flex-1 outline-none"
	/>
</div>
