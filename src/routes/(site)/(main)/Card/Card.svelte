<script>
	import LinkIcon from '$lib/icons/LinkIcon.svelte';
	import Chip from './Chip.svelte';
</script>

<article>
	<div class="avatar">
		<a href="/" aria-label="Conrad's Feed">
			<img
				src="https://avatars.githubusercontent.com/u/51996720?s=40&v=4"
				alt="Author"
				width="40"
				height="40"
				decoding="async"
				loading="lazy"
			/>
		</a>
		<div class="actions">
			<a href="/" title="Permalink"><LinkIcon /></a>
		</div>
	</div>
	<div class="content">
		<div class="author">
			<a href="/" class="name">Conrad</a>
			<span>•</span>
			<time datetime="2008-02-14 20:00">Formatted Date</time>
		</div>
		<div>
			<Chip content="Feeling chill" emoji="😎" />
		</div>
		<div class="content">Random content</div>
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
			img {
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
		}

		time {
			font-size: var(--step--2);
		}
	}
</style>
