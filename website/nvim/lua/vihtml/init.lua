local utils = require "vihtml.utils"
local M = {}
local api = vim.api
local uv = vim.uv

M.open_files = function()
  local cwd = uv.cwd()
  local dirs = vim.fn.readdir(cwd .. "/codemos")
  local css = ""

  for _, dir in ipairs(dirs) do
    local dirpath = cwd .. "/codemos/" .. dir
    local dirfiles = vim.fn.readdir(dirpath)

    local targetdir = cwd .. "/codemocomps/" .. dir
    vim.fn.mkdir(targetdir, "p")

    for _, file in pairs(dirfiles) do
      local fullpath = dirpath .. "/" .. file
      vim.cmd("e " .. fullpath)

      local code = utils.win_to_html "onedark"

      if string.find(file, "jsx") then
        file = file:gsub("%.", "-") .. ".svelte"
      end

      local component_file = targetdir .. "/" .. file
      utils.write_file(component_file, code.html)
      css = css .. "\n".. code.css
      -- api.nvim_buf_delete(0, { force = true })
    end
  end

  local cssfile = cwd .. "/src/lib/css/codesyn.css"

  css = utils.dedupe_css(css)

  utils.write_file(cssfile, css)
end

M.open_files()
