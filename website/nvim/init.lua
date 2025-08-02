local o = vim.o

o.shiftwidth = 2
o.smartindent = true
o.tabstop = 2
o.softtabstop = 2

vim.opt.fillchars = { eob = " " }
o.number = true
o.signcolumn = "yes"
o.termguicolors = true

vim.g.base46_cache = vim.fn.stdpath "data" .. "/base46_cache/"

require("nvim-treesitter.configs").setup {
  ensure_installed = {
    "lua",
    "html",
    "css",
    "svelte",
    "tsx",
    "typescript",
    "javascript",
  },

  highlight = {
    enable = true,
    use_languagetree = true,
  },
  indent = { enable = true },
  sync_install = true,
}

dofile(vim.g.base46_cache .. "defaults")
dofile(vim.g.base46_cache .. "syntax")
dofile(vim.g.base46_cache .. "treesitter")

vim.api.nvim_create_user_command("Kk", function()
  require "vihtml"
end, {})
