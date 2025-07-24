#!/bin/sh

# Colors
green='\033[0;32m'
blue='\033[0;34m'
yellow='\033[1;33m'
cyan='\033[0;36m'
magenta='\033[0;35m'
red='\033[0;31m'

echo -e "${green}Building Svelte package..."
bunx svelte-package -i src 
echo

echo -e "${blue}Compiling TypeScript types..."
bunx tsc ../types/*.ts --outDir dist/types --declaration --module esnext --skipLibCheck

echo -e "${yellow}Cleaning up generated type files...\n"
rm ../types/*d.ts

echo -e "${magenta}Building ${cyan}unocss preset...\n"
cd ../preset/ && bun run build  
mv dist ../svelte/dist/preset
echo

cd ../svelte/
