import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import github from 'remark-gfm';
import raw from 'rehype-raw';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const path = join(dirname(fileURLToPath(import.meta.url)), './src/lib/layouts/About.svelte');

const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [github],
			rehypePlugins: [raw],
			layout: path
		})
	]
};

export default config;
