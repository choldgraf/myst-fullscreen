---
title: myst-fullscreen
---

# Fullscreen Button Plugin

A MyST plugin that adds a `{fullscreen}` role to toggle browser fullscreen mode.

:::::{myst:demo}
Click here to go fullscreen: {fullscreen}`click`
:::::

You can also see this in the primary sidebar to the left (at the bottom), it's added in `myst.yml`, e.g.:

```{literalinclude} ./myst.yml
```

:::{warning} Doesn't work in-line
Note that this is a role, but what's emitted is a block-level output so the button is on a new line. That's because right now anywidget is a block-only interface. Here's an issue to track making it a role or in-line interface as well:

https://github.com/jupyter-book/mystmd/issues/2779
:::