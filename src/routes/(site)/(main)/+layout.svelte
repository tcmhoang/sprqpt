<script>
	import FeedNavigation from './FeedNavigation.svelte';
	import { page } from '$app/stores';
	import default_banner from '$lib/constants/default_banner';
	import Header from './Header/Header.svelte';
</script>

<Header
	bannerData={$page.data.bannerData ?? default_banner}
	summary={$page.data.summary}
	deets={$page.data.deets}
	heading={$page.data.heading}
/>
<FeedNavigation />

<slot />
