<script lang="ts">
  import type { UserpicProps } from "types/userpic";

  let { src, alt, class: css = "wh-8", name = "joe" }: UserpicProps =
    $props();

  const colors = [
    "bg-blue",
    "bg-emerald",
    "bg-teal",
    "bg-indigo",
    "bg-orange",
    "bg-lime",
    "bg-rose",
    "bg-pink",
    "bg-amber",
  ];

  function getColorByLetter(letter: string) {
    const index = "abcdefghijklmnopqrstuvwxyz".indexOf(
      letter.toLowerCase(),
    );
    if (index === -1) return colors[0];
    const groupSize = Math.ceil(26 / colors.length);
    const colorIndex = Math.floor(index / groupSize);
    return colors[colorIndex];
  }

  const formatName = (str: string) => {
    const firstname = str.split(" ")[0];
    return firstname.substring(0, 2).toUpperCase();
  };

  const bg = getColorByLetter(name[0]);
</script>

{#if src}
  <img {src} {alt} class="rounded-full {css}" />
{:else}
  <div class="rounded-full text-(sm white) centerfull {bg} {css}">
    {formatName(name)}
  </div>
{/if}
