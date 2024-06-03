<script>
	import { theme } from '$lib/states/theme';
	import { onDestroy, onMount } from 'svelte';

	/** @type any */
	export let hero_url;
	/** @type string */
	export let hero_alt;

	/** @type {CssModifier | null } */
	export let hero_css;

	/** @type HTMLIFrameElement */
	let iframe;

	/** @type boolean */
	let loaded = false;

	/** @type number */
	let g_id;

	if (hero_css) {
		/** @type {(function(): void) | null} */
		let unsubscribe = null;

		const on_iframe_load = () => {
			if (!unsubscribe) {
				const iframe_doc = iframe.contentDocument ?? iframe.contentWindow?.document;

				if (!!iframe_doc && iframe_doc?.readyState == 'complete') {
					const iframe_elem = iframe_doc.querySelector('body');

					// If does not have children => not load completely
					if (iframe_elem?.children.length ?? false) {
						loaded = true;
						unsubscribe = theme.subscribe((s) => {
							if (s == 'systen') return;
							switch (s) {
								case 'light':
									return on_theme_change(hero_css?.light ?? '', iframe_elem);
								case 'dark':
									return on_theme_change(hero_css?.dark ?? '', iframe_elem);
								case 'system':
									return on_theme_change(hero_css?.sys ?? '', iframe_elem);
								default:
									return;
							}
						});
					}
				}
			}
		};

		// A hack to set css in iframe at runtime
		// onload on iframe not working as expected

		const on_banner_theme_change = () => {
			if (loaded) {
				cancelAnimationFrame(g_id);
				return;
			}
			on_iframe_load();
			g_id = requestAnimationFrame(on_banner_theme_change);
		};

		onMount(on_banner_theme_change);

		onDestroy(() => (unsubscribe ? unsubscribe() : null));
	}

	function on_theme_change(
		/** @type {string} */ css,
		/** @type {HTMLElement | null} */ iframe_elem
	) {
		if (iframe_elem) iframe_elem.style.cssText = css;
	}
</script>

<div>
	{#if !hero_css}
		<enhanced:img
			src={hero_url.default}
			alt={hero_alt}
			style="object-fit: cover; aspect-ratio: 3/1; width: 100%; height: auto;"
		/>
	{:else}
		<iframe
			src={hero_url}
			frameborder="0"
			title={hero_alt}
			loading="lazy"
			scrolling="no"
			bind:this={iframe}
		/>
	{/if}
</div>

<style lang="scss">
	div {
		height: 100%;
		background-color: var(--base);

		& > * {
			width: 100%;
			height: 100%;
		}
	}
</style>
