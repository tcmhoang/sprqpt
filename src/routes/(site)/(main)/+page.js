export const load = () => ({
	tweets: Object.entries(
		import.meta.glob('$lib/content/tweet/*.md', { import: 'default', eager: true })
	)
});
