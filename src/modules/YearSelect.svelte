<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`api/hk/list.json`);
    const json = await res.json();
	console.log("json:" + json);
	return { items : json.data };
    // if (res.status === 200 && json.code === "1000") {
	// 	console.log("json.data:" + json.data);
	// 	let items = [];
	// 	json.data.forEach(item => {
	// 		items.put({ value: item, text: item + "年" });
	// 	});
    //   	return { items };
    // } else {
    //   	this.error(res.status, json.code + " - " + json.message);
    // }
  }
</script>

<script>
//   import { onMount } from "svelte";
  import { Select } from "smelte";

  export let items = [];
  const label = "年份";

//   console.log("script:" +items);

  function onSelect(value) {
    console.log(value);
  }

//   onMount(async () => {
// 	const res = await fetch(`api/hk/list.json`);
// 	let json = await res.json();
// 	items = json.data;
// 	console.log(items);
//   });
</script>

<Select {label} {items} on:change={v => onSelect(v.value)} />
{#each items as item }
	<div>
		<p> {item} </p>
	</div>
{/each}