/* The compare board for the three EdCity brand directions.
 *
 * The page itself is the compare-board tool (github.com/ericwkw/compare-board);
 * everything it shows is here. Columns are the three directions, rows are the
 * stages you compare them across.
 *
 * A row is shown by being in `rows` and having its cells below. To hold one back
 * for a showing, comment out both — nothing else needs to change.
 *
 * Links written here travel with the page, so anyone this board is sent to sees
 * the boards. A link pasted in the browser wins for that browser only.
 *
 * The Figma files themselves must be shared as "anyone with the link can view",
 * or the embed is a sign-in wall for everyone but their owner.
 */
window.BOARD = {
  title: 'EdCity \u2014 Compare',
  storageKey: 'edcity-figma-',
  hint: 'Scroll in any direction, or use the arrow keys',

  brand: {
    label: 'EdCity \u00b7 Compare',
    href: 'index.html',
    logo: '<svg viewBox="0 0 179 54" fill="currentColor" aria-hidden="true"><path d="M27.1927 1.81771C27.7177 3.67516 27.5415 6.76482 26.5247 7.04371C25.5097 7.32078 23.8377 4.87274 23.2357 3.04264C22.6135 1.14327 23.5367 0.386805 24.5553 0.111561C25.5721 -0.165506 26.6678 -0.0397325 27.1909 1.81771"/><path d="M12.5574 6.18152C13.8054 7.66165 14.925 10.5453 14.1156 11.2161C13.3007 11.8887 10.7661 10.3412 9.46112 8.91574C8.10663 7.44109 8.64072 6.37474 9.44644 5.70759C10.2595 5.04044 11.3075 4.70869 12.5592 6.18152"/><path d="M3.19317 18.9067C4.99181 19.6449 7.32088 21.6919 6.91343 22.658C6.50231 23.6241 3.53454 23.4127 1.7102 22.7528C-0.169204 22.0638 -0.196734 20.8717 0.21255 19.9074C0.623669 18.9395 1.40186 18.1703 3.19317 18.9067Z"/><path d="M43.6562 23.7716C43.6562 27.7855 40.114 31.0428 35.7403 31.0428C31.3667 31.0428 27.8245 27.7873 27.8245 23.7716C27.8245 19.756 31.3704 16.5004 35.7403 16.5004C40.1103 16.5004 43.6562 19.7578 43.6562 23.7716Z"/><path d="M19.9485 30.6364C19.9485 30.6364 19.754 30.2445 20.0843 30.0932C20.3798 29.9601 20.6019 30.3447 20.6019 30.3447C20.6019 30.3447 26.141 39.7559 40.7963 36.3017C40.7963 36.3017 52.7903 33.2193 53.128 20.7677C53.128 20.7677 53.128 20.3247 53.4235 20.2937C53.4235 20.2937 53.7961 20.1662 53.9191 20.7185C54.1063 21.5606 56.1454 36.8048 42.0333 40.5835C42.0333 40.5835 25.2729 44.5736 19.9503 30.6346"/><path d="M56.011 33.3177C55.5778 33.2429 55.4787 33.5619 55.2365 34.3403C52.7789 42.1747 44.9126 47.9074 35.5908 47.9074C24.3034 47.9074 15.1541 39.5006 15.1541 29.138C15.1541 20.62 21.5981 13.8318 29.848 11.4567C35.1008 10.1935 38.8082 10.9755 39.9314 11.1669C40.5518 11.2781 40.7445 11.2434 40.7445 11.2434C41.0602 11.1814 41.0932 10.8716 41.0492 10.7403C40.9335 10.3794 40.4123 10.2099 40.4123 10.2099C37.4298 9.1162 34.0638 8.95579 32.3936 8.95215H32.3533C31.7219 8.95215 31.3346 8.97584 31.3346 8.97584V8.98496C31.1694 8.9886 31.0043 8.98496 30.8464 8.99954C18.1623 9.73049 8.07886 19.4734 8.07886 31.3016C8.07886 43.1299 18.9368 53.58 32.3331 53.58C44.6318 53.58 54.9171 45.7985 56.3762 34.2856C56.4441 33.7661 56.2881 33.3669 56.0128 33.3195"/></svg>',
  },

  theme: {
    paper: '#0E1116', card: '#171B22',
    ink: '#F2F4F8', 'ink-2': '#A7AFBD', 'ink-3': '#6E7686', line: '#262C36',
    sans: '"Noto Sans TC", "Archivo", system-ui, -apple-system, "Segoe UI", sans-serif',
    mono: '"Archivo", system-ui, -apple-system, "Segoe UI", sans-serif',
  },

  pages: [
    { label: 'Index', href: 'index.html' },
    { label: 'Foundation', href: 'foundation.html' },
    { label: 'Compare', href: 'present.html', here: true },
  ],

  columns: [
    { id: 'a', label: 'Option A \u00b7 Calm Momentum', short: 'Option A',          colour: '#C97462' },
    { id: 'b', label: 'Option B \u00b7 Attentive Orientation', short: 'Option B',  colour: '#2450E6' },
    { id: 'c', label: 'Option C \u00b7 Expansive Intelligence', short: 'Option C', colour: '#F35BEC' },
  ],

  rows: [
    { id: 'moodboard',  label: 'Moodboard' },
    { id: 'references', label: 'References' },
    { id: 'palette',    label: 'Palette' },
    { id: 'layout',     label: 'Layout' },
  ],

  cells: {
    'moodboard/a': { figma: ['https://www.figma.com/proto/5uZFLIKvIOYNHRcvEA7WtC/EdCity_Branding-Moodboards?node-id=106-2656&viewport=-96%2C16%2C0.17&t=yS2dxmAifPv1iWro-1&scaling=scale-down-width&content-scaling=fixed&page-id=106%3A1966'] },
    'moodboard/b': { figma: ['https://www.figma.com/proto/5uZFLIKvIOYNHRcvEA7WtC/EdCity_Branding-Moodboards?node-id=112-2858&viewport=-96%2C16%2C0.17&t=yS2dxmAifPv1iWro-1&scaling=scale-down-width&content-scaling=fixed&page-id=106%3A1966'] },
    'moodboard/c': { figma: ['https://www.figma.com/proto/5uZFLIKvIOYNHRcvEA7WtC/EdCity_Branding-Moodboards?node-id=112-2908&viewport=-96%2C16%2C0.17&t=yS2dxmAifPv1iWro-1&scaling=scale-down-width&content-scaling=fixed&page-id=106%3A1966'] },

    'references/a': { figma: ['https://www.figma.com/proto/5uZFLIKvIOYNHRcvEA7WtC/EdCity_Branding-Moodboards?node-id=718-611&viewport=-96%2C16%2C0.17&t=yS2dxmAifPv1iWro-1&scaling=scale-down-width&content-scaling=fixed&page-id=106%3A1966'] },
    /* B has two reference boards, so this cell gets tabs */
    'references/b': { figma: ['https://www.figma.com/proto/5uZFLIKvIOYNHRcvEA7WtC/EdCity_Branding-Moodboards?node-id=1220-998&viewport=-96%2C16%2C0.17&t=yS2dxmAifPv1iWro-1&scaling=scale-down-width&content-scaling=fixed&page-id=106%3A1966',
                              'https://www.figma.com/proto/5uZFLIKvIOYNHRcvEA7WtC/EdCity_Branding-Moodboards?node-id=1220-999&viewport=-96%2C16%2C0.17&t=yS2dxmAifPv1iWro-1&scaling=scale-down-width&content-scaling=fixed&page-id=106%3A1966'] },
    'references/c': { figma: ['https://www.figma.com/proto/5uZFLIKvIOYNHRcvEA7WtC/EdCity_Branding-Moodboards?node-id=1131-808&viewport=-96%2C16%2C0.17&t=yS2dxmAifPv1iWro-1&scaling=scale-down-width&content-scaling=fixed&page-id=106%3A1966'] },

    'palette/a': { src: 'palette_optionA.html', badge: 'palette_optionA.html' },
    'palette/b': { src: 'palette_optionB.html', badge: 'palette_optionB.html' },
    'palette/c': { src: 'palette_optionC.html', badge: 'palette_optionC.html' },
    'layout/a':  { src: 'layout_optionA.html',  badge: 'layout_optionA.html'  },
    'layout/b':  { src: 'layout_optionB.html',  badge: 'layout_optionB.html'  },
    'layout/c':  { src: 'layout_optionC.html',  badge: 'layout_optionC.html'  },
  },
};
