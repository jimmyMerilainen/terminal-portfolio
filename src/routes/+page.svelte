<script lang="ts">
	import TerminalInput from '$lib/components/TerminalInput.svelte';

	function handleCommand(command: string) {
		console.log('Command:', command);
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

		<TerminalInput onSubmit={handleCommand} />
	</div>
</main>
