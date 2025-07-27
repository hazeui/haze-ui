#!/bin/sh

DOCS_DIR="content/docs"

mkdir -p tmpdocs

for file in "$DOCS_DIR"/*.mdx; do
  filename=${file##*/}
  filename=${filename%.mdx}

  tmpdir="tmpdocs/$filename"
  mkdir -p "$tmpdir"

  if [ ! -e "$tmpdir/+page.svelte" ]; then
    cp -r "$file" "$tmpdir/+page.mdx"
  else
    echo "File already exists: $tmpdir/+page.mdx"
  fi
done

mv ./src/routes/docs/[slug]/  .
mv tmpdocs/* src/routes/docs

bunx vite build

for f in src/routes/docs/*; do
  case "$(basename "$f")" in
    +layout.js|+layout.svelte|+page.svelte) ;;
    *) rm -rf -- "$f" ;;
  esac
done

mv '[slug]' src/routes/docs

rmdir tmpdocs
