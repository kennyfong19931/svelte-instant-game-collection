<script lang="ts">
    import { base } from '$app/paths';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
</script>

<TopAppBar variant="static">
	<Row>
		<Section>
            <img alt="logo" src="{base}/logo.png" width="44">
			<Title>PlayStation®Plus 免費遊戲</Title>
		</Section>
		<Section align="end" toolbar>
			<!-- <IconButton class="material-icons" aria-label="Toggle Theme">dark_mode</IconButton> -->
		</Section>
	</Row>
</TopAppBar>
<section>
	<slot />
</section>
