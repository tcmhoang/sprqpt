<script>
	import { onMount } from 'svelte';
	import './styles.scss';
	import { preloadData } from '$app/navigation';

	onMount(() => {
		const preload_paths = ['/', '/about', '/links', '/demos/nyan-cat'];
		preload_paths.forEach(preloadData);
	});
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title="Conrad Hoang RSS Feed" href="/rss.xml" />
</svelte:head>
<slot />
