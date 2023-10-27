<script>
	import BirthdayCakeIcon from '$lib/icons/BirthdayCakeIcon.svelte';
	import BriefcaseIcon from '$lib/icons/BriefcaseIcon.svelte';
	import PositionLocationIcon from '$lib/icons/PositionLocationIcon.svelte';
	import VerifiedBadgeIcon from '$lib/icons/VerifiedBadgeIcon.svelte';
	import Banner from './Banner.svelte';
	import EmailSender from './EmailSender.svelte';

	/** @type BannerData */
	export let bannerData;

	const deets = [
		{
			title: 'Job',
			text: 'Available',
			icon: BriefcaseIcon
		},
		{
			title: 'Birthday',
			text: 'September 25th',
			icon: BirthdayCakeIcon
		},
		{
			title: 'Location',
			text: 'Global',
			icon: PositionLocationIcon
		}
	];
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
			<EmailSender />
		</div>
		<h1 class="name">
			Conrad Hoang <span> <VerifiedBadgeIcon /> </span>
		</h1>

		<span class="status">
			{#each deets as { icon, text, title }}
				<span>
					{icon}
					<title>{title}</title>
					<span>{text}</span>
				</span>
			{/each}
		</span>

		<div class="summary">
			<p>On the mission to spice up the web, pixel by pixel ✨</p>
			<p>Software Engineer, Creative Developer, Troublemaker solver.</p>
		</div>

		<span>Links: </span>
	</div>
</header>

<style lang="scss">
	header {
		max-width: var(--width);
		border-radius: 10px;
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
		justify-content: end;
		align-items: center;
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
		column-gap: 0.5rem;
		align-items: center;
		& > span {
			display: inline-flex;
			width: var(--step-2);
			aspect-ratio: 1;
		}
	}
</style>
