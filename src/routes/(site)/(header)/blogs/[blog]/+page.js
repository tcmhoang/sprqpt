import TagIcon from '$lib/icons/TagIcon.svelte';
import CalendarIcon from '$lib/icons/CalendarIcon.svelte';
import NameWithVerifiedBadge from '$lib/components/NameWithVerifiedBadge.svelte';
import { error } from '@sveltejs/kit';
import blog from '$lib/content/blog/blog';

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {
	const id = params.blog;

	const all_blogs =
		/** @type {{frontmatter: {date: String, title: string, created: string, tags: string[] | undefined, exerept: string }, default: Component}[]} */
		(Object.entries(import.meta.glob('$lib/content/blog/*.md', { eager: true })).map((i) => i[1]));

	const maybe_blog_metadata = all_blogs.find(
		({ frontmatter }) => blog.fetch_id(frontmatter.created, frontmatter.title) == id
	);

	const mb_image = blog.fetch_image(id);
	let mb_banner_data = {};

	if (mb_image) {
		const [alt, , bg] = mb_image;
		mb_banner_data = {
			banner_data: {
				hero_url: await bg(),
				hero_alt: alt
			}
		};
	}

	if (maybe_blog_metadata) {
		return {
			...mb_banner_data,
			deets: [
				{
					text: new Date(maybe_blog_metadata.frontmatter.date).toDateString(),
					icon: CalendarIcon
				},
				{
					text: maybe_blog_metadata.frontmatter.tags?.join(', '),
					icon: TagIcon
				}
			],

			summary: NameWithVerifiedBadge,
			heading: maybe_blog_metadata.frontmatter.title,
			exerept: maybe_blog_metadata.frontmatter.exerept,
			content: maybe_blog_metadata.default
		};
	}
	return error(404);
};
