# Templates

## `frame-board.html` — presentation board

A self-contained board: one full-screen frame per embedded link, with controls for editing the board in the browser. Copy the file into a project, edit the `CONFIG` block at the top of its script, and open it — no build step, no dependencies.

### CONFIG

| Key | What it does |
| --- | --- |
| `title` | Board name, shown top left and used as the page title. |
| `home` | Where the board name links to. |
| `storageId` | Where this board's state is saved in the browser. Give every board its own id. |
| `accent` | Colour for frame dots, focus rings and the save button. |
| `stageWord` | The word after the number in each frame header, e.g. Frame, Stage, Section. |
| `nav` | Cross-page links in order: `{ href, label, current }`. An empty array hides the pill. |
| `frames` | Starting frames: `{ id, title, url }`. `url: ''` leaves an empty frame with a paste box. |

### On the board

- Per frame: **Open in new tab**, **Replace link**, **Rename**, **Remove**.
- **+ Add frame** appends an empty frame. **Reset** restores the starting set; removing every frame offers the same restore.
- One frame per screen with scroll-snap, a frame list along the top, and ↑ / ↓ or PageUp / PageDown.
- Links, titles, and added or removed frames are saved per browser, so another browser starts from `CONFIG` again. Once a board has been edited, the saved list wins — that is what keeps a removed starting frame removed.
- Figma links are wrapped in Figma's embed host automatically; any other URL is embedded as-is. Sites that refuse to be framed show blank, so use their embed or share URL.

`studies/foundation.html` in this repo is this board with EdCity styling and the brand-foundation frames.
