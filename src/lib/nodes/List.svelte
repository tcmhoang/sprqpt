<script>
	/** @type boolean */
	export let ordered;

	const tag = ordered ? 'o' : 'u';
</script>

<svelte:element this={`${tag}l`}> <slot /> </svelte:element>

<style>
	ul,
	ol {
		display: flex;
		flex-flow: column wrap;
		gap: 0.375rem;
		padding-left: 2rem;
		margin-bottom: 1.5rem;
	}

	ol {
		list-style: decimal;
	}

	ul {
		list-style: disc;
	}
</style>
