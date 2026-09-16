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
| `video` | How plain video files play: `{ autoplay, loop, muted, controls }`. |
| `frames` | Starting frames: `{ id, title, url }`, plus optional `kind`, `note`, `poster`, and per-frame `autoplay` / `loop` / `muted` / `controls`. `url: ''` leaves an empty frame with a paste box. |

### On the board

- Per frame: **Open in new tab**, **Replace link**, **Rename**, **Remove**.
- **+ Add frame** appends an empty frame. **Reset** restores the starting set; removing every frame offers the same restore.
- One frame per screen with scroll-snap, a frame list along the top, and ↑ / ↓ or PageUp / PageDown.
- Links, titles, and added or removed frames are saved per browser, so another browser starts from `CONFIG` again. Once a board has been edited, the saved list wins — that is what keeps a removed starting frame removed.
### What a frame can hold

| Put in `url` | What you get |
| --- | --- |
| A Figma link | Wrapped in Figma's embed host automatically. |
| A video file — `.mp4`, `.webm`, `.mov`, `.m4v`, `.ogv`, local or remote | Plays in place, muted, looping, with controls. Only the frame you are on plays; scrolling away pauses it. |
| An image — `.png`, `.jpg`, `.gif`, `.webp`, `.avif`, `.svg` | Shown full-frame. |
| Any other URL | Embedded as a page. Sites that refuse to be framed show blank, so use their embed or share URL. |

Set `kind: 'video' | 'image' | 'page'` on a frame to force it — useful for a media URL without a file extension. `note: 'where it's from'` adds a caption in the corner. `poster: '…'` sets a video's still.

Local clips sit beside the file, e.g. `{ url:'clips/opening.mp4', note:'Opening — 0:04' }`. Browsers block sound on autoplay, so clips start muted; the controls unmute.

`studies/foundation.html` in this repo is this board with EdCity styling and the brand-foundation frames.
