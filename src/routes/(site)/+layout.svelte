<script>
	import Nav from './Nav.svelte';
	import './style.scss';
	let hide_seek = false;
</script>

<svelte:body on:mouseenter={() => (hide_seek = true)} on:mouseleave={() => (hide_seek = false)} />

<svg class="wm-cat" class:hide_seek aria-hidden="true">
	<use xlink:href="/icons/icon.svg#cat" />
</svg>

<Nav />
<slot />

<div class="hidden" aria-hidden="true" itemtype="http://schema.org/Person">
	<span itemprop="gender">Male</span>
	<span itemprop="email">tcmhoang@outlook.com</span>
	<span itemprop="givenName">Tuan</span>
	<span itemprop="familyName">Hoang</span>
	<span itemprop="name">Tuan Minh Hoang</span>
	<span itemprop="additionalName">Conrad Hoang</span>
	<span itemprop="jobTitle">Software Engineer</span>
	<span itemprop="nationality">VN</span>
</div>

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
