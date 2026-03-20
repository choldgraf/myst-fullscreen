// Fullscreen Button Plugin for MyST
// Provides a {fullscreen} role that renders an inline toggle button
// using the anywidget interface.

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const PLUGIN_DIR = path.dirname(fileURLToPath(import.meta.url));
const WIDGET_PATH = path.join(PLUGIN_DIR, 'fullscreen-widget.mjs');
const SVG_PATH = path.join(PLUGIN_DIR, 'fullscreen.svg');

// Read the SVG at load time and encode as a data URI
const svg = readFileSync(SVG_PATH, 'utf8');
const iconDataUri = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;

const plugin = {
  name: 'Fullscreen Button',
  roles: [
    {
      name: 'fullscreen',
      doc: 'Inline button that toggles browser fullscreen mode.',
      body: { type: String, required: false },
      run(data, vfile) {
        const sourceDir = vfile?.path ? path.dirname(vfile.path) : PLUGIN_DIR;
        const esm = path.relative(sourceDir, WIDGET_PATH);
        return [
          {
            type: 'anywidget',
            esm,
            model: { icon: iconDataUri },
          },
        ];
      },
    },
  ],
};

export default plugin;
