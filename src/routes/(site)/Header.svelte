<script>
	import Banner from './Banner.svelte';

	/** @type BannerData */
	export let banner_data;
</script>

<header>
	<Banner
		heroUrl={banner_data.hero_url}
		heroAlt={banner_data.hero_alt}
		heroCss={banner_data.hero_css}
	/>
</header>
