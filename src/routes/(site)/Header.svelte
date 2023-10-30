<script>
	import Avatar from './Avatar.svelte';
	import Banner from './Banner.svelte';
	import EmailSender from './EmailSender.svelte';
	import NameWithVerifiedBadge from './NameWithVerifiedBadge.svelte';

	/** @type BannerData */
	export let bannerData;

	/** @type {Detail[]} */
	export let deets;

	/**@type {string[]} */
	export let summary;
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

		<NameWithVerifiedBadge />

		<span class="details">
			{#each deets as { icon, text }}
				<span class="detail">
					<span class="dcon"> <svelte:component this={icon} /></span>
					{text}
				</span>
			{/each}
		</span>

		<div class="summary">
			{#each summary as content}
				<p>{content}</p>
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

	.details {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;

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
</style>
