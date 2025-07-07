# "build": "rm -rf dist && bun build.js",

cp -r ../preset components
rm -rf dist && tsc --project tsconfig.build.json
rm -rf components/preset
