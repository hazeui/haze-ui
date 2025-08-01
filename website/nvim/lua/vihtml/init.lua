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

    local compsdir = cwd .. "/codemocomps/" .. dir
    local preveiewdir = compsdir .. "/preview"
    local targetdir = compsdir .. "/codes"

    vim.fn.mkdir(targetdir, "p")
    vim.fn.mkdir(preveiewdir, "p")

    for _, file in pairs(dirfiles) do
      local fullpath = dirpath .. "/" .. file
      vim.cmd("e " .. fullpath)

      local code = utils.win_to_html "onedark"

      if string.find(file, "jsx") then
        file = file:gsub("%.", "-") .. ".svelte"
      end

      local component_file = targetdir .. "/" .. file
      utils.write_file(component_file, code.html)
      css = css .. code.css
      -- api.nvim_buf_delete(0, { force = true })
    end
  end

  local cssfile = cwd .. "/codemocomps/style.css"
  utils.write_file(cssfile, css)
end

M.open_files()
