<script>
	import '@catppuccin/highlightjs/css/catppuccin-mocha.css';
	import hljs from 'highlight.js/lib/core';

	/** @type string */
	export let content;
	/** @type string */
	export let language;
	/** @type boolean */
	export let process;

	/** @type Promise<void> */
	let lang = Promise.resolve();

	let result = { value: content };

	switch (language) {
		case 'ts':
			lang = /** @type Promise<{default: HLLanguageFn}> */ (
				/** @type unknown */ (import('highlight.js/lib/languages/typescript'))
			).then((lang) => hljs.registerLanguage('ts', lang.default));
			break;
		case 'sh':
			lang = /** @type Promise<{default: HLLanguageFn}> */ (
				/** @type unknown */ (import('highlight.js/lib/languages/typescript'))
			).then((lang) => hljs.registerLanguage('sh', lang.default));
			break;
		default:
			break;
	}

	lang = lang.then(() => {
		result = process ? hljs.highlight(content, { language: language ?? 'sh' }) : result;
	});
</script>

{#await lang then}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<pre><code class={`language-${language}`}>{@html result.value}</code></pre>
{/await}

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
