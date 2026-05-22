// ─── Base Theme ───────────────────────────────────────────────────────────────
// The default / off-season skin. No decorative graphics — design is CSS-only.
// Colors are controlled entirely by the CSS variables in src/index.css.
//
// To create a seasonal skin:
//   1. Duplicate this file (e.g. halloween.js)
//   2. Drop your SVGs in public/themes/halloween/
//   3. Fill in the icons paths and motifs array below
//   4. Change the import in src/theme/index.js

// Paths to decorative graphics (set to null to use CSS-only fallbacks)
export const icons = {
  sectionAccent: null,  // icon beside section headings (null = color bar)
  bullet:        null,  // list bullet in Experience (null = dot)
  bgTile:        null,  // repeating page background tile (null = none)
};

// Scattered background motifs rendered across the page
// Each: { src, top, left, right, width (px), rotate (deg), opacity }
export const motifs = [];
