import tab_routes from '$lib/constants/tab_routes';
import blog from '$lib/content/blog/blog';
import tweet from '$lib/content/tweet/tweet';
import * as sitemap from 'super-sitemap';
export const prerender = true;

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
								/** @type { {date: String,  emo: string | undefined  }}   */
								(e[1])
						)
						.map((v) => tweet.fetch_id(v.date, v.emo))
				),
			'/blogs/[blog]':
				/** @type {string[]}*/
				(
					Object.entries(
						import.meta.glob('$lib/content/blog/*.md', { eager: true, import: 'frontmatter' })
					)
						.map(
							(e) =>
								/** @type { {date: String,  title: string }}   */
								(e[1])
						)
						.map((v) => blog.fetch_id(v.date, v.title))
				)
		},

		excludePatterns: ['^/demos*'],
		lang: {
			default: 'en',
			alternates: []
		}
	});
};
