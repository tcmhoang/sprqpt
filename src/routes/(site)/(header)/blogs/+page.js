import { default_header_props } from '$lib/constants/page';
import blog from '$lib/content/blog/blog';

export const load = async () => {
	const all_blogs_meta =
		/** @type { {date: String, title: string, created: string, tags: string[] | undefined, excerpt: string, id: string, thumbnail: () => Promise<any>, alt: string}[]} */
		(
			Object.entries(
				import.meta.glob('$lib/content/blog/*.md', { eager: true, import: 'frontmatter' })
			).map((i) => i[1])
		)
			.map((v) => ({ ...v, id: blog.fetch_id(v.created, v.title) }))
			.map((v) => {
				const [alt, thumbnail] = blog.fetch_image(v.id);
				return { ...v, alt, thumbnail };
			});

	/** @type {string[]} */
	const tags = [...new Set(all_blogs_meta.flatMap((data) => data.tags ?? []))];

	return {
		...default_header_props,
		tags,
		blogs: all_blogs_meta
	};
};
