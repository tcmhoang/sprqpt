import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { markdoc } from 'svelte-markdoc-preprocess';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import * as child_process from 'node:child_process';

const root = dirname(fileURLToPath(import.meta.url));
const node_path = join(root, './src/lib/nodes/Nodes.svelte');
const layout_path = join(root, './src/lib/layouts');
const tags_path = join(root, './src/lib/tags/');
export default {
	compilerOptions: {
		css: 'external'
	},
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: true,
			strict: true
		}),
		csp: {
			directives: {
				'script-src': ['self']
			}
		},
		output: {
			preloadStrategy: 'preload-mjs'
		},
		paths: {
			relative: false
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
				cheep: join(layout_path, './Cheep/Cheep.svelte')
			},
			tags: join(tags_path, './Tags.svelte')
		})
	]
};
