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
  import { Select } from "smelte";
  import { goto } from '@sapper/app';
  export let items = [];

  const label = "年份";
  
  function onSelect(value) {
	  goto('ps/hk/'+value);
  }
</script>

<svelte:head>
  <title>PlayStation®Plus 免費遊戲</title>
</svelte:head>

<h4>
  PlayStation®Plus 免費遊戲
</h4>

<Select {label} {items} on:change={v => onSelect(v.detail)} />