<script>
	import { onNavigate } from '$app/navigation';
	import Nav from './Nav.svelte';
	import './style.scss';
	import Footer from './Footer/Footer.svelte';
	import { onMount } from 'svelte';

	/** @type Component */
	let watermark;
	onMount(async () => {
		watermark = (await import('./Watermark.svelte')).default;
	});

	onNavigate((navigation) => {
		const doc = /** @type {WTDocument} */ (document);

		if (!doc.startViewTransition) {
			return;
		}

		return new Promise((resolve) => {
			doc.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:component this={watermark} />

<Nav />

<main class="w-content main"><slot /></main>

<Footer />

<style>
	.main {
		display: flex;
		max-width: 100%;
		padding: 1rem 1rem 0 1rem;
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
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
