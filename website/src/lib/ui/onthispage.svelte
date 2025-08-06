<script lang="ts">
  import { page } from "$app/state";

  let hash = $derived(page.url.hash.slice(1));
  let slugifiedHash = $derived(slugify(hash));
  let pathname = $derived(page.url.pathname);

  function slugify(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  }

  function getHeadings() {
    const headings = Array.from(
      document.querySelectorAll("h2, h3, h4, h5, h6"),
    );

    // Set IDs for headings that don't have them
    headings.forEach((el) => {
      if (!el.id) {
        el.id = slugify(el.textContent?.trim() || "");

        if (el.id == hash) document.querySelector(hash)?.scrollIntoView();
      }
    });

    return headings.map((el) => ({
      type: el.tagName.toLowerCase(),
      name: el.textContent?.trim(),
      id: el.id,
    }));
  }

  let lists: any = $state([]);

  $effect(() => {
    if (pathname) lists = getHeadings();
  });
</script>

<aside class="hidden lg:grid sticky top-20 h-fit overflow-y-auto gap2 py10 px20">
  <b>On this page</b>

  {#each lists as x}
    <a
      href={"#" + x.id}
      class={x.id == slugifiedHash ? "text-primary" : "text-muted-fg"}
    >{x.name}</a>
  {/each}
</aside>
