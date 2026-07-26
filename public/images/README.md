# Product photography

Drop real photos in **this folder** using the exact filenames below and they
appear on the site immediately — no code changes needed. If a file is missing,
the card renders a brand-coloured placeholder, so nothing ever looks broken.

| Filename          | Where it appears        | Status |
| ----------------- | ----------------------- | ------ |
| `london-cake.jpg` | Signature bakes, card 1 | ✅ in place |
| `matilda.jpg`     | Signature bakes, card 2 | ✅ in place |
| `milk-cake.jpg`   | Signature bakes, card 3 | ✅ in place |

The three in place are 941×1672 (9:16). Cards crop to 4:5 from the centre, which
keeps the cake and loses the outer edges of the styling — shoot with headroom.

## Adding more products

1. Add the entry to `signature` (or `menu`) in `src/data/site.js`.
2. Set its `image` to `/images/<your-file>.jpg`.
3. Save the photo here under that name.

## Getting the photos off Instagram

The images on instagram.com/the_cakery.in are served from signed CDN URLs that
expire, so they cannot be linked directly. Export the originals from the phone
or design files they were posted from — those will be higher resolution than
anything downloadable from the web page anyway.

## Tips

- Shoot or crop to **4:5 portrait** for the signature cards.
- Keep files under ~300 KB — export as JPEG quality 80, or use `.webp`.
- Dark, moody backgrounds sit best against the forest-green palette.
