import { base } from '$app/paths';
import { page } from '$app/stores';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	return Promise.all([
		fetch(`${base}/api/${params.region}/list.json`).then((r) => r.json()),
		fetch(`${base}/api/${params.region}/${params.year}.json`).then((r) => r.json())
	]).then(([yearList, gameList]) => ({
		yearList: yearList.map((y) => y.toString()),
		region: params.region,
		year: params.year,
		data: gameList
	}));
}
