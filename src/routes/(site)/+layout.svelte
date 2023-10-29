<script>
	import { onNavigate } from '$app/navigation';
	import Nav from './Nav.svelte';
	import Header from './Header.svelte';
	import './style.scss';
	import CatIcon from '$lib/icons/CatIcon.svelte';

	let hide_seek = false;

	onNavigate((navigation) => {
		const doc = /** @type {WTDocument} */ (document);

		if (!doc.startViewTransition) return;

		return new Promise((resolve) => {
			doc.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	const nyan_css = {
		sys: '',
		dark: `
		--nyan-r: var(--d-red);
		--nyan-o: var(--d-orange);
		--nyan-y: var(--d-yellow);
		--nyan-g: var(--d-green);
		--nyan-b: var(--d-blue);
		--nyan-p: var(--d-purple);
		--nyan-s: var(--d-subtext);
		--nyan-bg-l: var(--d-surface);
		--nyan-bg-d: var(--d-crust);

		--c-bread: var(--d-peach);
		--c-eyes: var(--d-crust);
		--c-tart: var(--d-flamingo);
		--c-topping: var(--d-pink);
		--c-fur: var(--d-surface);
		--c-cheeck: var(--d-rosewater);
		--c-shape: var(--d-text);
		`,
		light: `
		--nyan-r: var(--l-red);
		--nyan-o: var(--l-orange);
		--nyan-y: var(--l-yellow);
		--nyan-g: var(--l-green);
		--nyan-b: var(--l-blue);
		--nyan-p: var(--l-purple);
		--nyan-s: var(--l-surface);
		--nyan-bg-l: var(--l-surface);
		--nyan-bg-d: var(--l-crust);

		--c-bread: var(--l-peach);
		--c-eyes: var(--l-crust);
		--c-tart: var(--l-flamingo);
		--c-topping: var(--l-pink);
		--c-fur: var(--l-surface);
		--c-cheeck: var(--l-rosewater);
		--c-shape: var(--l-text);
		`
	};

	const bannerData = {
		hero_url: '/demos/nyan-cat',
		hero_alt: "Conrad's CSS Nyan Cat Demo",
		hero_css: nyan_css
	};
</script>

<svelte:body on:mouseenter={() => (hide_seek = true)} on:mouseleave={() => (hide_seek = false)} />

<div class="wm-cat" class:hide_seek aria-hidden="true">
	<CatIcon />
</div>

<Nav />

<Header {bannerData} />

<main class="w-content main"><slot /></main>

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

	.main {
		display: flex;
		max-width: 100%;
		padding-top: 1rem;
		margin: 0 auto;
		gap: 2rem;
		flex-flow: column nowrap;
		justify-content: center;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
