<script>
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import KeybaseIcon from '$lib/icons/KeybaseIcon.svelte';
	import ResumeIcon from '$lib/icons/ResumeIcon.svelte';
	import RssIcon from '$lib/icons/RssIcon.svelte';
	import TelegramIcon from '$lib/icons/TelegramIcon.svelte';
	import WebsiteIcon from '$lib/icons/WebsiteIcon.svelte';

	/** @type {[string, string,Component][]} */
	const links = [
		['Website', '/', WebsiteIcon],
		['RSS', '/', RssIcon],
		['Resume', '/resume', ResumeIcon],
		['Keybase', 'https://keybase.io/tcmhoang', KeybaseIcon],
		['Github', 'https://github.com/tcmhoang', GithubIcon],
		['Telegram', 'https://t.me/tcmhoang', TelegramIcon]
	];
</script>

<div>
	{#each links as [content, link, icon]}
		<a href={link}>
			<svelte:component this={icon} />
			{content}
		</a>
	{/each}
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3.5rem;
	}

	a {
		padding: 1.25rem;
		color: var(--text);
		border-radius: 1rem;

		&:hover {
			color: var(--maroon);
			background-color: var(--surface);
		}
	}
</style>
