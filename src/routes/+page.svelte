<script>
	import { spring } from 'svelte/motion';
	import Nyan from './Nyan.svelte';
	import { onMount } from 'svelte';

	let cat;

	let coords;

	onMount(() => {
		const init_coord = cat.getBoundingClientRect();
		coords = spring({ init_coord.x, init_coord.y});
	});
</script>

<div class="scene">
	<div class="rainbow" />
	<div class="starfield">
		<!-- eslint-disable-next-line no-unused-vars -->
		{#each Array(12) as _}
			<div class="star" />
		{/each}
	</div>
	<div class="cat" style="--cat-accelerate:var(--speed)" bind:this={cat}>
		<Nyan />
	</div>
</div>

<style lang="scss">
	$colors: (var(--red), var(--peach), var(--yellow), var(--green), var(--sky), var(--mauve));
	$star_color: var(--text);

	$cat_height: 50%;
	$ncolor: length($colors);
	.scene {
		background: radial-gradient(var(--blue), var(--crust));
		width: 100%;
		aspect-ratio: 3/1;
		position: relative;
		margin: 0;
		overflow: hidden;
		--x: 0.5;
		--y: 0.5;
		--speed: calc(1 - var(--x));
	}

	.rainbow {
		@function _gen2StopTile($c1, $c2) {
			@return linear-gradient(to right, $c1 0%, $c1 50%, $c2 50%, $c2 100%);
		}

		@function render_rainbow() {
			$res: ();
			@each $c in $colors {
				$res: append(
					$res,
					(
						_gen2StopTile($c, transparent),
						_gen2StopTile(transparent, $c)
					),
					comma
				);
			}
			@return $res;
		}

		@function render_positions($span) {
			$res: ();
			@for $i from 0 through (length($colors) * 2) {
				$res: append($res, 0 $i * $span, comma);
			}
			@return $res;
		}

		position: absolute;
		height: calc($cat_height - 5%);
		left: 0;
		right: clamp(20vw, calc(100% - var(--x) * 100%), 80vw);
		top: calc(var(--y) * 50% + 2.5%);
		overflow: hidden;
		&::after {
			display: block;
			position: inherit;
			content: '';

			right: 0;
			bottom: 0;

			$height_unit: calc(100% / $ncolor);
			$width_unit: clamp(10vw, calc($height_unit * 6 * var(--x)), 20vw);
			height: 100%;
			width: 200%;

			background-image: render_rainbow();
			background-position: render_positions(calc($height_unit/2));
			background-size: $width_unit $height_unit;
			background-repeat: repeat-x;

			animation: calc(var(--speed, 0.5) * 2 * 300ms) step-end infinite rainbow;

			@keyframes rainbow {
				from,
				to {
					transform: translateX(
						clamp(5vw, calc(var(--x) * 50%), 30vw)
					);
				}
				50% {
					transform: translateX(0);
				}
			}
		}
	}

	.starfield {
		position: absolute;
		height: 100%;
		width: 100%;

		$star_trails: (
			(66%, 80%),
			(70%, 54%),
			(4%, 31%),
			(49%, 20%),
			(35%, 30%),
			(48%, 29%),
			(22%, 70%),
			(56%, 67%),
			(49%, 20%),
			(9%, 92%),
			(44%, 28%),
			(6%, 25%)
		);

		@for $i from 1 through 12 {
			$star_trail: nth($star_trails, $i);
			.star:nth-child(#{$i}) {
				left: calc(nth($star_trail, 1) + 30%);
				top: nth($star_trail, 2);
				animation: calc(var(--speed) * 0.5 * 2 * 1.3s)
					ease-in-out
					calc(1s / $i)
					infinite
					whoosh;
				&::after {
					animation-delay: calc(1s / $i);
				}
			}
		}

		@keyframes whoosh {
			from {
				transform: translate(0);
			}
			to {
				transform: translateX(-350%);
			}
		}
	}

	.star {
		position: absolute;
		height: calc(100% / $ncolor * 2);
		aspect-ratio: 1;
		overflow: hidden;

		&::after {
			$factor: 6;
			content: '';
			position: inherit;
			display: block;
			width: calc(100% * $factor);
			height: 100%;

			// 1st: 1, 2nd: 4, 3rd: 4, 4th: 5, 5th: 8, 6th: 4 => tot : 26
			$totsprites: 26;
			$sprites: ();
			@for $_ from 1 through $totsprites {
				$sprites: append(
					$sprites,
					linear-gradient(to right, $star_color 0%, $star_color 100%),
					comma
				);
			}

			background-image: $sprites;

			@function factor_position($e, $x, $y) {
				@return calc(100% / $factor * ($e - 1) + $x / $factor) $y;
			}
			$poss: (
				((40%, 50%)),
				((30%, 50%), (50%, 50%), (40%, 40%), (40%, 60%)),
				((20%, 50%), (60%, 50%), (40%, 30%), (40%, 70%)),
				((50%, 50%), (25%, 50%), (75%, 50%), (50%, 25%), (50%, 75%)),
				(
					(10%, 50%),
					(90%, 50%),
					(50%, 10%),
					(50%, 90%),
					(25%, 25%),
					(75%, 75%),
					(75%, 25%),
					(25%, 75%)
				),
				((10%, 50%), (90%, 50%), (50%, 10%), (50%, 90%))
			);
			$transformed_poss: ();

			@for $i from 1 through length($poss) {
				// fix for weird bug :))
				@if $i == 1 {
					$temp: nth($poss, $i);
					$transformed_poss: append(
						$transformed_poss,
						factor_position($i, nth($temp, 1), nth($temp, 2)),
						comma
					);
				} @else {
					@each $p in nth($poss, $i) {
						$transformed_poss: append(
							$transformed_poss,
							factor_position($i, nth($p, 1), nth($p, 2)),
							comma
						);
					}
				}
			}

			background-position: $transformed_poss;

			$w: calc(10% / $factor);
			$dw: calc($w * 2);
			$szs: (
				(#{$w} 10%),
				(#{$w} 10%, #{$w} 10%, #{$w} 10%, #{$w} 10%),
				(#{$dw} 10%, #{$dw} 10%, #{$w} 20%, #{$w} 20%),
				(#{$w} 10%, #{$dw} 10%, #{$dw} 10%, #{$w} 20%, #{$w} 20%),
				(#{$w} 10%, #{$w} 10%, #{$w} 10%, #{$w} 10%, #{$w} 10%, #{$w} 10%),
				(#{$w} 10%, #{$w} 10%, #{$w} 10%, #{$w} 10%)
			);

			$flatten_szs: ();
			@each $sz in $szs {
				$flatten_szs: append($flatten_szs, $sz, comma);
			}

			background-size: $flatten_szs;
			background-repeat: no-repeat;
			animation-duration: calc(var(--speed, 0.5) * 2 * 1s);
			animation-timing-function: step-end;
			animation-iteration-count: infinite;
			animation-name: spark;

			@mixin move_to($frame) {
				transform: translateX(calc(-100% * $frame / $factor));
			}

			@keyframes spark {
				from,
				to {
					@include move_to(6);
				}

				@for $i from 0 to 6 {
					#{calc(50% + 50% * ($i / 6))} {
						@include move_to($i);
					}
				}
			}
		}
	}

	.cat {
		position: absolute;
		top: calc(var(--y) * 50%);
		left: clamp(10vw, calc(var(--x) * 100% - 10%), 70vw);
		height: $cat_height;
		aspect-ratio: 5/3;
	}
</style>
