#!/bin/sh

. "$(dirname "$0")/globals.sh"

log yellow "Installing tree-sitter CLI..."

curl -LO https://github.com/tree-sitter/tree-sitter/releases/latest/download/tree-sitter-linux-x64.gz
gunzip tree-sitter-linux-x64.gz
chmod +x tree-sitter-linux-x64
sudo mv tree-sitter-linux-x64 /usr/local/bin/tree-sitter

tree-sitter --version

cp -r nvim ~/.config/nvim

cd

log yellow "Downloading Neovim..."
curl -LO https://github.com/neovim/neovim/releases/download/stable/nvim-linux-x86_64.tar.gz
tar -zxf nvim-linux-x86_64.tar.gz

log blue "Installing Neovim"
sudo cp -r nvim-linux-x86_64/* /usr/local/

nvim --headless +"qall"

cd /home/runner/work/haze-ui/haze-ui/website

log red "Generating svelte components from base46 themes"
nvim --headless +":lua require 'vihtml'" +"qall"
