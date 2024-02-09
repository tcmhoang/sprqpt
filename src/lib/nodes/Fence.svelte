<script>
	import '@catppuccin/highlightjs/css/catppuccin-mocha.css';
	import hljs from 'highlight.js/lib/core';
	import shell from 'highlight.js/lib/languages/shell';

	hljs.registerLanguage('sh', shell);

	/** @type string */
	export let content;
	/** @type string */
	export let language;
	/** @type boolean */
	export let process;

	const result = process
		? hljs.highlight(content, { language: language ?? 'sh' })
		: { value: content };
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<pre><code class={`language-${language}`}>{@html result.value}</code></pre>

<style>
	pre {
		padding: 1rem;
		border-radius: 1rem;
		overflow: auto;
		margin: 0;
	}

	code {
		font-size: var(--step--1);
		font-weight: bold;
		font-family: ui-monospace, monospace;
	}
</style>
