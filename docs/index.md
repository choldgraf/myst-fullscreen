---
title: myst-fullscreen
---

# Fullscreen Button Plugin

Try it out: {fullscreen}`click`

A MyST plugin that adds a `{fullscreen}` role that renders an inline button to toggle browser fullscreen mode using the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).

## Usage

Add the plugin to your `myst.yml`:

```yaml
project:
  plugins:
    - @jupyter-book/myst-plugin-fullscreen
```

Then use the role inline with text:

```markdown
Click here to go fullscreen: {fullscreen}`click`
```

### In the sidebar

To add the button to the sidebar footer, use the `primary_sidebar_footer` part:

```yaml
project:
  parts:
    primary_sidebar_footer: |
      Click here! 👉 {fullscreen}`click`
```
