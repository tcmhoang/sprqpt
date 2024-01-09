<script context="module">
	const emojiRegex = /[\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]|\?/g;
</script>

<script>
	import PaperClipIcon from '$lib/icons/PaperClipIcon.svelte';
	import { onMount } from 'svelte';

	/** @type Element */
	let element;

	/** @type string | null */
	let id = null;

	onMount(() => {
		if (element && element.childNodes.length) {
			const maybe_text_content = element.childNodes[0].textContent;

			if (!emojiRegex.test(maybe_text_content ?? '')) {
				id =
					maybe_text_content?.replace(emojiRegex, '').trim().replace(/\s+/g, '-').toLowerCase() ??
					id;
			}
		}
	});
</script>

<div>
	<span {id} bind:this={element}> <slot /> </span>
	{#if id}
		<a href="#{id}" title="permalink">
			<PaperClipIcon />
		</a>
	{/if}
</div>

<style lang="scss">
	div {
		margin-bottom: 0.5rem;
		display: flex;
		column-gap: 0.5rem;
		align-items: center;
		margin-top: 1rem;
		scroll-margin-top: 4rem;
	}
	a {
		color: var(--text);
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 0.375rem;

		&:hover {
			color: var(--peach);
			background-color: var(--p-surface);
		}
	}
</style>
