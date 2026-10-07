#!/usr/bin/env bash
# Generate one illustration with Codex's built-in image_gen tool and copy it into the project.
# Usage: bash imagegen.sh <prompt-file> <output-name> [reference-image]
# Output: _private/imagegen/out/<output-name>.png
# Codex's sandbox cannot write into the project, so this script copies the newest
# image from ~/.codex/generated_images/ after the run.
set -euo pipefail
prompt="$1"; name="$2"; ref="${3:-}"
root="$(git rev-parse --show-toplevel)"
out="$root/_private/imagegen/out"
mkdir -p "$out"
gen="$HOME/.codex/generated_images"
before="$(ls -t "$gen" 2>/dev/null | head -1 || true)"
log="$root/_private/imagegen/$name.log"
if [ -n "$ref" ]; then
  timeout 900 codex exec --skip-git-repo-check -i "$ref" - < "$prompt" > "$log" 2>&1
else
  timeout 900 codex exec --skip-git-repo-check - < "$prompt" > "$log" 2>&1
fi
after="$(ls -t "$gen" | head -1)"
if [ "$after" = "$before" ]; then
  echo "No new image session found. See $log" >&2
  exit 1
fi
src="$(ls -t "$gen/$after"/*.png | head -1)"
cp "$src" "$out/$name.png"
echo "$out/$name.png"
