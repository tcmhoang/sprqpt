import sveltePlugin from 'eslint-plugin-svelte';
import globals from 'globals';
import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

export default [
	{
		// Global ignores
		ignores: ['node_modules/**']
	},
	eslint.configs.recommended,
	{
		// Global settings
		languageOptions: {
			parserOptions: {
				project: 'jsconfig.json',
				tsconfigRootDir: 'functions'
			},
			sourceType: 'module',
			ecmaVersion: 'latest',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021
			}
		}
	},
	{
		// Svelte files configuration
		files: ['**/*.svelte'],
		plugins: {
			svelte: sveltePlugin
		},
		languageOptions: {
			parser: sveltePlugin.parser
		},
		...sveltePlugin.configs.recommended
	},
	// Prettier config should be last to override other formatting rules
	prettierConfig
];
