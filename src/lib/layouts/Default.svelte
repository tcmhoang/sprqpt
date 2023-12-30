<script>
	import { page } from '$app/stores';

	/** @type string */
	export let excerpt;

	/** @type string */
	export let title;

	/** @type string */
	export let created;

	/** @type string */
	export let date;

	/** @type string | null | undefined */
	export let author;
</script>

<svelte:head>
	<meta name="DC.Date" content={created} />
	<meta name="DC.Date.modified" content={date} />
	<meta name="DC.title" content={title} />
	<meta name="DC.Creator" content={author ?? 'Conrad Hoang'} />
	<meta name="DC.Language" content="en" />
	<meta name="description" content={excerpt} />
	<title>{`${title} • ${$page.url.hostname}`}</title>
</svelte:head>

<div>
	<slot />

	<small>
		Updated on {new Date(Date.parse(date)).toDateString()}
	</small>
</div>

<style>
	div {
		padding: 0 1rem;
	}
</style>
