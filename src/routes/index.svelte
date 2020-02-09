<script context="module">
  export async function preload({ params, query }) {
    const yearList = await this.fetch(`api/hk/list.json`);
    const yearListJson = await yearList.json();
    if (yearList.status === 200 && yearListJson.code === "1000") {
      	return { items: yearListJson.data };
    } else {
      	this.error(yearList.status, yearListJson.code + " - " + yearListJson.message);
    }
  }
</script>

<script>
  export let items = [];
</script>

<svelte:head>
  <title>PlayStation®Plus 免費遊戲</title>
</svelte:head>

{#each items as item}
<a href="ps/hk/{item}">
	<button class="py-2 px-4 uppercase text-sm font-medium relative overflow-hidden text-white transition  bg-primary-500  hover:bg-primary-400   hover:elevation-5 elevation-3  rounded  button ">
		{item} 年
	</button>
</a>
{/each}