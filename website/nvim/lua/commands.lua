vim.api.nvim_create_user_command("Kk", function()
  require "vihtml"
end, {})

vim.api.nvim_create_user_command("TSInstallParsers", function()
  local langs = {
    "vim",
    "bash",
    "lua",
    "html",
    "css",
    "svelte",
    "tsx",
    "typescript",
    "javascript",
  }

  require("nvim-treesitter").install(langs):wait()
end, {})
