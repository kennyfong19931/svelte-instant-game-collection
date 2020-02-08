<script>
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import AppBar from "components/AppBar";
  import Tabs from "components/Tabs";
  import Button from "components/Button";
  import { Spacer } from "components/Util";
  import List from "components/List";
  import ListItem from "components/List/ListItem.svelte";
  import NavigationDrawer from "components/NavigationDrawer";
  import ProgressLinear from "components/ProgressLinear";
  import { writable } from "svelte/store";

  const { preloading, page } = stores();

  let selected = "";

  $: path = $page.path;

  const topMenu = [
    // { to: "/about", text: "About" },
    // { to: "/blog", text: "Blog" }
  ];
</script>

<svelte:head>
  <title>PS Plus Instant game collection</title>
</svelte:head>

{#if $preloading}
  <ProgressLinear app />
{/if}

<AppBar>
  <a href="." class="px-2 md:px-8 flex items-center">
    <img src="/logo.png" alt="logo" width="44" />
    <h6 class="pl-3 text-white tracking-widest font-thin text-lg">
      PlayStation®Plus 免費遊戲
    </h6>
  </a>
  <Spacer />
  <Tabs navigation items={topMenu} bind:selected={path} />
</AppBar>

<main
  class="container relative p-8 lg:max-w-6xl mx-auto mb-10 mt-24 md:max-w-md md:px-3"
  transition:fade={{ duration: 300 }}>
  
  <slot />
</main>
