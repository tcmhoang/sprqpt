<script>
	import { onMount } from 'svelte';

	/** @type Component */
	let footer;
	onMount(async () => {
		footer = (await import('./FooterWithoutMeta.svelte')).default;
	});
</script>

<svelte:component this={footer} />
<div class="hidden" aria-hidden="true" itemtype="http://schema.org/Person">
	<span itemprop="gender">Male</span>
	<span itemprop="givenName">Tuan</span>
	<span itemprop="familyName">Hoang</span>
	<span itemprop="name">Tuan Minh Hoang</span>
	<span itemprop="additionalName">Conrad Hoang</span>
	<span itemprop="jobTitle">Software Engineer</span>
	<span itemprop="nationality">VN</span>
</div>
