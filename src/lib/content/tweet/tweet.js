export default {
	fetch_id: (/** @type String*/ date, /**@type string |  undefined*/ emo) =>
		date.split('-').join('') + emo ?? ''
};
