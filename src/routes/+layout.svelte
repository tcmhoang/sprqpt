<script>
	import { onMount } from 'svelte';
	import './styles.scss';
	import { preloadData } from '$app/navigation';

	onMount(() => {
		const preload_paths = ['/', '/about', '/links', '/demos/nyan-cat'];
		preload_paths.forEach(preloadData);
	});
</script>

<slot />
