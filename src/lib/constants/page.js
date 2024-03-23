import BriefcaseIcon from '../icons/BriefcaseIcon.svelte';
import BirthdayIcon from '../icons/BirthdayIcon.svelte';
import BlogIcon from '../icons/BlogIcon.svelte';
import PositionLocationIcon from '../icons/PositionLocationIcon.svelte';
import NameWithVerifiedBadge from '../components/NameWithVerifiedBadge.svelte';

export const hostname = 'SPRQPT';

export const build_title = (/** @type string */ title) => `${title} • ${hostname}`;

export const default_header_props = {
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
};
