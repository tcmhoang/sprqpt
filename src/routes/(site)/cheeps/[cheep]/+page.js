import { error } from '@sveltejs/kit';

/**
 * @function
 * @param {{params: {cheep:string}}} params;
 */
export const load = async ({ params }) => {
	try {
		console.log(`$lib/content/tweet/${params.cheep}.md`);

		return {
			content: (await import('$lib/content/tweet/20240101-hello-world.md')).default
		};
	} catch (e) {
		console.error(e);
		error(404);
	}
};
