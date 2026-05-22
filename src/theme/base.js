// ─── Base Theme ───────────────────────────────────────────────────────────────
// Default / off-season skin. Duplicate this file to create a seasonal skin,
// then change the one import in src/theme/index.js.

// ── Colors ────────────────────────────────────────────────────────────────────
// Values are raw RGB channels so components can use rgba(var(--x), alpha).
export const vars = {
  '--bg-main':  '21 21 21',        // zinc-950
  '--bg-card':  '24 24 27',        // zinc-900

  '--text-main':  '244 244 245',   // zinc-100
  '--text-muted': '161 161 170',   // zinc-400

  '--accent': '16 185 129',        // emerald-500

  '--topo-hero':       '116 238 21',
  '--topo-tech':       '255 231 0',
  '--topo-projects':   '77 238 234',
  '--topo-experience': '240 0 255',
  '--topo-color':      '16 185 129',
};

// ── Graphics ──────────────────────────────────────────────────────────────────
// Paths are relative to the public/ folder via BASE_URL.
// Set to null to use CSS-only fallbacks (color bar, dot bullet, no tile).
export const icons = {
  sectionAccent: null,  // icon beside section headings (null = color bar)
  bullet:        null,  // list bullet in Experience (null = dot)
  bgTile:        null,  // repeating page background tile (null = none)
};

// Scattered background motifs rendered across the page.
// Each: { src, top, left, right, width (px), rotate (deg), opacity }
export const motifs = [];
