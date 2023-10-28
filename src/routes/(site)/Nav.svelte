<script>
	import { base } from '$app/paths';
	import CatIcon from '$lib/icons/CatIcon.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<nav>
	<a href="/" aria-label={base}>
		<CatIcon />
	</a>

	<ThemeToggle />
</nav>

<style>
	nav {
		display: flex;
		background-color: var(--overlay);
		flex: 1 1 0;
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
