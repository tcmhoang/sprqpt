<script>
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import KeybaseIcon from '$lib/icons/KeybaseIcon.svelte';
	import LinkedinIcon from '$lib/icons/LinkedinIcon.svelte';
	import ResumeIcon from '$lib/icons/ResumeIcon.svelte';
	import RssIcon from '$lib/icons/RssIcon.svelte';
	import ScheduleIcon from '$lib/icons/ScheduleIcon.svelte';
	import TelegramIcon from '$lib/icons/TelegramIcon.svelte';
	import WebsiteIcon from '$lib/icons/WebsiteIcon.svelte';

	/** @type {[string, string,Component][]} */
	const links = [
		['Website', '/', WebsiteIcon],
		['RSS', '/rss.xml', RssIcon],
		['Resumé', '/resume', ResumeIcon],
		['Keybase', 'https://keybase.io/tcmhoang', KeybaseIcon],
		['Github', 'https://github.com/tcmhoang', GithubIcon],
		['Telegram', 'https://t.me/tcmhoang', TelegramIcon],
		['Linkedin', 'https://www.linkedin.com/in/tcmhoang', LinkedinIcon],
		['Schedule a call', 'https://calendly.com/tcmhoang/30min', ScheduleIcon]
	];
</script>

<div>
	{#each links as [content, link, icon]}
		{#if content == 'RSS'}
			<a data-sveltekit-reload href={link}>
				<svelte:component this={icon} />
				{content}
			</a>
		{:else}
			<a href={link} target="_blank">
				<svelte:component this={icon} />
				{content}
			</a>
		{/if}
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
