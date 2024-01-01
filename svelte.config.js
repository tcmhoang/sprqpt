import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { markdoc } from 'svelte-markdoc-preprocess';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import * as child_process from 'node:child_process';

const root = dirname(fileURLToPath(import.meta.url));
const node_path = join(root, './src/lib/nodes/Nodes.svelte');
const layout_path = join(root, './src/lib/layouts');
export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: true,
			strict: true
		}),
		output: {
			preloadStrategy: 'preload-mjs'
		},
		paths: {
			base: ''
		},
		prerender: {
			origin: 'http://localhost:5173'
		},
		version: {
			name: child_process.execSync('git rev-parse HEAD').toString().trim()
		}
	},

	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		markdoc({
			nodes: node_path,
			layouts: {
				default: join(layout_path, './Default.svelte'),
				post: join(layout_path, './Post/Post.svelte')
			}
		})
	]
};
