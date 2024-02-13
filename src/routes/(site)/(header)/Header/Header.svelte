<script>
	import Avatar from './Avatar.svelte';
	import Banner from './Banner.svelte';
	import EmailSender from './EmailSender.svelte';

	/** @type {string|Component} */
	export let heading;

	/** @type BannerData */
	export let banner_data;

	/** @type {Detail[]} */
	export let deets;

	/**@type {string[]|Component} */
	export let summary;

	const cast_to_component = (/** @type {string|Component} */ val) => /** @type Component*/ (val);
</script>

<header>
	<div class="bannerContainer">
		<Banner
			hero_url={banner_data.hero_url}
			hero_alt={banner_data.hero_alt}
			hero_css={banner_data.hero_css}
		/>
	</div>

	<div class="w-content overview">
		<div class="avatar-container">
			<div class="avatar-wrapper">
				<Avatar />
			</div>
			<EmailSender />
		</div>

		<h1>
			{#if typeof heading == 'string'}
				{heading}
			{:else}
				<svelte:component this={cast_to_component(heading)} />
			{/if}
		</h1>

		<div class="summary {!(summary instanceof Array) ? 'summary-comp' : ''}">
			{#if summary instanceof Array}
				{#each summary as content}
					<p>{content}</p>
				{/each}
			{:else}
				<svelte:component this={cast_to_component(summary)} />
			{/if}
		</div>

		<span class="details">
			{#each deets as { icon, text }}
				<span class="detail">
					<span class="dcon"> <svelte:component this={icon} /></span>
					{#if text.startsWith('/')}
						<a href={text} title="Go to my {text.split('/').pop()}">{text}</a>
					{:else}
						{text}
					{/if}
				</span>
			{/each}
		</span>
	</div>
</header>

<style lang="scss">
	header {
		max-width: var(--width);
		width: 100%;
		border-radius: 10px;
		margin: auto;
	}

	.bannerContainer {
		border-radius: 13px;
		overflow: hidden;
		transform: translateZ(0px);
	}

	.overview {
		padding-left: 1rem;
		max-width: 100%;
		padding-right: 1rem;
		margin: auto;
		display: grid;
		grid-gap: 0.5rem;
	}
	.avatar-container {
		position: relative;
		display: flex;
		justify-content: end;
		align-items: center;
		min-height: calc(var(--step-9) * 0.5);
	}

	.avatar-wrapper {
		position: absolute;
		top: 0;
		left: 0;
	}

	.details {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
		color: var(--subtext);
		font-size: var(--step--1);

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

	a {
		font-weight: bold;
		color: var(--peach);
	}

	.summary-comp {
		--text: var(--subtext);
		--yellow: var(--peach);
		--badge: var(--step-0);
		font-size: var(--step-1);
		padding-bottom: 0.5rem;
	}
</style>
