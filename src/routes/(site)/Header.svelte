<script>
	import Banner from './Banner.svelte';

	/** @type BannerData */
	export let bannerData;

	const deets = [
		{
			title: 'Job',
			text: 'Available',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" fill="currentColor"><g id="SVGRepo_iconCarrier"><style>.st0{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}</style><path class="st0" d="M28 21v4l-2 2H6l-2-2v-4"/><path class="st0" d="M16 24h0l-2-2v-3h4v3l-2 2z"/><path class="st0" d="M14 22H7c-2 0-4-2-4-4v-8l2-2h22l2 2v8c0 2-2 4-4 4h-7m2-14h-8V6l2-2h4l2 2v2zM7 28v-1m18 1v-1"/></g></svg>'
		},
		{
			title: 'Birthday',
			text: 'September 25th',
			icon: '<svg fill="currentColor" height="200" width="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve"><path d="M482 463c-1-3-4-5-8-5h-22V305c13-15 22-35 22-56v-24c0-19-15-34-34-34h-52V92c0-5-4-8-9-8h-30c-4 0-8 3-8 8v99h-52V92c0-5-4-8-9-8h-30c-5 0-8 3-8 8v99h-52V92c0-5-4-8-9-8h-30c-5 0-8 3-8 8v36a8 8 0 0 0 16 0v-28h14v91h-14v-35a8 8 0 0 0-16 0v35H72c-19 0-34 15-34 34v23c0 21 8 41 22 56v154H38a8 8 0 0 0-7 14l10 11c14 19 36 29 60 29h310c24 0 46-10 60-29l10-11c2-3 2-6 1-9zM358 100h13v91h-13v-91zm-99 0h13v91h-13v-91zM55 248v-23c0-10 8-17 17-17h368c9 0 17 7 17 17v24c0 30-20 56-49 63l-13 1c-15 0-22-4-30-10-9-6-19-12-39-12s-31 6-40 12c-8 6-15 10-30 10s-22-4-30-10c-9-6-20-12-40-12a8 8 0 0 0 0 17c15 0 22 4 31 9 9 6 19 13 39 13s30-7 39-13c9-5 16-9 31-9s22 4 30 9c9 6 20 13 39 13l17-2c8-2 16-5 23-9v27H77v-29c9 6 20 13 40 13 19 0 30-7 39-13a8 8 0 1 0-9-14c-8 6-15 10-30 10s-23-4-31-10h-1a65 65 0 0 1-30-55zm314 174h66v36H77v-36h264a8 8 0 0 0 0-17H77v-42h358v42h-66a8 8 0 0 0 0 17zm42 73H101c-18 0-34-7-46-20h402a61 61 0 0 1-46 20zM189 20 172 2c-3-3-9-3-12 0l-17 18a33 33 0 0 0 0 46 33 33 0 0 0 46 0c13-13 13-34 0-46zm-12 34a16 16 0 0 1-22-22l11-12 11 12c7 6 7 16 0 22zm111-34L271 2c-3-3-8-3-12 0l-17 18a33 33 0 0 0 0 46 33 33 0 0 0 46 0c13-13 13-34 0-46zm-11 34a16 16 0 0 1-23-22l11-12 12 12c6 6 6 16 0 22zm111-34L370 2c-3-3-8-3-12 0l-17 18a33 33 0 0 0 0 46 33 33 0 0 0 47 0c12-13 12-34 0-46zm-12 34a16 16 0 0 1-23 0 16 16 0 0 1 0-22l11-12 12 12c6 6 6 16 0 22z"/></svg>'
		},
		{
			title: 'Location',
			text: 'Global',
			icon: '<svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g data-name="Group 719"><path data-name="Path 1486" d="M13 26c-7 0-13-2-13-3 0-2 3-3 7-3l1 1-5 1c0 1 4 2 10 2l11-1c0-1-2-2-6-2l2-2c4 1 6 2 6 4 0 1-6 3-13 3Zm4-17a4 4 0 1 1-4-4 4 4 0 0 1 4 4Zm-6 0a2 2 0 1 0 2-2 2 2 0 0 0-2 2Zm3 12-1 1-1-1s-7-6-8-10l1-2 1 1c1 4 5 7 7 9 2-2 7-6 7-10s-3-7-7-7c-3 0-6 1-6 4L5 7V5a9 9 0 0 1 17 4c0 5-8 12-8 12Z"/></g></svg>'
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

		<span class="status">
			{#each deets as { icon, text, title }}
				<span>
					{@html icon}
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
