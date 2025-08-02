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

log yellow "Downloading Neovim..."
curl -LO https://github.com/neovim/neovim/releases/download/stable/nvim-linux-x86_64.tar.gz
tar -zxf nvim-linux-x86_64.tar.gz

log blue "Installing Neovim"
mkdir -p "$HOME/.local/nvim"
mv nvim-linux-x86_64/* "$HOME/.local/nvim"

echo "$HOME/.local/nvim/bin" >> "$GITHUB_PATH"
export PATH="$HOME/.local/nvim/bin:$PATH"

cd /home/runner/work/haze-ui/haze-ui/website

log green "Compiling base46 themes"
nvim --headless +"lua require('base46').compile()" +"q"
nvim --headless +"TSUpdate" +"q"

log red "Generating svelte components from base46 themes"
nvim --headless +":lua require 'vihtml'" +"q"
