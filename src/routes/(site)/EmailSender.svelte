<button>
	Contact <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="96.3 -4.7 45.1 46.2">
		<title>Email Icon</title>
		<path
			fill="var(--crust)"
			d="M138.2,10.5H99.5c-1.7,0-3.1,1.4-3.1,3.1v24.8c0,1.7,1.4,3.1,3.1,3.1h38.7c1.7,0,3.1-1.4,3.1-3.1V13.6
	C141.3,11.9,139.9,10.5,138.2,10.5z"
		/>
		<path
			fill="var(--crust)"
			d="M125.6,30.7c-3.7-2.6-6.6-4.6-6.8-4.7l0,0L125.6,30.7z"
		/>
		<path
			id="env-lid"
			fill="var(--crust)"
			d="M118.9,26L118.9,26c0,0,16-11.1,21.4-14.8c-0.5-0.5-1.2-0.8-2-0.8H99.5c-0.8,0-1.5,0.3-2,0.8
	L118.9,26L118.9,26z"
		/>
		<path
			id="env-paper"
			fill="var(--crust)"
			d="M135.8,34.2h-33.9c-1.3,0-2.4-1.1-2.4-2.4V0.7c0-1.3,1.1-2.4,2.4-2.4h33.9
	c1.3,0,2.4,1.1,2.4,2.4v31.1C138.1,33.1,137.1,34.2,135.8,34.2z"
		/>
		<path
			fill="var(--surface)"
			d="M97.6,11.1c-0.6,0.5-1.3,1.5-1.3,2.4v24.9c0,1.7,1.4,3.1,3.1,3.1h38.8c0.8,0,1.4-0.3,2-0.7
	C137.1,38.7,97.6,11.1,97.6,11.1z"
		/>
		<path
			fill="var(--surface)"
			d="M140.3,11.2c-5.4,3.7-21.4,14.8-21.4,14.8l0,0c0.2,0.1,18.2,12.7,21.3,14.8c0.7-0.6,1.2-1.4,1.2-2.3v-25
	C141.3,12.6,140.9,11.8,140.3,11.2z"
		/>
	</svg>
</button>

<style lang="scss">
	button {
		display: inline-flex;
		column-gap: 0.25rem;
		align-items: center;
		svg {
			width: 1.5rem;
			height: 1.5rem;
		}

		&:focus,
		&:hover,
		&:focus-visible,
		&:active {
			outline: 0;
			#env-lid {
				transition: transform opacity color 300ms;
				transform: scaleY(-1);
				opacity: 0;
			}

			#env-paper {
				transform-origin: 50% 100%;
				animation: pop_in 400ms;
			}
			@keyframes pop_in {
				from {
					transform: scaleY(1);
				}
				25% {
					transform: scaleY(0);
				}
			}
		}
	}
</style>
