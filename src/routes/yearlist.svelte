<script context="module">
    import { base } from '$app/paths';

	/** @type {import('./__types/[slug]').Load} */
	export async function load({ params, fetch, error }) {
		return Promise.all([
			fetch(`${base}/api/hk/list.json`).then((r) => r.json())
		]).then(([yearList]) => ({
			props: {
				yearList: yearList.map((y) => y.toString())
			}
		}));
	}
</script>

<script>
	export let yearList = [];
</script>

{#each yearList as year}
<a href="{base}/ps/hk/{year}">
	{year} 年
</a>
{/each}