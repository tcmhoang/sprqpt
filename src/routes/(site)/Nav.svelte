<script>
	import CatIcon from '$lib/icons/CatIcon.svelte';
	import { onMount } from 'svelte';

	/** @type Component */
	let theme_toggle;

	onMount(async () => {
		theme_toggle = (await import('./ThemeToggle.svelte')).default;
	});
</script>

<nav>
	<a href="/" aria-label="Homepage">
		<CatIcon />
	</a>

	<svelte:component this={theme_toggle} />
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		left: 0;
		padding: 0.5em;
		backdrop-filter: blur(7px);
		height: 3rem;
		z-index: 10;
		view-transition-name: header;
	}

	a {
		display: flex;
		height: 100%;
		aspect-ratio: 1;

		&:hover,
		&:focus-visible {
			background: var(--surface);
			border-radius: 0.3rem;
			outline: 0;
		}
	}
</style>
