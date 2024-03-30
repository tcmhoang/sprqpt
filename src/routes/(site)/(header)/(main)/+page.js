export const load = () => {
	/** @type {[path: string,{frontmatter: {date: String, title: string, emo: string | undefined, emodesc: string, pinned: boolean | undefined  }, default: Component}][]} */
	const all_tweets = Object.entries(import.meta.glob('$lib/content/tweet/*.md', { eager: true }));

	/** @type {Component[]} */
	const tweets = all_tweets
		.toSorted(
			(v1, v2) =>
				v2[0].localeCompare(v1[0]) +
				(v2[1].frontmatter.pinned ?? false ? 1 : 0) +
				(v1[1].frontmatter.pinned ?? false ? -1 : 0)
		)
		.map((e) => e[1].default);

	return {
		tweets
	};
};
