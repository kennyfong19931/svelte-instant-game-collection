<script context="module">
  export async function preload({ params, query }) {
	let returnObj = {};
    const res = await this.fetch(`api/${params.region}/${params.year}.json`);
    const json = await res.json();

    if (res.status === 200 && json.code === "1000") {
		returnObj.region = params.region;
		returnObj.year = params.year;
		returnObj.data = json.data;
    } else {
      this.error(res.status, json.code + " - " + json.message);
	}
	
	const yearList = await this.fetch(`api/hk/list.json`);
    const yearListJson = await yearList.json();
    if (yearList.status === 200 && yearListJson.code === "1000") {
		let items = [];
		yearListJson.data.forEach(item => {
			items.push({ value: item, text: item + "年" });
		});
		returnObj.items = items;
    } else {
      	this.error(yearList.status, yearListJson.code + " - " + yearListJson.message);
	}
	return returnObj;
  }
</script>

<script>
  import { Card, Image, Icon } from "smelte";
  import { Select } from "smelte";
  import { goto } from '@sapper/app';

  export let region;
  export let year;
  export let data;
  export let items = [];
  const label = "年份";
  
  function onSelect(value) {
	goto('ps/hk/'+value);
  }

</script>

<svelte:head>
  <title>PlayStation®Plus 免費遊戲 {year}年</title>
</svelte:head>

<h4>
  PlayStation®Plus 免費遊戲 <span class="uppercase">{region}</span> {year}年
</h4>

<Select {label} {items} on:change={v => onSelect(v.detail)} />



<div class="flex justify-center flex-wrap">
	{#each data as game}
	<Card.Card class="m-5 w-1/5">
		<div slot="title">
			<Card.Title title={game.title} subheader={game.brand} />
		</div>
		<div slot="media">
			<Image class="w-full" src={game.image} />
		</div>
		<div slot="text" class="p-5 pt-3 text-gray-700 body-2">
			<button class="rounded-full cursor-default flex item-center m-1 px-2 py-1 bg-success-500">
				<Icon small class="py-1">event_available</Icon> 
				<span class="pt-px px-1">{game.startTime}</span>
			</button>
			<button class="rounded-full cursor-default flex item-center m-1 px-2 py-1 bg-error-500">
				<Icon small class="py-1">event_busy</Icon> 
				<span class="pt-px px-1">{game.endTime}</span>
			</button>
			<button class="rounded-full flex item-center m-1 px-2 py-1 bg-blue-500 text-white">
				<Icon small class="py-1">shopping_cart</Icon> 
				<span class="pt-px px-1">
				<a target="_blank" href={"https://store.playstation.com/#!/cid=" + game.code}>PS Store</a>
				</span>
			</button>
		</div>
	</Card.Card>
	{/each}
</div>
