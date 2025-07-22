# "build": "rm -rf dist && bun build.js",

cp -r ../types .
cp -r ../preset components
rm -rf dist && tsc --project tsconfig.build.json
rm -rf types
rm -rf components/preset
