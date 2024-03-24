<script>
	import { onMount } from 'svelte';

	/** @type string */
	export let href;
	export let title = '';

	const encrypted = '[info protected]';

	/** @type HTMLAnchorElement */
	let link;

	onMount(() => {
		link.href = href;
		link.title = title;
		if (!$$slots.default) {
			link.textContent = title;
		}
	});
</script>

<a bind:this={link} href="/" title={encrypted}>
	{#if $$slots.default}
		<slot />
	{:else}
		{encrypted}
	{/if}
</a>
