const imgs_map = new Map([
	['20240202-my-2024-setup', async () => import('$lib/assets/danang-2021.jpg?enhanced')]
]);
export default {
	fetch_id: (/** @type String*/ date, /**@type string*/ title) =>
		date.split('-').join('') + '-' + title.toLowerCase().split(' ').join('-'),
	fetch_image: (/** @type string **/ id) => {
		return imgs_map.get(id);
	}
};
