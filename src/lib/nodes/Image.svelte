<script context="module">
	const pattern = /^.*-(\d+)x(\d+).(.*)$/gm;
</script>

<script>
	/** @type string
	 * must have this format
	 * ...-WxH.xxx
	 * to calc the sizes(wxh)*/
	export let src;
	/** @type string | null */
	export let alt;
	/** @type string | null */
	export let title;

	const isVideo = src.endsWith('.mp4') ?? false;

	const [w, h, ext] = [...(src.match(pattern) ?? [0, 0, ''])];
</script>

<figure>
	{#if isVideo}
		<video {src} controls loop muted />
	{:else}
		<picture>
			<source srcset="{src} {w}w" sizes="{w}px" type="image/{ext}" />
			<img {src} alt={alt ?? title} width={w} height={h} decoding="async" loading="lazy" />
		</picture>
	{/if}
	<figcaption>{title ?? alt ?? 'An image'}</figcaption>
</figure>

<style>
	img,
	video {
		border-radius: 0.5rem;
		margin-bottom: 0.5rem;
		max-width: 100%;
		height: auto;
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
