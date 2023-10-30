<script>
	import { theme } from '$lib/states/theme';
	import { onDestroy, onMount } from 'svelte';

	/** @type string */
	export let heroUrl;
	/** @type string */
	export let heroAlt;

	/** @type {CssModifier | null } */
	export let heroCss;

	/** @type HTMLIFrameElement */
	let iframe;

	/** @type {function(): void} */
	let unsubscribe = () => {};

	onMount(() => {
		const iframe_elem = iframe?.contentDocument?.querySelector('body');

		unsubscribe = theme.subscribe((s) => {
			if (iframe_elem) {
				switch (s) {
					case 'light':
						return onThemeChange(
							heroCss?.light ?? '',
							iframe_elem
						);
					case 'dark':
						return onThemeChange(
							heroCss?.dark ?? '',
							iframe_elem
						);
					case 'system':
						return onThemeChange(
							heroCss?.sys ?? '',
							iframe_elem
						);
					default:
						return;
				}
			}
		});
	});

	onDestroy(unsubscribe);

	function onThemeChange(/** @type {string} */ css, /** @type HTMLElement */ iframe_elem) {
		if (iframe_elem) iframe_elem.style.cssText = css;
	}
</script>

<div class="banner">
	{#if !heroCss}
		<img
			src={heroUrl}
			alt={heroAlt}
			width="750"
			height="250"
			style="object-fit: cover;"
		/>
	{:else}
		<iframe
			src={heroUrl}
			frameborder="0"
			title={heroAlt}
			loading="lazy"
			bind:this={iframe}
		/>
	{/if}
</div>

<style lang="scss">
	.banner {
		width: 100%;
		aspect-ratio: 3/1;
		background-color: var(--base);
		& > * {
			width: 100%;
			height: 100%;
		}
	}
</style>
