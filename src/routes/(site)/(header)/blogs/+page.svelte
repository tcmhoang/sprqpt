<script>
	import { build_title } from '$lib/constants/page.js';
	import { slide } from 'svelte/transition';

	export let data;

	/** @type {[string,boolean][]} */
	let tags = data.tags.sort().map((v) => [v, true]) ?? [];

	const toggle_filter = (/** @type Event **/ event) =>
		(tags = /** @type {[string,boolean][]} */ ([
			...tags.filter((v) => v[0] != /** @type HTMLElement **/ (event.target).textContent),
			[
				/** @type HTMLElement **/ (event.target).textContent ?? '',
				!(tags.find((v) => v[0] == /** @type HTMLElement **/ (event.target).textContent) ?? [
					'',
					false
				])[1]
			]
		]).toSorted((a, b) => (a.at(0) + '').localeCompare(b.at(0) + '')));
	$: blogs = data.blogs.filter((meta) =>
		meta.tags?.some((t) => tags.some(([k, v]) => k == t && v))
	);
</script>

<svelte:head>
	<title>{build_title('Blogs')}</title>
	<meta name="description" content="Conrad Hoang's blogs" />
</svelte:head>
<div class="filter-chips">
	{#each tags as [title, activated]}
		<button class:activated on:click={toggle_filter}>{title}</button>
	{/each}
</div>

<div class="blogs">
	{#each blogs as { title, created, tags, excerpt, id, thumbnail, alt } (id)}
		<a class="card" href="/blogs/{id}" transition:slide>
			{#if thumbnail}
				{#await thumbnail()}
					<div class="card-thumbnail" />
				{:then optimized_image}
					<enhanced:img class="card-thumbnail" src={optimized_image.default} {alt} />
				{/await}
			{/if}
			<dl class="card-content">
				<dt class="card-title">
					<strong>{title}</strong>
				</dt>
				<dd>
					<small>{excerpt}</small>
				</dd>
				<dt>Published at</dt>
				<dd>
					<time datetime={created}>{new Date(created).toDateString()}</time>
				</dd>
				{#if tags}
					<dt>Tags:</dt>
					<dd>{tags.join(', ')}</dd>
				{/if}
			</dl>
		</a>
	{/each}
</div>

<style lang="scss">
	.blogs {
		display: grid;
		gap: 0.75rem;
	}
	.card {
		width: 100%;
		height: auto;
		aspect-ratio: 3/1;
		border-radius: 13px;
		display: grid;
		padding: 1rem;
		grid-template: auto / 50% 1fr;
		gap: 1.5rem;
		&:hover {
			background-color: var(--surface);
		}
	}

	.card-thumbnail {
		width: 100%;
		height: auto;
		aspect-ratio: 3/2;
		object-fit: cover;
		border-radius: 13px;
	}

	dl {
		display: grid;
		gap: 0.1rem;
	}

	dt {
		text-transform: uppercase;
		font-size: 0.8rem;
		opacity: 0.8;
		top: 0.2em;
		color: var(--pink);
	}

	dd {
		color: var(--text);
		font-size: 0.9rem;
		margin: 0;
	}

	.filter-chips {
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
