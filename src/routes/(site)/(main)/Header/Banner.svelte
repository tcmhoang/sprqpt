<script>
	import { theme } from '$lib/states/theme';
	import { onDestroy, onMount } from 'svelte';

	/** @type string */
	export let hero_url;
	/** @type string */
	export let hero_alt;

	/** @type {CssModifier | null } */
	export let hero_css;

	/** @type HTMLIFrameElement */
	let iframe;

	/** @type {(function(): void) | null} */
	let unsubscribe = null;

	const on_iframe_load = () => {
		if (!unsubscribe) {
			const iframe_doc = iframe.contentDocument ?? iframe.contentWindow?.document;

			if (!!iframe_doc && iframe_doc?.readyState == 'complete') {
				const iframe_elem = iframe_doc.querySelector('body');

				// If does not have children => not load completely
				if (iframe_elem?.children.length ?? false) {
					unsubscribe = theme.subscribe((s) => {
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
	onMount(() => {
		const id_check_iframe = setInterval(() => {
			unsubscribe ? clearInterval(id_check_iframe) : on_iframe_load();
		}, 250);
	});

	onDestroy(() => (unsubscribe ? unsubscribe() : null));

	function on_theme_change(
		/** @type {string} */ css,
		/** @type {HTMLElement | null} */ iframe_elem
	) {
		if (iframe_elem) iframe_elem.style.cssText = css;
	}
</script>

<div class="banner">
	{#if !hero_css}
		<img src={hero_url} alt={hero_alt} width="750" height="250" style="object-fit: cover;" />
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
