import { error } from '@sveltejs/kit';

/**
 * @function
 * @param {{params: {tab:string}}} params;
 */
export const load = async ({ params }) => {
	switch (params.tab) {
		case 'about':
			return {
				content: (await import('$lib/content/about.md')).default
			};
		default:
			error(404);
	}
};