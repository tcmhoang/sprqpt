import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { markdoc } from 'svelte-markdoc-preprocess';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import * as child_process from 'node:child_process';
import combineDuplicatedSelectors from 'postcss-combine-duplicated-selectors';
import presetEnv from 'postcss-preset-env';
import purgecss from '@fullhuman/postcss-purgecss';

const root = dirname(fileURLToPath(import.meta.url));
const node_path = join(root, './src/lib/nodes/Nodes.svelte');
const layout_path = join(root, './src/lib/layouts');
const tags_path = join(root, './src/lib/tags/');

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: true,
			strict: true,
			fallback: '404.html'
		}),
		inlineStyleThreshold: 512,
		csp: {
			directives: {
				'script-src': ['self']
			}
		},
		prerender: {
			concurrency: 10
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
		vitePreprocess({
			postcss: {
				plugins: [
					purgecss({
						content: ['./**/*.html', '**/*.js', '**/*.md']
					}),
					presetEnv({
						features: {
							'nesting-rules': {
								noIsPseudoSelector: false
							}
						},
						minimumVendorImplementations: 2,
						browsers: '> 1%, last 2 versions, not dead'
					}),
					combineDuplicatedSelectors({
						removeDuplicatedProperties: true,
						removeDuplicatedValues: true
					})
				]
			}
		}),
		markdoc({
			nodes: node_path,
			layouts: {
				default: join(layout_path, './Default.svelte'),
				blog: join(layout_path, './Blog.svelte'),
				cheep: join(layout_path, './Cheep/Cheep.svelte'),
				resume: join(layout_path, './Resume.svelte')
			},
			tags: join(tags_path, './Tags.svelte')
		})
	]
};
