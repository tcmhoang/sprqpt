<script>
	/** @type string */
	export let src;
	/** @type string | null | undefined*/
	export let alt;
	/** @type string | null  | undefined*/
	export let title;

	const is_video = src?.endsWith('.mp4') ?? false;
</script>

<figure>
	{#if is_video}
		<video class="enhanced" controls loop muted />
	{:else}
		<img {src} {alt} class="enhanced" decoding="async" loading="lazy" />
	{/if}
	<figcaption>{title ?? alt ?? 'An image'}</figcaption>
</figure>

<style>
	.enhanced {
		border-radius: 0.5rem;
		margin-bottom: 0.5rem;
		max-width: 100%;
		height: auto;
		vertical-align: middle;
	}

	figure {
		display: grid;
		place-items: center;
		grid-column: 1 / -1;
		margin: 0 1.5rem;
	}

	figcaption {
		color: var(--subtext);
		font-size: var(--step--2);
	}
</style>
