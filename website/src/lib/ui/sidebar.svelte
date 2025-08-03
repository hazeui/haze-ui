<script lang="ts">
  import { page } from "$app/state";

  let pathname = $derived(page.url.pathname);

  let links = [
    {
      name: "Overview",
      href: "/docs",
      icon: "i-ph:square-logo-bold",
    },
    {
      name: "Install",
      href: "/docs/install",
      icon: "i-line-md:downloading-loop",
    },
    {
      name: "Usage",
      href: "/docs/usage",
      icon: "i-material-symbols:data-usage-rounded",
    },
  ];

  let components = [
    "badge",
    "button",
    "checkbox",
    "dialog",
    "dropdown",
    "input",
    "radio",
    "select",
    "switch",
    "tabs",
    "toast",
    "userpic",
  ];

  let mobcss = $state(false);

  const toggleMobCss = () => mobcss = !mobcss;
  const closeMob = () => (mobcss = false);
</script>

<button
  class="btn-outline rounded-none border-(0 b) justify-start lg:hidden"
  onclick={toggleMobCss}
>
  <i class="i-tabler:menu-2"></i>
  Menu
</button>

<aside
  class={`z-100 ${mobcss ? "" : "lt-lg:(hidden absolute top-35 w-full)"} 
         sticky top-17 h-[calc(100vh-5rem)] overflow-y-auto
         flex-(~ col gap3) border-(r solid border) p8 pr20 bg-bg`}
>
  {#each links as link}
    <a
      href={link.href}
      class={`flex items-center gap2
             ${link.href == pathname ? "text-primary" : ""}`}
    >
      <i class={link.icon}></i>
      {link.name}
    </a>
  {/each}

  <span class="mt3 text-primary">Components</span>

  {#each components as link}
    <a
      href={"/docs/" + link}
      class={`flex items-center gap2 capitalize hover:text-primary
             ${("/docs/" + link) == pathname ? "text-primary" : ""}`}
      onclick={closeMob}
    >
      {link}
    </a>
  {/each}
</aside>
