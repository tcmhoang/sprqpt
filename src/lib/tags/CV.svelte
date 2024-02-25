<script>
	import { onMount } from 'svelte';

	/** @type HTMLDivElement **/
	let content;
	/** @type HTMLDivElement **/
	let cv_header;
	/** @type HTMLDListElement**/
	let cv_info;

	/** @type HTMLElement*/
	let dt;
	/** @type HTMLElement*/
	let dd;

	onMount(() => {
		const [name, cv_title, infos] = content.children;
		/** @type HTMLElement */ (cv_title).style.fontSize = 'var(--step-3)';
		content.remove();

		cv_header.append(name, cv_title);

		const dt_class = dt.className;
		const dd_class = dd.className;
		dt.remove();
		dd.remove();
		cv_info.innerHTML = '';
		cv_info.append(
			...[...infos.childNodes]
				.filter((n) => n.nodeName != '#comment')
				.map((value, index, arr) => (index % 2 == 0 ? [value, arr[index + 1]] : []))
				.filter((a) => a.length)
				.map(([title, link]) => [
					create_dt(title, dt_class),
					create_dd(link, title.textContent + '', dd_class)
				])
				.flat()
		);
	});

	const create_dt = (/** @type ChildNode */ node, /**@type string */ cname) => {
		const dt = document.createElement('dt');
		dt.textContent = node.textContent;
		dt.className = cname;
		return dt;
	};

	const create_dd = (
		/** @type ChildNode */ node,
		/** @type string */ title,
		/**@type string */ cname
	) => {
		const dd = document.createElement('dd');
		const a = document.createElement('a');
		a.textContent = node.textContent;
		a.href = node.baseURI;
		a.title = title;
		const elem = /** @type Element */ (node);
		a.className = elem.className;
		dd.append(a);
		dd.className = cname;
		return dd;
	};
</script>

<div bind:this={content}>
	<slot />
</div>

<div class="cv_hero">
	<div bind:this={cv_header} />
	<dl bind:this={cv_info}>
		<dt bind:this={dt} />
		<dd bind:this={dd} />
	</dl>
</div>

<style>
	.cv_hero {
		display: grid;
	}

	dl {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-column-gap: 0.75rem;
	}

	@media screen and (min-width: 720px) {
		.cv_hero {
			grid-template-columns: 1fr 1fr;
		}

		dl {
			grid-auto-flow: dense;
			grid-template-columns: 1fr auto;
			align-items: center;
		}

		dd,
		dt {
			justify-self: end;
		}

		dd {
			grid-column: 0 / span 1;
		}
		dt {
			grid-column: 2 / span 1;
		}
	}
</style>
