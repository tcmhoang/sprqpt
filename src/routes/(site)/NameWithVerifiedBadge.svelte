<script>
	import VerifiedBadgeIcon from '$lib/icons/VerifiedBadgeIcon.svelte';
</script>

<h1 class="name">
	<span class="polarized" data-content="Conrad Hoang">Conrad Hoang</span>
	<span class="badge"> <VerifiedBadgeIcon /> </span>
</h1>

<style lang="scss">
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
</style>
