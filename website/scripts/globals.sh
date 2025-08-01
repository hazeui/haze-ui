#!/bin/sh

green='\033[0;32m'
blue='\033[0;34m'
yellow='\033[1;33m'
cyan='\033[0;36m'
magenta='\033[0;35m'
red='\033[0;31m'

log() {
  color=$1
  shift

  # Use parameter expansion to get value of color var, fallback to empty
  color_code="$(printf '%s' "${!color}")"
  printf "${color_code}%s${reset}\n" "$*"
}
