export default {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:markdown/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: 'svelte-eslint-parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
