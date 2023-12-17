<script>
	import { onNavigate } from '$app/navigation';
	import Nav from './Nav.svelte';
	import Header from './Header/Header.svelte';
	import './style.scss';
	import CatIcon from '$lib/icons/CatIcon.svelte';
	import { page } from '$app/stores';
	import default_banner from '$lib/constants/default_banner';
	import Footer from './Footer.svelte';

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
</script>

<svelte:body on:mouseenter={() => (hide_seek = true)} on:mouseleave={() => (hide_seek = false)} />

<div class="wm-cat" class:hide_seek aria-hidden="true" role="presentation">
	<CatIcon />
</div>

<Nav />

<Header
	bannerData={$page.data.bannerData ?? default_banner}
	summary={$page.data.summary}
	deets={$page.data.deets}
	heading={$page.data.heading}
/>

<main class="w-content main"><slot /></main>

<Footer />

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
