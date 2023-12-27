<script>
	import { onMount } from 'svelte';

	/** @type number */
	export let level;

	/** @type Element */
	let element;

	/** @type string | null */
	let id = null;

	onMount(() => {
		if (element.firstElementChild?.textContent ?? false) {
			id = (element.firstElementChild?.textContent ?? '')
				.replace(/[?]/g, '')
				.replace(/\s+/g, '-')
				.toLowerCase();
		}
	});
</script>

<svelte:element this={`h${level}`} bind:this={element}> <slot /> </svelte:element>
<p>{id}</p>

<style>
	h2 {
		font-weight: bold;
		font-size: var(--step-2);
		margin-bottom: 0.5rem;
	}
</style>
