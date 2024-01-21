<script>
	import { build_title } from '$lib/constants/page';

	/** @type string */
	export let excerpt;

	/** @type string */
	export let title;

	/** @type string */
	export let created;

	/** @type string */
	export let date;

	/** @type string */
	export let author;
</script>

<svelte:head>
	<meta name="DC.Date" content={created} />
	<meta name="DC.Date.modified" content={date} />
	<meta name="DC.title" content={title} />
	<meta name="DC.Creator" content={author} />
	<meta name="DC.Language" content="en" />
	<meta name="description" content={excerpt} />
	<title>{build_title(title)}</title>
</svelte:head>
