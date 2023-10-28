<div role="navigation">
	<ul role="tablist">
		<li role="presentation">
			<a href="/">
				<span>Feed</span>
			</a>
		</li>
		<li role="presentation">
			<a href="/about">
				<span>About</span>
			</a>
		</li>
		<li role="presentation">
			<a href="/links">
				<span>Links</span>
			</a>
		</li>
	</ul>
</div>

<style>
	ul {
		display: grid;
		width: 100%;
		grid-auto-flow: column;
		grid-auto-columns: 1fr;
		align-items: center;
		font-size: var(--step-0);
		line-height: 2;
	}
	li {
		display: block;
	}
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		width: 100%;
		height: 100%;

		&:focus-visible {
			background: var(--surface);
			outline: 0;
		}
		&:hover {
			background: var(--surface);
		}
	}
</style>
