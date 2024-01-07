import tweet from '$lib/content/tweet/tweet';
import { error } from '@sveltejs/kit';

/**
 * @function
 * @param {{params: {cheep:string}}} params;
 */
export const load = async ({ params }) => {
	const id = params.cheep;

	const all_tweets =
		/** @type {{frontmatter: {date: String, title: string, emo: string | null | undefined  }, default: Component}[]} */
		(Object.entries(import.meta.glob('$lib/content/tweet/*.md', { eager: true })).map((i) => i[1]));

	const maybe_tweet_content = all_tweets.find(
		({ frontmatter }) => tweet.fetch_id(frontmatter.date, frontmatter.emo) == id
	);

	if (maybe_tweet_content) {
		return {
			content: maybe_tweet_content.default,
			title: maybe_tweet_content.frontmatter.title
		};
	}
	error(404);
};
