vim.api.nvim_create_user_command("Vihtml", function()
  require("base46").load_all_highlights()
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
