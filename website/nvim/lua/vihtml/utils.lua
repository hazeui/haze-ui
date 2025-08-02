local M = {}

local tohtml = require("tohtml").tohtml
local format_html = require "vihtml.format"

M.win_to_html = function(name)
  local min = vim.fn.line("w0", 1000)
  local max = vim.fn.line("w$", 1000)

  local code = tohtml(0, { number_lines = true })
  -- local code = tohtml(0, { number_lines = true, range = { 1, vim.api.nvim_buf_line_count(0) } })
  return format_html(name, code)
end

M.write_file = function(path, str)
  local file = io.open(path, "wb")

  if file then
    file:write(str)
    file:close()
  end
end

M.dedupe_css = function(str)
  local seen = {}
  local result = {}

  for line in str:gmatch "[^\r\n]+" do
    local selector = line:match "^%S+"
    local body = line:match "{%s*}"
    if selector and not seen[selector] and not body then
      seen[selector] = true
      table.insert(result, line)
    end
  end

  table.remove(result, 1)

  return table.concat(result, "\n")
end

return M
