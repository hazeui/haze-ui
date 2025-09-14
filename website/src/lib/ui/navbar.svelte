<script lang="ts">
  import { onMount } from "svelte";
  import { Btn } from "@haze-ui/svelte";
  import { mobasidebar } from "$lib/store.svelte";
  import { page } from "$app/state";

  let theme = $state();

  onMount(() => theme = localStorage.theme);

  const toggleTheme = () => {
    theme = theme == "dark" ? "light" : "dark";
    localStorage.theme = theme;
    document.querySelector("html").className = theme;
  };

  let mobcss = $state(false);
  const toggleMobCss = () => mobcss = !mobcss;
  const closeMobCss = () => mobcss = false;
</script>

<nav
  class="sticky top-0 z-50 bg-bg px4 py3 border-(b solid border) flex lt-lg:flex-col justify-between"
>
  <div class="flex gap3">
    <a class="flex gap2 items-center mr-auto" href="/">
      <div class="i-mdi:radio-button-indeterminate"></div>
      <b>Haze UI</b>
    </a>

    {#if page.url.pathname.includes("/docs")}
      <button
        class="btn-primary-eqmd lg:hidden"
        aria-label="toggle sidebar"
        onclick={() => mobasidebar.toggle()}
      >
        <i class="i-ph:sidebar-simple-duotone"></i>
      </button>
    {/if}

    <button
      onclick={toggleMobCss}
      aria-label="toggle menu"
      class="btn-soft-eqmd lg:hidden"
    >
      <i class="i-tabler:menu-2"></i>
    </button>
  </div>

  <div
    class={`z-100 ${
      mobcss
        ? "lt-lg:(flex-col mt5 flex asolute top-10 w-full)"
        : "lt-lg:(hidden)"
    } flex gap5 lg:items-center`}
  >
    <a href="/docs" onclick={closeMobCss}>Docs</a>
    <a href="/docs" onclick={closeMobCss}>Blocks</a>
    <a href="/docs/button" class="mr-auto" onclick={closeMobCss}>Components</a>

    <Btn
      placeholder="Search Docs"
      iconL="i-majesticons:search-line"
      variant="soft"
      txt="Search Docs"
    />

    <div class="flex gap5 items-center justify-center">
      <a
        href="https://github.com/hazeui/haze-ui"
        class="i-bi:github text-xl"
        aria-label="github link"
      >
      </a>

      <button
        class="btn-soft-eqlg rounded-full"
        aria-label="toggle dark mode"
        onclick={toggleTheme}
      >
        <div
          class={theme == "dark"
          ? "i-line-md:sun-rising-twotone-loop"
          : "i-line-md:moon-twotone-loop"}
        >
        </div>
      </button>
    </div>
  </div>
</nav>
