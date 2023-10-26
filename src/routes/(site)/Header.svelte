<script>
	import Banner from './Banner.svelte';

	/** @type BannerData */
	export let bannerData;
</script>

<header>
	<div class="bannerContainer">
		<Banner
			heroUrl={bannerData.hero_url}
			heroAlt={bannerData.hero_alt}
			heroCss={bannerData.hero_css}
		/>
	</div>

	<div class="w-content overview">
		<div class="avatar">
			<img
				src="https://avatars.githubusercontent.com/u/51996720?v=4"
				alt="Conrad"
				width="200"
				height="200"
				loading="eager"
				decoding="async"
			/>
		</div>
		<h1 class="name">Conrad Hoang</h1>
	</div>
</header>

<style lang="scss">
	header {
		max-width: var(--width);
		margin: auto;
	}

	.bannerContainer {
		border-radius: 13px;
		overflow: hidden;
		transform: translateZ(0px);
		padding-bottom: 0.5rem;
	}

	.overview {
		padding-left: 1rem;
		padding-right: 1rem;
		margin: auto;
		display: grid;
		grid-gap: 0.5rem;
	}
	.avatar {
		position: relative;
		display: flex;
		padding-bottom: 0.5rem;
		min-height: calc(var(--step-9) * 0.3);
		padding-top: 0.5rem;

		& > img {
			position: absolute;
			display: block;
			top: 0;
			left: 0;
			width: var(--step-9);
			height: auto;
			aspect-ratio: 1;
			transform: translateY(-50%);
			border: solid var(--text) 3px;
			border-radius: 100px;
		}
	}

	.name {
		display: flex;
		font-weight: bold;
		font-size: var(--step-3);
	}
</style>
