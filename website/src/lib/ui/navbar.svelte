<script lang="ts">
  import { Btn } from "haze-ui/index";

  let theme = $state("dark");

  const toggleTheme = () => {
    theme = theme == "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", theme);
  };
</script>

<nav class="p5 gap10 border-(b solid border) flex gap5 items-center">
  <a class="flex gap2 items-center" href="/">
    <div class="i-mdi:radio-button-indeterminate"></div>
    <b>Haze UI</b>
  </a>

  <a href="/docs">Docs</a>
  <a href="/docs">Blocks</a>
  <a href="/components" class="mr-auto">Components</a>

  <Btn
    placeholder="Search Docs"
    iconL="i-majesticons:search-line"
    variant="soft"
    txt="Search Docs"
  />

  <a href="/" class="i-bi:github text-xl" aria-label="github link"> </a>

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
</nav>
