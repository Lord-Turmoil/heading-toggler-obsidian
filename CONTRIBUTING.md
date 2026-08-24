## Contributing

Contributing to this project is welcome! 😋

### Project Setup

Clone the repository: [heading-toggler-obsidian](https://github.com/Lord-Turmoil/heading-toggler-obsidian). If you don't want to develop it inside the Obsidian vault, you can create a link to the repository. 

> Since the repository name (heading-toggler-obsidian) is different from the plugin folder name (heading-toggler), you need to use a different name when creating the link. Or you can do the rename when cloning the repository.

For Windows users, you can use `mklink`.

```cmd
mklink /D heading-toggler-obsidian path\to\your\repository\.obsidian\plugins\heading-toggler
```

For Linux users, you can use `ln`.

```bash
ln -s heading-toggler-obsidian path/to/your/repository/.obsidian/plugins/heading-toggler
```

### Development

This plugin is quite simple, all logics are in `main.ts`.

- `npm run dev`: build the plugin for development.
- `npm run build`: build the plugin for production.
- `npm run version`: update version.
- `npm run lint`: run the linter.
