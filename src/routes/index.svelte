<script context="module">
  export async function preload({ params, query }) {
    const yearList = await this.fetch(`api/hk/list.json`);
    const yearListJson = await yearList.json();
    if (yearList.status === 200 && yearListJson.code === "1000") {
		let items = [];
		yearListJson.data.forEach(item => {
			items.push({ value: item, text: item + "年" });
		});
      	return { items };
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


<h4>PlayStation®Plus 免費遊戲</h4>

<div class="container max-w-xl items-center flex flex-col">
  <a href="/ps/hk/2020">HK 2020</a>
</div>

<Select {label} {items} on:change={v => onSelect(v.detail)} />