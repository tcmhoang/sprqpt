<script>
	/** @type number */
	export let level;
</script>

<svelte:element this={`h${level}`}>
	<slot />
</svelte:element>

<style lang="scss">
	@for $i from 1 through 6 {
		h#{$i} {
			font-size: var(--step-#{5 - $i});
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		clear: both;
		font-weight: bold;
		margin-bottom: 0.5rem;
		display: flex;
		column-gap: 0.5rem;
		align-items: center;
		margin-top: 1rem;
		scroll-margin-top: 4rem;
	}
</style>
