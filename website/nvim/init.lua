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

require("nvim-treesitter").setup {}

vim.api.nvim_create_autocmd("FileType", {
  pattern = "*",
  callback = function()
    pcall(function()
      vim.treesitter.start()
    end)
  end,
})

pcall(function()
  dofile(vim.g.base46_cache .. "defaults")
  dofile(vim.g.base46_cache .. "syntax")
  dofile(vim.g.base46_cache .. "treesitter")
end)

require "commands"
