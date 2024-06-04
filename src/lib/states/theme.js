import { writable } from 'svelte/store';

const themes = ['system', 'dark', 'light'];
/**
 * Subscribe value on change
 * @method
 * @name subscribe
 *
 * Update to the next theme
 * @method
 * @name next
 *
 */

const init_value = 'system';
const init_state = () => {
	const { subscribe, set, update } = writable(init_value);

	return {
		subscribe: subscribe,
		next: (/** @type Storage */ local_storage, /** @type Document*/ doc_elem) =>
			update((currTheme) => {
				const nstate = themes[(themes.indexOf(currTheme) + 1) % themes.length];

				local_storage.setItem('theme', JSON.stringify(nstate));
				doc_elem.documentElement.dataset.theme = nstate;
				return nstate;
			}),
		init: (/** @type Storage*/ storage, /** @type Document*/ doc_elem) => {
			if ('theme' in storage) {
				const parsedState = JSON.parse(storage.theme);
				if (themes.includes(parsedState)) {
					set(parsedState);
					doc_elem.documentElement.dataset.theme = parsedState;
				}
			} else {
				doc_elem.documentElement.dataset.theme = init_value;
			}
		}
	};
};

export const theme = init_state();

/**
 * @param {string} state - the current theme
 * @returns {string} empty if invalid or the next theme if call `update()`
 */
export const next_theme_state = (state) =>
	themes.includes(state) ? themes[(themes.indexOf(state) + 1) % themes.length] : '';
