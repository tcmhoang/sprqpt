<script>
	import FeedNavigation from './FeedNavigation.svelte';
	import { page } from '$app/stores';
	import default_banner from '$lib/constants/default_banner';
	import Header from './Header/Header.svelte';
</script>

<Header
	banner_data={$page.data.banner_data ?? default_banner}
	summary={$page.data.summary}
	deets={$page.data.deets}
	heading={$page.data.heading}
/>
<FeedNavigation />

<slot />
