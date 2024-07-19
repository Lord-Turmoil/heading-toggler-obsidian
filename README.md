# Heading Toggler for Obsidian

> Copyright &copy; Tony's Studio 2024

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
3. Place them in the plugin folder in the Obsidian vault, e.g. `.obsidian/plugins/heading-toggler-obsidian`. You may need to create a new directory.
4. Go to "Community plugins" > "Installed plugins" to enable it.

## Contributing

Improvement of this plugin is welcomed. 😋

### Project Setup

Clone the repository: <https://github.com/Lord-Turmoil/heading-toggler-obsidian>. If you don't want to develop it inside the Obsidian vault, you can create a link to the repository.

For Windows users, you can use `mklink`.

```cmd
mklink /D heading-toggler-obsidian path\to\your\repository
```

For Linux users, you can use `ln`.

```bash
ln -s heading-toggler-obsidian path/to/your/repository
```

### Development

This plugin is quite simple, all logics are in `main.ts`.

- `npm run dev`: build the plugin for development.
- `npm run build`: build the plugin for production.
- `npm run version`: update version.