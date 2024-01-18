<script lang="ts">
    import { Avatar, LightSwitch } from "@skeletonlabs/skeleton";
    const themes = [
      { type: "skeleton", name: "Skeleton", icon: "💀" },
      { type: "wintry", name: "Wintry", icon: "🌨️", badge: "New" },
      { type: "modern", name: "Modern", icon: "🤖" },
      { type: "rocket", name: "Rocket", icon: "🚀" },
      { type: "seafoam", name: "Seafoam", icon: "🧜‍♀️" },
      { type: "vintage", name: "Vintage", icon: "📺" },
      { type: "sahara", name: "Sahara", icon: "🏜️" },
      { type: "hamlindigo", name: "Hamlindigo", icon: "👔" },
      { type: "gold-nouveau", name: "Gold Nouveau", icon: "💫" },
      { type: "crimson", name: "Crimson", icon: "⭕" },
    ];
    import { onMount } from "svelte";
  import { currentThemeStore } from "./store";
    function randomTheme() {
      // Get a random theme from the array
      const randomIndex = Math.floor(Math.random() * themes.length);
      const theme = themes[randomIndex].type;
      $currentThemeStore = theme;
      const alwayLatestTheme = $currentThemeStore;
      console.log(alwayLatestTheme);
    }
  
    onMount(() => {
      currentThemeStore.subscribe((alwayLatestTheme) => {
        document.body.setAttribute("data-theme", alwayLatestTheme.toString()); // Set the theme attribute on body
        localStorage.setItem("theme", alwayLatestTheme.toString()); // Save the theme preference in localStorage
      });
    });
  </script>
  
  <button
    class="btn btn-sm md:btn-xl w-12 h-6 xs:w-20 xs:h-8 variant-filled-primary z-20"
    on:click={randomTheme}
  >
    <span class="">🤖 </span>
  </button>
  