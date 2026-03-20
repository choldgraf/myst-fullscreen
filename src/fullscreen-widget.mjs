// Fullscreen toggle widget for MyST anywidget
// Renders an inline icon button that toggles browser fullscreen mode.
function render({ model, el }) {
  // Make the anywidget container inline so it can sit alongside text
  const host = el.getRootNode()?.host;
  if (host) {
    host.style.display = 'inline';
    host.style.width = 'auto';
  }

  const btn = document.createElement('button');
  btn.title = 'Toggle fullscreen';
  btn.style.cssText = 'cursor:pointer;border:none;background:none;padding:2px;line-height:0;vertical-align:middle;border-radius:4px;opacity:0.6;transition:opacity 0.15s;';
  btn.addEventListener('mouseenter', () => { btn.style.opacity = '1'; });
  btn.addEventListener('mouseleave', () => { btn.style.opacity = '0.6'; });

  const img = document.createElement('img');
  img.src = model.get('icon');
  img.alt = 'Fullscreen';
  img.style.cssText = 'width:1.2em;height:1.2em;';
  btn.appendChild(img);

  btn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  el.appendChild(btn);
}

export default { render };
