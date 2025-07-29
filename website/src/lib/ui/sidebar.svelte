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
</script>

<aside class="flex-(~ col gap3) border-(r solid border) p8 pr20 h-screen">
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
    >
      {link}
    </a>
  {/each}
</aside>
