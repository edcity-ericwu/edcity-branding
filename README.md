# EdCity — branding & design direction

Working studies for the EdCity visual identity and design system. Every page is a self-contained HTML file: open it directly in a browser, or start at `studies/index.html`.

The direction combines three propositions, each explored as its own option:

- **A · Calm Momentum** — structure and behaviour (a calm, stepwise path to the next action)
- **B · Attentive Orientation** — guidance you can see (visible paths, nodes, next steps), sharp and high-contrast with a little play.
- **C · Expansive Intelligence** — possibility opening up (refraction, pixel grids, fuzz turning into clear ideas)

Two brand constants run through all three: **blue** is always present and leads, and **green** is always present, as a highlight or an accent.

Option letters match the client moodboard exactly and mean the same thing everywhere in this repo.

## The options

| Option | Concept | Palette page | Layout page | Main references |
| --- | --- | --- | --- | --- |
| A | Calm Momentum | `palette_optionA.html` | `layout_optionA.html` | sanalabs.com, giftee-group.com |
| B | Attentive Orientation | `palette_optionB.html` | `layout_optionB.html` | quarterre.com, pellmell.fr |
| C | Expansive Intelligence | `palette_optionC.html` | `layout_optionC.html` | pellizcoceramica.com, runrobrun.com |

## studies/

| File | What it is |
| --- | --- |
| `index.html` | Start page linking every study. |
| `foundation.html` | Brand foundation board: the client's brand personality and brand attributes frames embedded one per screen, with slots for more. Links are pasted per frame and saved in the browser. |
| `present.html` | Compare board: a 3×3 grid (moodboard → palette → layout, for each option) with 2D scroll-snap. Moodboard cells take a pasted Figma prototype link. |
| `palette_optionA.html` | **Slate, Sky & First Light.** Built from the moodboard's sunrise photo at dawn: structural slate blue on a cool morning-paper and mist ground, a clear-sky blue for the primary button and links, apricot and dusty coral as small first-light accents, spruce green as the highlight for progress and what's done. Includes the Spark & Light gradient rules. |
| `palette_optionB.html` | **Clear Field, Bright Signal.** Bright blue held to decisions on a cool near-white field; stone for structure, sea green for wayfinding and progress, one coral signal. Blue and green travel together as the line network. |
| `palette_optionC.html` | **Bright Field, Two Points.** A refraction field: main blue as the brand anchor and largest plane, refracted through cyan, lavender, peach and pink, with two small signal points (pink = opportunity, green = done). |
| `layout_optionA.html` | Calm, left-aligned structure. A WebGL dawn opening brightens into the hero; the page then advances as six numbered steps tracked by a left progress rail, with a four-step sequence (備課 → 教學 → 評估 → 下一步) and a closing section where every step is lit. One lit blue primary action (booking), green on finished steps, flat ruled product mocks, a full-width FAQ, and a soft light that follows the pointer. |
| `layout_optionB.html` | Attentive Orientation. Sharp, high-contrast layout on a cool, clear palette with one typeface (Aspekta / Chiron GoRound TC). Opens with a never-ending network of straight blue-to-green gradient bands that form nodes where they cross; the same composition sits beside the hero headline, and node markers carry through eyebrows, the product mocks and the menu. Includes a sober 全班狀況 class view and a dot cursor with a trailing line. |
| `layout_optionC.html` | Invisible 12-column grid (Pellizco discipline): no cards, hairlines and column position group content, product mocks as flat spec rows, colour only inside grid cells. Scroll-driven opening (fuzz → pixelate → reveal "MAKE SPACE FOR POSSIBILITY.") and Run Rob Run-style section transitions. |
| `layout_optionC_v1.html` | Earlier Option C layout in amita-oshiete.jp container language (rounded panels, folder tabs, blueprint overlays). Kept for comparison. |
| `application-notes.md` | Direction notes, current state per option, palette revisions and the feedback history behind the HTML studies. Older entries use the pre-rename file and concept names. |
| `brand-strategy.md` | The client's Brand Personality / Attributes / Visual Anchors strategy, cross-referenced against which study answers which point and which gaps remain. |
| `imagery-notes.md` | Moodboard links per direction (Figma and Pinterest) and the no-lifting-reference-images rule. |
| `assets/` | Aspekta variable font and its licence (used by all layouts). |

## Next

The full-page layouts have taken the direction as far as they usefully can: the long, condensed placeholder copy drags every page down. The next deliverable is an **inspiration board built from video captures** of reference animation and of the motion studies in these layouts, to demonstrate possibilities rather than executions. The HTML studies stay as the source for those captures.

## templates/

| File | What it is |
| --- | --- |
| `frame-board.html` | The presentation board from `studies/foundation.html`, generic and driven by one CONFIG block (title, storage id, accent, cross-page links, starting frames). Copy it into another project and edit that block. See `templates/README.md`. |

## Notes

- Content on every page is illustrative placeholder copy and imagery.
- The Figma links on the compare board are saved in the browser's local storage, so they need re-pasting on a new browser.
- A recoloured build of an existing product prototype lives in the separate `EdCity_initiatives` repo at `prototype_ai_tools/Study_LLM/chat-brand-slate.html` (it depends on that project's shared assets).
