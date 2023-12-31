<script>
	import Card from './Card/Card.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{`Feed • ${$page.url.hostname}`}</title>
</svelte:head>
<div>
	<Card />
</div>

<style>
	div {
		display: flex;
		gap: 1rem;
		flex-flow: column nowrap;
	}
</style>
