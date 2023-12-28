<script>
	import { onMount } from 'svelte';

	/** @type number */
	export let level;

	/** @type Element */
	let element;

	/** @type string | null */
	let id = null;

	onMount(() => {
		if (element && element.childNodes) {
			id =
				[...element.childNodes]
					.find((c) => c.nodeType == Node.TEXT_NODE)
					?.textContent?.replace(
						/[\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF|?]/g,
						''
					)
					.trim()
					.replace(/\s+/g, '-')
					.toLowerCase() ?? null;
		}
	});
</script>

<svelte:element this={`h${level}`} bind:this={element} {id}>
	<slot />
	<a href="#{id}" title="permalink">permalink</a>
</svelte:element>

<style>
	h2 {
		font-weight: bold;
		font-size: var(--step-2);
		margin-bottom: 0.5rem;
	}
	a {
		font-weight: bold;
		color: var(--peach);
		font-size: var(--step--2);
	}
</style>
