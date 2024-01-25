import BirthdayIcon from '$lib/icons/BirthdayIcon.svelte';
import BriefcaseIcon from '$lib/icons/BriefcaseIcon.svelte';
import PositionLocationIcon from '$lib/icons/PositionLocationIcon.svelte';
import NameWithVerifiedBadge from '$lib/components/NameWithVerifiedBadge.svelte';
import blog from '$lib/content/blog/blog';

export const load = async () => {
	const all_blogs_meta =
		/** @type { {date: String, title: string, created: string, tags: string[] | undefined, exerept: string, id: string }[]} */
		(
			Object.entries(
				import.meta.glob('$lib/content/blog/*.md', { eager: true, import: 'frontmatter' })
			).map((i) => i[1])
		).map((v) => ({ ...v, id: blog.fetch_id(v.created, v.title) }));

	return {
		deets: [
			all_blogs_meta,
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
