<script>
	import Banner from './Banner.svelte';

	/** @type BannerData */
	export let bannerData;
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
			<button>
				Contact
				<svg
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="96.3 -4.7 45.1 46.2"
				>
					<title>Email icon</title>
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
		</div>
		<h1 class="name">
			Conrad Hoang <span>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="SVGRepo_iconCarrier">
						<path
							d="M10.5213 2.62368C11.3147 1.75255 12.6853 1.75255 13.4787 2.62368L14.4989 3.74391C14.8998 4.18418 15.4761 4.42288 16.071 4.39508L17.5845 4.32435C18.7614 4.26934 19.7307 5.23857 19.6757 6.41554L19.6049 7.92905C19.5771 8.52388 19.8158 9.10016 20.2561 9.50111L21.3763 10.5213C22.2475 11.3147 22.2475 12.6853 21.3763 13.4787L20.2561 14.4989C19.8158 14.8998 19.5771 15.4761 19.6049 16.071L19.6757 17.5845C19.7307 18.7614 18.7614 19.7307 17.5845 19.6757L16.071 19.6049C15.4761 19.5771 14.8998 19.8158 14.4989 20.2561L13.4787 21.3763C12.6853 22.2475 11.3147 22.2475 10.5213 21.3763L9.50111 20.2561C9.10016 19.8158 8.52388 19.5771 7.92905 19.6049L6.41553 19.6757C5.23857 19.7307 4.26934 18.7614 4.32435 17.5845L4.39508 16.071C4.42288 15.4761 4.18418 14.8998 3.74391 14.4989L2.62368 13.4787C1.75255 12.6853 1.75255 11.3147 2.62368 10.5213L3.74391 9.50111C4.18418 9.10016 4.42288 8.52388 4.39508 7.92905L4.32435 6.41553C4.26934 5.23857 5.23857 4.26934 6.41554 4.32435L7.92905 4.39508C8.52388 4.42288 9.10016 4.18418 9.50111 3.74391L10.5213 2.62368Z"
							stroke="var(--yellow)"
							fill="var(--crust)"
							stroke-width="1.5"
						/>
						<path
							d="M9 12L11 14L15 10"
							stroke="var(--yellow)"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
				</svg>
			</span>
		</h1>
	</div>
</header>

<style lang="scss">
	header {
		max-width: var(--width);
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

		button {
			display: inline-flex;
			column-gap: 0.25rem;
			align-items: center;
			svg {
				width: 1.5rem;
				height: 1.5rem;
			}

			&:focus {
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
