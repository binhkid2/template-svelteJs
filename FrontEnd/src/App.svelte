
<script lang="ts">
  import { AppBar, AppShell, LightSwitch, TabAnchor, TabGroup, setInitialClassState } from '@skeletonlabs/skeleton';
 
  import Home from "./routes/Home.svelte";
  import Form from './routes/Form.svelte';
  import Info from "./routes/Info.svelte"
  import { fade } from "svelte/transition";

  import '@fortawesome/fontawesome-free/css/fontawesome.css';
	import '@fortawesome/fontawesome-free/css/brands.css';
	import '@fortawesome/fontawesome-free/css/solid.css';
  

  import { onDestroy, onMount } from 'svelte';
  import { storeTheme,currentThemeStore } from './lib/store';
  import { get } from 'svelte/store';
  import Themes from './lib/Theme.svelte';

  onMount(async () => {
 
  });
  //@ts-ignore
  import {Router, Route,navigate    } from 'svelte-routing';
  import Test from './routes/Test.svelte';
  import Orders from './routes/orders.svelte';
  import axios from 'axios';

   //@ts-ignore
  function navigateUrl(event, option) {
            navigate((option.url), { replace: true });
            
    }
  const navOptions = [
    { page: 'Home', url:"/",  component: Home ,icon:"fa-solid fa-house"},
    { page: 'Add Friends',url:"/form",   component: Form,icon:"fa-solid fa-magnifying-glass" },
    { page: 'Info',url:"/info",   component: Info ,icon:"fa-solid fa-circle-info"},
		// other navigation pages can go here
];
export let url = "";
let loaded = false;
</script>
<svelte:head>{@html `<script>(${setInitialClassState.toString()})();</script>`}</svelte:head>
<!-- {#if loaded} -->
<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-500/10 ">
	<div class="z-20 sticky top-0 ">
	<AppBar   gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
		<svelte:fragment slot="lead">
			<Themes/>
		</svelte:fragment>
		<h3 class=" font-bold  lg:ml-12 text-xs xs:text-base z-20 ">Character AI</h3>
	</AppBar>
</div>

<div class=" responsive-text">
  
  <Router {url} >
    <div>
      <Route  path="/test" component={Test} />
      <Route  path="/info" component={Info} />
      <Route path="/home" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/" component={Home} />
      <Route path="/orders" component={Orders} />
    </div>
  </Router>
</div>
<div class="fixed bottom-0 left-0 w-full  ">
<TabGroup 
justify="justify-center"
active="variant-filled-primary"
hover="hover:variant-soft-primary"
flex="flex-1 lg:flex-none"
rounded=""
border=""
class="bg-surface-100-800-token w-full  h-10"
>

{#each navOptions as option, i}

<TabAnchor  class="w-1/3"  on:click={(event) => navigateUrl(event, option)} >
   <svelte:fragment slot="lead"><i class={option.icon}></i></svelte:fragment>
    
    <!--
       <p class=" text-sm xs:p " >{option.page}</p>
    -->
   
</TabAnchor>
{/each}
	</TabGroup>
</div>
   

</AppShell>
<!--
{:else}
 
  <div class="flex justify-center items-center h-screen">
   
    <img src="https://res.cloudinary.com/dffdhdcja/image/upload/v1702088611/loadings_g00asq.gif" alt="Image" class="max-w-full max-h-full">
  </div>
  
 
{/if}
-->
<style>
  /* Adjust text size based on screen width */
  @media (max-width: 320px) {
    .responsive-text {
      @apply text-sm;
    }
  }
</style>