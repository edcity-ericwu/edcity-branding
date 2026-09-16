# Application board — direction notes

These notes govern the HTML studies in this folder. This is the **application / inspiration board**: how the strategy shows up in a real product surface. It is separate from the strategic moodboard.

## The through-line

The three studies share one product story and roughly one information architecture, so a comparison isolates the direction rather than the content. Each has since diverged into its own visual language, structural device and motion: A a stepwise path, B a network of connected paths, C a refraction grid.

**Brand constants:** blue is always present and leads; green is always present, as a highlight (A), a wayfinding colour paired with blue (B) or a vivid accent (C).

**Next (2026-09-15):** the layouts are being held where they are. Their long, condensed placeholder copy works against them, so direction will be presented as an inspiration board of video captures — reference animation plus clips from these studies — showing possibilities rather than executions.

Where a study needs something that cannot be produced confidently here (real photography, a full illustration system), it carries a **labelled placeholder** rather than a stand-in that pretends to be finished.

Palettes are not fixed. Expect them to shift as the visual languages pull apart.

**Palette revisions (deeper pass):**
- **Green made visible (2026-09-15):** A pine `#4A5E45` → spruce green `#2F8F6B` on finished lines and adopted states; B sea green moved from teal to `#12B886` and now ends every band in the line network; C signal green gains a halo, a highlighter label and a place in the adopted action and comparison bars.
- **Brand constants (2026-09-15):** blue and green must be present in every palette, whether the blue runs warm or cool. Blue leads in all three. Green's role per option: A spruce green (was pine) as the highlight for progress and done; B sea green for wayfinding and progress, paired with blue in the line network; C signal green as a vivid, full-strength accent. Palette copy now states this; C no longer describes blue as "one plane, not the backbone".
- **Slate, Sky & First Light (2026-09-15, dawn pass):** the cream and golden ground read as dusk. Grounds are now cool morning paper (`#F1F4F8`) and mist (`#DCE5EF`) with haze blue (`#92B8DE`) as sky light; ink is a blue-black (`#0F1B26`). Tan and rose beige leave the palette. Clear sky (`#2472AD`) becomes the colour of action, carried by the primary button as a short lit gradient. Apricot is held to small first-light accents. Renamed from "Slate, Earth & First Light".
- **Slate, Earth & First Light (2026-09-14, sunrise pass):** the brick-red/burnt-orange spark colours were too close to raw clay and too close a match to Option C's territory. Re-derived against the moodboard's sunrise-over-mountains photo: sparks are apricot glow (`#E8935A`) and dusty coral (`#C97462`); structural blue is `#457799` / `#2B4E65` (nudged brighter/clearer after an earlier pass read too grey/gloomy, still kept less saturated than the interactive blue below); a small, function-only "Clear sky" blue (`#2482BE`) is reserved for links/focus/active states, and now also drives the primary CTA buttons directly. Added Pine Green (`#4A5E45`, from the tree line at the photo's base) for progress/adopted-state colour (採用 button, 已審核 status dots). Paper/panel base tones were cooled from a golden cream to a neutral one (`#F0EFE9` / `#EBE7DD` / `#E3DDD0`) since the warm substrate alone was reading "orange" independent of any gradient. The opening intro's WebGL gradient and the hero/CTA mesh gradients were rebuilt/rebalanced off the same sunrise photo's actual colour progression and proportions (mostly cool blue, gold only breaking through as a small low accent — dawn, not dusk), replacing an earlier cold-blue/coral ramp and an earlier near-equal blue/gold balance that read as spreading warmth. Palette documentation (`palette_optionA.html`) now leads with OKLCH notation, hex as secondary reference.
- **Clear Field, Bright Signal (earlier pass):** blue was covering every surface. Added **Stone** (`#5C6570`, grounded grey from the moodboard's architecture/sea photography) to carry structure and navigation, and **Teal** (`#1F7A72`, the moodboard's ocean horizon) for wayfinding/orientation marks. Bright blue is now held to decisions and action only — buttons, links, focus.
- **Bright Field, Two Points (earlier pass;** Option C, unaffected by the A/B swap below): was a blue backbone with accent points — read as generic bright SaaS. Reframed as a **refraction field**: blue set among several planes (later restated as the brand anchor and largest plane) (cyan, lavender, peach, pink), each standing in for an angle of light through glass; Lavender promoted from a gradient-only bridge tone to a full field colour. Added an explicit rule: colour is never the only signal — every pink/green mark carries a label or icon too.
- **Slate, Earth & First Light (earlier pass):** held as-is at the time. The "sober, high-contrast mode for dense data" from the feedback is expressed in `layout_optionB.html`'s class-view section (全班狀況) rather than a palette change.

**Done:** media/photo placeholders across Option A and B recoloured to use each option's actual moodboard/palette colours instead of generic neutral dashed boxes.

*History:* `layout_optionA.html` once had an edge-to-edge updates carousel; it was cut along with the comparison table.

**A/B palette swap (2026-09-11):** the client's revised moodboard showed Calm Momentum carrying a warm, earthy swatch (brick red / burnt orange / slate-navy / tan / cream) rather than bright blue — closer to what this repo had called "Slate, Earth & First Light." So the two palettes swapped concepts: **Calm Momentum (`layout_optionA.html`) now carries Slate, Earth & First Light**; **Human Craft — now Connected Path (`layout_optionB.html`) — carries Clear Field, Bright Signal**. Colour, corner-radius, and motion timing moved together as one package. Layout, copy, and each study's own signature device (guided thresholds for A, supportive threads for B) did not change — only which palette expresses them. `layout_optionA.html`'s guided-threshold dividers were separately removed per feedback (felt decorative); its six capability cards now carry line icons instead.

## Concept ↔ study ↔ signature device

**Option letters now match the moodboard's own A/B/C exactly** — no separate numbering to remember:

| Option | Concept | Study file | Palette | Signature device | THIS IS NOT |
| --- | --- | --- | --- | --- | --- |
| A | Calm Momentum | `layout_optionA.html` | Slate, Sky & First Light | **Momentum** — the page advances as six numbered steps (01 認識平台 → 06 下一步), shown as a route in the hero, a left progress rail, a four-step sequence (備課 → 教學 → 評估 → 下一步) and a closing line with every stop lit. Lines run green → blue → apricot; the morning sky brightens towards the closing step. Disciplined type, left-aligned grid, restrained motion. | bright "innovation" gradients, neon data networks, urgency-led dashboards, bureaucratic, rigid, performative |
| B | Connected Path *(was Human Craft)* | `layout_optionB.html` | Clear Field, Bright Signal | **Supportive threads** — straight blue-to-green gradient bands that form ring-and-dot nodes where they cross: the intro network, the hero composition, eyebrow markers, the mock spine, and a dot cursor with a trailing line. Single typeface; editorial photography. | decorative line texture, childish, sentimental, messy, over-familiar |
| C | Curious Intelligence | `layout_optionC.html` (grid; earlier card version `layout_optionC_v1.html`) | Bright Field, Two Points | **Refracted knowledge** — an optical system of transparency, overlap, and refraction: every source can be seen from more than one angle and stays inspectable. Ties C to the foundation's Knowledge anchor, as A ties to wayfinding and B to paths and connection. Colour is never the only carrier of meaning; motion optional, purposeful, low-stimulation. | neon gradients, cosmic data fields, black-box "magic", opaque, automated, gimmicky |

Imagery cues from the WIP moodboards (inspiration only — do not lift):
- **Calm Momentum:** architectural thresholds and vaulted naves (a doorway of light), a calm sea horizon, disciplined Chinese editorial poster typography, warm real collaboration.
- **Connected Path** *(board formerly Human Craft)*: a single blue ribbon winding through a portrait, a transit-map of crossing coloured lines, a soft domed opening to the sky, an editorial faculty portrait, hands-on collaboration.
- **Curious Intelligence:** dichroic glass casting refractions, a fluted translucent partition with light passing through, a modernist pavilion of large openings, marbled-ink illustration.

---

## Where the layouts stand (2026-09-15, held)

- **A · Calm Momentum:** WebGL dawn opening that over-exposes into the hero; momentum rail and step sequence; one primary action (booking), text links elsewhere; two-column product sections with flat ruled mocks; large centred quote; full-width FAQ; closing section as the step-06 payoff with every node lit. Retoned from dusk to dawn (cool grounds, lit blue primary button); spruce green on finished steps; a soft light follows the pointer. Palette switch, comparison table, updates carousel, KPI tiles and icon-only partner boxes removed. Two faces only: Aspekta + Chiron Hei HK.
- **B · Connected Path:** cool palette by decision; blue-to-green line network; one typeface (Aspekta + Chiron GoRound TC); line network in the intro and beside the hero headline; flat ruled mocks; calm paper menu with node markers; loud quote, quiet sober class-view; partners folded into a line under the hero; dot cursor with a trailing line.
- **C · Curious Intelligence:** invisible 12-column grid; opening resolves into the hero on one grid module; refraction planes, perspective demo, comparison toggle; peach reserved for family/home moments; figures numbered [圖 01]–[圖 05].
- **Parked for all three:** mobile layouts, imagery direction, section-heading voice.

---

## Option B — Connected Path (`layout_optionB.html`)

**Rename (2026-09-15):** the board was *Human Craft*. The study kept the board's target emotion ("I can see my path and connections"), visual heart (supportive threads) and line-based consequence, but lost craft and warmth: a cool palette, one rounded typeface, straight bands and flat panels. The concept was renamed to match what it became rather than pulling the layout back to craft.

**Original board comment (Human Craft):** A respectful, considered platform where AI supports professional judgement. Editorial warmth and visible care make complex education work feel manageable — not impersonal.

Best current alignment of visual system and concept. "Teacher retains final judgement," verified resources, and next-step guidance *substantiate* respectful, human-centred support rather than claiming it. Chinese-first copy and contextual teacher language root it in the actual Hong Kong setting.

**Keep**
- Editorial pacing, calm considered tone. *(Decision 2026-09-15: the palette stays cool and clear; warmth is carried by type, pacing, voice and photography rather than paper tones.)*
- Human agency made explicit — 採用 / 調整 / 略過.
- Credible product framing: AI produces a draft or recommendation; teachers decide.

**Improve**
- ~~Make "craft" operational through an annotation / marked-up-document system.~~ *Retired 2026-09-15; the line network (intro and hero), node markers and dot-grid icons carry the line language instead. Curvy bands were later removed.*
- ~~Warmth must not soften functional hierarchy. Tables, dashboards, statuses, and dense school-admin tasks need a **high-contrast, sober mode**.~~ *Done: 全班狀況 class-view section.*
- Photography used selectively for real moments of teaching, coaching, collaboration. Avoid an editorial campaign with product modules bolted on. *(placeholder for now)*

---

## Option C — Curious Intelligence (`layout_optionC.html`; feedback below was given on `layout_optionC_v1.html`)

**Board comment:** An open field of intelligible possibilities: AI reveals relevant relationships and next steps, while people can inspect, adapt, and decide.

The clearest AI-native expression, but currently risks reading as a modern SaaS landing page rather than a distinctive education ecosystem. Content positions AI as contextual and teacher-controlled — excellent. Visually it needs **evidence of transparent intelligence**, not contemporary "tech" energy.

**Keep**
- The searchable / topic-led entry point — signals exploration and multiple routes.
- Visible suggestions with adopt / adjust / skip — makes "adaptive, not automated" believable.
- Framing of the relationships among tools, assistants, reviewed resources, and safeguards.

**Improve**
- Replace generic bright gradients and ambient "AI" effects with a **refracted-possibilities system**: translucent layers, contextual connections, inspectable sources, knowledge relationships revealed on interaction.
- Colour is a **secondary discovery layer** — never the only signal for priority, category, or status.
- "Why this recommendation?" becomes a **visible, repeatable component pattern** — not a buried trust statement.
- Add one or two visualisations of how a **learner need → approved resource → tool → next action** connect. Articulate, explainable intelligence made concrete.

**Done:** `layout_optionC_v1.html`'s hero was rebuilt against amita-oshiete.jp's actual measured DOM geometry (live `getBoundingClientRect`/`getComputedStyle`, not a screenshot guess) — panel is a pure-graphic near-square (670:702), the trend box is flush to its top-right edge, the wordmark card is enlarged to real signature scale, trending chips are plain pills (matching the reference's actual hero styling — the faceted-polygon treatment belongs to a different section further down amita's page and was corrected back out). No further amita-matching work queued unless raised again.

---

## Option A — Calm Momentum (`layout_optionA.html`)

**Board comment:** A calm, navigable platform that turns a complex education ecosystem into clear, trustworthy next actions — without pressure or AI spectacle.

Strongest candidate for the **master direction**. The landing experience is concise, organised, institutionally credible, and keeps the core promise — "the right support, at the right moment" — clear. Sections form a steady progression: platform proposition → AI support → ecosystem → proof → action.

**Keep**
- The strong sequence and the repeated "next step" proposition.
- The six capabilities stay present, now folded into the four-step sequence as captions.
- Measured balance of institutional credibility, human oversight, and action-oriented language.

**Improve**
- The "click anywhere" intro can feel performative or opaque. It must be **skippable, brief, keyboard-accessible, and never block** a task-oriented visitor. *(Skip button, Esc/Enter/scroll dismiss, and it now hands over into the hero.)*
- ~~Embed the **guided-thresholds** concept visibly.~~ *Done as momentum: numbered steps, progress rail, step sequence, closing payoff.*
- More warmth at reassurance points — teacher stories, real classroom context, plain-language explanations of governance — so "calm" does not become distant or austere.
- Don't let the blue-led system dominate every surface. Reserve high-intensity colour for **focus, decisions, and meaningful forward movement**. *(The lit blue button is the one high-intensity blue; green marks what is done.)*
