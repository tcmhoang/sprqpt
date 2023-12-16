<script>
	/** @type number */
	export let level;
</script>

<svelte:element this={`h${level}`}> <slot /> </svelte:element>

<style>
	h2 {
		font-weight: bold;
		font-size: var(--step-2);
		margin-bottom: 0.5rem;
	}
</style>
