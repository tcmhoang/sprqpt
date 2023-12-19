import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { markdoc } from 'svelte-markdoc-preprocess';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = dirname(fileURLToPath(import.meta.url));
const node_path = join(root, './src/lib/nodes/Nodes.svelte');
const layout_path = join(root, './src/lib/layouts');
export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true
		})
	},

	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		markdoc({
			nodes: node_path,
			layouts: {
				default: join(layout_path, './Default.svelte')
			}
		})
	]
};
