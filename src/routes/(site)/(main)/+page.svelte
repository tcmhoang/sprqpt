<script>
	import { page } from '$app/stores';
	export let data;
</script>

<svelte:head>
	<title>{`Feed • ${$page.url.hostname}`}</title>
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
