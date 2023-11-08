export const load = async () => ({
	title: 'About me',
	content: (await import('$lib/content/about.md')).default
});
