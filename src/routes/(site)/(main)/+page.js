export const load = async () => ({
	tweets: (
		await Promise.all(
			Object.entries(import.meta.glob('$lib/content/tweet/*.md')).map(async ([, page]) => page())
		)
	).map((/** @type object */ m) => m.default)
});
