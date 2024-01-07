<script>
	import PaperClipIcon from '$lib/icons/PaperClipIcon.svelte';
	import { onMount } from 'svelte';

	/** @type number */
	export let level;

	const emojiRegex = /[\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF|?]/g;

	/** @type Element */
	let element;

	/** @type string | null */
	let id = null;

	let create_perma = true;

	onMount(() => {
		if (element && element.childNodes.length) {
			const maybe_text_content = element.childNodes[0].textContent;

			create_perma = !emojiRegex.test(maybe_text_content ?? '');
			id =
				maybe_text_content?.replace(emojiRegex, '').trim().replace(/\s+/g, '-').toLowerCase() ??
				null;
		}
	});
</script>

{#if create_perma}
	<svelte:element this={`h${level}`} bind:this={element} {id}>
		<span> <slot /> </span>
		<a href="#{id}" title="permalink">
			<PaperClipIcon />
		</a>
	</svelte:element>
{:else}
	<svelte:element this={`h${level}`} bind:this={element}>
		<slot />
	</svelte:element>
{/if}

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
		font-weight: bold;
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
