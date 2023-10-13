import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: sveltePreprocess({
		sourceMap: true,
		postcss: {
			plugins: [autoprefixer()]
		},
		scss: {
			prependData: `@import 'src/styles/variables.scss';`
		}
	})
};

export default config;
