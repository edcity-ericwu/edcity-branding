# EdCity — branding & design direction

Working studies for the EdCity visual identity and design system. Every page is a self-contained HTML file: open it directly in a browser, or start at `studies/index.html`.

The direction combines three propositions, each explored as its own option:

- **A · Calm Momentum** — structure and behaviour (the organised backbone)
- **B · Human Craft** — tone and texture (type, photography, voice)
- **C · Curious Intelligence** — possibility (refraction, pixel grids, fuzz turning into clear ideas)

Option letters match the client moodboard exactly and mean the same thing everywhere in this repo.

## The options

| Option | Concept | Palette page | Layout page | Main references |
| --- | --- | --- | --- | --- |
| A | Calm Momentum | `palette_optionA.html` | `layout_optionA.html` | sanalabs.com, giftee-group.com |
| B | Human Craft | `palette_optionB.html` | `layout_optionB.html` | quarterre.com, pellmell.fr |
| C | Curious Intelligence | `palette_optionC.html` | `layout_optionC.html` | pellizcoceramica.com, runrobrun.com |

## studies/

| File | What it is |
| --- | --- |
| `index.html` | Start page linking every study. |
| `present.html` | Compare board: a 3×3 grid (moodboard → palette → layout, for each option) with 2D scroll-snap. Moodboard cells take a pasted Figma prototype link. |
| `palette_optionA.html` | **Slate, Earth & First Light.** Built from the moodboard's sunrise photo: structural slate blue, warm tan and rose-beige, apricot and dusty-coral sparks, a clear-sky blue for links, pine green for progress. Includes the Spark & Light gradient rules. |
| `palette_optionB.html` | **Clear Field, Bright Signal.** Bright-blue backbone on near-white, held to decisions only; stone for structure, teal for wayfinding, one coral signal. |
| `palette_optionC.html` | **Bright Field, Two Points.** A refraction field: blue as one plane among cyan, lavender, peach and pink, with two small signal points (pink = opportunity, green = done). |
| `layout_optionA.html` | Sana-style structure with a calm, spacious type scale. WebGL dawn opening, six numbered capability cards, resource-catalogue index, comparison table. A bottom-right A/B/C switch swaps only colour, corner radius, body type and load-in motion, so the same page can be viewed in each palette. |
| `layout_optionB.html` | Editorial layout: blue-to-teal gradient side rail, rounded Aspekta / Chiron GoRound headlines, LXGW WenKai serif body, a supportive thread through the product mock. Opens with a never-ending network of straight gradient bands that form nodes where they cross. Headlines and media reveal on scroll (pellmell.fr). |
| `layout_optionC.html` | Invisible 12-column grid (Pellizco discipline): no cards, hairlines and column position group content, product mocks as flat spec rows, colour only inside grid cells. Scroll-driven opening (fuzz → pixelate → reveal "MAKE SPACE FOR POSSIBILITY.") and Run Rob Run-style section transitions. |
| `layout_optionC_v1.html` | Earlier Option C layout in amita-oshiete.jp container language (rounded panels, folder tabs, blueprint overlays). Kept for comparison. |
| `application-notes.md` | Direction notes, palette revisions and per-option feedback behind the HTML studies. Older entries use the pre-rename file names. |
| `brand-strategy.md` | The client's Brand Personality / Attributes / Visual Anchors strategy, cross-referenced against which study answers which point and which gaps remain. |
| `imagery-notes.md` | Moodboard links per direction and the no-lifting-reference-images rule. |
| `assets/` | Aspekta variable font and its licence (used by all layouts). |

## Notes

- Content on every page is illustrative placeholder copy and imagery.
- The Figma links on the compare board are saved in the browser's local storage, so they need re-pasting on a new browser.
- A recoloured build of an existing product prototype lives in the separate `EdCity_initiatives` repo at `prototype_ai_tools/Study_LLM/chat-brand-slate.html` (it depends on that project's shared assets).
