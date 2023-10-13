<template lang="pug">
.scene
	.rainbow
		.sprite
</template>

<style lang="scss">
	$colors: ($red, $peach, $yellow, $green, $sky, $mauve);
	$ncolor: length($colors);

	@function _colorTile($color) {
		@return (_genTile($color, transparent), _genTile(transparent, $color));
	}

	@function _genTile($c1, $c2) {
		@return linear-gradient(to right, $c1 0%, $c1 50%, $c2 50%, $c2 100%);
	}

	@function render_rainbow() {
		$res: ();
		@each $c in $colors {
			$res: append($res, _colorTile($c), comma);
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
	.scene {
		width: 100%;
		aspect-ratio: 3/1;
		position: relative;
		margin: 0;
	}

	.rainbow {
		$padding: 20%;
		position: absolute;
		left: 0;
		right: 50%;
		top: $padding / 2;
		height: 100% - $padding;
	}
	.rainbow .sprite {
		$span: calc(100% / ($ncolor * 2));
		position: inherit;
		left: 0;
		right: 80px;
		top: 0;
		bottom: 0;
		background-image: render_rainbow();
		background-position: render_positions($span);
		background-size: calc(100% / ($ncolor / 3)) calc(100% / $ncolor);
		background-repeat: repeat-x;
	}
</style>
