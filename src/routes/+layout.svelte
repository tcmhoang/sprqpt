<script>
	import '../styles.scss';
	let hide_seek = false;
</script>

<svelte:body on:mouseenter={() => (hide_seek = true)} on:mouseleave={() => (hide_seek = false)} />

<svg class="wm-cat" class:hide_seek>
	<use xlink:href="/icons/icon.svg#cat" />
</svg>

<slot />

<style>
	.wm-cat {
		height: 55vh;
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
