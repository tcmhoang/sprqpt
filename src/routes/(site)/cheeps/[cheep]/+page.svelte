<script>
	export let data;
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{`${data.title} • ${$page.url.hostname}`}</title>
</svelte:head>

<div class="container">
	<div class="card">
		<svelte:component this={data.content} />
	</div>
</div>

<style>
	.container {
		display: flex;
		height: 80vh;
		justify-items: center;
		align-items: center;
	}
	.card {
		background-color: var(--surface);
		border-radius: 0.5rem;
	}
</style>
