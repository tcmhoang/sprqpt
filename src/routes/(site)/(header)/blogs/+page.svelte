<script>
	import { build_title } from '$lib/constants/page.js';

	export let data;

	let tags = data.tags.map((v) => [v, true]);

	const toggle_filter = (/** @type Event **/ event) =>
		(tags = [
			...tags.filter((v) => v[0] != /** @type HTMLElement **/ (event.target).textContent),
			[
				/** @type HTMLElement **/ (event.target).textContent ?? '',
				!(tags.find((v) => v[0] == /** @type HTMLElement **/ (event.target).textContent) ?? [
					'',
					false
				])[1]
			]
		]);
</script>

<svelte:head>
	<title>{build_title('Blogs')}</title>
	<meta name="description" content="Conrad Hoang's blogs" />
</svelte:head>
<div>
	{#each tags as [title, activated]}
		<button class:activated on:click={toggle_filter}>{title}</button>
	{/each}
</div>

{#each data.blogs as { date, title, created, tags, excerept, id, pimage }}
	<div />
	{#await pimage() then optimized_image}
		<enhanced:img src={optimized_image.default} />
	{/await}
{/each}

<style lang="scss">
	div {
		display: flex;
		gap: 0.25rem;
		align-content: center;
		justify-content: center;
		padding: 0.25rem 0.75rem;
	}
	button {
		display: inline-flex;
		background: var(--crust);
		color: var(--maroon);
		padding: 0.3rem 0.5rem;
		border: none;
		margin: 0.25rem;
		border-radius: 1rem;
		font-weight: normal;
		transition: all 150ms ease-in-out;
		animation: jump 350ms cubic-bezier(0.5, 0, 0.5, 1);

		&:hover {
			color: var(--red);
			opacity: 1;
			cursor: pointer;
		}

		&.activated {
			animation: boong 700ms linear forwards;
			background: var(--rosewater);
			color: var(--crust);
			font-weight: bold;
		}

		@keyframes jump {
			from {
				transform: none;
			}

			50% {
				transform: translateY(-100%);
			}

			90% {
				transform: translateY(0) scaleY(0.8);
			}
		}

		@keyframes boong {
			40% {
				transform: scale(1.5, 0.5);
			}

			50% {
				transform: scale(0.5, 1.5);
			}

			60% {
				transform: scale(1.3, 0.6);
			}

			70% {
				transform: scale(0.8, 1.2);
			}

			100% {
				transform: scale(1, 1);
			}
		}
	}
</style>
