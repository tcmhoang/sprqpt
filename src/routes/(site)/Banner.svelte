<script>
	/** @type string */
	export let heroUrl;
	/** @type string */
	export let heroAlt;
	/** @type boolean */
	export let isImage;
</script>

<div class="banner">
	{#if isImage}
		<img
			src={heroUrl}
			alt={heroAlt}
			width="750"
			height="250"
			style="object-fit: cover;"
		/>
	{:else}
		<iframe id="banner" src={heroUrl} frameborder="0" title={heroAlt} loading="lazy" />
	{/if}
</div>

<style>
	.banner {
		width: 100%;
		aspect-ratio: 3/1;
		background-color: var(--surface);
	}
	.banner > * {
		width: 100%;
		height: 100%;
	}
</style>
