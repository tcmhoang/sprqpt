<script>
	import { base } from '$app/paths';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<nav>
	<a href="/" aria-label={base}>
		<svg>
			<use xlink:href="/icons/icon.svg#cat" />
		</svg>
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
	}

	a {
		display: flex;
		height: 100%;
		aspect-ratio: 1;
	}
</style>
