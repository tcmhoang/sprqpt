<script>
	import { build_title } from '$lib/constants/page.js';
	import Cheep from '$lib/layouts/Cheep/Cheep.svelte';
	export let data;

	const tweets = /** @type Component[] */ (data.tweets);
</script>

<svelte:head>
	<title>{build_title('Feed')}</title>
	<meta name="description" content="Conrad Hoang's personal website" />
</svelte:head>
<div>
	{#each tweets as tweet}
		<svelte:component this={tweet} />
	{/each}
</div>

<style>
	div {
		display: flex;
		gap: 1rem;
		flex-flow: column nowrap;
	}
</style>
