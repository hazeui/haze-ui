<script lang="ts">
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
  class="btn-outline rounded-none border-x-0 justify-start lg:hidden"
  onclick={toggleMobCss}
>
  <i class="i-tabler:menu-2"></i>
  Menu
</button>

<aside
  class={`${mobcss ? "" : "lt-lg:(hidden absolute top-35 w-full z-100)"} 
         flex-(~ col gap3) border-(r solid border) p8 pr20 h-screen bg-bg`}
>
  {#each links as link}
    <a href={link.href} class="flex items-center gap2">
      <i class={link.icon}></i>
      {link.name}
    </a>
  {/each}

  <span class="mt3 text-primary">Components</span>

  {#each components as link}
    <a
      href={"/docs/" + link}
      class="flex items-center gap2 capitalize hover:text-primary"
      onclick={closeMob}
    >
      {link}
    </a>
  {/each}
</aside>
