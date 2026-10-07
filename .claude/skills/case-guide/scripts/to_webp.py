"""Convert a generated PNG to WebP for the site, with an optional small thumbnail.

Usage: python to_webp.py <input.png> <case-slug>/<name>.webp [--thumb]
Writes to public/images/cases/<case-slug>/<name>.webp
"""
import sys
from pathlib import Path

from PIL import Image

root = Path(__file__).resolve().parents[4]
src = Path(sys.argv[1])
dest = root / "public" / "images" / "cases" / sys.argv[2]
dest.parent.mkdir(parents=True, exist_ok=True)
im = Image.open(src).convert("RGB")
im.save(dest, "WEBP", quality=82, method=6)
print(dest)
if "--thumb" in sys.argv:
    thumb = dest.with_name(dest.stem + "-thumb.webp")
    im.resize((480, 320), Image.LANCZOS).save(thumb, "WEBP", quality=80, method=6)
    print(thumb)
