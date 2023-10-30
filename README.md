# Ar Fajar Setiaji's Prettier Config

This is my personal config for Prettier code formatter library.

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Farfajarsetiaji%2Fprettier-config%2Fbadge%3Fref%3Dmain&style=flat)](https://actions-badge.atrox.dev/arfajarsetiaji/prettier-config/goto?ref=main)
[![NPM Library](https://img.shields.io/npm/v/@arfajarsetiaji/prettier-config?style=flat-square)](https://www.npmjs.com/package/@arfajarsetiaji/prettier-config)

## Installation and Usage

1. Move into your project directory.

2. Install prettier, prettier-plugin-sort-imports & this prettier config library as development dependencies.

```bash
  npm install --save-dev prettier @ianvs/prettier-plugin-sort-imports @arfajarsetiaji/prettier-config
```

3. Use it in your project.

- If you don't need to override it, just reference it in your package.json.

```json
{
  ...
  "prettier": "@arfajarsetiaji/prettier-config"
}
```

- If you need to override it, spread import this config library in your .prettierrc.js file & export the modifications, e.g modify the print width config:

```js
module.exports = {
	...require("@arfajarsetiaji/prettier-config"),
	printWidth: 120,
};
```

## Authors

[@arfajarsetiaji](https://www.github.com/arfajarsetiaji)

## License

[MIT](https://github.com/arfajarsetiaji/prettier-config/blob/main/LICENSE)
