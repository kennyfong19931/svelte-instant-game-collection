import adapter from '@sveltejs/adapter-static';

const environment = 'PROD';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: environment === 'DEV' ? '' : '/svelte-instant-game-collection'
		}
	}
};

export default config;
