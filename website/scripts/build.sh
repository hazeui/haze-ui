#!/bin/sh

. "$(dirname "$0")/globals.sh"

DOCS_DIR="content/docs"

mkdir -p tmpdocs

log blue "Generating route dirs from /content"

for file in "$DOCS_DIR"/*.mdx; do
  filename=${file##*/}
  filename=${filename%.mdx}
  tmpdir="tmpdocs/$filename"

  mkdir -p "$tmpdir"

  if [ ! -e "$tmpdir/+page.svelte" ]; then
    cp -r "$file" "$tmpdir/+page.mdx"
  else
    log yellow "File already exists: $tmpdir/+page.mdx"
  fi
done

log cyan "Reorganizing route folders..."
mv ./src/routes/docs/[slug]/ .
mv tmpdocs/* src/routes/docs

log magenta "Building project with bunx vite..."
bunx vite build

log red "Cleaning up extra folders..."

for f in src/routes/docs/*; do
  case "$(basename "$f")" in
  +layout.js | +layout.svelte | +page.svelte) ;;
  *)
    rm -rf -- "$f"
    ;;
  esac
done

log cyan "Restoring original slug folder..."
mv '[slug]' src/routes/docs

log green "Removing tmpdocs..."
rmdir tmpdocs
