<script>
	import PaperClipIcon from '$lib/icons/PaperClipIcon.svelte';
	import { onMount } from 'svelte';

	/** @type number */
	export let level;

	/** @type Element */
	let element;

	/** @type string | null */
	let id = null;

	onMount(() => {
		if (element && element.childNodes.length) {
			id =
				element.childNodes[0].textContent
					?.replace(/[\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF|?]/g, '')
					.trim()
					.replace(/\s+/g, '-')
					.toLowerCase() ?? null;
		}
	});
</script>

<svelte:element this={`h${level}`} bind:this={element} {id}>
	<span> <slot /> </span>
	<a href="#{id}" title="permalink">
		<PaperClipIcon />
	</a>
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
		font-weight: bold;
		margin-bottom: 0.5rem;
		display: flex;
		column-gap: 0.5rem;
		align-items: center;
		margin-top: 2rem;
		scroll-margin-top: 4rem;
	}
	a {
		color: var(--text);
		width: 2.75rem;
		height: 2.75rem;
	}
</style>
