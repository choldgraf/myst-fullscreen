// Fullscreen Button Plugin for MyST
// Uses the fancydates pattern:
//   1. {fullscreen} role emits an inline span with the icon as a background image
//   2. Transform detects those spans and injects a hidden anywidget
//   3. Widget JS finds the spans and wires up click → fullscreen toggle

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const PLUGIN_DIR = path.dirname(fileURLToPath(import.meta.url));
const SVG_PATH = path.join(PLUGIN_DIR, 'fullscreen.svg');

const svg = readFileSync(SVG_PATH, 'utf8');
const iconDataUri = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;

const fullscreenRole = {
  name: 'fullscreen',
  doc: 'Inline fullscreen toggle button.',
  body: { type: String, required: false },
  run() {
    return [
      {
        type: 'span',
        class: 'myst-fullscreen',
        style: {
          display: 'inline-block',
          verticalAlign: 'text-top',
          width: '1.2em',
          height: '1.2em',
          backgroundImage: `url("${iconDataUri}")`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          cursor: 'pointer',
          opacity: '0.6',
        },
        children: [],
      },
    ];
  },
};

const injectWidgetTransform = {
  name: 'fullscreen-inject-widget',
  doc: 'Injects a hidden anywidget that wires up fullscreen click handlers on .myst-fullscreen spans.',
  stage: 'document',
  plugin: (_, utils) => (tree, file) => {
    const hasButtons = utils.selectAll('span[class~="myst-fullscreen"]', tree).length > 0;
    if (!hasButtons) return;

    const sourceDir = file?.path ? path.dirname(file.path) : PLUGIN_DIR;
    const relPath = path.relative(sourceDir, path.join(PLUGIN_DIR, 'fullscreen-widget.mjs'));

    tree.children.push({
      type: 'anywidget',
      esm: relPath,
      model: {},
      id: crypto.randomUUID(),
    });
  },
};

const plugin = {
  name: 'Fullscreen Button',
  roles: [fullscreenRole],
  transforms: [injectWidgetTransform],
};

export default plugin;
