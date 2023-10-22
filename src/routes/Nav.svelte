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
