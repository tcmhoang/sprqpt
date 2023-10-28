<script>
	import BirthdayCakeIcon from '$lib/icons/BirthdayCakeIcon.svelte';
	import BriefcaseIcon from '$lib/icons/BriefcaseIcon.svelte';
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import KeybaseIcon from '$lib/icons/KeybaseIcon.svelte';
	import PositionLocationIcon from '$lib/icons/PositionLocationIcon.svelte';
	import Telegram from '$lib/icons/Telegram.svelte';
	import VerifiedBadgeIcon from '$lib/icons/VerifiedBadgeIcon.svelte';
	import Avatar from './Avatar.svelte';
	import Banner from './Banner.svelte';
	import EmailSender from './EmailSender.svelte';

	/** @type BannerData */
	export let bannerData;

	const deets = [
		{
			text: 'Available',
			icon: BriefcaseIcon
		},
		{
			text: 'September 25th',
			icon: BirthdayCakeIcon
		},
		{
			text: 'Global',
			icon: PositionLocationIcon
		}
	];

	const links = [
		{
			label: 'Github',
			link: 'https://github.com/tcmhoang',
			icon: GithubIcon
		},
		{
			label: 'Keybase',
			link: 'https://keybase.io/tcmhoang',
			icon: KeybaseIcon
		},
		{
			label: 'Telegram',
			link: 'https://t.me/tcmhoang',
			icon: Telegram
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
			<Avatar />
			<EmailSender />
		</div>
		<h1 class="name">
			<span class="polarized" data-content="Conrad Hoang">Conrad Hoang</span>
			<span class="badge"> <VerifiedBadgeIcon /> </span>
		</h1>

		<span class="details">
			{#each deets as { icon, text }}
				<span class="detail">
					<span class="dcon"> <svelte:component this={icon} /></span>
					{text}
				</span>
			{/each}
		</span>

		<div class="summary">
			<p>On the mission to spice up the web, pixel by pixel ✨</p>
			<p>
				Software Engineer, Creative Developer, Troublemaker solver, Spam
				Deleter.
			</p>
		</div>

		<div class="links">
			{#each links as { label, link, icon }}
				<a href={link} target="_blank">
					{label}
					<span><svelte:component this={icon} /></span>
				</a>
			{/each}
		</div>
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
		max-width: 100%;
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
		min-height: calc(var(--step-9) * 0.5);
		padding-top: 0.5rem;
	}

	.name {
		display: flex;
		font-weight: bold;
		font-size: var(--step-3);
		column-gap: 0.5rem;
		align-items: center;

		.polarized {
			display: block;
			transition: transform 300ms ease, color 100ms ease-in;
			mix-blend-mode: exclusion;
			position: relative;

			&::before,
			&::after {
				content: attr(data-content);
				position: absolute;
				mix-blend-mode: inherit;
				font: inherit;
				transition: inherit;
				display: inherit;
				left: 0;
				right: 0;
				top: 0;
			}

			&:hover {
				color: var(--l-red);
				transform: translateY(-0.3rem);
				&::before {
					color: var(--l-blue);
					transform: translate(0.3rem, 0.3rem);
				}
				&::after {
					color: var(--l-yellow);
					transform: translate(-0.3rem, 0.3rem);
				}
			}
		}
		.badge {
			display: inline-flex;
			width: var(--step-2);
			aspect-ratio: 1;
		}
	}

	%leading {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.details {
		@extend %leading;
		color: var(--subtext);
		font-size: var(--step--1);
		margin-bottom: 0.25rem;

		.detail {
			display: flex;
			align-items: center;
			gap: 0.25rem;

			.dcon {
				width: 1.25rem;
				height: 1.25rem;
			}
		}
	}

	.summary {
		line-height: 1.25;
		& > * {
			margin-bottom: 0.5rem;
		}
	}

	.links {
		@extend %leading;
		a {
			display: flex;
			align-items: center;
			gap: 0.25rem;
			border: 1px solid var(--mauve);
			padding: 0.25rem 0.75rem;
			border-radius: 30px;
			text-decoration: none;
			font-size: var(--step--1);
			span {
				width: 1.25rem;
				height: 1.25rem;
			}

			&:hover {
				color: var(--crust);
				background: var(--mauve);
			}

			&:focus-visible {
				outline: 0;
				background: var(--surface);
			}
		}
	}
</style>
