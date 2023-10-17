<script>
	import Nyan from './Nyan.svelte';
</script>

<div class="scene">
	<div class="rainbow" />
	<div class="starfield">
		<div class="star" />
	</div>
	<div class="cat">
		<Nyan />
	</div>
</div>

<style lang="scss">
	$colors: (var(--red), var(--peach), var(--yellow), var(--green), var(--sky), var(--mauve));
	$star_color: var(--text);

	$padding: 40%;
	$height: calc(100% - $padding);
	$ncolor: length($colors);

	$unit: calc(100% / $ncolor);

	.scene {
		width: 100%;
		aspect-ratio: 3/1;
		position: relative;
		margin: 0;
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
		left: 0;
		right: 50%;
		top: calc($padding / 2);
		height: $height;

		&::after {
			content: '';
			position: inherit;
			left: 0;
			right: $unit;
			top: 0;
			bottom: 0;
			background-image: render_rainbow();
			background-position: render_positions(calc($unit/2));
			background-size: calc($unit * 3) $unit;
			background-repeat: repeat-x;
		}
	}

	.starfield {
		position: absolute;
		height: 100%;
		width: 100%;
	}

	.star {
		position: absolute;
		height: calc($unit * 2);
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
			animation: calc(var(--speed, 0.5) * 2 * 1s) step-end infinite spark;

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
		top: calc($padding / 2);
		left: calc(50% - $unit);
		height: $height;
		aspect-ratio: 5/3;
	}
</style>
