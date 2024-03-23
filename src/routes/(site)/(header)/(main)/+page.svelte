<script>
	import { build_title } from '$lib/constants/page.js';
	export let data;
</script>

<svelte:head>
	<title>{build_title('Feed')}</title>
	<meta name="description" content="Conrad Hoang's personal website" />
</svelte:head>
<div>
	{#each data.tweets as tweet}
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
