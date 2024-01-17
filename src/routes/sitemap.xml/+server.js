import tab_routes from '$lib/constants/tab_routes';
import tweet from '$lib/content/tweet/tweet';
import * as sitemap from 'super-sitemap';

export const GET = async () => {
	return await sitemap.response({
		origin: 'https://sprqpt.com',
		paramValues: {
			'/[tab]': tab_routes.map((tr) => tr.link.split('/')[1]).filter((v) => v.length),
			'/cheeps/[cheep]':
				/** @type {string[]}*/
				(
					Object.entries(
						import.meta.glob('$lib/content/tweet/*.md', { eager: true, import: 'frontmatter' })
					)
						.map(
							(e) =>
								/** @type { {date: String,  emo: string | null | undefined  }}   */
								(e[1])
						)
						.map((v) => tweet.fetch_id(v.date, v.emo))
				)
		},

		excludePatterns: [
			'^/demos*' // i.e. routes starting with `/dashboard`
		]
	});
};
