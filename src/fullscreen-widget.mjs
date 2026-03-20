// Hidden anywidget that wires up all .myst-fullscreen spans as fullscreen toggles.
function render({ el }) {
  el.style.display = 'none';

  document.querySelectorAll('.myst-fullscreen').forEach((span) => {
    span.addEventListener('mouseenter', () => { span.style.opacity = '1'; });
    span.addEventListener('mouseleave', () => { span.style.opacity = '0.6'; });
    span.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
  });
}

export default { render };
