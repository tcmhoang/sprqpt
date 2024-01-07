export default {
	fetch_id: (/** @type String*/ date, /**@type string | null | undefined*/ emo) =>
		date.split('-').join('') + emo ?? ''
};
