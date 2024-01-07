<script>
	export let data;
</script>

<div><svelte:component this={data.content} /></div>

<style>
	div {
		display: flex;
	}
</style>
