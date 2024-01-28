// @ts-nocheck
const imgs_map = new Map([
	['20240202-my-2024-setup', async () => import('$lib/assets/danang-2021.jpg?enhanced&w=600;360')]
]);

const thumbnails_map = new Map([
	['20240202-my-2024-setup', async () => import('$lib/assets/danang-2021.jpg?enhanced&w=360')]
]);

export default {
	fetch_id: (/** @type String*/ date, /**@type string*/ title) =>
		date.split('-').join('') + '-' + title.toLowerCase().split(' ').join('-'),
	fetch_image: (/** @type string **/ id) => {
		return imgs_map.get(id);
	},
	fetch_thumbnail: (/** @type string **/ id) => {
		return thumbnails_map.get(id);
	}
};
