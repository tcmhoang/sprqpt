<script>
	/** @type string */
	export let href;
	/** @type string */
	export let title;
</script>

<a {href} {title}><slot /></a>

<style lang="scss">
	a {
		color: var(--yellow);
		&:hover {
			text-decoration: underline 4px;
			text-underline-offset: 2px;
		}
	}
</style>
