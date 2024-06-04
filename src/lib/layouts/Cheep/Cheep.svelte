<script>
	import tweet from '$lib/content/tweet/tweet';
	import LinkIcon from '$lib/icons/LinkIcon.svelte';
	import PinIcon from '$lib/icons/PinIcon.svelte';
	import Chip from './Chip.svelte';

	/** @type string */
	export let date;

	/** @type string | undefined */
	export let title;

	/** @type string | undefined */
	export let emo;

	/** @type string | undefined*/
	export let emodesc;

	/** @type string | undefined */
	export let author;

	export let pinned = false;

	author = author ?? 'Conrad';

	const id = tweet.fetch_id(date, emo);
</script>

<article>
	{#if pinned}
		<span class="p-icon">
			<PinIcon />
		</span>
		<span class="p-title">Pinned</span>
	{/if}
	<div class="avatar">
		<a href="/" aria-label="Conrad's Feed">
			<enhanced:img
				src="$lib/assets/me.png?w=60"
				alt="Author"
				sizes="60px"
				decoding="async"
				loading="lazy"
				class="img-ava"
			/>
		</a>
		<div class="actions">
			<a href="/cheeps/{id}" title="Permalink"><LinkIcon /></a>
		</div>
	</div>
	<div class="content">
		<div class="author">
			<a href="/">{author}</a>
			<span>•</span>
			<time datetime={date}>{new Date(date).toDateString()}</time>
		</div>
		<div>
			{#if emo && emodesc}
				<Chip content={emodesc} emoji={emo} />
			{/if}
		</div>
		<div class="content">
			{#if title}
				<h2>{title}</h2>
			{/if}
			<slot />
		</div>
	</div>
</article>

<style lang="scss">
	article {
		display: grid;
		width: 100%;
		grid-template-columns: auto 1fr;
		gap: 0.5rem;
		padding: 1rem;
		border-radius: 0.5rem;

		&:hover {
			background-color: var(--surface);
		}
	}

	h2 {
		font-size: var(--step-2);
	}

	%firstGrid {
		display: flex;
		flex-flow: column nowrap;
		gap: 0.5rem;
		a {
			width: 2.5rem;
			height: 2.5rem;
		}
	}

	.avatar {
		@extend %firstGrid;
		.img-ava {
			width: 100%;
			height: auto;
			border-radius: 2.5rem;
		}
	}

	.actions {
		@extend %firstGrid;
		a {
			border-radius: 0.25rem;
			color: var(--text);
			padding: 0.5rem;

			&:hover {
				color: var(--maroon);
				background-color: var(--p-surface);
			}
		}
	}

	.content {
		display: grid;
		row-gap: 0.25rem;
		line-height: 1.5;
	}

	.author {
		display: flex;
		column-gap: 0.5rem;
		align-items: center;
		color: var(--subtext);
		font-size: var(--step--1);
	}

	a {
		color: var(--text);
		font-weight: bold;
		font-size: var(--step-0);
		&:hover {
			text-decoration: var(--peach) double underline 1px;
			text-underline-offset: 2px;
			text-decoration-skip-ink: auto;
		}
	}

	time {
		font-size: var(--step--2);
	}

	.p-icon {
		width: 1rem;
		height: 1rem;
		justify-self: end;
	}

	.p-title {
		color: var(--subtext);
		font-size: var(--step--2);
	}
</style>
