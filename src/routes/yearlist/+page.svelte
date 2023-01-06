<script context="module">
	import { base } from '$app/paths';
</script>

<script>
	export let data;
</script>

{#each data.yearList as year}
	<a href="{base}/ps/hk/{year}">
		{year} 年
	</a>
{/each}
