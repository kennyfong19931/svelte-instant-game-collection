import { base } from '$app/paths';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	return Promise.all([fetch(`${base}/api/hk/list.json`).then((r) => r.json())]).then(
		([yearList]) => ({
			yearList: yearList.map((y) => y.toString())
		})
	);
}
