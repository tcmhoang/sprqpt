<script>
	import { page } from '$app/stores';
	import Footer from './(site)/Footer/Footer.svelte';
	import Nav from './(site)/Nav.svelte';
</script>

<Nav />
<main>
	<h2>{$page.status}</h2>
	<span><strong>Oops!</strong> {$page.url.pathname} is gone missing?!</span>
</main>
<Footer />

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		max-width: 100%;
		flex-direction: column;
		min-height: 75vh;
		touch-action: none;
	}
	h2 {
		font-size: var(--step-9);
		font-weight: bold;
		text-shadow:
			0 1px 0 var(--subtext),
			0 2px 0 var(--overlay),
			0 3px 0 var(--surface),
			0 4px 0 var(--p-surface),
			0 5px 0 var(--crust),
			0 6px 1px color-mix(in hsl, var(--base), var(--text) 10%),
			0 0 5px color-mix(in hsl, var(--base), var(--text) 10%),
			0 1px 3px color-mix(in hsl, var(--base), var(--text) 30%),
			0 3px 5px color-mix(in hsl, var(--base), var(--text) 20%),
			0 5px 10px color-mix(in hsl, var(--base), var(--text) 25%),
			0 10px 10px color-mix(in hsl, var(--base), var(--text) 20%),
			0 20px 20px color-mix(in hsl, var(--base), var(--text) 15%);
		text-align: center;
	}
	span {
		font-family:
			ui-monospace,
			SFMono-Regular,
			Menlo,
			Monaco,
			Consolas,
			Liberation Mono,
			Courier New,
			monospace;
	}
</style>
