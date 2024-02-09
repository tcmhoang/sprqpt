import BirthdayIcon from '$lib/icons/BirthdayIcon.svelte';
import BriefcaseIcon from '$lib/icons/BriefcaseIcon.svelte';
import BlogIcon from '$lib/icons/BlogIcon.svelte';
import PositionLocationIcon from '$lib/icons/PositionLocationIcon.svelte';
import NameWithVerifiedBadge from '$lib/components/NameWithVerifiedBadge.svelte';

export const load = () => ({
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
			text: '/blogs',
			icon: BlogIcon
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
});
