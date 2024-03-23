export const load = () => ({
	tweets: Object.entries(
		import.meta.glob('$lib/content/tweet/*.md', { import: 'default', eager: true })
	)
		.toSorted((v1, v2) => v2[0].localeCompare(v1[0]))
		.map((e) => e[1])
});
