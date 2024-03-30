<script>
	/** @type string */
	export let href;
	/** @type string */
	export let title;
</script>

<a {href} {title} target="_blank"><slot /></a>

<style lang="scss">
	a {
		color: color-mix(in hsl, var(--yellow), black 25%);
		font-weight: bold;
		&:hover {
			text-decoration: underline 4px;
			text-underline-offset: 2px;
		}
	}
</style>
