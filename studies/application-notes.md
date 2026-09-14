# Application board — direction notes

These notes govern the HTML studies in this folder. This is the **application / inspiration board**: how the strategy shows up in a real product surface. It is separate from the strategic moodboard.

## The through-line

The three studies now share one product story and one information architecture. That was deliberate for a fair comparison — but it has gone too far. Right now they read as **one site with palette swaps**. They should read as **three manifestations of the same strategy**, each with its own visual language, structural devices, and motion. The content stays constant; everything expressive diverges.

Where a study needs something that cannot be produced confidently here (real photography, a full illustration system), it carries a **labelled placeholder** rather than a stand-in that pretends to be finished.

Palettes are not fixed. Expect them to shift as the visual languages pull apart.

**Palette revisions (deeper pass):**
- **Slate, Earth & First Light (2026-09-14, sunrise pass):** the brick-red/burnt-orange spark colours were too close to raw clay and too close a match to Option C's territory. Re-derived against the moodboard's sunrise-over-mountains photo: sparks moved to apricot glow (`#E8935A`) and dusty coral (`#C97462`); paper opened up to a lighter `#F5F0E7`; added a small, function-only "Clear sky" blue (`#2482BE`) reserved for links/focus/active states. On further feedback the structural blue itself (`Slate Navy` / `Deep Slate Navy`) was re-tuned brighter and clearer — the original pass had greyed it down until it read gloomy; now `#4C7391` / `#2E4C63`, legible as blue rather than stone. The opening intro's WebGL gradient (in `unified.html`'s `#intro` and the standalone `opening-screen-v2.html`) was rebuilt off the same sunrise photo's actual colour progression (slate-blue → misted rose → apricot-gold → pale sun-disc cream), replacing the old cold-blue/coral ramp that had no relation to the moodboard.
- **Clear Field, Bright Signal:** blue was covering every surface. Added **Stone** (`#5C6570`, grounded grey from the moodboard's architecture/sea photography) to carry structure and navigation, and **Teal** (`#1F7A72`, the moodboard's ocean horizon) for wayfinding/orientation marks. Bright blue is now held to decisions and action only — buttons, links, focus.
- **Bright Field, Two Points** (Option C, unaffected by the A/B swap below): was a blue backbone with accent points — read as generic bright SaaS. Reframed as a **refraction field**: blue demoted to one plane among several (cyan, lavender, peach, pink), each standing in for an angle of light through glass; Lavender promoted from a gradient-only bridge tone to a full field colour. Added an explicit rule: colour is never the only signal — every pink/green mark carries a label or icon too.
- **Slate, Earth & First Light:** held as-is; already the best-aligned. The "sober, high-contrast mode for dense data" from the feedback is expressed in `studio-study.html`'s comparison table rather than a palette change.

**Open (2026-09-14):** user wants the media/photo placeholders across Option A and B (`unified.html`, `studio-study.html`) recoloured to use each option's actual moodboard/palette colours (currently generic dashed-border neutral placeholders) so the overall tone reads even in the placeholder state, rather than only in text/UI chrome. Not started.

**Open (2026-09-14):** user captured sanalabs.com/products/sana-learn as a reference for future Option A layout work — specifically its full-width edge-to-edge carousel (client logo strip, cards run to both viewport edges, no side gutter) and its carousel control (a pill-shaped bar combining dot indicators + an inline progress track + a pause/play button, all in one component). Queued as a layout revision for `unified.html`, not started.

**A/B palette swap (2026-09-11):** the client's revised moodboard showed Calm Momentum carrying a warm, earthy swatch (brick red / burnt orange / slate-navy / tan / cream) rather than bright blue — closer to what this repo had called "Slate, Earth & First Light." So the two palettes swapped concepts: **Calm Momentum (`unified.html`) now carries Slate, Earth & First Light**; **Human Craft (`studio-study.html`) now carries Clear Field, Bright Signal**. Colour, corner-radius, and motion timing moved together as one package. Layout, copy, and each study's own signature device (guided thresholds for A, supportive threads for B) did not change — only which palette expresses them. `unified.html`'s guided-threshold dividers were separately removed per feedback (felt decorative); its six capability cards now carry line icons instead.

## Concept ↔ study ↔ signature device

**Option letters now match the moodboard's own A/B/C exactly** — no separate numbering to remember:

| Option | Concept | Study file | Palette | Signature device | THIS IS NOT |
| --- | --- | --- | --- | --- | --- |
| A | Calm Momentum | `unified.html` (default palette) | Slate, Earth & First Light | **Guided thresholds** (device retired from the UI per feedback — see below) — calm, structured progression through the six numbered capability cards and catalogue index; orientation cues in Stone/Clay earth tones. Disciplined type, information-led grid, restrained motion, giftee-group.com-style airiness. | bright "innovation" gradients, neon data networks, urgency-led dashboards, bureaucratic, rigid, performative |
| B | Human Craft | `studio-study.html` | Clear Field, Bright Signal | **Supportive threads** — one governed line/thread that connects people, information, and next steps without taking control. Line-based illustration and motion; editorial photography. | decorative line texture, childish, sentimental, messy, over-familiar |
| C | Curious Intelligence | `home-study.html` | Bright Field, Two Points | **Refracted possibilities** — an optical system of transparency, overlap, and refraction; complexity becomes clearer viewed from more than one angle. Colour is never the only carrier of meaning; motion optional, purposeful, low-stimulation. | neon gradients, cosmic data fields, black-box "magic", opaque, automated, gimmicky |

Imagery cues from the WIP moodboards (inspiration only — do not lift):
- **Calm Momentum:** architectural thresholds and vaulted naves (a doorway of light), a calm sea horizon, disciplined Chinese editorial poster typography, warm real collaboration.
- **Human Craft:** a single blue ribbon winding through a portrait, a soft domed opening to the sky, an editorial faculty portrait, hands-on collaboration.
- **Curious Intelligence:** dichroic glass casting refractions, a fluted translucent partition with light passing through, a modernist pavilion of large openings, marbled-ink illustration.

---

## Option B — Human Craft (`studio-study.html`)

**Board comment:** A respectful, considered platform where AI supports professional judgement. Editorial warmth and visible care make complex education work feel manageable — not impersonal.

Best current alignment of visual system and concept. "Teacher retains final judgement," verified resources, and next-step guidance *substantiate* respectful, human-centred support rather than claiming it. Chinese-first copy and contextual teacher language root it in the actual Hong Kong setting.

**Keep**
- Paper-like warmth, editorial pacing, calm considered tone.
- Human agency made explicit — 採用 / 調整 / 略過.
- Credible product framing: AI produces a draft or recommendation; teachers decide.

**Improve**
- Make "craft" **operational**: a subtle thread / annotation / marked-up-document system running through illustrations, diagrams, dividers, and motion — not texture pasted onto UI.
- Warmth must not soften functional hierarchy. Tables, dashboards, statuses, and dense school-admin tasks need a **high-contrast, sober mode**.
- Photography used selectively for real moments of teaching, coaching, collaboration. Avoid an editorial campaign with product modules bolted on. *(placeholder for now)*

---

## Option C — Curious Intelligence (`home-study.html`)

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

**Open (2026-09-14):** user compared `home-study.html` against a live amita-oshiete.jp screenshot ("おしえて!アミタさん") and flagged that the current build doesn't capture the reference's actual layout energy — a large folded-paper/origami-red hero panel with concentric arcs, a **faceted low-poly polygon tile grid** for the trending-keywords section (not plain rounded pills), an asymmetric editorial card grid (mixed card sizes, not a uniform grid), and a saturated navy trend band. Current `home-study.html` reads calmer/flatter than this — it captures the container-panel/folder-tab language but not the faceted-polygon texture or the size-varied card rhythm that makes the reference feel "vibrate and energetic." Queued as a layout revision, not started.

---

## Option A — Calm Momentum (`unified.html`, default palette)

**Board comment:** A calm, navigable platform that turns a complex education ecosystem into clear, trustworthy next actions — without pressure or AI spectacle.

Strongest candidate for the **master direction**. The landing experience is concise, organised, institutionally credible, and keeps the core promise — "the right support, at the right moment" — clear. Sections form a steady progression: platform proposition → AI support → ecosystem → proof → action.

**Keep**
- The strong sequence and the repeated "next step" proposition.
- Direct presentation of the six capabilities — the ecosystem stays legible without overselling AI.
- Measured balance of institutional credibility, human oversight, and action-oriented language.

**Improve**
- The "click anywhere" intro can feel performative or opaque. It must be **skippable, brief, keyboard-accessible, and never block** a task-oriented visitor.
- Embed the **guided-thresholds** concept visibly: nested frames, pathways, sectional transitions, progress cues that orient people rather than decorate pages.
- More warmth at reassurance points — teacher stories, real classroom context, plain-language explanations of governance — so "calm" does not become distant or austere.
- Don't let the blue-led system dominate every surface. Reserve high-intensity colour for **focus, decisions, and meaningful forward movement**.
