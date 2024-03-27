<script>
	import { onMount } from 'svelte';
	import './styles.scss';
	import { preloadCode } from '$app/navigation';

	onMount(() => {
		const preload_paths = ['/', '/about', '/links'];
		preload_paths.forEach(preloadCode);
	});
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title="Conrad Hoang RSS Feed" href="/rss.xml" />
</svelte:head>
<slot />
