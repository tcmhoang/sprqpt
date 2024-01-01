<script>
	/** @type string*/
	export let emoji;
	/** @type string*/
	export let content;
</script>

<div>
	<span role="presentation" aria-hidden="true">{emoji}</span>
	<span class="text">{content}</span>
</div>

<style lang="scss">
	div {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		padding: 0.25rem 0.75rem;
		background-color: var(--p-surface);
		border-radius: 9999px;
		font-weight: bold;
	}

	.text {
		font-size: var(--step--2);
	}
</style>
