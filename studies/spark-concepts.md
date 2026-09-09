# Finding the spark — concept notes

Reference concepts collected 2026-09-09. **Not yet built.**

The through-line across all four: *warm light emerging from within or behind a
cool, structured field.* The spark is illumination breaking through — a light
source the structure is lit by — not a flat accent colour laid on top.

---

## The four references

### 1. Glowing orb cluster
Translucent cobalt spheres packed edge to edge; a warm orange glow pushes through
from behind the centre and lights the nearest spheres from within. Deep navy in
the gaps between.
- Spark = a hidden light source.
- Feels: dense, calm, luminous.

### 2. Grainy splash ribbons
Large sculptural fluid ribbons — cobalt, violet, coral, teal — over near-black,
heavy film grain, a thin edge-label frame along the bottom.
- Confirms the grit + edge-frame direction; pushes the forms more liquid and
  dimensional than the current shader.
- Feels: bold, editorial, physical.

### 3. Pastel cloud stacks
Soft stacked cloud forms, periwinkle sky, a warm yellow-pink-orange glow low in
the frame.
- The dawn read at its gentlest — clouds parting to first light.
- Feels: soft, optimistic, human. Closest to the "Human Craft" tone.

### 4. Vasarely dot-sphere
A regular grid of circles bulging into a sphere; cool blue field, warm
orange-red core radiating outward, dots shifting size and hue toward the centre.
- Structure and spark in one image: the grid is the system, the warm centre is
  the opportunity emerging from it.
- Feels: precise, intelligent, alive. Closest to "Curious Intelligence".

---

## Two directions worth building

### A. Orb cluster

A field of translucent blue spheres with warm light glowing from behind the
centre and breaking through.

**Build path (easiest first):**
1. **Canvas 2D** — 20–40 `radialGradient`-filled circles composited with
   `globalCompositeOperation = "screen"` / `"lighter"`, one large warm radial
   behind them all, `filter: blur()` for softness, tiled-noise grain on top.
   Cheap, animates fine, trivial no-WebGL fallback. Likely good enough to be the
   primary.
2. **Fragment shader (2D)** — jittered hex grid of circle centres; per pixel find
   nearest centres, fake sphere normal `n = normalize(vec3(uv - c, sqrt(r*r - d*d)))`,
   accumulate translucent colour front-to-back; a warm screen-centre glow behind
   everything, with a cheap subsurface term where spheres are thin.
3. **3D raymarch** — SDF spheres, `opSmoothUnion`, real occlusion and a
   thickness-based subsurface approximation toward the back light. Truest to the
   reference; only if 1–2 look flat.

**Spark logic:** the warm core is small and behind; it grows and brightens over
the first ~2 s (`progress` uniform), then holds with a slow breath. Pointer
parallax shifts the cluster. The same motif on a product screen = a warm glow
behind the element where an opportunity just surfaced.

### B. Vasarely grid

A regular grid of circles that bulges into a sphere; cool field, warm core, dots
shifting size and hue toward the centre.

**Build path:** fragment shader, grid maths, no geometry.
- Tile the screen: `cell = floor(p / g)`, `f = fract(p / g) - 0.5`.
- Bulge the grid with a radial lens centred on the sphere so cells near the
  centre spread and enlarge.
- Per cell draw a circle whose radius grows toward the centre; give each a faint
  sphere normal for a dimensional bead look, lit from one side.
- Colour per cell from a radial ramp: cobalt → blue → cyan → coral → amber as
  distance to the centre drops. Add per-cell noise jitter so it never reads
  mechanical.
- **Signature moment:** `progress` expands the warm core outward from the centre;
  dots flip cool → warm as the wavefront passes — the spark spreading through the
  system. Settles at a rest radius.
- Slow rotation or a breathing bulge; pointer tilts the sphere. Grain on top.
- Canvas 2D fallback: draw the same grid in JS on rAF.

This is the cheaper build and the strongest brand fit — "the system reveals an
opportunity" made literal. Reusable well beyond the opening screen: section
marker, loading state, a small favicon-scale motif.

---

## Recommendation on order

Build **B (Vasarely grid)** first: cheaper, strongest brand fit, and reusable as
a motif. **A (orb cluster)** is the richer atmosphere but needs the raymarch path
to really sing, so it is the larger job.
