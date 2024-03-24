<script>
	import { onMount } from 'svelte';

	/** @type string */
	export let to;
	export let title = '';

	const encrypted = '[email protected]';

	/** @type HTMLAnchorElement */
	let link;
	let error = false;

	/** @type string[] */
	let params = [];

	if (
		!to.match(
			/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
		)
	) {
		error = true;
		console.error('HiddenEmail: Invalid "to" email address.');
	} else {
		params = to.split(/[@\.]/);
	}

	onMount(() => {
		link.href = 'mailto:' + params[0] + '@' + params[1] + '.' + params[2];
		link.title = title;
		if (!$$slots.default) {
			link.textContent = title;
		}
	});
</script>

{#if !error}
	<a bind:this={link} href="/" title={encrypted}>
		{#if $$slots.default}
			<slot />
		{:else}
			{encrypted}
		{/if}
	</a>
{/if}
