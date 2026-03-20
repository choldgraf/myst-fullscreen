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

:::{warning} Only sort-of works in-line
Anywidget emits a block-level output so the button is on a new line. As a result, this repo uses a hack where a role emits a "span" with a special class. A transform finds the items with that class and uses an anywidget node at the end of the page to attach a mouse click event to it. That's not recommended practice because we're changing things outside of the widget's "shadow DOM", but hey, it works more or less...

Here's an issue to track making it a role or in-line interface as well:

https://github.com/jupyter-book/mystmd/issues/2779
:::