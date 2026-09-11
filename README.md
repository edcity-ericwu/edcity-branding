# EdCity — branding & design direction

Working studies for the EdCity visual identity and design system.

The direction combines three propositions into one system with a layered job split:

- **Calm Momentum** — structure and behaviour (the organised backbone)
- **Human Craft** — tone and texture (type, photography, voice — not palette)
- **Curious Intelligence** — the highlight moment (a signal + light where an opportunity opens)

**The three options pair up:** each palette take has a layout study that expresses it and a load-in motion modelled on a reference site.

**Option letters match the moodboard exactly** — A, B, C mean the same thing everywhere (this README, `index.html`, `present.html`, every study's footer badge):

| Option | Concept | Palette | Layout | Reference |
| --- | --- | --- | --- | --- |
| A | Calm Momentum | `palette-study-cool.html` | `unified.html` (default palette) | sanalabs.com |
| B | Human Craft | `palette-study.html` | `studio-study.html` | quarterre.com |
| C | Curious Intelligence | `palette-study-vivid.html` | `home-study.html` | amita-oshiete.jp |

**Every layout study shares one section skeleton and one set of copy** (hero → partners → 認識 EdCity six cards → EdCity.ai + mock → quote → ecosystem + mock → comparison table → updates → CTA), each rendered fully in its reference's idiom. A comparison then isolates the direction, not the content.

**`unified.html`** carries all three on one page: a WebGL dawn opening, then a palette switch (A/B/C) that swaps only colour, corner-radius, body type and load-in motion — everything else held constant. It doubles as the Option A layout study (its default skin is the Sana structure). Section structure follows sanalabs.com/products/sana-learn.

**`present.html`** is the compare board — a 3×3 grid (moodboard → palette → study, for each option), 2D scroll-snap, moodboard cells taking a pasted Figma prototype link.

## studies/

| File | What it is |
| --- | --- |
| `palette-study-cool.html` | **Option A — Calm Momentum, "Clear Field, Bright Signal."** Bright-blue backbone on near-white, held to decisions only; Stone for structure, Teal for wayfinding, one coral signal. |
| `palette-study.html` | **Option B — Human Craft, "Slate, Earth & First Light."** Warm take: slate-blue structure, greyed earth fabric, burnt-orange spark. Includes the Spark & Light gradient rules. |
| `palette-study-vivid.html` | **Option C — Curious Intelligence, "Bright Field, Two Points."** A refraction field: blue as one plane among cyan/lavender/peach/pink, two small signal points (pink = opportunity, green = done), colour never the only signal. |
| `studio-study.html` | **Option B.** The shared skeleton in the Quarterre editorial language (warm cream, huge grotesque headline, serif body, sage side rail, rotating circular badge) — a supportive thread running through the mock, a project index, a full-bleed break photo. |
| `home-study.html` | **Option C.** The shared skeleton in the amita-oshiete.jp container language — asymmetric rounded panels, folder tabs, blueprint overlays, a refracted "multiple angles" photo grid. |
| `opening-screen.html` | Animated opening screen — a grainy blue-to-coral gradient mesh (CSS radial blobs) that rises like a sunrise on load, carrying the wordmark and tagline. Built on the Option A scale. |
| `opening-screen-v2.html` | The same idea with a WebGL fragment shader — domain-warped fractal noise across the palette, in-shader film grain, pointer parallax, a `progress` uniform driving the sunrise reveal. CSS-gradient + reduced-motion fallbacks. |
| `unified.html` | **Option A.** The three options on **one** page — a WebGL dawn opening (the `opening-screen-v2` shader), then identical structure and copy with a bottom-right switch (A/B/C) swapping only palette, corner-radius, body type and load-in motion. Doubles as the Option A layout study. |
| `present.html` | The compare board — a 3×3 grid (情緒板 Moodboard → 色彩 Palette → 研究 Study, for each option), 2D scroll-snap navigation, Figma prototype embeds. |

`imagery-notes.md` — mood-board links (Pinterest, per direction), the no-lifting-reference-images rule, and a "hero space" reference for later.

`brand-strategy.md` — the client's Brand Personality / Brand Attributes / Visual Anchors strategy (transcribed from their Figma prototype), plus a cross-reference of which existing study device already answers which strategy point, and which gaps (bridge/crossing-stages device, provenance/evidence UI, library-catalogue framing) are still open.

`spark-concepts.md` — collected visual references for "the spark" (warm light emerging from a cool structured field) and two buildable directions: an orb cluster and a Vasarely-style dot grid. Concepts only, not built.

`assets/edcity-logo-white.svg` — the EdCity wordmark + mark, white fill. Recolour via CSS `fill` when placing on light grounds.

Each file is a self-contained HTML page. Open directly in a browser.

A recoloured build of an existing product prototype lives in the separate
`EdCity_initiatives` repo at `prototype_ai_tools/Study_LLM/chat-brand-slate.html`
(it needs that project's shared assets, so it can't move here).
