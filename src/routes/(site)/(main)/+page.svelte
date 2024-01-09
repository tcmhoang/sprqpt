<script>
	import { page } from '$app/stores';
	export let data;

	const tweets = /** @type [string, Component] [] */ (data.tweets).map((i) => i[1]);
</script>

<svelte:head>
	<title>{`Feed • ${$page.url.hostname}`}</title>
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
