import { building } from '$app/environment';
import { minify } from 'html-minifier-terser';

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

const security_headers = {
	'Cross-Origin-Embedder-Policy': 'require-corp',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'X-XSS-Protection': '1; mode=block',
	'X-Frame-Options': 'SAMEORIGIN',
	'X-Content-Type-Options': 'nosniff'
};

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	let page = '';

	const response = await resolve(event, {
		transformPageChunk: ({ html, done }) => {
			page += html;
			if (done) {
				return building ? minify(html, minification_options) : page;
			}
		}
	});
	Object.entries(security_headers).forEach(([header, value]) =>
		response.headers.set(header, value)
	);
	return response;
}
