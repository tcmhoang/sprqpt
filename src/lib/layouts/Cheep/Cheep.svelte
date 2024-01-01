<script>
	import LinkIcon from '$lib/icons/LinkIcon.svelte';
	import Chip from './Chip.svelte';

	/** @type string */
	export let date;

	/** @type string */
	export let emotag;

	const emoji = emotag.substring(0, 1);
	const emoji_desc = emotag.substring(1);

	/** @type string | null | undefined */
	export let image;

	/** @type string | null | undefined */
	export let author;

	author = author ?? 'Conrad';
</script>

<article>
	<div class="avatar">
		<a href="/" aria-label="Conrad's Feed">
			<enhanced:img
				src="$lib/assets/me.jpg"
				sizes="40px"
				decoding="async"
				loading="lazy"
				class="img-ava"
			/>
		</a>
		<div class="actions">
			<a href="/" title="Permalink"><LinkIcon /></a>
		</div>
	</div>
	<div class="content">
		<div class="author">
			<a href="/"
				>{author}

				<span>•</span>
				<time datetime={date}>{new Date(Date.parse(date)).toDateString()}</time>
			</a>
		</div>
		<div>
			<Chip content={emoji_desc} {emoji} />
		</div>
		<div class="content">
			<slot />
			{#if image}
				<enhanced:img
					src={image}
					sizes="40px"
					decoding="async"
					loading="lazy"
					class="cheep-image"
				/>
			{/if}
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

	.avatar {
		display: flex;
		flex-flow: column nowrap;
		gap: 0.5rem;
		a {
			width: 2.5rem;
			height: 2.5rem;

			.img-ava {
				border-radius: 2.5rem;
			}
		}
	}

	.actions {
		display: flex;
		justify-content: center;
		align-content: center;
		gap: 0.5rem;

		a {
			width: 2.5rem;
			height: 2.5rem;
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
		line-height: 1.25;
	}

	.author {
		display: flex;
		column-gap: 0.5rem;
		align-items: center;
		color: var(--subtext);
		font-size: var(--step--1);
		a {
			color: var(--text);
			font-weight: bold;
			font-size: var(--step-0);
			&:hover {
				text-decoration: var(--peach) double underline 1px;
				text-underline-offset: 2px;
				text-decoration-skip: ink;
			}
		}

		time {
			font-size: var(--step--2);
		}
	}

	.cheep-image {
		border-radius: 0.5rem;
		max-width: 100%;
		height: auto;
		vertical-align: middle;
	}
</style>
