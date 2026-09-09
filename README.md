# EdCity — branding & design direction

Working studies for the EdCity visual identity and design system.

The direction combines three propositions into one system with a layered job split:

- **Calm Momentum** — structure and behaviour (the organised backbone)
- **Human Craft** — tone and texture (type, photography, voice — not palette)
- **Curious Intelligence** — the highlight moment (a signal + light where an opportunity opens)

**The three options pair up:** each palette take has a layout study that expresses it and a load-in motion modelled on a reference site.

| Option | Palette | Layout | Reference |
| --- | --- | --- | --- |
| A · Slate, Earth & First Light | `palette-study.html` | `studio-study.html` | quarterre.com |
| B · Clear Field, Bright Signal | `palette-study-cool.html` | `landing.html` | sanalabs.com |
| C · Bright Field, Two Points | `palette-study-vivid.html` | `home-study.html` | amita-oshiete.jp |

## studies/

| File | What it is |
| --- | --- |
| `palette-study.html` | **Option A — "Slate, Earth & First Light."** Warm take: slate-blue structure, greyed earth fabric, burnt-orange spark. Includes the Spark & Light gradient rules. |
| `palette-study-cool.html` | **Option B — "Clear Field, Bright Signal."** Cooler take after Sana Labs: bright-blue backbone on near-white, cool neutrals, a coral signal, light gradients mixed from the scale. |
| `palette-study-vivid.html` | **Option C — "Bright Field, Two Points."** A vivid electric palette adapted down: sky-blue backbone, pale cyan/peach/pink field, two small signal points (pink = opportunity, green = done). Higher energy, less grounded, front-of-house. |
| `spark-vasarely.html` | Cheap Canvas-2D spark exploration — a Vasarely dot grid; a warm core radiates outward through a cool blue field on load. |
| `spark-orbs.html` | Cheap Canvas-2D spark exploration — translucent blue orbs lit from behind by a warm core that grows in. |
| `studio-study.html` | Page study in the Quarterre editorial language (warm cream, huge grotesque headline, serif body, sage side rail, rotating circular badge) on the Option A earthy palette. |
| `home-study.html` | Home-page study in the amita-oshiete.jp container language — asymmetric rounded panels, folder tabs, blueprint overlays, grain — on the Option C palette. |
| `parent-update-three-ways.html` | Structural comparison of one product moment (a parent progress update) built three ways, to test whether the directions are distinguishable beyond a palette swap. |
| `opening-screen.html` | Animated opening screen — a grainy blue-to-coral gradient mesh (CSS radial blobs) that rises like a sunrise on load, carrying the wordmark and tagline. Built on the Option B scale. |
| `opening-screen-v2.html` | The same idea with a WebGL fragment shader — domain-warped fractal noise across the palette, in-shader film grain, pointer parallax, a `progress` uniform driving the sunrise reveal. CSS-gradient + reduced-motion fallbacks. |
| `landing.html` | Landing-page study — a Sana-style structure (centred hero, partner strip, two product sections, testimonial, updates, CTA) in the Option B palette, prefaced by the dawn opening screen. |

`imagery-notes.md` — mood-board links (Pinterest, per direction), the no-lifting-reference-images rule, and a "hero space" reference for later.

`spark-concepts.md` — collected visual references for "the spark" (warm light emerging from a cool structured field) and two buildable directions: an orb cluster and a Vasarely-style dot grid. Concepts only, not built.

`assets/edcity-logo-white.svg` — the EdCity wordmark + mark, white fill. Recolour via CSS `fill` when placing on light grounds.

Each file is a self-contained HTML page. Open directly in a browser.

A recoloured build of an existing product prototype lives in the separate
`EdCity_initiatives` repo at `prototype_ai_tools/Study_LLM/chat-brand-slate.html`
(it needs that project's shared assets, so it can't move here).
