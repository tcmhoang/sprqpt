<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{`Feed • ${$page.url.hostname}`}</title>
</svelte:head>
<div />

<style>
	div {
		display: flex;
		gap: 1rem;
		flex-flow: column nowrap;
	}
</style>
