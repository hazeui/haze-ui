local utils = require "vihtml.utils"
local M = {}
local api = vim.api
local uv = vim.uv

local echo = function(txts)
  vim.api.nvim_echo(txts, false, {})
end

local line_sep = function ()
  echo { { string.rep("-", 100) } }
end

M.open_files = function()
  local cwd = uv.cwd()
  local dirs = vim.fn.readdir(cwd .. "/codemos")
  local css = ""

  for _, dir in ipairs(dirs) do
    local dirpath = cwd .. "/codemos/" .. dir
    local dirfiles = vim.fn.readdir(dirpath)

    local targetdir = cwd .. "/codemocomps/" .. dir
    vim.fn.mkdir(targetdir, "p")

    line_sep()
    echo { { "Created dir:", "String" }, { targetdir, "Removed" } }

    for _, file in pairs(dirfiles) do
      local fullpath = dirpath .. "/" .. file
      vim.cmd("e " .. fullpath)

      local code = utils.win_to_html "onedark"

      if string.find(file, "jsx") then
        file = file:gsub("%.", "-") .. ".svelte"
      end

      local component_file = targetdir .. "/" .. file
      utils.write_file(component_file, code.html)

      local logfilepath = "[" .. dir .. "/" .. file .. "]"

      echo { { "Svelte component generated: ", "String" }, { logfilepath, "Removed" } }

      css = css .. "\n" .. code.css
      -- api.nvim_buf_delete(0, { force = true })
    end
  end

  local cssfile = cwd .. "/src/css/codesyn.css"

  echo { { "\nCSS file written at ", "String" }, { cssfile, "Removed" } }

  css = utils.dedupe_css(css)

  echo { { "Deduped css \n\n", "FloatBorder" } }

  utils.write_file(cssfile, css)
end

M.open_files()
