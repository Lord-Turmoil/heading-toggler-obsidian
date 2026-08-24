# Heading Toggler for Obsidian

> Copyright &copy; Tony's Studio 2024 - 2026

---

<div style="text-align:center">
<img src="https://img.shields.io/github/manifest-json/v/lord-turmoil/heading-toggler-obsidian?color=crimson&label=version&style=for-the-badge" alt="GitHub manifest version" />
<img src="https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22heading-toggler%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json&style=for-the-badge" alt="Obsidian Downloads" />
</div>


## Overview

This plugin allows you to toggle heading levels quickly. You can bind hotkeys to increase or decrease heading levels without typing those `#` characters. 😀

## Features

- **Increase heading level**: normal text to H6, H6 to H5 ... H2 to H1.
- **Decrease heading level**: H1 to H2, ... H6 to normal text.
- **Toggle heading level to H1...6**: Toggle between heading and normal text.

You can bind these commands with your favorite hotkeys in the options. 😉

## Installation

### From Community Plugins

1. Go to the "Community plugins" section in the Options dialog.
2. Browse for "Heading Toggler" and click "Install" when you find it.
3. Go back to "Installed plugins" to enable it.

### From GitHub Release

1. Go to the release page of [heading-toggler-obsidian](https://github.com/Lord-Turmoil/heading-toggler-obsidian/releases).
2. Download the plugin files (`main.js` and `manifest.json`).
3. Place them in the plugin folder in the Obsidian vault, e.g. `.obsidian/plugins/heading-toggler`. You may need to create a new directory.
4. Go to "Community plugins" > "Installed plugins" to enable it.

## Limitations

By default, Obsidian doesn't support nested headings, which means only the H1 in the following Markdown will be rendered as expected.

```markdown
# Normal H1

- ## H2 in list

> ### H3 in quotes
```

Therefore, this plugin won't apply nested headings and takes listing and quotes as normal text as below.

```markdown
# Normal H1

## - H2 in list

### > H3 in quotes
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project or build it by yourself.
