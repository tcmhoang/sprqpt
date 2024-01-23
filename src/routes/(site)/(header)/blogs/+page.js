import BirthdayIcon from '$lib/icons/BirthdayIcon.svelte';
import BriefcaseIcon from '$lib/icons/BriefcaseIcon.svelte';
import PositionLocationIcon from '$lib/icons/PositionLocationIcon.svelte';
import NameWithVerifiedBadge from '$lib/components/NameWithVerifiedBadge.svelte';

/** @type {import('./$types').PageLoad} */
export const load = async ({ url }) => {
	let tag = url.searchParams.get('tag');

	return {
		tag,
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
