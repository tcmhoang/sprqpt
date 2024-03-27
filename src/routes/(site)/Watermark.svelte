<script>
	import CatIcon from '$lib/icons/CatIcon.svelte';
	let hide_seek = false;
</script>

<svelte:body on:mouseenter={() => (hide_seek = true)} on:mouseleave={() => (hide_seek = false)} />

<div class="wm-cat" class:hide_seek aria-hidden="true" role="presentation">
	<CatIcon />
</div>

<style>
	.wm-cat {
		height: 55vh;
		aspect-ratio: 1;
		opacity: 0.05;
		position: fixed;
		z-index: -1;
		transform: translate(30%, 20%) rotate(-30deg);
		transform-origin: 100%;
		transition: transform 300ms;
		right: 0;
		top: 50%;
	}

	.hide_seek {
		transform: translateX(50%) rotate(0);
	}
</style>
