import BirthdayIcon from '$lib/icons/BirthdayIcon.svelte';
import BriefcaseIcon from '$lib/icons/BriefcaseIcon.svelte';
import PositionLocationIcon from '$lib/icons/PositionLocationIcon.svelte';
import NameWithVerifiedBadge from '$lib/components/NameWithVerifiedBadge.svelte';
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

	const tags = [...new Set(all_blogs_meta.flatMap((data) => data.tags))];

	return {
		tags,
		blogs: all_blogs_meta,
		deets: [
			{
				text: 'Available',
				icon: BriefcaseIcon
			},
			{
				text: 'September 25th',
				icon: BirthdayIcon
			},
			{
				text: 'Global',
				icon: PositionLocationIcon
			}
		],

		summary: [
			'On the mission to spice up the web, pixel by pixel ✨',
			'Software Engineer, Creative Developer, Troublemaker solver, Spam Deleter, Email Personality.'
		],
		heading: NameWithVerifiedBadge
	};
};
