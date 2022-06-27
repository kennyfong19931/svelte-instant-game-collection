import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const environment = "PROD";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		paths: {
            base: environment === "DEV" ? "" : "/svelte-instant-game-collection"
        },
		prerender: {
			default: true
		}
	}
};

export default config;
