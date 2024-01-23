import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {
	switch (params.tab) {
		case 'about':
			return {
				content: (await import('$lib/content/about.md')).default
			};
		case 'links':
			return {
				content: (await import('$lib/content/links.md')).default
			};
		default:
			error(404);
	}
};
