<script lang="ts">
  import { onMount } from "svelte";

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
      }
    });

    return headings.map((el) => ({
      type: el.tagName.toLowerCase(),
      name: el.textContent?.trim(),
      id: el.id,
    }));
  }

  let lists: any = $state([]);

  onMount(() => {
    const hash = window.location.hash;

    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
    }

    lists = getHeadings();
  });
</script>

<aside class="grid gap2 h-fit py10 px20">
  <b>On this page</b>

  {#each lists as x}
    <a href={"#" + x.id} class="text-mutedfg">{x.name}</a>
  {/each}
</aside>
