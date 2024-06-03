<script>
	import { page } from '$app/stores';
	import { build_title } from '$lib/constants/page';
	import Seo from 'sk-seo';
	import me from '$lib/assets/me.png';

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

	/** @type string[]? */
	export let tags;

	tags = !tags ? ['Portfolio', 'Blog', 'Person'] : tags;
</script>

<svelte:head>
	<meta name="DC.Date" content={created} />
	<meta name="DC.Date.modified" content={date} />
	<meta name="DC.title" content={title} />
	<meta name="DC.Creator" content={author} />
	<meta name="DC.Language" content="en" />
</svelte:head>

<Seo
	title={build_title(title)}
	description={excerpt}
	keywords={tags.join()}
	canonical={$page.url.href}
	siteName="Spark Point"
	imageURL={me}
	logo="/icons/favicon.ico"
	{author}
	name={author}
	socials={[
		'https://keybase.io/tcmhoang',
		'https://www.linkedin.com/in/tcmhoang',
		'https://github.com/tcmhoang'
	]}
/>
