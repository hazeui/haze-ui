cp -r ../preset src/lib
vite build && npm run prepack
rm -rf src/lib/preset
