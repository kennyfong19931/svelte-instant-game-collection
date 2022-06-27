<script context="module">
	import { base } from '$app/paths';

	/** @type {import('./__types/[slug]').Load} */
	export async function load({ params, fetch, error }) {
		return Promise.all([
			fetch(`${base}/api/${params.region}/list.json`).then((r) => r.json()),
			fetch(`${base}/api/${params.region}/${params.year}.json`).then((r) => r.json())
		]).then(([yearList, gameList]) => ({
			props: {
				yearList: yearList.map((y) => y.toString()),
				region: params.region,
				year: params.year,
				data: gameList
			}
		}));
	}
</script>

<script>
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Card, { Content } from '@smui/card';
	import Chip, { Set, LeadingIcon, TrailingIcon, Text } from '@smui/chips';
	import Select, { Option } from '@smui/select';
	import { goto } from '$app/navigation';

	export let region;
	export let year;
	export let data;
	export let yearList = [];

	// Handle Year Select
	let yearSelected = year;
	$: if (yearSelected != year) {
		goto(`${base}/ps/${region}/${yearSelected}`);
	}
</script>

<svelte:head>
	<title>{year}年 PlayStation®Plus 免費遊戲</title>
</svelte:head>

<h1 class="mdc-typography--headline1">
	PlayStation®Plus 免費遊戲 (<span class="uppercase">{region}</span>)
	<Select bind:value={yearSelected} label="年份">
		{#each yearList as year}
			<Option value={year}>{year}年</Option>
		{/each}
	</Select>
</h1>

<LayoutGrid>
	{#each data as game}
		<Cell span={3}>
			<Card>
				<div style="padding: 1rem;">
					<h2 class="mdc-typography--headline6" style="margin: 0;">
						{game.title}
					</h2>
					<h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">
						{game.brand}
					</h3>
				</div>
				{#if game.image.startsWith('/')}
					<img src="{base}{game.image}" alt="cover" />
				{:else}
					<img src={game.image} alt="cover" />
				{/if}
				<Content class="mdc-typography--body2">
					<Set
						chips={[
							{ text: game.startTime, icon: 'event_available', class: 'mdc-chip-green' },
							{ text: game.endTime, icon: 'event_busy', class: 'mdc-chip-red' }
						]}
						let:chip
						nonInteractive
					>
						<Chip {chip} class={chip.class}>
							<LeadingIcon class="material-icons">{chip.icon}</LeadingIcon>
							<Text>{chip.text}</Text>
						</Chip>
					</Set>
					<Set chips={game.platforms} let:chip>
						<Chip {chip} class="mdc-chip-ps">
							<a
								target="_blank"
								href={'https://store.playstation.com/zh-hant-hk/product/' + chip.code}
							>
								<Text>{chip.platform}</Text>
								<TrailingIcon class="material-icons">open_in_new</TrailingIcon>
							</a>
						</Chip>
					</Set>
				</Content>
			</Card>
		</Cell>
	{/each}
</LayoutGrid>
