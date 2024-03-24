import tweet from '$lib/content/tweet/tweet';
export const prerender = true;

const url = 'https://sprqpt.com';
const title = 'Conrad Hoang';
const desc = 'The RSS feed for posts from Conrad Hoang';
const author = 'Conrad Hoang';
const avatar = 'https://avatars.githubusercontent.com/u/51996720?v=4';

export const GET = async () => {
	const all_tweets_metadata =
		/** @type {{date: String, title: string, emo: string | undefined, description: string, tags: string[] | undefined, author: string | undefined  }[]} */
		(
			Object.entries(
				import.meta.glob('$lib/content/tweet/*.md', { eager: true, import: 'frontmatter' })
			).map((i) => i[1])
		);

	const options = {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=604800000',
			'Content-Type': 'application/xml'
		}
	};

	return new Response(
		render(
			all_tweets_metadata
				.map((md) =>
					generate_entry(
						md.title,
						build_url(tweet.fetch_id(md.date, md.emo)),
						md.date,
						md.author ?? author,
						md.description,
						md.tags ?? []
					)
				)
				.join('')
		),
		options
	);
};

/**
 * @param {string} path
 * @returns {string} url
 */
const build_url = (path) => `${url}/cheeps/${path}`;

/**
 * @param {string} title
 * @param {string} url
 * @param {string} date
 * @param {string} author
 * @param {string} description
 * @param {string[]} tags
 */
const generate_entry = (title, url, date, author, description, tags) => `
<item>
	<title>${title}</title>
	<link>${url}</link>
	<author>${author}</author>
	<description><![CDATA[${description}]]></description>
	<guid isPermaLink="true">${url}</guid>
	<pubDate>${new Date(date).toDateString()}</pubDate>
	<source url="${url}/rss">Conrad Hoang RSS Feed</source>
	${tags.map((tag) => `<category>${tag}</category>`).join('')}
</item>`;

/**
 * @param {string} posts
 */
const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:wfw="http://wellformedweb.org/CommentAPI/"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
    xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
    xmlns:georss="http://www.georss.org/georss"
    xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#"
  >
	<channel>
		<title>${title}</title>
		<description>${desc}</description>
		<link>${url}</link>
		<atom:link href="${url}/rss.xml" rel="self" type="application/rss+xml"/>
		<language>en-us</language>
		<copyright>${author} ${new Date().getFullYear()}</copyright>
		<docs>https://www.rssboard.org/rss-specification</docs>
		<pubDate>${new Date().toDateString()}</pubDate>
		<lastBuildDate>${new Date().toDateString()}</lastBuildDate>
		<managingEditor>${author}</managingEditor>
		<webMaster>${author}</webMaster>
		<image>
			<url>${url}${avatar}</url>
			<title>${title}</title>
			<link>${url}</link>
		</image>
		${posts}
	</channel>
</rss>
`;
