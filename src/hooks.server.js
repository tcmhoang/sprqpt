import { minify } from 'html-minifier-terser';
import { building } from '$app/environment';

const minification_options = {
	ignoreCustomComments: [/^#/],
	removeComments: false, // some hydration code needs comments, so leave them in
	html5: true,
	minifyCSS: true,
	minifyJS: false, // CSP violate
	collapseWhitespace: false, // CSP violate
	minifyURLs: true,
	collapseBooleanAttributes: true,
	conservativeCollapse: true,
	decodeEntities: true,
	removeAttributeQuotes: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true
};

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	let page = '';

	return resolve(event, {
		transformPageChunk: ({ html, done }) => {
			page += html;
			if (done) {
				return building ? minify(page, minification_options) : page;
			}
		}
	});
}
