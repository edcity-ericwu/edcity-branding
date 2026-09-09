# EdCity — branding & design direction

Working studies for the EdCity visual identity and design system.

The direction combines three propositions into one system with a layered job split:

- **Calm Momentum** — structure and behaviour (the organised backbone)
- **Human Craft** — tone and texture (type, photography, voice — not palette)
- **Curious Intelligence** — the highlight moment (a signal + light where an opportunity opens)

## studies/

| File | What it is |
| --- | --- |
| `palette-study.html` | **Option A — "Slate, Earth & First Light."** Warm take: slate-blue structure, greyed earth fabric, burnt-orange spark. Includes the Spark & Light gradient rules. |
| `palette-study-cool.html` | **Option B — "Clear Field, Bright Signal."** Cooler take after Sana Labs: bright-blue backbone on near-white, cool neutrals, a coral signal, light gradients mixed from the scale. |
| `parent-update-three-ways.html` | Structural comparison of one product moment (a parent progress update) built three ways, to test whether the directions are distinguishable beyond a palette swap. |
| `opening-screen.html` | Animated opening screen — a grainy blue-to-coral gradient mesh (CSS radial blobs) that rises like a sunrise on load, carrying the wordmark and tagline. Built on the Option B scale. |
| `opening-screen-v2.html` | The same idea with a WebGL fragment shader — domain-warped fractal noise across the palette, in-shader film grain, pointer parallax, a `progress` uniform driving the sunrise reveal. CSS-gradient + reduced-motion fallbacks. |
| `landing.html` | Landing-page study — a Sana-style structure (centred hero, partner strip, two product sections, testimonial, updates, CTA) in the Option B palette, prefaced by the dawn opening screen. |

`assets/edcity-logo-white.svg` — the EdCity wordmark + mark, white fill. Recolour via CSS `fill` when placing on light grounds.

Each file is a self-contained HTML page. Open directly in a browser.

A recoloured build of an existing product prototype lives in the separate
`EdCity_initiatives` repo at `prototype_ai_tools/Study_LLM/chat-brand-slate.html`
(it needs that project's shared assets, so it can't move here).
