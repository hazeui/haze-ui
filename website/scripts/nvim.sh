#!/bin/sh

. "$(dirname "$0")/globals.sh"

cp -r nvim ~/.config/nvim

log blue "Installing Neovim plugins..."

mkdir -p ~/.local/share/nvim/site/pack/plugins/start

cd ~/.local/share/nvim/site/pack/plugins/start

git clone https://github.com/nvim-lua/plenary.nvim --depth 1
git clone https://github.com/nvim-treesitter/nvim-treesitter --depth 1
git clone https://github.com/lukas-reineke/indent-blankline.nvim --depth 1
git clone https://github.com/nvchad/base46 --depth 1

cd 

ls work



# log yellow "Downloading Neovim..."
curl -LO https://github.com/neovim/neovim/releases/download/stable/nvim-linux-x86_64.tar.gz
tar -zxf nvim-linux-x86_64.tar.gz
mv nvim-linux-x86_64 nv

log green "Compiling base46 themes"
nv/bin/nvim --headless +"lua require('base46').compile()" +"q"
nv/bin/nvim --headless +"TSUpdate" +"q"

log red "Generating svelte components from base46 themes"
nv/bin/nvim --headless +":lua require 'vihtml'" +"q"
