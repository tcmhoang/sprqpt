<script>
	import { theme } from '$lib/states/theme';
	import { onDestroy } from 'svelte';

	/** @type string */
	export let heroUrl;
	/** @type string */
	export let heroAlt;

	/** Contains Css variables to modify the current theme in the iframe
	 * @typedef {Object} CssModifier
	 * @property {string} sys - apply system css
	 * @property {string} dark - apply system css
	 * @property {string} light - apply system css
	 */

	/** @type {CssModifier | null } */
	export let heroCss;

	function onThemeChange(/** @type {string} */ css, /** @type HTMLElement */ iframe_elem) {
		if (iframe_elem) iframe_elem.style.cssText = css;
	}

	function onIFrameLoad() {
		const iframe = /** @type HTMLIFrameElement */ (document?.getElementById('banner'));
		const iframe_elem = iframe?.contentDocument?.querySelector('body');

		onDestroy(
			theme.subscribe((s) => {
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
			})
		);
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
			id="banner"
			src={heroUrl}
			frameborder="0"
			title={heroAlt}
			loading="lazy"
			on:load={onIFrameLoad}
		/>
	{/if}
</div>

<style>
	.banner {
		width: 100%;
		aspect-ratio: 3/1;
		background-color: var(--surface);
	}
	.banner > * {
		width: 100%;
		height: 100%;
	}
</style>
